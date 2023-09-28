window.addEventListener("scroll", function () {
    const videoIframe = document.querySelector(".video-iframe");
    const videoContainer = document.querySelector(".video-container");
    const rect = videoContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.75 && rect.bottom >= 0) {
        // O vídeo está dentro da janela de visualização
        videoIframe.style.opacity = 1;
    } else {
        // O vídeo está fora da janela de visualização
        videoIframe.style.opacity = 0;
    }
});