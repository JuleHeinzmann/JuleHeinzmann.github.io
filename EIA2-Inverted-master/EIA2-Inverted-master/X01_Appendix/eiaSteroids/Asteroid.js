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
     * Describes an asteroid with individual size and shape (type)
     */
    var Asteroid = /** @class */ (function (_super) {
        __extends(Asteroid, _super);
        function Asteroid(_size, _position) {
            var _this = _super.call(this, _position) || this;
            _this.velocity = eiaSteroids.Vector.getRandom(100, 200);
            _this.type = Math.floor(Math.random() * 4);
            _this.size = _size;
            _this.hitRadius = 50 * _size;
            return _this;
        }
        Asteroid.prototype.draw = function () {
            eiaSteroids.crc2.save();
            eiaSteroids.crc2.translate(this.position.x, this.position.y);
            eiaSteroids.crc2.scale(this.size, this.size);
            eiaSteroids.crc2.translate(-50, -50);
            eiaSteroids.crc2.lineWidth = eiaSteroids.linewidth / this.size;
            eiaSteroids.crc2.stroke(eiaSteroids.asteroidPaths[this.type]);
            eiaSteroids.crc2.restore();
        };
        Asteroid.prototype.hit = function () {
            _super.prototype.hit.call(this);
            var event = new CustomEvent(eiaSteroids.ASTEROID_EVENT.ASTEROID_HIT, { detail: { asteroid: this } });
            eiaSteroids.crc2.canvas.dispatchEvent(event);
        };
        return Asteroid;
    }(eiaSteroids.Moveable));
    eiaSteroids.Asteroid = Asteroid;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Asteroid.js.map