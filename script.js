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
                    initStarDecorations();
                }
            })
            .catch(err => console.error(err));
    });

    // --- PARTIE 2 : ANIMATION DU HERO ---
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

(function () {
    const acceuil = document.querySelector('.acceuil');
    const icons = document.querySelectorAll('.hero-icon');
    const arrow = document.getElementById('scroll-arrow');

    if (!acceuil || !icons.length) return;

    const cRect = acceuil.getBoundingClientRect();
    const cx = cRect.width / 2;
    const cy = cRect.height / 2;

    // Placement initial invisible au centre
    icons.forEach(el => {
        const r = el.getBoundingClientRect();
        const elCx = r.left - cRect.left + r.width / 2;
        const elCy = r.top - cRect.top + r.height / 2;
        const dx = cx - elCx;
        const dy = cy - elCy;

        el.style.transform = `translate(${dx}px, ${dy}px) scale(0)`;
        el.style.opacity = '0';
    });

    // Animation après chargement
    window.addEventListener('load', () => {
        // Liste exhaustive de tous tes éléments par ID
        const ORDER = [
            'star-1', 'star-2', 'star-3', 'star-4', 'star-5', 'star-6',
            'star-7', 'star-8', 'star-9', 'star-10', 'star-11', 'star-12',
            'icon-laptop', 'icon-journal', 'icon-books', 'mini-me'
        ];

        ORDER.forEach((id, i) => {
            const el = document.getElementById(id);
            if (!el) return;

            setTimeout(() => {
                el.style.transition = `transform 700ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 400ms ease`;
                el.style.transform = 'translate(0, 0) scale(1)';
                el.style.opacity = '1';

                // Ajout du flottement après l'apparition
                setTimeout(() => el.classList.add('floating'), 700);
            }, i * 60);
        });

        setTimeout(() => {
            if (arrow) arrow.classList.add('visible');
        }, (ORDER.length * 60) + 600);
    });
})();


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

// --- PARTIE 5 : ÉTOILES DÉCORATIVES STATIQUES ---
function createStars(container, count) {
    const shapes = ['✦', '✦', '✦', '★', '.'];
    const colors = ['#4a9eff', '#0052a3', '#f5a0c8', '#f5c842', '#f5a845', '#7fb99a'];

    for (let i = 0; i < count; i++) {
        const star = document.createElement('span');
        star.classList.add('star-deco');
        star.textContent = shapes[Math.floor(Math.random() * shapes.length)];

        // --- LOGIQUE D'ÉVITEMENT DU TEXTE ---
        const isLeft = Math.random() > 0.5;
        const xPos = isLeft ? (Math.random() * 15) : (82 + Math.random() * 15);

        const yPos = Math.random() * 95;

        star.style.setProperty('--star-sz', `${10 + Math.random() * 20}px`);
        star.style.setProperty('--star-color', colors[i % colors.length]);
        star.style.setProperty('--star-op', (0.3 + Math.random() * 0.4).toFixed(2));
        star.style.setProperty('--star-rot', `${Math.random() * 30}deg`);

        star.style.left = `${xPos}%`;
        star.style.top = `${yPos}%`;

        container.appendChild(star);
    }
}

function initStarDecorations() {
    const nav = document.querySelector('nav');
    if (nav) createStars(nav, 15);

    const accueil = document.querySelector('.acceuil');
    if (accueil) createStars(accueil, 8);

    document.querySelectorAll('.section-card').forEach((section) => {
        createStars(section, 15);
    });

    document.querySelectorAll('.card').forEach((card) => {
        createStars(card, 3);
    });
}
