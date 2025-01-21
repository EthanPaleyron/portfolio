import gsap from "gsap";

gsap.fromTo(
  ".cube",
  {
    x: -800,
    y: -50,
    rotationX: 170,
    rotationY: 80,
  },
  {
    x: 0,
    y: 0,
    rotationX: -15,
    rotationY: 60,
    duration: 1.5,
    ease: "power2.out",
    onComplete: () => {
      addMouseEffect();
      addScrollEffect();
    },
  }
);

let mouseRotationX = -15;
let mouseRotationY = 60;
let scrollRotationX = 0;
let scrollRotationY = 0;

function addMouseEffect() {
  window.addEventListener("mousemove", (e) => {
    const bodyWidth = document.body.scrollWidth;
    const bodyHeight = document.body.scrollHeight;
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    mouseRotationY = (mouseX / bodyWidth) * 35 - 10;
    mouseRotationX = (mouseY / bodyHeight) * -35 + 10;
    updateCubeRotation();
  });
}

function addScrollEffect() {
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const scrollPercent = scrollPosition / maxScroll;

    scrollRotationY = scrollPercent * -120;
    scrollRotationX = scrollPercent * -180;
    updateCubeRotation();
  });
}

function updateCubeRotation() {
  gsap.to(".cube", {
    rotationX: mouseRotationX + scrollRotationX - 15,
    rotationY: mouseRotationY + scrollRotationY + 60,
    duration: 0.3,
    ease: "power2.out",
  });
}

export default function Cube3d() {
  return (
    <div className="cube">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
