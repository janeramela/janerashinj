document.addEventListener("DOMContentLoaded", () => {
  fetch("components/header.html")
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML("afterbegin", data);
      setActiveLink(); // Set the active link after the header is loaded
    });

  fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML("beforeend", data);
    });

  // Function to remove the active class from all links
  function removeActiveClasses() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
  }

  // Function to set the active class on the current page's link
  function setActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  }

  // Set the active link when a link is clicked
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-link')) {
      removeActiveClasses();
      event.target.classList.add('active');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery-grid img');

  images.forEach(image => {
    const link = document.createElement('a');
    link.href = image.src;
    link.download = image.alt;
    link.innerHTML = image.outerHTML;
    image.parentNode.replaceChild(link, image);
  });
});
