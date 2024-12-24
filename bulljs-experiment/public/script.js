document.getElementById('emailForm').addEventListener('submit', async e => {
    e.preventDefault();
  
    const email = document.getElementById('emailInput').value;
    const messageDiv = document.getElementById('message');
  
    try {
      const response = await fetch('/add-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        messageDiv.textContent = result.message;
        document.getElementById('emailInput').value = '';
      } else {
        messageDiv.textContent = result.error;
      }
    } catch (error) {
      messageDiv.textContent = 'An error occurred. Please try again.';
    }
  });
  