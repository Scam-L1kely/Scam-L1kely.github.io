const trailContainer = document.getElementById('trail-container');

let trailElements = []; // Store created trail elements

function createTrailElement(x, y) {
  const trailElement = document.createElement('div');
  trailElement.classList.add('trail-element');

  // Position the element near the cursor
  trailElement.style.left = x + 'px';
  trailElement.style.top = y + 'px';

  trailContainer.appendChild(trailElement);

  // Store the new trail element
  trailElements.push(trailElement);

  // Animate (fade & shrink) and Remove
  setTimeout(() => {
    trailElement.style.opacity = 0;
    trailElement.style.transform = 'scale(0.5)'; // Optional: shrink on fade

    // Remove from the DOM and trailElements after animation
    setTimeout(() => {
        trailContainer.removeChild(trailElement);
        trailElements = trailElements.filter(el => el !== trailElement); // Remove element from trailElements array
    }, 500); // Animation duration
  }, 10); // Small delay to avoid immediate removal
}


document.addEventListener('mousemove', (event) => {
  createTrailElement(event.clientX, event.clientY);
});
