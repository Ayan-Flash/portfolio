// 🌌 Parallax Background Movement
document.addEventListener("mousemove", (e) => {
  const parallax = document.getElementById("parallax-bg");
  const x = (e.clientX - window.innerWidth / 2) / 40;
  const y = (e.clientY - window.innerHeight / 2) / 40;
  parallax.style.transform = `translate(${x}px, ${y}px)`;
});

// 🐭 Cursor Follower
const cursor = document.getElementById("cursor-dot");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// ✨ Firefly Particle Canvas
const canvas = document.getElementById("firefly-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireflies = [];

for (let i = 0; i < 70; i++) {
  fireflies.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: Math.random() * 1 - 0.5,
    dy: Math.random() * 1 - 0.5,
  });
}

function animateFireflies() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0, 255, 255, 0.7)";
  for (let i = 0; i < fireflies.length; i++) {
    const f = fireflies[i];
    ctx.beginPath();
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    ctx.fill();
    f.x += f.dx;
    f.y += f.dy;

    if (f.x < 0 || f.x > canvas.width) f.dx *= -1;
    if (f.y < 0 || f.y > canvas.height) f.dy *= -1;
  }
  requestAnimationFrame(animateFireflies);
}

animateFireflies();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  currentX += (mouseX - currentX) * 0.15; // easing factor 0.15
  currentY += (mouseY - currentY) * 0.15;
  cursorDot.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

