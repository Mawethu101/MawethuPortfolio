document.querySelectorAll(".pill").forEach(pill => {
    pill.addEventListener("click", () => pill.classList.toggle("pill--selected"));
});