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
     * The area of destruction the laser gun creates. The higher the charge, the bigger and more robust it is.
     */
    var Hotspot = /** @class */ (function (_super) {
        __extends(Hotspot, _super);
        function Hotspot(_position, _charge) {
            var _this = _super.call(this, _position, new eiaSteroids.Vector()) || this;
            _this.charge = Math.max(0, Math.min(1, _charge));
            _this.maxLifetime = _this.lifetime = Hotspot.maxLifetime * _this.charge;
            _this.hitRadius = 5 + 40 * _this.charge;
            return _this;
        }
        Hotspot.prototype.draw = function () {
            var ratio = this.lifetime / this.maxLifetime;
            if (ratio < 0)
                return;
            eiaSteroids.crc2.save();
            eiaSteroids.crc2.translate(this.position.x, this.position.y);
            eiaSteroids.crc2.beginPath();
            eiaSteroids.crc2.fillStyle = eiaSteroids.getColorCharge(this.charge, ratio);
            eiaSteroids.crc2.arc(0, 0, this.hitRadius * (1 - ratio), 0, 2 * Math.PI);
            eiaSteroids.crc2.arc(0, 0, this.hitRadius, 2 * Math.PI, 0, true);
            eiaSteroids.crc2.fill();
            eiaSteroids.crc2.restore();
        };
        Hotspot.prototype.move = function (_timeslice) {
            _super.prototype.move.call(this, _timeslice);
        };
        Hotspot.prototype.hit = function () {
            this.lifetime -= Hotspot.maxLifetime / 5;
            this.expendable = this.lifetime < 0;
        };
        Hotspot.maxLifetime = 2;
        return Hotspot;
    }(eiaSteroids.Projectile));
    eiaSteroids.Hotspot = Hotspot;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Hotspot.js.map