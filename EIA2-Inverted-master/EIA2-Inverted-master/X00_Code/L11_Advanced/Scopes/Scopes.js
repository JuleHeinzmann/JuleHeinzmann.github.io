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
var Scope;
(function (Scope) {
    var ScopeSuper = /** @class */ (function () {
        function ScopeSuper() {
            this.x = "ScopeSuperObject"; // Scope of superobject
        }
        ScopeSuper.prototype.log = function () {
            console.group("Super");
            var x = "ScopeSuperMethod";
            log("ScopeSuperMethod", x);
            log("ScopeSuperObject", this.x);
            console.groupEnd();
        };
        ScopeSuper.x = "ScopeSuperStatic"; // Scope of superclass
        return ScopeSuper;
    }());
    var ScopeSub = /** @class */ (function (_super) {
        __extends(ScopeSub, _super);
        function ScopeSub() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.x = "ScopeSubObject"; // Scope of subobject
            return _this;
        }
        ScopeSub.prototype.log = function () {
            console.group("Sub");
            var x = "ScopeSubMethod"; // Scope of method
            {
                var x_1 = "ScopeSubMethodBlock"; // Scope of block
                log("ScopeSubMethodBlock", x_1);
                log("ScopeSubObject", this.x);
                log("ScopeSuperObject", _super.prototype.x);
                _super.prototype.log.call(this);
            }
            log("ScopeSubMethod", x);
            console.groupEnd();
        };
        ScopeSub.x = "ScopeSubStatic"; // Scope of subclass
        return ScopeSub;
    }(ScopeSuper));
    var x = "Scope"; // Scope of namespace
    var sub = new ScopeSub();
    var sup = new ScopeSuper();
    sub.log();
    sup.log();
    console.group("Scope");
    log("Scope", x);
    log("ScopeSuperStatic", ScopeSuper.x);
    log("ScopeSubStatic", ScopeSub.x);
    console.groupEnd();
    console.group("Method");
    method();
    console.groupEnd();
    function method() {
        var x = "ScopeMethod";
        log("ScopeMethod", x);
    }
    function log(_expected, _is) {
        if (_expected == _is)
            console.log(_expected, " == ", _is);
        else
            console.warn(_expected, " != ", _is);
    }
    Scope.log = log;
})(Scope || (Scope = {}));
console.group("File");
var x = "File"; // Scope of file
Scope.log("File", x);
console.groupEnd();
//# sourceMappingURL=Scopes.js.map