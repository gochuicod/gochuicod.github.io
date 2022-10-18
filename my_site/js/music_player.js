let song = document.querySelector("#song"), seekBar = document.querySelector("#seek_bar");
let play_pause_icon = document.querySelector("#play_pause"), play_pause_btn = document.querySelector("#playPause");
let thumbnail = document.querySelector("#album"), title = document.querySelector("#title");
let vol = document.querySelector("#volume"), vol_icon = document.querySelector("#volume_icon");
let TotalTrackTime = document.querySelector("#totalTrackTime"), TrackTime = document.querySelector("#trackTime");
let track = [{
    image: "../img/van_halen_album.jpg",
    audio: "../audio/Van Halen - Jump.mp3",
    title: "Jump"
},
{
    image: "../img/save_your_tears_album.png",
    audio: "../audio/The Weeknd - Save Your Tears.mp3",
    title: "Save Your Tears"
},
{
    image: "../img/malibu_nights_album.png",
    audio: "../audio/Lany - Thick and Thin.mp3",
    title: "Thick and Thin"
},
{
    image: "../img/kiss_the_breeze_album.jpg",
    audio: "../audio/Sticky Fingers - Kiss the Breeze.mp3",
    title: "Kiss the Breeze"
},
{
    image: "../img/motorcycle_drive_by_album.jpeg",
    audio: "../audio/Third Eye Blind - Motorcycle Drive By.mp3",
    title: "Motorcycle Drive By"
}
];
let current_track = 0, seek, temp = true, toggle = false, volToggle = false;

let refresh = window.setInterval(function(){
    seekBar.setAttribute("max",`${Math.ceil(song.duration)}`);
    trackLength();
},1000);

let volt = document.querySelector("#volTracker");

function volume(Value) {
    song.volume = parseInt(Value)/100;
    vol.value = parseInt(Value);
    volt.innerText = `${vol.value}`;
}

function volumeUp() {
    if(song.volume > 0.9) { song.volume += (1.0 - song.volume); vol.value = song.volume * 100; volt.innerText = `${vol.value}`; soundIcon(); }
    song.volume += 0.1; vol.value = song.volume * 100; volt.innerText = `${vol.value}`; soundIcon();
}

function volumeDown() {
    if(song.volume < 0.10) { song.volume = 0; vol.value = song.volume * 100; volt.innerText = `${vol.value}`; soundIcon(); }
    song.volume -= 0.1; vol.value = song.volume * 100; volt.innerText = `${vol.value}`; soundIcon();
}

function seekfw() {
    song.currentTime += 10; seekBar.value = song.currentTime;
    sec += 10; currentLength();
}

function seekbw() {
    song.currentTime -= 10; seekBar.value = song.currentTime;
    sec -= 10; currentLength();
}

function muteToggle() {
    if(volToggle == false) { mute(); volToggle = true; }
    else { unmute(); volToggle = false; }
}

function mute() {
    song.muted = true;
    vol_icon.setAttribute("onclick","unmute()");
    vol_icon.setAttribute("class","bi bi-volume-mute-fill");
}

function unmute() {
    song.muted = false; soundIcon();
    vol_icon.setAttribute("onclick","mute()");
}

function soundIcon() {
    if(song.muted == false){
        if(song.volume > 0.6 && song.volume < 1.1) vol_icon.setAttribute("class","bi bi-volume-up-fill");
        else if(song.volume > 0.3 && song.volume < 0.7) vol_icon.setAttribute("class","bi bi-volume-down-fill");
        else if(song.volume < 0.1) vol_icon.setAttribute("class","bi bi-volume-mute-fill");
        else vol_icon.setAttribute("class","bi bi-volume-off-fill");
    } else vol_icon.setAttribute("class","bi bi-volume-mute-fill");
}

function player(value) {
    song.currentTime = value;
}

function currentSeek() {
    let temp = song.currentTime;
    seekBar.value = temp; temp++;
    if(song.currentTime == song.duration) forward();
    currentLength();
}

function trackLength() {
    let x = parseInt((Math.floor(song.duration)).toString());
    let durationInMinutes = Math.floor(x/60), durationInSeconds = Math.floor(x - ((Math.floor(x/60))*60));
    if(durationInSeconds < 10) TotalTrackTime.innerText = `${durationInMinutes}:0${durationInSeconds}`;
    else TotalTrackTime.innerText = `${durationInMinutes}:${durationInSeconds}`;
}

function currentLength() {
    let sCurrentTime = Math.floor(song.currentTime);
    let min = Math.floor(sCurrentTime/60); sec = (sCurrentTime - ((Math.floor(sCurrentTime/60))*60));
    if(sec < 10) TrackTime.innerText = `${min}:0${sec}`;
    else TrackTime.innerText = `${min}:${sec}`;
}

function play() {
    seek = setInterval(currentSeek, 1000);
    play_pause_icon.setAttribute("class","bi bi-pause-fill");
    play_pause_btn.setAttribute("onclick","pause()");
    thumbnail.style.transform = "scale(1.05)";
    song.play();
}

function pause() {
    play_pause_icon.setAttribute("class","bi bi-play-fill");
    play_pause_btn.setAttribute("onclick","play()");
    thumbnail.style.transform = "scale(1)";
    song.pause();
    clearInterval(seek);
}

function forward() {
    if(current_track != track.length-1){
        if(!seek) seek = setInterval(currentSeek, 1000);
        play_pause_btn.setAttribute("onclick","pause()");
        current_track++; fw_bw_feature();
    }
}
function backward() {
    if(current_track != 0){
        if(!seek) seek = setInterval(currentSeek, 1000);
        play_pause_btn.setAttribute("onclick","pause()");
        current_track--; fw_bw_feature();
    }
}

function fw_bw_feature() {
    thumbnail.setAttribute("src",`${track[current_track].image}`);
    song.setAttribute("src",`${track[current_track].audio}`);
    title.innerText = `${track[current_track].title}`;
    play_pause_icon.setAttribute("class","bi bi-pause-fill");
    thumbnail.style.transform = "scale(1.05)";
    play();
    seekBar.value = 1;
}

document.addEventListener("keypress", (e) => {
    if(e.key === " "){
        if(toggle == false) { play(); toggle = true; }
        else { pause(); toggle = false; }
    }
    if(e.key.toLowerCase() === "b") forward();
    if(e.key.toLowerCase() === "z") backward();
    if(e.key === "[" && song.volume > 0) volumeDown();
    if(e.key === "]" && song.volume < 1) volumeUp();
    if(e.key === ">") seekfw();
    if(e.key === "<") seekbw();
    if(e.key.toLowerCase() === "m") muteToggle();
});
