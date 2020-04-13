var L07_CocktailBar;
(function (L07_CocktailBar) {
    function generateContent(_data) {
        for (var category in _data) {
            // console.log(category);
            var items = _data[category];
            var group = null;
            switch (category) {
                case "Drink":
                    group = createSelect(items, category);
                    break;
                case "Container":
                    group = createSingle(items, category);
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
    L07_CocktailBar.generateContent = generateContent;
    function createSelect(_items, _category) {
        var group = document.createElement("select");
        group.name = _category;
        for (var _i = 0, _items_1 = _items; _i < _items_1.length; _i++) {
            var item = _items_1[_i];
            var option = document.createElement("option");
            option.setAttribute("price", item.price.toFixed(2));
            option.value = option.textContent = item.name;
            option.id = item.name;
            group.appendChild(option);
        }
        return group;
    }
    function createSingle(_items, _category) {
        var group = document.createElement("span");
        for (var _i = 0, _items_2 = _items; _i < _items_2.length; _i++) {
            var item = _items_2[_i];
            var radio = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("price", item.price.toFixed(2));
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;
            var label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(radio);
            group.appendChild(label);
        }
        return group;
    }
    function createMultiple(_items, _category) {
        var group = document.createElement("span");
        for (var _i = 0, _items_3 = _items; _i < _items_3.length; _i++) {
            var item = _items_3[_i];
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
})(L07_CocktailBar || (L07_CocktailBar = {}));
//# sourceMappingURL=GenerateContent.js.map