var L03_CocktailBar;
(function (L03_CocktailBar) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        var form = document.querySelector("div#form");
        var slider = document.querySelector("input#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }
    function handleChange(_event) {
        //console.log(_event);
        // let drink: HTMLSelectElement = <HTMLSelectElement> document.querySelector("select");
        //console.log(drink.value);
        var inputs = document.querySelectorAll("input");
        console.log(inputs);
    }
    function displayAmount(_event) {
        var progress = document.querySelector("progress");
        var amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L03_CocktailBar || (L03_CocktailBar = {}));
//# sourceMappingURL=CocktailBar.js.map