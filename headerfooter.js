document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;


      let currentPage = window.location.pathname.split("/").pop();


      document.querySelectorAll(".nav-link").forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });
    })
    .catch((error) => console.error("Error loading navbar:", error));

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
