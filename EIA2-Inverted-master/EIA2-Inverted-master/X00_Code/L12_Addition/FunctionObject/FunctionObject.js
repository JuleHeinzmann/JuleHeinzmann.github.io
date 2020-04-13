var L12_FunctionObject;
(function (L12_FunctionObject) {
    var Test = /** @class */ (function () {
        function Test() {
            var _this = this;
            // arrow function as event handler
            this.arrow = function (_event) {
                console.log("Arrow", _this);
            };
            // bind this to method bound of this object
            this.bound = this.bound.bind(this);
        }
        // classic event handler
        Test.prototype.classic = function (_event) {
            console.log("Classic", this);
        };
        // classic event handler bound to this
        Test.prototype.bound = function (_event) {
            console.log("Bound", this);
        };
        return Test;
    }());
    // anonymous arrow function as event handler for load-event
    window.addEventListener("load", function () {
        var test = new Test();
        var button = document.querySelector("button");
        button.addEventListener("click", test.classic);
        button.addEventListener("click", test.arrow);
        button.addEventListener("click", test.bound);
    });
    // classic functino
    function sum(_a, _b) {
        console.log("Sum = ", _a + _b);
    }
    // call to classic function
    sum(1, 2);
    // create a reference to function
    var ref = sum;
    // call the same function using the reference
    ref(1, 2);
    // anonymous function to be called after two seconds
    setTimeout(function () {
        console.log("Timeout");
    }, 2000);
})(L12_FunctionObject || (L12_FunctionObject = {}));
//# sourceMappingURL=FunctionObject.js.map