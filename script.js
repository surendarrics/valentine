const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.querySelector(".card");

let yesSize = 1;


// YES click
yesBtn.addEventListener("click", () => {
  confetti({
    particleCount: 150,
    spread: 100
  });

  setTimeout(() => {
    window.location.href = "yes.html";
  }, 800);
});


// move NO safely
function moveNo() {

  const padding = 10;

  const cardWidth = card.clientWidth;
  const cardHeight = card.clientHeight;

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const x = Math.random() * (cardWidth - btnWidth - padding);
  const y = Math.random() * (cardHeight - btnHeight - padding);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // grow YES
  yesSize += 0.1;
  yesBtn.style.transform = `scale(${yesSize})`;
}


// desktop
noBtn.addEventListener("mouseenter", moveNo);

// mobile
noBtn.addEventListener("touchstart", moveNo);
