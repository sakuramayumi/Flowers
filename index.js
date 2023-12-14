function createFirefly() {
  const firefly = document.createElement("div");
  firefly.className = "firefly";

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;

  firefly.style.left = `${startX}px`;
  firefly.style.top = `${startY}px`;

  document.body.appendChild(firefly);

  animateFirefly(firefly);
}

function animateFirefly(firefly) {
  const fadeInDuration = Math.random() * 350 + 500;
  const fadeOutDuration = Math.random() * 350 + 500;

  function fadeIn() {
    firefly.style.opacity = "0.5";
    setTimeout(fadeOut, fadeInDuration);
  }

  function fadeOut() {
    firefly.style.opacity = "0";
    setTimeout(() => {
      firefly.style.left = `${Math.random() * window.innerWidth}px`;
      firefly.style.top = `${Math.random() * window.innerHeight}px`;
      fadeIn();
    }, fadeOutDuration);
  }

  fadeIn();
}

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
