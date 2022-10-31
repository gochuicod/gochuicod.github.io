const audio = document.querySelector('.audioInput');
const btnPlayPause = document.querySelector('.btnPlayPause');
const iconPlayPause = document.querySelector('.iconPlayPause');
const imgAlbumCover = document.querySelector('.imgAlbumCover');
const musicTitle = document.querySelector('.musicTitle'), musicArtist = document.querySelector('.musicArtist');
const trackCurrentLength = document.querySelector('.trackCurrentLength'), trackSeek = document.querySelector('.trackSeek');
const trackVolIcon = document.querySelector('.trackVolIcon'), trackLength = document.querySelector('.trackLength');
const trackVolText = document.querySelector('.trackVolText'), trackVol = document.querySelector('.trackVol');
let current_track = 0, currentTimeTracker, mute = false;

const playlist = [
    {
        image: '../img/save_your_tears_album.png',
        audio: '../audio/The Weeknd - Save Your Tears.mp3',
        title: 'Save Your Tears',
        artist: 'The Weeknd'
    },
    {
        image: '../img/van_halen_album.jpg',
        audio: '../audio/Van Halen - Jump.mp3',
        title: 'Jump',
        artist: 'Van Halen'
    },
    {
        image: "../img/malibu_nights_album.png",
        audio: "../audio/Lany - Thick and Thin.mp3",
        title: "Thick and Thin",
        artist: "Lany"
    },
    {
        image: "../img/kiss_the_breeze_album.jpg",
        audio: "../audio/Sticky Fingers - Kiss the Breeze.mp3",
        title: "Kiss the Breeze",
        artist: "Sticky Fingers"
    },
    {
        image: "../img/motorcycle_drive_by_album.jpeg",
        audio: "../audio/Third Eye Blind - Motorcycle Drive By.mp3",
        title: "Motorcycle Drive By",
        artist: "Third Eye Blind"
    }
]

const musicPlayer = {
    getDuration: () => trackLength.innerText = musicPlayer.handleTrackLength(audio.currentTime),
    
    handlePlayPause: () => {
        if(audio.paused){
            audio.play();
            iconPlayPause.setAttribute('class','iconPlayPause bi bi-pause-fill');
            imgAlbumCover.style.transform = 'scale(1)'
            currentTimeTracker = setInterval(musicPlayer.getDuration,1000);
        }
        else {
            audio.pause();
            iconPlayPause.setAttribute('class','iconPlayPause bi bi-play-fill');
            imgAlbumCover.style.transform = 'scale(0.95)';
            clearInterval(currentTimeTracker);
        }
    },
    
    handleSkipForward: () => {
        if(current_track != playlist.length-1){
            current_track++;
            imgAlbumCover.setAttribute('src',`${playlist[current_track].image}`);
            audio.setAttribute('src',`${playlist[current_track].audio}`);
            musicArtist.innerHTML = playlist[current_track].title;
            musicTitle.innerHTML = playlist[current_track].artist;
            musicPlayer.handlePlayPause();
        }
    },
    
    handleSkipBackward: () => {
        if(current_track != 0){
            current_track--;
            imgAlbumCover.setAttribute('src',`${playlist[current_track].image}`);
            audio.setAttribute('src',`${playlist[current_track].audio}`);
            musicArtist.innerHTML = playlist[current_track].title;
            musicTitle.innerHTML = playlist[current_track].artist;
            musicPlayer.handlePlayPause();
        }
    },
    
    handleTrackLength: time => {
        if(audio.ended) musicPlayer.handleSkipForward();
        let minutes = Math.floor(time / 60), extraSeconds = Math.floor(time % 60);
        trackSeek.setAttribute('max',`${Math.floor(audio.duration)}`); trackSeek.value = Math.floor(time);
        
        let durationMin = Math.floor(audio.duration / 60), durationExtraSeconds = Math.floor(audio.duration % 60);
        trackCurrentLength.innerText = `${durationMin < 10 ? durationMin : durationMin}${durationExtraSeconds < 10 ? ':0' + durationExtraSeconds : ':' + durationExtraSeconds}`;
        
        return `${minutes < 10 ? minutes : minutes}${extraSeconds < 10 ? ':0' + extraSeconds : ':' + extraSeconds}`;
    },
    
    handleSeek: value => audio.currentTime = value,
    handleVolumeMute: () => {
        (audio.muted) ? audio.muted = false : audio.muted = true;
        musicPlayer.handleVolume(audio.volume);
    },

    handleVolume: value => {
        trackVolText.innerText = Math.floor(audio.volume*100);
        if(!audio.muted){
            if(value == 1) trackVolIcon.setAttribute('class','trackVolIcon bi bi-volume-up-fill')
            else if(value < 1 && value > 0) trackVolIcon.setAttribute('class','trackVolIcon bi bi-volume-down-fill')
            else trackVolIcon.setAttribute('class','trackVolIcon bi bi-volume-off-fill')
        } else trackVolIcon.setAttribute('class','trackVolIcon bi bi-volume-mute-fill')
    },

    handleVolumeShortcut: key => {
        if(key === "]"){
            if(audio.volume > 0.9 && audio.volume < 1) audio.volume += (1-audio.volume)
            if(audio.volume != 1) trackVol.value = (audio.volume += 0.1)
        }
        if(key === "["){
            if(audio.volume > 0 && audio.volume < 0.1) audio.volume = 0
            if(audio.volume != 0) trackVol.value = (audio.volume -= 0.1)
        }
        trackVol.value = Math.round(audio.volume*100)
        trackVolText.innerText = Math.round(audio.volume*100)
    }
}

document.addEventListener("keypress", (e) => {
    if(e.key == " ") musicPlayer.handlePlayPause()
    if(e.key.toLowerCase() === "b") musicPlayer.handleSkipForward()
    if(e.key.toLowerCase() === "z") musicPlayer.handleSkipBackward()
    if(e.key.toLowerCase() === "m") musicPlayer.handleVolumeMute()
    if(e.key === ">") audio.currentTime += 10
    if(e.key === "<") audio.currentTime -= 10
    if(e.key === "]") { musicPlayer.handleVolumeShortcut(e.key) }
    if(e.key === "[") { musicPlayer.handleVolumeShortcut(e.key) }
});