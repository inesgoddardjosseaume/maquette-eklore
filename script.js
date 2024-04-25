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

/* Circle animation */
const circle = document.querySelector('.circle');

let direction = 1; // 1 pour descendre, -1 pour montera
let positionY = 0; // Position Y initiale

// Fonction pour animer le mouvement du cercle
function moveCircle() {
    // Changer la direction lorsque le cercle atteint les bords supérieur ou inférieur
    if (positionY >= window.innerHeight - circle.offsetHeight) {
        direction = -1;
    } else if (positionY <= 0) {
        direction = 1;
    }

    // Mettre à jour la position Y du cercle
    positionY += direction;

    // Appliquer la nouvelle position Y
    circle.style.marginTop = positionY + 'px';

    // Répéter l'animation à la prochaine frame
    requestAnimationFrame(moveCircle);
}

// Lancer l'animation
moveCircle();
