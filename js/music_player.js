const musicPlayer = {
    volume: $("audio")[0].volume,
    current_track: 0,
    currentTimeTracker: null,
    playlist: [
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
    ],
    
    getDuration: () => { $(".trackLength").text(musicPlayer.handleTrackLength($("audio")[0].currentTime)); },
    
    handlePlayPause: function() {
        if($("audio")[0].paused){
            $("audio")[0].play();
            $(".iconPlayPause").removeClass("bi-play-fill").addClass("bi-pause-fill");
            $(".imgAlbumCover").css("transform","scale(1)")
            this.currentTimeTracker = setInterval(this.getDuration,1000);
        }
        else {
            $("audio")[0].pause();
            $(".iconPlayPause").removeClass("bi-pause-fill").addClass("bi-play-fill");
            $(".imgAlbumCover").css("transform","scale(0.95)")
            clearInterval(this.currentTimeTracker);
        }
    },
    
    handleSkipForward: function() {
        if(this.current_track != this.playlist.length-1){
            this.current_track++;
            $(".imgAlbumCover").attr("src",`${this.playlist[this.current_track].image}`)
            $("audio").attr("src",`${this.playlist[this.current_track].audio}`)
            $(".musicArtist").html(this.playlist[this.current_track].title)
            $(".musicTitle").html(this.playlist[this.current_track].artist)
            this.handlePlayPause();
        }
    },
    
    handleSkipBackward: function() {
        if(this.current_track != 0){
            this.current_track--;
            $(".imgAlbumCover").attr('src',`${this.playlist[this.current_track].image}`);
            $("audio").attr('src',`${this.playlist[this.current_track].audio}`);
            $(".musicArtist").html(this.playlist[this.current_track].title)
            $(".musicTitle").html(this.playlist[this.current_track].artist)
            this.handlePlayPause();
        }
    },
    
    handleTrackLength: function(time) {
        if($("audio")[0].ended) this.handleSkipForward();
        let minutes = Math.floor(time / 60), extraSeconds = Math.floor(time % 60);
        $(".trackSeek").attr('max',`${Math.floor($("audio")[0].duration)}`);
        $(".trackSeek").val(Math.floor(time));
        
        let durationMin = Math.floor($("audio")[0].duration / 60), durationExtraSeconds = Math.floor($("audio")[0].duration % 60);
        $(".trackCurrentLength").text(`${durationMin < 10 ? durationMin : null}${durationExtraSeconds < 10 ? ':0' + durationExtraSeconds : ':' + durationExtraSeconds}`);
        
        return `${minutes < 10 ? minutes : null}${extraSeconds < 10 ? ':0' + extraSeconds : ':' + extraSeconds}`;
    },
    
    handleSeek: item => $("audio")[0].currentTime = item.value,
    handleVolumeMute: function() {
        if($("audio")[0].muted) $("audio")[0].muted = false
        else $("audio")[0].muted = true
        this.handleVolume($("audio")[0].volume)
    },

    handleVolume: item => {
        $("audio")[0].volume = item;
        $(".trackVolText").text(Math.floor($("audio")[0].volume*100));
        if(!$("audio")[0].muted){
            if($("audio")[0].volume == 1) $(".trackVolIcon").attr('class','trackVolIcon bi bi-volume-up-fill')
            else if($("audio")[0].volume < 1 && $("audio")[0].volume > 0) $(".trackVolIcon").attr('class','trackVolIcon bi bi-volume-down-fill')
            else $(".trackVolIcon").attr('class','trackVolIcon bi bi-volume-off-fill')
        } else $(".trackVolIcon").attr('class','trackVolIcon bi bi-volume-mute-fill')
    },

    handleVolumeShortcut: function(key) {
        if(key === "]"){
            if(this.volume > 0.9 && this.volume < 1) this.volume += (1-this.volume);
            if(this.volume != 1) this.volume += 0.1;
        }
        if(key === "["){
            if(this.volume > 0 && this.volume < 0.1) this.volume = 0;
            if(this.volume != 0) this.volume -= 0.1;
        }
        this.handleVolume(this.volume.toFixed(1));
        $(".trackVol").val(Math.round(this.volume*100));
        $(".trackVolText").text(Math.round(this.volume*100));
    }
}

$(document).on("keypress", e => {
    if(e.key == " ") musicPlayer.handlePlayPause()
    if(e.key.toLowerCase() === "b") musicPlayer.handleSkipForward()
    if(e.key.toLowerCase() === "z") musicPlayer.handleSkipBackward()
    if(e.key.toLowerCase() === "m") musicPlayer.handleVolumeMute()
    if(e.key === ">") $("audio")[0].currentTime += 10
    if(e.key === "<") $("audio")[0].currentTime -= 10
    if(e.key === "]") { musicPlayer.handleVolumeShortcut(e.key) }
    if(e.key === "[") { musicPlayer.handleVolumeShortcut(e.key) }
})