window.addEventListener("load", function(): void {
document.getElementById("add").addEventListener("click", AddButton);


var myHtmlTemplate: string =  "";
    myHtmlTemplate += "<button onclick=\"CheckedButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + "\"></button>";
    //myHtmlTemplate += "<input class=\"firsttask\" id=\"firsttask" +"\" value=\"" + newTaskValue + "\" ></input>";
    myHtmlTemplate += "<button onclick=\"DeleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" +"\"></button>";


});

//var removeicon: string = "";

//var completeicon: string = "far fa-circle check";

function AddButton (): void {

var value: HTMLElement = document.getElementById ("item").value;
if (value) AddItemToDo(value);
    



}
function removeItem (e) {
console.log(e);


}


function AddItemToDo (task) {
var list = document.getElementById("todo");
//console.log (task);
var item = document.createElement("li");
item.innerText = task; 
var buttons = document.createElement("div");

buttons.classList.add("buttons");

var remove = document.createElement("button");

remove.classList.add("remove");

//remove.innerHTML = removeicon;

remove.addEventListener("click", removeItem);

var complete = document.createElement("button");

complete.classList.add("complete");
//complete.innerHTML = completeicon;

buttons.appendChild(remove);
buttons.appendChild(complete);
item.appendChild(buttons);

list.appendChild(item);
}

