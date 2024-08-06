// Example function to toggle between video and photo background
function toggleBackground(usePhoto) {
    const video = document.getElementById('bg-video');
    const photo = document.getElementById('bg-photo');

    if (usePhoto) {
        video.style.display = 'none';
        photo.style.display = 'block';
    } else {
        video.style.display = 'block';
        photo.style.display = 'none';
    }
}

// Example: toggle to photo background
toggleBackground(true); // Set to 'false' to use the video background
