var L04_CocktailBar;
(function (L04_CocktailBar) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Init");
        L04_CocktailBar.generateContent(L04_CocktailBar.data);
        var form = document.querySelector("div#form");
        var slider = document.querySelector("input#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        displayOrder();
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);
        var price = 0;
        var order = document.querySelector("div#order");
        order.innerHTML = "";
        var formData = new FormData(document.querySelector("form"));
        // console.group("Order");
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var entry = formData_1[_i];
            // console.log(entry);
            var selector = "[value='" + entry[1] + "']"; // "[name='" + entry[0] + "'][value='" + entry[1] + "']";
            var item = document.querySelector(selector);
            var itemPrice = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "Amount":
                    break;
                case "Drink":
                    var amount = Number(formData.get("Amount"));
                    itemPrice = amount * itemPrice;
                    order.innerHTML += amount + " L " + item.value + ": €" + itemPrice + "<br>";
                    break;
                default:
                    order.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";
            }
            // console.log(item);
            price += itemPrice;
        }
        // console.groupEnd();
        order.innerHTML += "<p><strong>Total: : €" + price.toFixed(2);
    }
    function displayAmount(_event) {
        var progress = document.querySelector("progress");
        var amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L04_CocktailBar || (L04_CocktailBar = {}));
//# sourceMappingURL=CocktailBar.js.map