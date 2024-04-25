document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez le bouton pour ouvrir la popup
    var openChatbotBtn = document.getElementById('openChatbotBtn');

    // Sélectionnez la popup du chatbot
    var chatbotPopup = document.getElementById('chatbotPopup');

    // Sélectionnez le bouton pour fermer la popup
    var closeChatbotBtn = document.getElementById('closeChatbotBtn');

    // Ajoutez un écouteur d'événements au bouton pour ouvrir la popup
    openChatbotBtn.addEventListener('click', function() {
        chatbotPopup.style.display = 'block'; // Affiche la popup
    });

    // Ajoutez un écouteur d'événements au bouton pour fermer la popup
    closeChatbotBtn.addEventListener('click', function() {
        chatbotPopup.style.display = 'none'; // Cache la popup
    });
});

/* Scrolling cards */
/* Scrolling cards */
const boxes = document.getElementsByClassName('box');

// Itérer sur chaque élément de la collection
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
