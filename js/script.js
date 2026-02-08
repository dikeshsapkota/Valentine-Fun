const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

const container = document.querySelector(".buttons");

function moveNoButton() {
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
   const music=document.getElementById("loveMusic");
  music.play();
  startHeartRain();

  
  document.querySelector("h1").style.display = "none";
  document.querySelector(".buttons").style.display = "none";
 

  const message = document.createElement("div");
  message.innerHTML = "I love you 💖";

  Object.assign(message.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "4rem",
    textAlign: "center",
    textShadow: "2px 2px 10px rgba(0,0,0,0.7)"
  });

  document.body.appendChild(message);
});
//HEART RAIN
    const baseHeart=document.querySelector(".heart");
function startHeartRain() {
  const interval = setInterval(() => {
    const heart = baseHeart.cloneNode(true);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";
    heart.style.fontSize = 16 + Math.random() * 30 + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 200);

  setTimeout(() => clearInterval(interval), 8000);
}