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

// Fonction pop-up 
function loadAndOpenModal(title, filePath) {
    // 1. On va chercher le contenu du fichier HTML
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error("Fichier introuvable");
            return response.text();
        })
        .then(htmlContent => {
            // 2. On remplit la modale avec le titre et le contenu récupéré
            document.getElementById('modalTitle').innerHTML = title;
            document.getElementById('modalBody').innerHTML = htmlContent;
            
            // 3. On affiche la modale
            document.getElementById('modal').style.display = "flex";
        })
        .catch(error => {
            console.error("Erreur lors du chargement de la modale :", error);
        });
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}