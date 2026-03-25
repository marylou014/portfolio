// 1. Initialisation EmailJS
(function () {
    emailjs.init("EIgAYs67fN_I0WlKb");
})();

document.addEventListener("DOMContentLoaded", function () {

    // --- PARTIE 1 : CHARGEMENT DES SECTIONS ---
    const includes = document.querySelectorAll('[data-include]');
    let loadedCount = 0;

    includes.forEach(el => {
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(response => {
                if (response.ok) return response.text();
                throw new Error('Erreur de chargement');
            })
            .then(data => {
                el.innerHTML = data;
                loadedCount++;

                // Une fois que tout est chargé, on lie le formulaire
                if (loadedCount === includes.length) {
                    initContactForm();
                }
            })
            .catch(err => console.error(err));
    });

    // --- PARTIE 2 : ANIMATION DU TITRE ---
    const titleElement = document.getElementById('animated-title');
    if (titleElement) {
        const text = titleElement.textContent.trim();
        titleElement.textContent = '';

        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.classList.add('animated-letter');
            span.style.animationDelay = `${index * 0.1}s`;
            titleElement.appendChild(span);
        });
        console.log("Animation du titre chargée !");
    }
});

// --- PARTIE 3 : LOGIQUE DU FORMULAIRE ---
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = "Envoi en cours...";
            btn.disabled = true;

            emailjs.sendForm('service_g445ksp', 'template_a7837v9', this)
                .then(() => {
                    alert('Message envoyé avec succès !');
                    contactForm.reset();
                }, (error) => {
                    alert('Erreur : ' + JSON.stringify(error));
                })
                .finally(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                });
        });
    }
}

// --- PARTIE 4 : MODALES ---
function loadAndOpenModal(title, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(htmlContent => {
            document.getElementById('modalTitle').innerHTML = title;
            document.getElementById('modalBody').innerHTML = htmlContent;
            document.getElementById('modal').style.display = "flex";
        })
        .catch(err => console.error(err));
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}