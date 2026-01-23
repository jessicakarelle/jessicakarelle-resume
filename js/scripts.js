// Sélectionne toutes les boxes à animer
const boxes = document.querySelectorAll(".box");
// Observer pour déclencher l'animation au scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.target.classList.contains("box")) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); 
            }
        });
    },
    { threshold: 0.3 }
);

boxes.forEach((el) => observer.observe(el));