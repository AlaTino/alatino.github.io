document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comments = document.getElementById('comments').value.trim();
  
    if (!name || !email || !comments) {
      alert('Please fill out all fields.');
      event.preventDefault();
    } else {
      alert('Form submitted successfully!');
    }
  });
