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
    var Projectile = /** @class */ (function (_super) {
        __extends(Projectile, _super);
        function Projectile(_position, _velocity) {
            var _this = _super.call(this, _position) || this;
            _this.lifetime = Projectile.maxLifetime;
            console.log("Projectile constructor");
            _this.velocity = _velocity.copy();
            return _this;
        }
        Projectile.prototype.draw = function () {
            // console.log("Projectile draw");
            L11_AsteroidsAdvanced.crc2.save();
            L11_AsteroidsAdvanced.crc2.translate(this.position.x, this.position.y);
            L11_AsteroidsAdvanced.crc2.strokeRect(-2, -2, 2, 2);
            L11_AsteroidsAdvanced.crc2.restore();
        };
        Projectile.prototype.move = function (_timeslice) {
            _super.prototype.move.call(this, _timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        };
        Projectile.maxLifetime = 2;
        return Projectile;
    }(L11_AsteroidsAdvanced.Moveable));
    L11_AsteroidsAdvanced.Projectile = Projectile;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Projectile.js.map