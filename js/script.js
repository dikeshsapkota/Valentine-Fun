const noBtn = document.getElementById("no");
const yesBtn=document.getElementById("yes");
//NO buton runs
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";

  // Calculate max allowed positions
  const maxX = window.innerWidth - noBtn.offsetWidth-10;
  const maxY = window.innerHeight - noBtn.offsetHeight-10;

  // Random positions inside viewport bounds
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
//yes button click
yesBtn.addEventListener("click", () => {
  // Hide the heading and buttons
  const heading = document.querySelector("h1");
  const buttonsContainer = document.querySelector(".buttons");
  
  heading.style.display = "none";
  buttonsContainer.style.display = "none";

  // Create a centered "I love you" message
  const message = document.createElement("div");
  message.textContent = "I love you 💖";
  
  message.style.position = "fixed";
  message.style.top = "50%";
  message.style.left = "50%";
  message.style.transform = "translate(-50%, -50%)";
  message.style.color = "white";
  message.style.fontSize = "4rem";
  message.style.textAlign = "center";
  message.style.textShadow = "2px 2px 10px rgba(0,0,0,0.7)";

  document.body.appendChild(message);
});

