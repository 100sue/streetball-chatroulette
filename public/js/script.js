const videocontainer= document.getElementById("video-container");
const myVideo = document.createElement("video");
myVideo.muted = true;
const socket = io("/");


navigator.mediaDevices.getUserMedia ({
    video: true,
    audio: false,
})
.then((stream) => {
    myVideo.srcObject = stream;
    myVideo.addEventListener("loadedmetadata", () => {
        myVideo.play();
    });
    videocontainer.append(myVideo);
});