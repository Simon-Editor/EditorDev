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




// ✅ Init EmailJS once with your new Public Key
(function() {
  emailjs.init("3fwYJ26aosfMC2qpq");
})();

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Sending form...");

    emailjs.send(
      "service_qgrlu8n",
      "template_95s9ood",
      {
        from_name: document.getElementById("from_name").value,
        reply_to: document.getElementById("reply_to").value,
        message: document.getElementById("message").value
      }
    ).then(
      function () {
        // ✅ Show success message
        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";

        // ✅ Hide after 5 seconds
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 5000);

        contactForm.reset();
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Something went wrong. Please try again!");
      }
    );
  });
}
