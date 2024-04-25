/* Animated popup */
document.addEventListener('DOMContentLoaded', function() {
    // Select button to open popup
    const openChatbotBtn = document.getElementById('openChatbotBtn');

    // Select chatbot popup
    const chatbotPopup = document.getElementById('chatbotPopup');

    // Select button to close popup
    const closeChatbotBtn = document.getElementById('closeChatbotBtn');

    // Add a listener event for the button to open popup
    openChatbotBtn.addEventListener('click', function() {
        chatbotPopup.style.display = 'block'; // Affiche la popup
    });

    // Add a listener event for the button to close popup
    closeChatbotBtn.addEventListener('click', function() {
        chatbotPopup.style.display = 'none'; // Hide popup
    });
});

/* Scrolling cards */
const boxes = document.getElementsByClassName('box');

// Iteration on each element of the cards array
Array.from(boxes).forEach(box => {
  let isDown = false;
  let startX;
  let startY;
  let scrollLeft;
  let scrollTop;

  box.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - box.offsetLeft;
    startY = e.pageY - box.offsetTop;
    scrollLeft = box.scrollLeft;
    scrollTop = box.scrollTop;
    box.style.cursor = 'grabbing';
  });

  box.addEventListener('mouseleave', () => {
    isDown = false;
    box.style.cursor = 'grab';
  });

  box.addEventListener('mouseup', () => {
    isDown = false;
    box.style.cursor = 'grab';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - box.offsetLeft;
    const y = e.pageY - box.offsetTop;
    const walkX = (x - startX) * 1; // Change this number to adjust the scroll speed
    const walkY = (y - startY) * 1; // Change this number to adjust the scroll speed
    box.scrollLeft = scrollLeft - walkX;
    box.scrollTop = scrollTop - walkY;
  });
});

/* Circle animation */
const circle = document.querySelector('.circle');

let direction = 1; // 1 to down, -1 to up
let positionY = 0; // Position Y initial

function moveCircle() {
    // Change direction when circle is close borders
    if (positionY >= window.innerHeight - circle.offsetHeight) {
        direction = -1;
    } else if (positionY <= 0) {
        direction = 1;
    }

    // Update position Y
    positionY += direction;

    // Update new position
    circle.style.marginTop = positionY + 'px';

    // Repete animation
    requestAnimationFrame(moveCircle);
}
moveCircle();
