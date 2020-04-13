/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var eiaSteroids;
(function (eiaSteroids) {
    /**
     * The base class for all moving objects. Implements standard methods for moving and hit detection
     */
    var Moveable = /** @class */ (function () {
        function Moveable(_position) {
            this.expendable = false;
            this.hitRadius = 0;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new eiaSteroids.Vector();
            this.velocity = new eiaSteroids.Vector();
        }
        Moveable.prototype.isHitBy = function (_partner) {
            var difference = eiaSteroids.Vector.getDifference(this.position, _partner.position);
            if (this.hitRadius + _partner.hitRadius < difference.length)
                return false;
            return true;
        };
        Moveable.prototype.hit = function () {
            this.expendable = true;
        };
        Moveable.prototype.move = function (_timeslice) {
            var offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += eiaSteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += eiaSteroids.crc2.canvas.height;
            if (this.position.x > eiaSteroids.crc2.canvas.width)
                this.position.x -= eiaSteroids.crc2.canvas.width;
            if (this.position.y > eiaSteroids.crc2.canvas.height)
                this.position.y -= eiaSteroids.crc2.canvas.height;
        };
        return Moveable;
    }());
    eiaSteroids.Moveable = Moveable;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Moveable.js.map