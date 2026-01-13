// Efek animasi sederhana saat scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});