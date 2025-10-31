const followBtn = document.getElementById("followBtn");
let followed = false;

followBtn.addEventListener("click", () => {
    followed = !followed;
    followBtn.textContent = followed ? "Seguindo" : "Seguir";
    followBtn.style.background = followed ? "#32cd32" : "#7a4fff";
    localStorage.setItem("harryFollowed", followed);
});

window.addEventListener("load", () => {
    const saved = localStorage.getItem("harryFollowed") === "true";
    if (saved) {
        followed = true;
        followBtn.textContent = "Seguindo";
        followBtn.style.background = "#32cd32";
    }
});
