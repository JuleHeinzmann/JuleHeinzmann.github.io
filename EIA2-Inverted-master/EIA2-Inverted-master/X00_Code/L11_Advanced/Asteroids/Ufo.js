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
    var Ufo = /** @class */ (function (_super) {
        __extends(Ufo, _super);
        function Ufo() {
            var _this = _super.call(this) || this;
            _this.position = new L11_AsteroidsAdvanced.Vector(0, Math.random() * L11_AsteroidsAdvanced.crc2.canvas.height);
            _this.velocity = new L11_AsteroidsAdvanced.Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            _this.velocity.scale(Ufo.speed);
            _this.hitRadius = 25;
            return _this;
        }
        Ufo.prototype.draw = function () {
            L11_AsteroidsAdvanced.crc2.save();
            L11_AsteroidsAdvanced.crc2.translate(this.position.x, this.position.y);
            L11_AsteroidsAdvanced.crc2.translate(-30, -17);
            L11_AsteroidsAdvanced.crc2.stroke(L11_AsteroidsAdvanced.ufoPath);
            L11_AsteroidsAdvanced.crc2.restore();
        };
        Ufo.prototype.move = function (_timeslice) {
            _super.prototype.move.call(this, _timeslice);
            if (Math.random() < 0.03)
                this.shoot();
            if (Math.random() < 0.02)
                this.velocity.y = Ufo.speed * (Math.floor(Math.random() * 3) - 1);
        };
        Ufo.prototype.shoot = function () {
            console.log("Ufo shoots");
            var event = new CustomEvent(L11_AsteroidsAdvanced.ASTEROID_EVENT.UFO_SHOOTS, { detail: { ufo: this } });
            L11_AsteroidsAdvanced.crc2.canvas.dispatchEvent(event);
        };
        Ufo.speed = 50;
        return Ufo;
    }(L11_AsteroidsAdvanced.Moveable));
    L11_AsteroidsAdvanced.Ufo = Ufo;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Ufo.js.map