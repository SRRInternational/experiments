// src/index.js
function renderGreeting() {
    const element = document.createElement('div');
    element.textContent = 'Hello, webpack with PHP!';
    return element;
  }
  
  document.body.appendChild(renderGreeting());
  