const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play 

async function selectMediaStream(params) {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (error) {
        // Catch Error here
        console.log('whoops, error here:', error)
    }
}

button.addEventListener('click', async () => {
    //disable button 
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture()
    //Reset Button
    button.disabled = false;
})


selectMediaStream();
