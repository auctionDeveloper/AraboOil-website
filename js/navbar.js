document.addEventListener('DOMContentLoaded', () => {
  fetch('./components/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;
    })
    .catch(err => console.error('Navbar loading error:', err));
});
