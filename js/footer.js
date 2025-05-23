document.addEventListener('DOMContentLoaded', () => {
  fetch('./components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(err => console.error('Footer loading error:', err));
});
