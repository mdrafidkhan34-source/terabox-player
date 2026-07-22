const video = document.getElementById("video");

const params = new URLSearchParams(window.location.search);
const videoUrl = params.get("video");

const player = new Plyr(video, {
    controls: [
        "play-large",
        "rewind",
        "play",
        "fast-forward",
        "progress",
        "current-time",
        "duration",
        "mute",
        "volume",
        "settings",
        "pip",
        "fullscreen"
    ]
});

if (videoUrl) {
    video.src = decodeURIComponent(videoUrl);
    video.play();
}
