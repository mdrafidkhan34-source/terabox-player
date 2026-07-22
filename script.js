const video = document.getElementById("video");

// URL থেকে video প্যারামিটার নেওয়া
const params = new URLSearchParams(window.location.search);
const videoUrl = params.get("video");

if (videoUrl) {
    video.src = decodeURIComponent(videoUrl);
    video.load();

    // অটো প্লে করার চেষ্টা
    video.play().catch(() => {
        console.log("Autoplay blocked.");
    });
} else {
    document.body.innerHTML = `
        <div style="
            color:white;
            text-align:center;
            font-family:Arial;
            padding:40px;">
            <h2>No Video Found</h2>
            <p>Please provide a video URL.</p>
        </div>
    `;
}
