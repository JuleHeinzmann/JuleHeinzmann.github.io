var L10_AsteroidsInheritance;
(function (L10_AsteroidsInheritance) {
    window.addEventListener("load", handleLoad);
    L10_AsteroidsInheritance.linewidth = 2;
    var moveables = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_AsteroidsInheritance.crc2 = canvas.getContext("2d");
        L10_AsteroidsInheritance.crc2.fillStyle = "black";
        L10_AsteroidsInheritance.crc2.strokeStyle = "white";
        L10_AsteroidsInheritance.crc2.lineWidth = L10_AsteroidsInheritance.linewidth;
        L10_AsteroidsInheritance.createPaths();
        console.log("Asteroids paths: ", L10_AsteroidsInheritance.asteroidPaths);
        createAsteroids(5);
        // createShip();
        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootProjectile(_event) {
        console.log("Shoot projectile");
        var origin = new L10_AsteroidsInheritance.Vector(_event.clientX - L10_AsteroidsInheritance.crc2.canvas.offsetLeft, _event.clientY - L10_AsteroidsInheritance.crc2.canvas.offsetTop);
        var velocity = new L10_AsteroidsInheritance.Vector(0, 0);
        velocity.random(100, 100);
        var projectile = new L10_AsteroidsInheritance.Projectile(origin, velocity);
        moveables.push(projectile);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        var hotspot = new L10_AsteroidsInheritance.Vector(_event.clientX - L10_AsteroidsInheritance.crc2.canvas.offsetLeft, _event.clientY - L10_AsteroidsInheritance.crc2.canvas.offsetTop);
        var asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot) {
        for (var _i = 0, moveables_1 = moveables; _i < moveables_1.length; _i++) {
            var moveable = moveables_1[_i];
            if (moveable instanceof L10_AsteroidsInheritance.Asteroid && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (var i = 0; i < 2; i++) {
                var fragment = new L10_AsteroidsInheritance.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                moveables.push(fragment);
            }
        }
        _asteroid.expendable = true;
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (var i = 0; i < _nAsteroids; i++) {
            var asteroid = new L10_AsteroidsInheritance.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function update() {
        // console.log("Update");
        L10_AsteroidsInheritance.crc2.fillRect(0, 0, L10_AsteroidsInheritance.crc2.canvas.width, L10_AsteroidsInheritance.crc2.canvas.height);
        for (var _i = 0, moveables_2 = moveables; _i < moveables_2.length; _i++) {
            var moveable = moveables_2[_i];
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpandables();
        // ship.draw();
        // handleCollisions();
        console.log("Moveable length: ", moveables.length);
    }
    function deleteExpandables() {
        for (var i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);
        }
    }
})(L10_AsteroidsInheritance || (L10_AsteroidsInheritance = {}));
//# sourceMappingURL=Main.js.map