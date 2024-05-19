const video = document.getElementById('my-video');
const playPauseBtn = document.getElementById('play-pause-btn');
const playPauseImg = document.getElementById('play-pause-img');
const stopBtn = document.getElementById('stop-btn');
const muteUnmuteBtn = document.getElementById('mute-unmute-btn');
const muteUnmuteImg = document.getElementById('mute-unmute-img');
const progressBar = document.getElementById('progress-bar-fill');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const fullScreenBtn = document.getElementById('full-screen-btn');
const repeatBtn = document.getElementById('repeat-btn');
const repeatImg = document.getElementById('repeat-img');

function togglePlayPause() {
    if (video.paused || video.ended) {
        video.play();
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    } else {
        video.pause();
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    }
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
}

function toggleMuteUnmute() {
    if (video.muted) {
        video.muted = false;
        muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio.png";
    } else {
        video.muted = true;
        muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/sound.png";
    }
}

function updateProgressBar() {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percentage}%`;
    currentTimeDisplay.textContent = formatTime(video.currentTime);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const formattedSecs = secs < 10 ? `0${secs}` : secs;
    return `${minutes}:${formattedSecs}`;
}

video.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(video.duration);
});

video.addEventListener('timeupdate', updateProgressBar);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function toggleRepeat() {
    video.loop = !video.loop;
    repeatImg.src = video.loop ? "https://img.icons8.com/ios-glyphs/30/repeat-on.png" : "https://img.icons8.com/ios-glyphs/30/repeat.png";
}

playPauseBtn.addEventListener('click', togglePlayPause);
stopBtn.addEventListener('click', stopVideo);
muteUnmuteBtn.addEventListener('click', toggleMuteUnmute);
fullScreenBtn.addEventListener('click', toggleFullScreen);
repeatBtn.addEventListener('click', toggleRepeat);

