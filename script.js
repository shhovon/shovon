// Typing effect
const typingEffect = document.getElementById('typing-effect');
const text = typingEffect.textContent;
typingEffect.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingEffect.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

// Particle.js configuration for the entire page with cursor interaction
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 0.5,
            random: false,
        },
        size: {
            value: 3,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab',
                parallax: {
                    enable: false
                }
            }
        },
        modes: {
            grab: {
                distance: 200,  // Adjust if necessary
                line_linked: {
                    opacity: 0.7  // Adjust for visibility
                }
            }
        }
    },
    retina_detect: true,
    fn: {
        interact: {
            hover: function() {
                console.log('Hover event detected');
            }
        }
    }
});



document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = this;
    var formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            form.reset();
            form.style.display = 'none';
            document.getElementById('thank-you-message').style.display = 'block';
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});

feather.replace();