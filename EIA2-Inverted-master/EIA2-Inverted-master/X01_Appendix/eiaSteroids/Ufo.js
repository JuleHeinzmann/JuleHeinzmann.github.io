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
     * Describes a Ufo.
     * Ufo changes direction and dispatches events to the main program to create [[Projectile]]s
     */
    var Ufo = /** @class */ (function (_super) {
        __extends(Ufo, _super);
        function Ufo() {
            var _this = _super.call(this) || this;
            _this.position = new eiaSteroids.Vector(0, Math.random() * eiaSteroids.crc2.canvas.height);
            _this.velocity = new eiaSteroids.Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            _this.velocity.scale(Ufo.speed);
            _this.hitRadius = 25;
            return _this;
        }
        Ufo.prototype.draw = function () {
            eiaSteroids.crc2.save();
            eiaSteroids.crc2.translate(this.position.x, this.position.y);
            this.scale();
            eiaSteroids.crc2.translate(-30, -17);
            eiaSteroids.crc2.stroke(eiaSteroids.ufoPath);
            eiaSteroids.crc2.restore();
        };
        Ufo.prototype.move = function (_timeslice) {
            _super.prototype.move.call(this, _timeslice);
            if (Math.random() < 0.03)
                this.shoot();
            if (Math.random() < 0.02)
                this.velocity.y = Ufo.speed * (Math.floor(Math.random() * 3) - 1);
            this.playSound();
        };
        Ufo.prototype.playSound = function () {
            eiaSteroids.Sound.play("saucerBig");
        };
        Ufo.prototype.scale = function () {
            // to be overriden by the small Ufo
        };
        Ufo.prototype.shoot = function () {
            var event = new CustomEvent(eiaSteroids.ASTEROID_EVENT.UFO_SHOOTS, { detail: { ufo: this } });
            eiaSteroids.crc2.canvas.dispatchEvent(event);
        };
        Ufo.speed = 50;
        return Ufo;
    }(eiaSteroids.Moveable));
    eiaSteroids.Ufo = Ufo;
    var UfoSmall = /** @class */ (function (_super) {
        __extends(UfoSmall, _super);
        function UfoSmall() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UfoSmall.prototype.playSound = function () {
            eiaSteroids.Sound.play("saucerSmall");
        };
        UfoSmall.prototype.scale = function () {
            eiaSteroids.crc2.scale(0.5, 0.5);
            eiaSteroids.crc2.lineWidth = eiaSteroids.linewidth * 2;
        };
        return UfoSmall;
    }(Ufo));
    eiaSteroids.UfoSmall = UfoSmall;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Ufo.js.map