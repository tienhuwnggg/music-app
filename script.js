const songs = [
    "bensound-clapandyell.mp3",
    "bensound-funkyelement.mp3",
    "bensound-happiness.mp3",
    "bensound-happyrock.mp3",
    "bensound-thelounge.mp3"
];

const songName = [
    "Bensound Clapandyell",
    "Bensound Funky Element",
    "Bensound Happiness",
    "Bensound Happy Rock",
    "Bensound The Lounge"
];

function createSongList(){
    const list = document.createElement("ol");
    for(let i = 0; i < songs.length; i++){
        const items = document.createElement("li");
        const textnode = document.createTextNode(songs[i]);
        items.appendChild(textnode);
        list.appendChild(items);
    }
    return list;
}

const songList = document.getElementById("song-list");
songList.appendChild(createSongList());

const player = document.getElementById("player");

songList.onclick = function(e) {
    const musicSource = document.getElementById("source");
    musicSource.src = "songs/" + e.target.innerText; 
    document.querySelector('#current-song').innerHTML = `Now Playing: ${e.target.innerText}`;
    player.load();
    player.play();
};

function playAudio() {
    if(player.readyState) {
        player.play();
    }
}

function pauseAudio() {
    player.pause();
}

const slider = document.getElementById("volumeSlider");

slider.oninput = function(e) {
    const volume = e.target.value;
    player.volume = volume;
}

function updateProgress() {
    const progressBar = document.getElementById("progress");
    progressBar.value = player.currentTime/player.duration * 100;
}






