var L12_Exception;
(function (L12_Exception) {
    var greets = [{ greet: "Hi" }, { greet: "Hallo" }, { greet: "Servus" }];
    try {
        greet();
    }
    catch (_error) {
        console.log("Catch in caller:", _error);
    }
    function greet() {
        try {
            console.log("Try");
            var input = prompt("Lass dich grüßen!", "Gib hier eine Zahl ein");
            var greet_1 = greets[Number(input)].greet;
            alert(greet_1);
            return;
        }
        catch (_error) {
            alert("Tschüss!");
            console.log("Catch in greet:", _error);
            throw (new Error("Mein Fehler..."));
        }
        finally {
            console.log("Finally: Das mach' ich trotzdem noch...!");
        }
        console.log("Done"); // diese Anweisung wird nie ausgeführt...
    }
})(L12_Exception || (L12_Exception = {}));
//# sourceMappingURL=Exception.js.map