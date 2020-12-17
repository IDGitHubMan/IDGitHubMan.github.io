var cSongIndex = 0;
var gSongIndex = 0;

var maxwidth = window.outerWidth;

var cPlaying = false;
var gPlaying = false;

chooseCSong(cSongIndex);
chooseGSong(gSongIndex);

var compositionPlayer = document.getElementById("compositionPlayer");
var cSource = document.getElementById("cSource")
var garagePlayer = document.getElementById("garagePlayer");
var gSource = document.getElementById("gSource");

function nextCSong() {
    chooseCSong(cSongIndex += 1);
}

function nextGSong() {
    chooseGSong(gSongIndex += 1);
}

function prevCSong() {
    chooseCSong(cSongIndex -= 1);
}

function prevGSong() {
    chooseGSong(gSongIndex -= 1);
}

function chooseCSong(n) {
    if (n > 4) {
        n = 0;
    }
    else if (n < 0) {
        n = 4;
    }
    if (n == 0) {
        cSource.src = "https://IDGitHubMan.github.io/Audio/Composition/[2 Little Whos] .wav"
    }
    else if (n == 1) {
        cSource.src = "https://IDGitHubMan.github.io/Audio/Composition/Betrayal.wav"
    }
    else if (n == 2) {
        cSource.src = "https://IDGitHubMan.github.io/Audio/Composition/Enigma.wav"
    }
    else if (n == 3) {
        cSource.src = "https://IDGitHubMan.github.io/Audio/Composition/Foreboding.wav"
    }
    else if (n == 4) {
        cSource.src = "https://IDGitHubMan.github.io/Audio/Composition/New Lands.wav"
    }
    compositionPlayer.load();
}

function chooseGSong(n) {
    if (n > 12) {
        n = 0;
    }
    else if (n < 0) {
        n = 12;
    }
    if (n == 0) {
        gSource.src = "https://IDGitHubMan.github.io/Audio/Garageband/Battle in the Stars.wav"
    }
    else if (n == 1) {
        gSource.src = "https://IDGitHubMan.github.io/Audio/Garageband/Boss Battle.wav"
    }
    else if (n == 2) {
        gSource.src = "https://IDGitHubMan.github.io/Audio/Garageband/City of the Future.wav"
    }
    else if (n == 3) {
        gSource.src = "https://IDGitHubMan.github.io/Audio/Garageband/Dreams of the Stars.wav"
    }
    else if (n == 4) {
        gSource.src = "https://IDGitHubMan.github.io/Audio/Garageband/Galaxies.wav"
    }
    else if (n == 5) {
        gSource.src = "https://IDGitHubMan.github.io/Audio/Garageband/High Speed Chase.wav"
    }
    else if (n == 6) {
        gSource.src = "https://IDGitHubMan.github.io/Audio/Garageband/Hope in Times of Despair.wav"
    }
    else if (n == 7) {
        gSource.src = "https://IDGitHubMan.github.io/Audio/Garageband/Hope in Times of Despair Remake.wav"
    }
    else if (n == 7) {
        gSource.src = "https://IDGitHubMan.github.io/Audio/Garageband/Night.wav"
    }
    garagePlayer.load();
}

function playCSong() {
    if (cPlaying) {
        compositionPlayer.pause();
    }
    else {
        compositionPlayer.play();
    }
    cPlaying = !cPlaying
}

function playGSong() {
    if (gPlaying) {
        garagePlayer.pause();
    }
    else {
        garagePlayer.play();
    }
    gPlaying = !gPlaying;
}

window.addEventListener('resize', setWidth);

function setWidth() {
  maxwidth = window.outerWidth;
  showSlides(slideIndex);
}
