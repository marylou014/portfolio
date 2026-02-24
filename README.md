# portfolio
C'est une excellente idée. Pour un jury de BTS SIO ou pour un futur employeur, un `README.md` bien structuré montre que tu ne fais pas que "pisser du code", mais que tu réfléchis à l'**architecture** et à la **maintenabilité** de ton projet.

Voici une proposition de contenu pour ton `README.md`, rédigée de manière professionnelle mais avec cette touche "pop/moderne" qui correspond à ton site.

---

# 🚀 Portfolio Dynamique - Marylou Dumas

Bienvenue dans le dépôt de mon portfolio personnel. Ce projet a été conçu dans le cadre de mon **BTS SIO (SLAM)** pour présenter mes compétences, mes projets et mon parcours de manière interactive et moderne.

## 🎨 Concept & Design

L'objectif était de s'éloigner des structures rigides classiques pour proposer une expérience utilisateur (UX) fluide :

* **Style "Pop & Sand"** : Utilisation de couleurs claires (Sable/Blanc cassé) contrastées par un Bleu Azur vif pour un aspect dynamique.
* **Interface Dashboard** : Une barre de navigation latérale fixe pour une accessibilité constante.
* **Composants Interactifs** : Utilisation de fenêtres modales (pop-ups) pour le détail des projets afin de ne pas perdre l'utilisateur lors de la navigation.

## 🏗️ Architecture du Code (Modularité)

Contrairement à un site statique classique où tout est dans un seul fichier, j'ai opté pour une structure **modulaire** en pur HTML/JS, inspirée des frameworks modernes (comme React ou Vue), mais sans la complexité de l'installation.

### Structure des dossiers

```text
├── index.html          # Squelette principal et conteneurs
├── style.css           # Design global et animations
├── script.js           # Logique d'injection dynamique et modales
├── assets/             # Images et ressources (ex: ma-photo.jpg)
└── sections/           # Contenu fractionné (Feuilles de code séparées)
    ├── accueil.html
    ├── parcours.html
    ├── projets.html
    ├── stages.html
    ├── veille.html
    └── contact.html

```

### Méthode de structure : "L'Injection de Composants"

Pour faciliter la maintenance, j'ai séparé chaque section du site dans le dossier `/sections`.

* **Le script `script.js**` utilise l'API `fetch()` pour charger chaque fichier HTML de section et l'injecter automatiquement dans les conteneurs `data-include` de la page principale.
* **Avantage** : Si je veux modifier mon parcours, je n'ouvre que `parcours.html`. Cela évite les erreurs de balises dans un fichier trop long et rend le code beaucoup plus lisible.

## 🛠️ Technologies utilisées

* **HTML5 / CSS3** (Flexbox & Grid pour le responsive).
* **JavaScript (Vanilla)** : Gestion du chargement dynamique et des interactions (modales, scroll fluide).
* **Google Fonts** : Poppins pour une typographie moderne.

## ⚙️ Installation & Aperçu

Comme le projet utilise des requêtes `fetch()` pour charger les sections, il nécessite un environnement de serveur local pour fonctionner (à cause des restrictions de sécurité des navigateurs sur les fichiers locaux).

1. Cloner le dépôt.
2. Ouvrir avec un serveur local (ex: extension **Live Server** sur VS Code).
3. L'index chargera automatiquement tous les modules.

