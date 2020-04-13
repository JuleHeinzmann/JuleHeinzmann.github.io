var L12_DragDrop;
(function (L12_DragDrop) {
    window.addEventListener("load", hndLoad);
    var drag;
    function hndLoad(_event) {
        console.log("Start DragDrop");
        drag = document.querySelector("div#drag span");
        var picker = document.querySelector("input");
        picker.addEventListener("change", hndChange);
        initDraggable();
        initDroppables();
    }
    function hndChange(_event) {
        drag.style.backgroundColor = _event.target.value;
    }
    function initDraggable() {
        drag.draggable = true;
        drag.addEventListener("dragstart", hndDragStart);
    }
    function hndDragStart(_event) {
        if (!_event.dataTransfer)
            return;
        var color = drag.style.backgroundColor;
        _event.dataTransfer.setData("color", color);
    }
    function initDroppables() {
        var drops = document.querySelectorAll("div#drop span");
        for (var _i = 0, drops_1 = drops; _i < drops_1.length; _i++) {
            var drop = drops_1[_i];
            drop.addEventListener("drop", hndDrop);
            drop.addEventListener("dragover", hndDragOver);
        }
    }
    function hndDragOver(_event) {
        _event.preventDefault();
    }
    function hndDrop(_event) {
        if (!_event.dataTransfer)
            return;
        var color = _event.dataTransfer.getData("color");
        console.log(color);
        _event.target.style.backgroundColor = color;
    }
})(L12_DragDrop || (L12_DragDrop = {}));
//# sourceMappingURL=DragDrop.js.map