const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

navToggle.addEventListener('click', () => {
  if (mobileMenu.classList.contains('max-h-0')) {
    mobileMenu.classList.remove('max-h-0', 'opacity-0');
    mobileMenu.classList.add('max-h-screen', 'opacity-100');
    navToggle.classList.add('hamburger-active');
  } else {
    mobileMenu.classList.add('max-h-0', 'opacity-0');
    mobileMenu.classList.remove('max-h-screen', 'opacity-100');
    navToggle.classList.remove('hamburger-active');
  }
});


// ✅ Typing effect
const skills = [
  "Graphics Designer",
  "Software Developer",
  "CV & Resume Writer",
  "Frontend Developer",
  "Backend Developer",
  "Photographer"
];
let skillIndex = 0;
let charIndex = 0;
const typingEl = document.getElementById('typing-skill');

function typeSkill() {
  if (charIndex < skills[skillIndex].length) {
    typingEl.textContent += skills[skillIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeSkill, 100);
  } else {
    setTimeout(eraseSkill, 2000);
  }
}

function eraseSkill() {
  if (charIndex > 0) {
    typingEl.textContent = skills[skillIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseSkill, 50);
  } else {
    skillIndex = (skillIndex + 1) % skills.length;
    setTimeout(typeSkill, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeSkill);




// Rotate skill badge colors every 5 seconds
const colorSets = [
  '#6c5ce7', // purple
  '#0984e3', // blue
  '#e74c3c'  // red
];

const skillGroups = document.querySelectorAll('.skill-group');

let colorIndex = 0;

function rotateSkillColors() {
  skillGroups.forEach(group => {
    const badges = group.querySelectorAll('.skill-badge');
    badges.forEach(badge => {
      badge.style.backgroundColor = colorSets[colorIndex];
    });
  });

  colorIndex = (colorIndex + 1) % colorSets.length;
}

setInterval(rotateSkillColors, 5000);
rotateSkillColors(); // Run immediately


/* ----- HANDLE CONTACT FORM SUBMISSION ----- */
document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS
  (function () {
    emailjs.init("0ZSQiz7mddhkqaZZg"); // Replace with your actual EmailJS Public Key
  })();

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from reloading the page

      // Get form input values
      const name = document.querySelector("#from_name").value.trim();
      const email = document.querySelector("#reply_to").value.trim();
      const message = document.querySelector("#message").value.trim();

      // Select popup elements
      const successPopup = document.getElementById("successMessage");
      const errorPopup = document.getElementById("errorMessage");

      // Validation: Check if fields are empty
      if (!name || !email || !message) {
        errorPopup.style.display = "block"; // Show error popup
        setTimeout(() => {
          errorPopup.style.display = "none"; // Hide after 3 seconds
        }, 3000);
        return; // Stop further execution if validation fails
      }

      // Send the form using EmailJS
      emailjs
        .sendForm("service_qgrlu8n", "template_95s9ood", this, "0ZSQiz7mddhkqaZZg")
        .then(
          function (response) {
            console.log("SUCCESS via EmailJS!", response.status, response.text);
            successPopup.style.display = "block"; // Show success popup
            setTimeout(() => {
              successPopup.style.display = "none"; // Hide after 3 seconds
            }, 3000);
            contactForm.reset(); // Reset form fields
          },
          function (error) {
            console.error("FAILED via EmailJS...", error);
            errorPopup.style.display = "block"; // Show error popup
            setTimeout(() => {
              errorPopup.style.display = "none"; // Hide after 3 seconds
            }, 3000);
          }
        );
    });
  } else {
    console.error("#contactForm element not found");
  }
});


/*  Animate Numbers & Progress Bars  */

    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 200;
        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target + '+';
        }
      };
      updateCounter();
    });

    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.transition = 'width 2s ease-in-out';
        bar.style.width = bar.getAttribute('data-width');
      }, 200);
    });
  


// Init AOS
AOS.init({
  duration: 1000,  // animation duration in ms
  once: false,     // repeat on scroll up/down
  easing: 'ease-in-out'
});

// Loader fade out
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('preloader');
  if (loader) {
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    loader.style.transition = 'opacity 0.5s ease-out';
    setTimeout(() => loader.remove(), 500);
  }
});

