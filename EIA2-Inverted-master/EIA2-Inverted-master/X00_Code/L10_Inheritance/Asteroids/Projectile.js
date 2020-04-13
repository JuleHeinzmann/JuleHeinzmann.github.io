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
var L10_AsteroidsInheritance;
(function (L10_AsteroidsInheritance) {
    var Projectile = /** @class */ (function (_super) {
        __extends(Projectile, _super);
        function Projectile(_position, _velocity) {
            var _this = _super.call(this, _position) || this;
            _this.lifetime = 2;
            console.log("Projectile constructor");
            _this.velocity = _velocity.copy();
            return _this;
        }
        Projectile.prototype.draw = function () {
            // console.log("Projectile draw");
            L10_AsteroidsInheritance.crc2.save();
            L10_AsteroidsInheritance.crc2.translate(this.position.x, this.position.y);
            L10_AsteroidsInheritance.crc2.strokeRect(-2, -2, 2, 2);
            L10_AsteroidsInheritance.crc2.restore();
        };
        Projectile.prototype.move = function (_timeslice) {
            _super.prototype.move.call(this, _timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        };
        return Projectile;
    }(L10_AsteroidsInheritance.Moveable));
    L10_AsteroidsInheritance.Projectile = Projectile;
})(L10_AsteroidsInheritance || (L10_AsteroidsInheritance = {}));
//# sourceMappingURL=Projectile.js.map