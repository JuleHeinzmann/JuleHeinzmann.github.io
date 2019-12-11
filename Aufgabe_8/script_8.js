// tslint:disable-next-line: typedef
var intervall;
var record = false;
var beat = ["assets/kick.mp3", "assets/kick.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/hihat.mp3"];
window.addEventListener("load", function () {
    document.querySelector(".button1").addEventListener("click", function () { functionAudio("kick.mp3"); });
    document.querySelector(".button2").addEventListener("click", function () { functionAudio("hihat.mp3"); });
    document.querySelector(".button3").addEventListener("click", function () { functionAudio("snare.mp3"); });
    document.querySelector(".button4").addEventListener("click", function () { functionAudio("C.mp3"); });
    document.querySelector(".button5").addEventListener("click", function () { functionAudio("F.mp3"); });
    document.querySelector(".button6").addEventListener("click", function () { functionAudio("G.mp3"); });
    document.querySelector(".button7").addEventListener("click", function () { functionAudio("A.mp3"); });
    document.querySelector(".button8").addEventListener("click", function () { functionAudio("laugh-1.mp3"); });
    document.querySelector(".button9").addEventListener("click", function () { functionAudio("laugh-2.mp3"); });
    document.querySelector("#delete").addEventListener("click", FunctionDelete);
    document.querySelector("#record").addEventListener("click", FunctionRecord);
});
function functionAudio(audio) {
    var sound = new Audio("assets/" + audio);
    sound.play();
    if (record == true) {
        beat.push(audio);
    }
}
function FunctionBeat() {
    if (document.getElementById("playbutton").classList.contains("fa-play-circle")) {
        document.getElementById("playbutton").classList.remove("fa-play-circle");
        document.getElementById("playbutton").classList.add("fa-pause-circle");
        intervall = setInterval(FunctionSound, 350);
        record = false;
    }
    else {
        document.getElementById("playbutton").classList.remove("fa-pause-circle");
        document.getElementById("playbutton").classList.add("fa-play-circle");
        clearInterval(intervall);
    }
    function FunctionSound() {
        var index = 0;
        //functionAudio(beat[index]); 
        var beatplay = new Audio(beat[index]);
        beatplay.play();
        index += 1;
        if (index > 7)
            index = 0;
    }
}
function FunctionDelete() {
    beat = [];
}
function FunctionRecord() {
    record = true;
}
window.addEventListener("load", function () {
    document.querySelector("#playbutton").addEventListener("click", FunctionBeat);
});
//# sourceMappingURL=script_8.js.map