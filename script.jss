let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
  pages[currentPage].classList.remove("active");
  currentPage++;
  pages[currentPage].classList.add("active");
}

const noBtn = document.getElementById("noBtn");

function moveNoButton() {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 250 - 125;
  noBtn.style.transform = `translate(${x}px, ${y}px) rotate(10deg)`;
}

// Desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile tap
noBtn.addEventListener("touchstart", moveNoButton);


function sayYes() {
  document.body.innerHTML = `
    <div class="yes-screen">
      <div class="yes-card">
        <h1 style="color:#e60026;">I KNEW IT 
      ❤️</h1>

        <h2 class="valentine-text">
          Happy Valentine’s, my love 💖
        </h2>

        <p style="color:#666;">
          I was really hoping you’d say YES 
          Thank you my love 🎀💗💗😋
        </p>
      </div>
    </div>
  `;
}




  
