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
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    var Hotspot = /** @class */ (function (_super) {
        __extends(Hotspot, _super);
        function Hotspot(_position) {
            var _this = _super.call(this, _position, new L11_AsteroidsAdvanced.Vector(0, 0)) || this;
            _this.lifetime = Hotspot.maxLifetime;
            _this.hitRadius = 25;
            return _this;
        }
        Hotspot.prototype.draw = function () {
            var ratio = this.lifetime / Hotspot.maxLifetime;
            if (ratio < 0)
                return;
            L11_AsteroidsAdvanced.crc2.save();
            L11_AsteroidsAdvanced.crc2.translate(this.position.x, this.position.y);
            L11_AsteroidsAdvanced.crc2.beginPath();
            L11_AsteroidsAdvanced.crc2.fillStyle = "HSL(180, 100%, 70%, " + 0.7 * ratio + ")";
            L11_AsteroidsAdvanced.crc2.arc(0, 0, this.hitRadius * (1 - ratio), 0, 2 * Math.PI);
            L11_AsteroidsAdvanced.crc2.arc(0, 0, this.hitRadius, 2 * Math.PI, 0, true);
            L11_AsteroidsAdvanced.crc2.fill();
            L11_AsteroidsAdvanced.crc2.restore();
        };
        Hotspot.prototype.hit = function () {
            this.lifetime -= Hotspot.maxLifetime / 3;
            this.expendable = this.lifetime < 0;
            console.log("Hotspot hit, remaining range: ", this.lifetime);
        };
        Hotspot.maxLifetime = 0.5;
        return Hotspot;
    }(L11_AsteroidsAdvanced.Projectile));
    L11_AsteroidsAdvanced.Hotspot = Hotspot;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Hotspot.js.map