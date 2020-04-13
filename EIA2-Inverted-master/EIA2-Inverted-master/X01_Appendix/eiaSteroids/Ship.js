var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var eiaSteroids;
(function (eiaSteroids) {
    /**
     * Describes a laser gun which is just a special [[Bar]]
     */
    var Gun = /** @class */ (function (_super) {
        __extends(Gun, _super);
        function Gun(_position) {
            return _super.call(this, _position, Gun.size) || this;
        }
        Gun.prototype.draw = function (_charge, _strokeStyle) {
            if (_strokeStyle === void 0) { _strokeStyle = "white"; }
            _super.prototype.draw.call(this, _charge, eiaSteroids.getColorCharge(_charge, 1), _strokeStyle);
        };
        Gun.size = new eiaSteroids.Vector(-15, 6);
        return Gun;
    }(eiaSteroids.Bar));
    /**
     * Describes the space ship the player controls.
     * Can head towards a given point, thrust in this direction and dispatch an event to the main program in order
     * to create the [[Laser]] beams and a [[Hotspot]]. Handles its energy and dispatches it to
     * - shield when hit,
     * - thrust when moving
     * - and laser guns while charging
     */
    var Ship = /** @class */ (function (_super) {
        __extends(Ship, _super);
        function Ship(_position) {
            var _this = _super.call(this, _position) || this;
            _this.gunLeft = new Gun(new eiaSteroids.Vector(10, -12));
            _this.gunRight = new Gun(new eiaSteroids.Vector(10, 12));
            _this.charged = 0; // start uncharged
            _this.energy = 1; // start with full energy
            _this.coolDown = 0; // start with guns cool
            _this.rotation = 0;
            _this.thrusting = false;
            _this.charging = false;
            _this.timeShield = 0;
            _this.velocity = new eiaSteroids.Vector();
            _this.hitRadius = 10;
            return _this;
        }
        Ship.prototype.charge = function (_on) {
            this.charging = _on;
            if (!_on)
                this.charged = 0;
        };
        Ship.prototype.thrust = function (_on) {
            this.thrusting = _on;
        };
        Ship.prototype.head = function (_target) {
            var difference = eiaSteroids.Vector.getDifference(_target, this.position);
            this.rotation = Math.atan2(difference.y, difference.x);
        };
        Ship.prototype.accelerate = function () {
            this.energy -= Ship.energyToThrust;
            if (this.energy <= 0) {
                this.thrust(false);
                return;
            }
            var change = eiaSteroids.Vector.getPolar(this.rotation, Ship.acceleration);
            this.velocity.add(change);
            eiaSteroids.Sound.play("thrust");
        };
        Ship.prototype.draw = function () {
            var color = "HSL(0, 100%, " + (100 - 20 * this.timeShield) + "%)";
            eiaSteroids.crc2.save();
            eiaSteroids.crc2.strokeStyle = color;
            eiaSteroids.crc2.translate(this.position.x, this.position.y);
            eiaSteroids.crc2.rotate(this.rotation);
            eiaSteroids.crc2.beginPath();
            eiaSteroids.crc2.moveTo(-5, 10);
            eiaSteroids.crc2.lineTo(20, 0);
            eiaSteroids.crc2.lineTo(-5, -10);
            eiaSteroids.crc2.moveTo(0, 8);
            eiaSteroids.crc2.lineTo(0, -8);
            eiaSteroids.crc2.stroke();
            this.gunLeft.draw(this.charged, color);
            this.gunRight.draw(this.charged, color);
            if (this.thrusting)
                this.drawExhaust();
            eiaSteroids.crc2.restore();
        };
        Ship.prototype.drawExhaust = function () {
            eiaSteroids.crc2.moveTo(0, 0);
            eiaSteroids.crc2.lineTo(-7, 5);
            eiaSteroids.crc2.lineTo(-15, 0);
            eiaSteroids.crc2.lineTo(-7, -5);
            eiaSteroids.crc2.closePath();
            eiaSteroids.crc2.stroke();
        };
        Ship.prototype.move = function (_timeslice) {
            this.velocity.scale(0.99);
            _super.prototype.move.call(this, _timeslice);
            this.coolDown = (Math.max(0, this.coolDown - _timeslice / Ship.timeCooling));
            this.timeShield = (Math.max(0, this.timeShield - _timeslice));
            if (this.charging) {
                this.energy -= Ship.energyToCharge;
                if (!this.coolDown && this.energy > 0)
                    this.charged += _timeslice / Ship.timeToChargeFully;
            }
            else {
                this.energy += _timeslice / Ship.timeEnergyRestore;
                this.energy = Math.min(1, Math.max(0, this.energy));
            }
            if (this.thrusting)
                this.accelerate();
        };
        Ship.prototype.hit = function () {
            this.energy -= Ship.energyToShield;
            this.timeShield = Ship.timeToShowShield;
            if (this.energy < 0)
                _super.prototype.hit.call(this);
        };
        Ship.prototype.shoot = function (_target) {
            this.charging = false;
            if (this.coolDown > 0)
                return;
            // console.log("Ship shoots");
            var event = new CustomEvent(eiaSteroids.ASTEROID_EVENT.SHIP_SHOOTS, {
                detail: {
                    target: _target,
                    charge: this.charged,
                    rotation: this.rotation,
                    pathLaserLeft: this.getLaserPath(this.gunLeft, _target),
                    pathLaserRight: this.getLaserPath(this.gunRight, _target)
                }
            });
            this.charge(false);
            this.coolDown = 1;
            eiaSteroids.crc2.canvas.dispatchEvent(event);
        };
        Ship.prototype.getLaserPath = function (_gun, _target) {
            var position = this.position.copy();
            var rotation = this.rotation;
            return function () {
                eiaSteroids.crc2.save();
                eiaSteroids.crc2.beginPath();
                eiaSteroids.crc2.translate(position.x, position.y);
                eiaSteroids.crc2.rotate(rotation);
                eiaSteroids.crc2.moveTo(_gun.position.x, _gun.position.y);
                eiaSteroids.crc2.restore();
                eiaSteroids.crc2.lineTo(_target.x, _target.y);
            };
        };
        Ship.energyToCharge = 0.002;
        Ship.energyToThrust = 0.003;
        Ship.energyToShield = 0.4;
        Ship.acceleration = 20;
        Ship.timeEnergyRestore = 20; // energy recovery from 0 in seconds
        Ship.timeToChargeFully = 1;
        Ship.timeCooling = 0.5; // time the laser gun cools down before charge starts
        Ship.timeToShowShield = 2; // time to display shield color when hit
        return Ship;
    }(eiaSteroids.Moveable));
    eiaSteroids.Ship = Ship;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Ship.js.map