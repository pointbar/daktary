# Daktary

## Serveurs
Prod : http://www.multibao.org
Pré-prod : http://dev.multibao.org

Hébergement :
* [Github Pages](https://pages.github.com)
* mltb-dktr

## Technologies
Langages :
Accès : http://www.multibao.org/index-dev.html
* [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla)

Tests unitaires :
Accès : http://www.multibao.org/tests
* [Mocha](https://mochajs.org/)
* [Expect](https://github.com/Automattic/expect.js)

Minification et transpilation (build) :
Accès : http://www.multibao.org
* [Babel](http://babeljs.io) : Transpilation en ES5 et fusion des fichiers
* [UglifyJs](https://github.com/mishoo/UglifyJS) : Minification des fichiers JS
* [UglifyCss](https://github.com/fmarcia/UglifyCSS) : Minification des fichiers CSS

* [npm]() utilisé pour le build
```bash
$ npm install
$ npm run build
```

## Installer le site en local
```bash
$ git clone git@github.com:daktary-team/daktary.git .
$ cd daktary
```

## Serveur local
C'est optionnel, mais les exemples qui suivent sont testés sur un serveur local.

> https://github.com/indexzero/http-server

```bash
$ http-server -p 8000
```

## Pour lancer les tests
Dans un [Firefox](https://www.mozilla.org/fr/firefox/developer/) **récent** lancer :
http://127.0.0.1:8000/tests

## Pour minifier et transpiler
```bash
$ npm install
$ npm run build
```

## Credits
Thomas Wolff : Product Owner
Stéphane Langlois : Développement
Erik Gardin : Intégration
Aymeric Favre : Web Design
Xavier Caodic : Documentation
Louise Berrotte : Interviews, accompagnement contributeurs
Lilian Ricaud : Affinage Backlog
Claude Aubry : Affinage Backlog
Vincent Ferries : Code review
David Larlet : Code review
David Bruant : Code review
Vincent Agnano : Anywhere

## Suivi des tâches de développement web 

## A creuser

### À prévoir
* Classement par le titre
* Merge contribution et breadcrumb parent repo
* Version simplifiée pour les non métas
* Garder la recherche - searchList
* link # et /#
* Link absolute/relatif
* Cacher autres que .md
* Faire remonter les dossiers en premier
* Ressources : réponses not found => 404
* virer le lien sur le breadcrumb
* recherche en home
* Récupérer le nombre de dossiers et nombres de contributeurs
* vrai SLA
* Travis
* Classement des dossiers
* Notifications
* Meta-Data : Contribs - Repos - Folders
* Loading
* Infinite scroll
* Simplify tests writes merge on async

* Cacher les ressources
* Doc de développement
* Se passer de Prose.io

### Discussion intégration
* Regarder GitBook
* Affichage fiches : tooltip sur les outils ?
* Affichage fiches : lien pied de page en gras, pourquoi ?
* Affichage fiches : embed, abbr, cite, acronym impossible en markdown ?
* Affichage fiches : affichage des metas inutile, déjà utilisées autrement
* Affichage fiches : affichage des notes et utilisation de #user-content-note
* Affichage fiches : [exemple des balises HTML](http://dev.multibao.org/#newick/grill/blob/master/styleguide.md)
* Affichage recherche : boucle if pour afficher le bon message
* Affichage recherche : dynamiser nombre de résultat, recherche, repo
* Affichage recherche : afficher ou non moteur de recherche
* Affichage fiches : typo, justified text
* Responsive : mobile first ?
