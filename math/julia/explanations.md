Cette page montre l’ensemble de Mandelbrot à gauche, et trace des ensembles de Julia à droite

# Julia
Un [ensemble de Julia](https://fr.wikipedia.org/wiki/Ensemble_de_Julia) est une construction mathématique assez simple, mais qui cache une complexité sans fin.

Le seul problème c’est que pour le construire, il faut se servir des [nombres complexes](https://fr.wikipedia.org/wiki/Nombre_complexe) 😕

Ce sont des nombres un peu étranges, avec une partie réelle et une partie imaginaire. La partie imaginaire est créée à partir de *i*, qui est la racine de -1<br>

Ces nombres peuvent paraitre bizzare, mais comme tous les nombres, ont peut les additioner, les multiplier …

Pour construire un ensemble de Julia, c’est très simple:
choisissez d’abord un nombre complexe C.

Ensuite, regardez le programme suivant :

```
  On part d’un nombre complexe.

- multipliez ce nombre par lui même puis ajoutez C
- multipliez le résultat par lui même puis ajoutez C
- multipliez le résultat par lui même puis ajoutez C
...

Répétez ce petit calcul en partant à chaque fois du résultat obtenu,
jusqu’à obtenir un nombre très grand. Si vous n’arrivez jamais
à un nombre très grand, notez ce nombre sur un carnet.

```

Éffectuez ce programme avec pleins de nombres différents (avec tous les nombres en fait).<br> 
Tous les nombres notés sur votre carnet, c’est ça l’ensemble de julia. Et on peut afficher cet ensemble de nombres sur un écran, ce que vous voyez sur cette page (à droite).

**Note**: le résultat dépend du nombre C choisi.<br>
Il n’y a donc pas un ensemble de Julia, mais une infinité !

Par exemple, si vous aviez choisi C = *0,3 + 0,5 i*, vous auriez obtenu ceci:

![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Julia_%28Fractal%29.png/154px-Julia_%28Fractal%29.png)

# Mandelbrot

La construction de [l’ensemble de Mandelbrot](https://fr.wikipedia.org/wiki/Ensemble_de_Mandelbrot) est assez similaire.

La différence, c’est qu’il ne faut pas choisir de nombre au départ: il y a un seul ensemble de Mandelbrot.

Et pourtant, il est surement plus mystérieux et intéréssant que tous les ensembles de julia réunis (et avouez, il est pas tellement stylé ?)

Un point intéréssant est que Mandelbrot est une carte des ensembles de Julia:<br>
cliquez sur une partie blanche de l’ensemble de Mandelbrot (à gauche). Vous devriez obtenir à gauche un ensemble de julia en un seul morceau: (on dit un ensemble connexe).<br>
Maintenant, si vous cliquez sur une partie à l’extérieur de Mandelbrot, vous obtiendrez un ensemble de Julia découpé en plein de parties (une infinité en fait): ce qu’on appelle une poussière de Cantor.


### Explorer Mandelbrot:
voici un site dans lequel vous pouvez explorer sans fin Mandelbrot pour en découvrir les merveilles:

[http://mandel.gart.nz/](http://mandel.gart.nz)


## Pour aller plus loin

Vidéo qui parle des mathématiques (et des mathématiciens) derrière Mandelbrot et Julia

[![](https://img.youtube.com/vi/Y4ICbYtBGzA/0.jpg)](https://www.youtube.com/watch?v=Y4ICbYtBGzA)
