// Animation d'entrée avec les valeurs initiales de rotation et position
gsap.fromTo(
  ".cube",
  {
    x: -200,
    y: 50,
    rotationX: 170,
    rotationY: 80,
  },
  {
    x: 500,
    y: 50,
    rotationX: -15,
    rotationY: 60,
    duration: 1.5,
    ease: "power2.out",
    onComplete: () => {
      addMouseEffect();
    }, // Ajouter l'effet de souris et de scroll après l'animation d'entrée
  }
);

let mouseRotationX = -15;
let mouseRotationY = 60;
let scrollRotationX = 0;
let scrollRotationY = 0;

// Fonction pour ajouter l'effet de rotation en fonction de la position de la souris
function addMouseEffect() {
  window.addEventListener("mousemove", (e) => {
    // Calculer une rotation faible en fonction de la position de la souris
    mouseRotationY = (e.clientX / window.innerWidth) * 20 - 10; // De -10° à 10° en Y
    mouseRotationX = (e.clientY / window.innerHeight) * -20 + 10; // De -10° à 10° en X

    // Mettre à jour la rotation du cube
    updateCubeRotation();
  });
}

// Fonction pour mettre à jour la rotation du cube en combinant la souris et le scroll
function updateCubeRotation() {
  gsap.to(".cube", {
    rotationX: mouseRotationX + scrollRotationX - 15, // Ajuste pour rester autour de la rotation finale
    rotationY: mouseRotationY + scrollRotationY + 60, // Ajuste pour rester autour de la rotation finale
    duration: 0.3,
    ease: "power2.out",
  });
}
