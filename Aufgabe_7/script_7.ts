window.addEventListener('load', function(audio) {
    
    document.querySelector('.button1').addEventListener('click', function(){functionAudio("kick.mp3");});
    document.querySelector('.button2').addEventListener('click', function(){functionAudio("hihat.mp3");});
    document.querySelector('.button3').addEventListener('click', function(){functionAudio("snare.mp3");});
    document.querySelector('.button4').addEventListener('click', function(){functionAudio("C.mp3");});
    document.querySelector('.button5').addEventListener('click', function(){functionAudio("F.mp3");});
    document.querySelector('.button6').addEventListener('click', function(){functionAudio("G.mp3");});
    document.querySelector('.button7').addEventListener('click', function(){functionAudio("A.mp3");});
    document.querySelector('.button8').addEventListener('click', function(){functionAudio("laugh-1.mp3");});
    document.querySelector('.button9').addEventListener('click', function(){functionAudio("laugh-2.mp3");});
});

function functionAudio (audio:string) {
var sound:HTMLAudioElement = new Audio('assets/' + audio);
sound.play();
}


function FunctionBeat () {
var beat:string[] = ["assets/kick.mp3", "assets/kick.mp3", "assets/hihat.mp3","assets/kick.mp3", "assets/kick.mp3","assets/kick.mp3", "assets/hihat.mp3" ];
var index:number = 0;
var intervall = setInterval (FunctionSound,350)
    function FunctionSound () {
    var beatplay:HTMLAudioElement = new Audio(beat[index]);
    beatplay.play();
    index += 1;
        if (index>7) index=0;

}


}



window.addEventListener('load', function() {
    document.querySelector('.play').addEventListener('click', FunctionBeat);
});