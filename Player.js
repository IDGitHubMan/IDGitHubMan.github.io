playMode = true;
songIndex = 0;
playing = false;

var player = document.querySelector("#player");
var source = document.querySelector("#audioSource");
var songName = document.querySelector("#songName");
var songInst = document.querySelector("#instruments");
var volumeControl = document.querySelector("#volControl");
volumeControl.max = 100;
volumeControl.min = 0;
var timeControl = document.querySelector("#time");
var songDuration;
timeControl.max = songDuration;
timeControl.min = 0;

chooseSong(songIndex);

function nextSong(){
    songIndex+=1;
    chooseSong(songIndex);
}

function prevSong(){
    songIndex-=1;
    chooseSong(songIndex);
}

function chooseSong(n){
    if (playMode){
        if (n>4){
            n = 0;
            songIndex = 0;
        }
        else if (n<0){
            n = 4;
            songIndex = 4;
        }
        if (n==0){
            source.src = "https://IDGitHubMan.github.io/Audio/Composition/[2 Little Whos] .wav";
            songName.textContent = "[2 Little Whos]";
        }
    }
}