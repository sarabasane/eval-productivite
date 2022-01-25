# Installation des paquets npm
```
npm install
```

# Démarrage de l'application

```
npm start
```

Application disponible en local sur le port 8070.

# Contenu évaluation

## 1 : Cloner le projet

Le projet devra être cloné sur votre machine locale à partir de l'URI suivante : 

SSH : 
```bash
git clone git@bitbucket.org:virtuoworks/eval-productivite.git
```
ou bien
HTTPS : 
```bash
git clone https://bitbucket.org/virtuoworks/eval-productivite.git
```

## 2 Créer une branche

Vous créerez une branche que vous appelerez "eval" et vous positionnerez dessus. 
Ce sera votre branche de travail pour l'évaluation. Vous la fusionnerez avec la branche "main" à la fin de l'évaluation.

## 3 Installation des dépendances

1.Installez les dépendances du projet.

## 4 Documenter le code

Vous utiliserez JSDoc, dont la documentation peut être consultée [ici](https://jsdoc.app/about-getting-started.html)

## 5 Linter le code

Vous utiliserez ESLint pour linter le code (ESLint est déjà installé dans le projet). La documentation est consultable [ici](https://eslint.org/docs/user-guide/getting-started)

## 6 Embellir le code

En utilisant Prettier, dont la documentation peut être trouvée [ici](https://prettier.io/docs/en/install.html), vous embellirez le code afin qu'il respecte les bonnes pratiques.

## 7 Renforcer le code

Dans le projet ont été intégrées deux failles de sécurité principales. A vous de les déceler et de les corriger...

## 8 Modulariser le code

Le code de l'application utilise deux fonctions principales permettant de récupérer des données depuis une API. Vous ferez de sorte de :

1. Séparer les deux fonctions dans deux fichiers JS distincts qui exporteront le code de chaque fonction (par un export par défaut ou un export nommé) ;
2. Créer un fichier main.js que vous placerez dans le dossier /public/js ;
3. Importer les deux fonctions dans le fichier main.js ;
4. Modifier le code du fichier index.html afin qu'il charge le script main.js.

## 9 Bundler le code




## 10 Tester le code

En utilisant Jest, vous créerez un test pour chacune des deux fonctions présentes dans le fichier /public/js/toTest.js.

Vous vérifierez bien que vos tests passent tous.

## 11 Fusionner les branches

Vous fusionnerez votre branche avec la branche main.

## 12 Créer un dépôt distant

Sur GitHub ou Bitbucket, à votre convenance, vous créerez un dépôt distant afin de pouvoir y envoyer le code de votre application.

## 13 Sauvegarder le code en ligne

Vous enverrez le code de votre branche main dans votre dépôt distant nouvellement créé.


# Après l'évaluation

Une fois l'évaluation terminée, vous enverrez le lien vers votre dépôt distant à l'adresse e-mail alexandre.masson@virtuoworks.com en précisant dans l'objet de l'e-mail les informations suivantes : [NOM] [prénom] [Promotion DIWJS]