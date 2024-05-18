const audio = document.getElementById('custom-audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const playPauseImg = document.getElementById('play-pause-img');
const stopBtn = document.getElementById('stop-btn'); 
const muteUnmuteBtn = document.getElementById('mute-unmute-btn'); 
const muteUnmuteImg = document.getElementById('mute-unmute-img'); 
const progressBar = document.getElementById('progress-bar-fill');
const currentTimeDisplay = document.getElementById('current-time'); 
const durationDisplay = document.getElementById('duration'); 

function togglePlayPause() {
    if (audio.paused || audio.ended) {
        audio.play();
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    } else {
        audio.pause();
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    }
}

function stopAudio() { 
    audio.pause();
    audio.currentTime = 0;
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
}

function toggleMuteUnmute() { 
    if (audio.muted) {
        audio.muted = false;
        muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/mute.png";
    } else {
        audio.muted = true;
        muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/speaker.png";
    }
}

audio.addEventListener('timeupdate', updateProgressBar);
audio.addEventListener('loadedmetadata', () => { 
    durationDisplay.textContent = formatTime(audio.duration);
});

function updateProgressBar() {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${percentage}%`;
    currentTimeDisplay.textContent = formatTime(audio.currentTime); 
}

function formatTime(seconds) { 
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
