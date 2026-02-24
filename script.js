document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour charger les fichiers externes
    const includes = document.querySelectorAll('[data-include]');
    includes.forEach(el => {
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(response => {
                if (response.ok) return response.text();
                throw new Error('Erreur de chargement');
            })
            .then(data => {
                el.innerHTML = data;
            })
            .catch(err => console.error(err));
    });
});

// Fonctions pour la modale
function openModal(title, text) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalBody').innerText = text;
    document.getElementById('modal').style.display = "flex";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}