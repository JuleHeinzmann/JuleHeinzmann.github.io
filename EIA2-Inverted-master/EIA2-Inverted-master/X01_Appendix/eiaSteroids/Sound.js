/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var eiaSteroids;
(function (eiaSteroids) {
    /**
     * Handles and plays the sounds
     */
    var Sound = /** @class */ (function () {
        function Sound() {
        }
        Sound.init = function () {
            var audioElements = document.querySelectorAll("audio");
            for (var _i = 0, audioElements_1 = audioElements; _i < audioElements_1.length; _i++) {
                var element = audioElements_1[_i];
                Sound.sounds[element.id] = element;
            }
        };
        Sound.play = function (_id) {
            Sound.sounds[_id].play();
        };
        Sound.playAtmo = function (_delay) {
            if (_delay === void 0) { _delay = Sound.atmoDelay; }
            Sound.play("beat" + Sound.atmoBeat);
            Sound.atmoBeat = (Sound.atmoBeat == 1) ? 2 : 1;
            Sound.atmoDelay = _delay;
            if (Sound.atmoDelay > 0)
                window.setTimeout(Sound.playAtmo, Sound.atmoDelay * 1000);
        };
        Sound.breakAsteroid = function (_size) {
            var sound = "bangMedium";
            if (_size > 0.9)
                sound = "bangLarge";
            if (_size < 0.3)
                sound = "bangSmall";
            this.play(sound);
        };
        Sound.atmoDelay = 0;
        Sound.sounds = {};
        Sound.atmoBeat = 1;
        return Sound;
    }());
    eiaSteroids.Sound = Sound;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Sound.js.map