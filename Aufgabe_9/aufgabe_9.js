//window.addEventListener("load",function() {
//var aufgaben: string[] = ["essen", "trinken", "extra" ];
//var i: number = 0;
//while(aufgaben.length > i) {
//document.querySelector("#todo").innerHTML += "<p>" + aufgaben[i] + "<p>";    
//console.log(aufgaben[i]);
//i++;
//}
//});
window.addEventListener("load", function () {
    document.querySelector(".button").addEventListener("click", FunctionNewTask);
    document.querySelector("#number").addEventListener("click", FunctionNewTask);
    document.querySelector("#circle").addEventListener("click", Functionbuttons);
});
function FunctionNewTask() {
    var newtask = document.querySelector(".input").value;
    console.log(newtask);
    FunctionAddTask(newtask);
}
function FunctionAddTask(newTaskValue) {
    var addElement = document.createElement("div");
    addElement.setAttribute("class", "Template");
    addElement.setAttribute("id", "TaskID" + taskcounter);
    var htmlTemplate = "";
    htmlTemplate += "<button onclick=\"Functionbuttons(this)\" class=\"far fa-circle check\" id=\"circle" + taskcounter + "\"></button>";
    htmlTemplate += "<input class=\"firsttask\" id=\"firsttask" + taskcounter + "\" value=\"" + newTaskValue + "\" ></input>";
    addElement.innerHTML = htmlTemplate;
    document.querySelector(".Rahmen").appendChild(addElement);
}
function Functionbuttons(clickt) {
    if (clickt.classList.contains("fa-circle")) {
        clickt.classList.remove("fa-circle");
        clickt.classList.add("fa-check-circle");
    }
    else
        clickt.classList.remove("fa-check-circle");
    clickt.classList.add("fa.circle");
}
//# sourceMappingURL=aufgabe_9.js.map