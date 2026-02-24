# Mon Portfolio

Bienvenue dans le dépôt de mon portfolio. Ce projet a été conçu dans le cadre de mon **BTS SIO (SLAM)** pour présenter mes compétences, mes projets et mon parcours de manière interactive et moderne.

## 🎨 Concept & Design

L'objectif était de faire une structure simple pour moi dans l'organisation de mon code pour que ce soit simple à modifier et pour avoir un rendu dynamique et fun :

* **Style "Pop & Sand"** : Utilisation de couleurs claires (Sable/Blanc cassé) contrastées par un Bleu Navy pour les textes et des bleus plus clairs pour le côté dynamique et pop.
* **Interface Dashboard** : Une barre de navigation latérale fixe pour une accessibilité constante, pour pouvoir naviguer selon ses envies simplement dans mon portefeuille.
* **Composants Interactifs** : Utilisation de fenêtres pop-ups pour les détails de certaines sections afin de ne pas perdre l'utilisateur lors de la navigation et rendre ça encore plus dynamique et fun.

## 🗂️ Architecture du Code 

Contrairement à un site statique classique où tout est dans un seul fichier, j'ai opté pour une structure **modulaire** en pur HTML/JS, mon but était de pouvoir modifier la partie que je veux facilement sans passer des heures à la chercher et aussi avoir une structure plus simple et plus claire selon moi. 

### Structure des dossiers

```text
├── index.html          # Squelette principal avec la barre de nav et les différentes cartes
├── style.css           # Design global et animations
├── script.js           # Script pour les parties Java globales
├── docs/               # Dossier pour les différents documents 
├── img/                # Dossier pour les images 
└── sections/           # Dossier avec les différents codes de chaque section
    ├── moi.html
    ├── parcours.html
    ├── projets.html
    ├── stages.html
    ├── veilles.html
    └── contact.html

```

### Méthode de structure : "L'Injection de Composants"

Pour faciliter la maintenance, j'ai séparé chaque section du site dans le dossier `/sections`.

* **Le script `script.js`** utilise l'API `fetch()` pour charger chaque fichier HTML de section et l'injecter automatiquement dans les conteneurs `data-include` de la page principale.
* **Avantage** : Si je veux modifier mon parcours, je n'ouvre que `parcours.html`. Cela évite les erreurs de balises dans un fichier trop long et rend le code beaucoup plus clair et simple à modifier au cours du temps (selon moi).

## ⌨️ Technologies utilisées

* **HTML5 / CSS3** 
* **JavaScript** : Gestion du chargement dynamique et des animations interactives.
* **Google Fonts** : Pour les jolies typographies

### Visualiser mon portfolio ?

Comme le projet utilise des requêtes `fetch()` pour charger les sections, il nécessite un environnement de serveur local pour fonctionner (à cause des restrictions de sécurité des navigateurs sur les fichiers locaux).

1. Cloner le dépôt.
2. Ouvrir avec un serveur local (ex: extension **Live Server** sur VS Code).
3. L'index chargera automatiquement tous les modules.

_PS : oui l'IA m’a un peu aidé pour le README, et en cas de soucis sur mon code_