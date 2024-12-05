document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comments = document.getElementById('comments').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (!name || !email || !comments) {
      alert('Please fill out all fields.');
      event.preventDefault();
    } 
    else if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.')
      event.preventDefault();
    }
    else {
      alert('Form submitted successfully!');
    }
  });
