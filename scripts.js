document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const songList = document.getElementById('songList');
    
    songList.addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === "LI") {
            const songFile = e.target.getAttribute('data-file');
            audioPlayer.src = audio/${songFile};
            audioPlayer.play();
        }
    });
});