function openSurprise() {

    const music = document.getElementById("bgMusic");

    music.play();

    alert("Your surprise is opening... 💗");

    setTimeout(function() {
        window.location.href = "surprise.html";
    }, 1000);
}