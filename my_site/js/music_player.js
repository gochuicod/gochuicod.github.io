let playing = true;
function play() {
    let song = document.querySelector("#song");
    let play_pause_btn = document.querySelector("#play_pause");
    let thumbnail = document.querySelector("#album");
        if(playing){
            play_pause_btn.setAttribute("class","bi bi-pause-fill");
            thumbnail.style.transform = "scale(1.05)"
            song.play();
            playing = false;
        } else {
            play_pause_btn.setAttribute("class","bi bi-play-fill");
            thumbnail.style.transform = "scale(1)"
            song.pause();
            playing = true;
        }
}
