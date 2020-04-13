var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    var ASTEROID_EVENT;
    (function (ASTEROID_EVENT) {
        ASTEROID_EVENT["UFO_SHOOTS"] = "ufoShoots";
        ASTEROID_EVENT["ASTEROID_HIT"] = "asteroidHit";
    })(ASTEROID_EVENT = L11_AsteroidsAdvanced.ASTEROID_EVENT || (L11_AsteroidsAdvanced.ASTEROID_EVENT = {}));
    window.addEventListener("load", handleLoad);
    L11_AsteroidsAdvanced.linewidth = 2;
    var moveables = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_AsteroidsAdvanced.crc2 = canvas.getContext("2d");
        L11_AsteroidsAdvanced.crc2.fillStyle = "black";
        L11_AsteroidsAdvanced.crc2.strokeStyle = "white";
        L11_AsteroidsAdvanced.crc2.lineWidth = L11_AsteroidsAdvanced.linewidth;
        L11_AsteroidsAdvanced.createPaths();
        console.log("Asteroids paths: ", L11_AsteroidsAdvanced.asteroidPaths);
        createAsteroids(5);
        // createShip();
        createUfo();
        createUfo();
        createUfo();
        canvas.addEventListener(ASTEROID_EVENT.UFO_SHOOTS, handleUfoShot);
        canvas.addEventListener(ASTEROID_EVENT.ASTEROID_HIT, breakAsteroid);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootProjectile(_origin) {
        console.log("Shoot projectile");
        var velocity = L11_AsteroidsAdvanced.Vector.getRandom(200, 200);
        var projectile = new L11_AsteroidsAdvanced.Projectile(_origin, velocity);
        // move projectile away from ufo to prevent suicide
        projectile.move(0.15);
        moveables.push(projectile);
    }
    function handleUfoShot(_event) {
        var ufo = _event.detail.ufo;
        shootProjectile(ufo.position);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        var position = new L11_AsteroidsAdvanced.Vector(_event.clientX - L11_AsteroidsAdvanced.crc2.canvas.offsetLeft, _event.clientY - L11_AsteroidsAdvanced.crc2.canvas.offsetTop);
        var hotspot = new L11_AsteroidsAdvanced.Hotspot(position);
        moveables.push(hotspot);
    }
    function breakAsteroid(_event) {
        var asteroid = _event.detail.asteroid;
        if (asteroid.size > 0.3) {
            for (var i = 0; i < 2; i++) {
                var fragment = new L11_AsteroidsAdvanced.Asteroid(asteroid.size / 2, asteroid.position);
                fragment.velocity.add(asteroid.velocity);
                moveables.push(fragment);
            }
        }
        asteroid.expendable = true;
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (var i = 0; i < _nAsteroids; i++) {
            var asteroid = new L11_AsteroidsAdvanced.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function createUfo() {
        console.log("Create ufo");
        var ufo = new L11_AsteroidsAdvanced.Ufo();
        moveables.push(ufo);
    }
    function update() {
        // console.log("Update");
        L11_AsteroidsAdvanced.crc2.fillRect(0, 0, L11_AsteroidsAdvanced.crc2.canvas.width, L11_AsteroidsAdvanced.crc2.canvas.height);
        for (var _i = 0, moveables_1 = moveables; _i < moveables_1.length; _i++) {
            var moveable = moveables_1[_i];
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpandables();
        // ship.draw();
        handleCollisions();
        console.log("Moveable length: ", moveables.length);
    }
    function deleteExpandables() {
        for (var i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);
        }
    }
    function handleCollisions() {
        for (var i = 0; i < moveables.length; i++) {
            var a = moveables[i];
            for (var j = i + 1; j < moveables.length; j++) {
                var b = moveables[j];
                if (a instanceof L11_AsteroidsAdvanced.Asteroid && b instanceof L11_AsteroidsAdvanced.Asteroid)
                    continue;
                if (a.expendable || b.expendable)
                    continue;
                if (a.isHitBy(b)) {
                    a.hit();
                    b.hit();
                }
            }
        }
    }
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Main.js.map