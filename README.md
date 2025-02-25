# Découverte d'Ionic avec React

## 📌 Introduction
Ionic est un framework open-source permettant de développer des applications mobiles, web et desktop en utilisant des technologies web comme HTML, CSS et JavaScript. Il est particulièrement puissant lorsqu'il est couplé à React.

Ce repository sert de guide pour découvrir Ionic avec React et démarrer rapidement un projet.

---

## 🚀 Installation et Prérequis
### 1. Prérequis
Avant de commencer, assure-toi d'avoir :
- [Node.js](https://nodejs.org/) installé (version LTS recommandée)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) installé
- [Ionic CLI](https://ionicframework.com/docs/cli) installé globalement

```sh
npm install -g @ionic/cli
```

### 2. Création d'un projet Ionic avec React
Pour créer un nouveau projet Ionic avec React, exécute la commande suivante :

```sh
ionic start myApp blank --type=react
```

Choisis le template **blank** ou un autre selon tes besoins.

---

## 📂 Structure du projet
Un projet Ionic avec React contient généralement les fichiers et dossiers suivants :

```
myApp/
│── node_modules/          # Dépendances du projet
│── public/                # Fichiers statiques
│── src/
│   ├── components/        # Composants réutilisables
│   ├── pages/             # Pages principales
│   ├── App.tsx            # Composant principal
│   ├── main.tsx           # Point d'entrée de l'application
│── package.json           # Fichier de configuration des dépendances
│── ionic.config.json      # Configuration d'Ionic
│── capacitor.config.ts    # Configuration de Capacitor (optionnel)
```

---

## 📌 Commandes utiles

### 📦 Exécuter le projet en mode développement
```sh
ionic serve
```

### 📱 Ajouter une plateforme mobile (iOS/Android)
```sh
ionic capacitor add android
ionic capacitor add ios
```

### 🔄 Construire et synchroniser les fichiers avec Capacitor
```sh
ionic build
ionic capacitor sync
```

### 🧪 Exécuter sur un simulateur ou un appareil
```sh
ionic capacitor run android
ionic capacitor run ios
```

---

## 📚 Ressources utiles
- 📖 [Documentation officielle d'Ionic](https://ionicframework.com/docs/)
- 🎥 [Tutoriel vidéo sur Ionic avec React](https://www.youtube.com/results?search_query=ionic+react+tutorial)
- 💬 [Forum de la communauté Ionic](https://forum.ionicframework.com/)

Bon apprentissage ! 🚀
