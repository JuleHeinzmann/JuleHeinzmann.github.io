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
    var Asteroid = /** @class */ (function (_super) {
        __extends(Asteroid, _super);
        function Asteroid(_size, _position) {
            var _this = _super.call(this, _position) || this;
            console.log("Asteroid constructor");
            _this.velocity = L11_AsteroidsAdvanced.Vector.getRandom(100, 200);
            _this.type = Math.floor(Math.random() * 4);
            _this.size = _size;
            _this.hitRadius = 50 * _size;
            return _this;
        }
        Asteroid.prototype.draw = function () {
            // console.log("Asteroid draw");
            L11_AsteroidsAdvanced.crc2.save();
            L11_AsteroidsAdvanced.crc2.translate(this.position.x, this.position.y);
            L11_AsteroidsAdvanced.crc2.scale(this.size, this.size);
            L11_AsteroidsAdvanced.crc2.translate(-50, -50);
            L11_AsteroidsAdvanced.crc2.lineWidth = L11_AsteroidsAdvanced.linewidth / this.size;
            L11_AsteroidsAdvanced.crc2.stroke(L11_AsteroidsAdvanced.asteroidPaths[this.type]);
            L11_AsteroidsAdvanced.crc2.restore();
        };
        Asteroid.prototype.hit = function () {
            _super.prototype.hit.call(this);
            var event = new CustomEvent(L11_AsteroidsAdvanced.ASTEROID_EVENT.ASTEROID_HIT, { detail: { asteroid: this } });
            L11_AsteroidsAdvanced.crc2.canvas.dispatchEvent(event);
        };
        return Asteroid;
    }(L11_AsteroidsAdvanced.Moveable));
    L11_AsteroidsAdvanced.Asteroid = Asteroid;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Asteroid.js.map