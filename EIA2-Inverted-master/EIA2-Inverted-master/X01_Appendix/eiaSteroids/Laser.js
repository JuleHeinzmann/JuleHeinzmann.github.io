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
     * The laser beam pointing from the [[Gun]] to the [[Hotspot]]
     */
    var Laser = /** @class */ (function (_super) {
        __extends(Laser, _super);
        function Laser(_path, _charge) {
            var _this = _super.call(this, new eiaSteroids.Vector(), new eiaSteroids.Vector()) || this;
            _this.lifetime = Laser.maxLifetime;
            _this.charge = _charge;
            _this.path = _path;
            return _this;
        }
        Laser.prototype.draw = function () {
            eiaSteroids.crc2.save();
            eiaSteroids.crc2.strokeStyle = eiaSteroids.getColorCharge(this.charge, this.lifetime / Laser.maxLifetime);
            this.path();
            eiaSteroids.crc2.stroke();
            eiaSteroids.crc2.restore();
        };
        Laser.maxLifetime = 0.1;
        return Laser;
    }(eiaSteroids.Projectile));
    eiaSteroids.Laser = Laser;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Laser.js.map