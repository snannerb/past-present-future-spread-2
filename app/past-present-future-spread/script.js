const tarotCards = [
  { image: 'images/card1.jpg', description: 'A new beginning is on the horizon.' },
  { image: 'images/card2.jpg', description: 'Embrace change and trust the process.' },
  { image: 'images/card3.jpg', description: 'Stay focused on your goals.' },
  { image: 'images/card4.jpg', description: 'Patience will lead to success.' },
  { image: 'images/card5.jpg', description: 'Release what no longer serves you.' },
  // Add more cards as needed
];

function drawCards() {
  const shuffledCards = tarotCards.sort(() => Math.random() - 0.5).slice(0, 3);
  const cards = document.querySelectorAll('.card');

  cards.forEach((card, index) => {
    if (shuffledCards[index]) {
      card.querySelector('img').src = shuffledCards[index].image;
      card.querySelector('.description').textContent = shuffledCards[index].description;
    }
  });
}

// Draw cards when the page loads
document.addEventListener('DOMContentLoaded', drawCards);

// Add event listener to the "Draw Cards" button
document.getElementById('drawButton').addEventListener('click', drawCards);