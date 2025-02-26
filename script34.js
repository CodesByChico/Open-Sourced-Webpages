document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for link navegation
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  
    // Action of the button in the hero secction
    const downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", function() {
        // Substitute #Dowload with your dowload link
        window.location.href = "#download";
      });
    }
  });
  