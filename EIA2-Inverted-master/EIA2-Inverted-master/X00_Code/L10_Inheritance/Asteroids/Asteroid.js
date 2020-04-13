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
    var Asteroid = /** @class */ (function (_super) {
        __extends(Asteroid, _super);
        function Asteroid(_size, _position) {
            var _this = _super.call(this, _position) || this;
            console.log("Asteroid constructor");
            if (_position)
                _this.position = _position.copy();
            else
                _this.position = new L10_AsteroidsInheritance.Vector(0, 0);
            _this.velocity = new L10_AsteroidsInheritance.Vector(0, 0);
            _this.velocity.random(100, 200);
            _this.type = Math.floor(Math.random() * 4);
            _this.size = _size;
            return _this;
        }
        Asteroid.prototype.draw = function () {
            // console.log("Asteroid draw");
            L10_AsteroidsInheritance.crc2.save();
            L10_AsteroidsInheritance.crc2.translate(this.position.x, this.position.y);
            L10_AsteroidsInheritance.crc2.scale(this.size, this.size);
            L10_AsteroidsInheritance.crc2.translate(-50, -50);
            L10_AsteroidsInheritance.crc2.lineWidth = L10_AsteroidsInheritance.linewidth / this.size;
            L10_AsteroidsInheritance.crc2.stroke(L10_AsteroidsInheritance.asteroidPaths[this.type]);
            L10_AsteroidsInheritance.crc2.restore();
        };
        Asteroid.prototype.isHit = function (_hotspot) {
            var hitsize = 50 * this.size;
            var difference = new L10_AsteroidsInheritance.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        };
        return Asteroid;
    }(L10_AsteroidsInheritance.Moveable));
    L10_AsteroidsInheritance.Asteroid = Asteroid;
})(L10_AsteroidsInheritance || (L10_AsteroidsInheritance = {}));
//# sourceMappingURL=Asteroid.js.map