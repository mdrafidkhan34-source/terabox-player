const video = document.getElementById("video");

const player = new Plyr(video,{
    controls:[
        'play-large',
        'rewind',
        'play',
        'fast-forward',
        'progress',
        'current-time',
        'duration',
        'mute',
        'volume',
        'settings',
        'pip',
        'fullscreen'
    ],
    settings:['speed'],
    speed:{
        selected:1,
        options:[0.5,0.75,1,1.25,1.5,2]
    }
});

const params = new URLSearchParams(window.location.search);
const videoUrl = params.get("video");

if(videoUrl){

    video.src = decodeURIComponent(videoUrl);

    video.addEventListener("loadedmetadata",()=>{
        player.play().catch(()=>{});
    });

}else{

    document.body.innerHTML=`
    <div style="
        color:white;
        text-align:center;
        font-family:Arial;
        padding:40px;
    ">
        <h2>No Video Found</h2>
        <p>Please provide a valid video link.</p>
    </div>
    `;

    }
