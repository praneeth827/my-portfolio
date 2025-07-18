// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Particles.js Configuration
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#64ffda"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#64ffda",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        }
    },
    retina_detect: true
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollTop = 0;
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Skill Progress Animation
function animateProgress() {
    const progress = document.querySelectorAll('.progress');
    progress.forEach(item => {
        const width = item.style.width;
        item.style.width = '0';
        setTimeout(() => {
            item.style.width = width;
        }, 500);
    });
}

// Trigger progress animation when skills section is in view
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgress();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll animations
function handleScrollAnimations() {
    const skillsSection = document.getElementById('skills');
    const skillCategories = document.querySelectorAll('.skills-category');
    const skillCards = document.querySelectorAll('.skill-card');

    if (isInViewport(skillsSection)) {
        skillCategories.forEach((category, index) => {
            category.style.animationDelay = `${index * 0.2}s`;
            category.style.visibility = 'visible';
        });

        skillCards.forEach((card, index) => {
            card.style.animationDelay = `${(index % 4) * 0.1 + 0.3}s`;
            card.style.visibility = 'visible';
        });
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimations);
// Trigger once on page load
document.addEventListener('DOMContentLoaded', handleScrollAnimations); 