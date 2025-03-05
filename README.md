# past present future spread 2

## About
This code was generated by [CodeCraftAI](https://codecraft.name)

**User requests:**
create a web app titled "Past Present Future Spread" that allows user to draw three tarot cards side by side titled "Past" "Present" "Future". Each card will have a description below it. Use a pixel font. At bottom of page show link <a href="https://pixel-oracle.com/" target="_blank">Visit Pixel Oracle</a>. Use only HTML, CSS, JavaScript and a file titled "images" for the tarot card images.


Check OUTPUT.md for the complete unaltered output.

## Project Plan
```
Here’s a simple and clear **project plan** for building the "Past Present Future Spread" web app based on the provided requirements:

---

### **Project Plan: Past Present Future Spread Web App**

---

### **Phase 1: Setup & Planning**
1. **Set Up Folder Structure**  
   - Create the main project folder: `/past-present-future-spread`.  
   - Inside, create files: `index.html`, `styles.css`, `script.js`.  
   - Create an `images` folder and populate it with tarot card images.  

2. **Gather Resources**  
   - Download or create tarot card images (`card1.jpg`, `card2.jpg`, etc.).  
   - Choose a pixel font (e.g., `"Press Start 2P"` from Google Fonts).  

3. **Plan Layout**  
   - Sketch a wireframe of the app layout:  
     - Title at the top.  
     - Three cards in a row (Past, Present, Future) with labels and descriptions.  
     - Footer at the bottom with the link.  

---

### **Phase 2: HTML Development**
1. **Build the HTML Structure**  
   - Add a `<header>` for the title: "Past Present Future Spread."  
   - Create a `<main>` section with a flexbox or grid container for the three cards.  
   - Each card should include:  
     - A label ("Past," "Present," "Future").  
     - An image placeholder for the tarot card.  
     - A description placeholder.  
   - Add a `<footer>` for the "Visit Pixel Oracle" link.  

---

### **Phase 3: CSS Styling**
1. **Apply Pixel Font**  
   - Use the chosen pixel font for all text.  
   - Ensure the font is imported correctly (e.g., from Google Fonts).  

2. **Style Layout**  
   - Center the content on the page.  
   - Ensure the three cards are aligned horizontally and spaced evenly.  
   - Style the card labels, descriptions, and images for a clean, minimal look.  

3. **Footer Styling**  
   - Style the footer link to be subtle but visible (e.g., small and centered).  

---

### **Phase 4: JavaScript Development**
1. **Randomize Tarot Cards**  
   - Create an array of tarot card objects, each with an `image` and `description`.  
   - Write a function to randomly select three cards from the array.  

2. **Update Card Display**  
   - Use DOM manipulation to dynamically update the card images and descriptions.  
   - Add a "Draw Cards" button (if needed) to trigger the randomization.  

---

### **Phase 5: Testing & Deployment**
1. **Test Functionality**  
   - Ensure the app works correctly in different browsers.  
   - Verify that the layout is responsive (adjusts well to different screen sizes).  

2. **Optimize & Deploy**  
   - Optimize the final code for performance.  
   - Deploy the app to a hosting platform (e.g., GitHub Pages, Netlify).  

---

### **Timeline**
1. **Day 1:** Setup & HTML Development.  
2. **Day 2:** CSS Styling.  
3. **Day 3:** JavaScript Development.  
4. **Day 4:** Testing & Deployment.  

---

### **Example Code Template**
Here’s a starting point for your HTML, CSS, and JavaScript:

#### HTML (`index.html`):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Past Present Future Spread</title>
</head>
<body>
  <header>
    <h1>Past Present Future Spread</h1>
  </header>
  <main>
    <div class="card">
      <h2>Past</h2>
      <img src="images/placeholder.jpg" alt="Past Card">
      <p class="description">Past description here.</p>
    </div>
    <div class="card">
      <h2>Present</h2>
      <img src="images/placeholder.jpg" alt="Present Card">
      <p class="description">Present description here.</p>
    </div>
    <div class="card">
      <h2>Future</h2>
      <img src="images/placeholder.jpg" alt="Future Card">
      <p class="description">Future description here.</p>
    </div>
  </main>
  <footer>
    <a href="https://pixel-oracle.com/" target="_blank">Visit Pixel Oracle</a>
  </footer>
  <script src="script.js"></script>
</body>
</html>
```

#### CSS (`styles.css`):
```css
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

body {
  font-family: 'Press Start 2P', cursive;
  text-align: center;
  background: #f0f0f0;
  margin: 0;
  padding: 20px;
}

header h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

main {
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
}

.card {
  width: 30%;
}

.card img {
  width: 100%;
  height: auto;
  border: 2px solid #000;
}

.card h2 {
  font-size: 16px;
  margin: 10px 0;
}

.description {
  font-size: 12px;
  color: #555;
}

footer a {
  font-size: 12px;
  color: #000;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
```

#### JavaScript (`script.js`):
```javascript
const tarotCards = [
  { image: 'images/card1.jpg', description: 'Description for Card 1' },
  { image: 'images/card2.jpg', description: 'Description for Card 2' },
  { image: 'images/card3.jpg', description: 'Description for Card 3' },
  // Add more cards as needed
];

function drawCards() {
  const shuffledCards = tarotCards.sort(() => Math.random() - 0.5).slice(0, 3);
  const cards = document.querySelectorAll('.card');

  cards.forEach((card, index) => {
    card.querySelector('img').src = shuffledCards[index].image;
    card.querySelector('.description').textContent = shuffledCards[index].description;
  });
}

// Initial draw on page load
drawCards();
```

---

### **Next Steps**
1. Implement the plan step by step.  
2. Let me know if you need further assistance or refinements!
```
