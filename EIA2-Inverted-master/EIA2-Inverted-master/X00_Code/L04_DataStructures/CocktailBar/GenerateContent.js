var L04_CocktailBar;
(function (L04_CocktailBar) {
    function generateContent(_data) {
        for (var category in _data) {
            // console.log(category);
            var items = _data[category];
            var group = null;
            switch (category) {
                case "Drink":
                    group = createSelect(items);
                    break;
                case "Container":
                    group = createSingle(items);
                    break;
                case "Extras":
                    group = createMultiple(items, category);
                    break;
                default:
                    break;
            }
            var fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L04_CocktailBar.generateContent = generateContent;
    function createSelect(_items) {
        return null;
    }
    function createSingle(_items) {
        return null;
    }
    function createMultiple(_items, _category) {
        var group = document.createElement("div");
        for (var _i = 0, _items_1 = _items; _i < _items_1.length; _i++) {
            var item = _items_1[_i];
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            var label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
})(L04_CocktailBar || (L04_CocktailBar = {}));
//# sourceMappingURL=GenerateContent.js.map