Les créatures que vous voyez sur votre écran sont des [boids](https://fr.wikipedia.org/wiki/Boids).

Tout seuls, ils ne sont pas très intéligents.

Mais ensemble, ils explorent leur environnement d’une manière très intéréssante: comme un banc de poisson ou une nuée d’oiseaux.

<br>

### Fonctionnement de ma simulation

Les boids sont très bètes: il ne savent faire que 3 choses différentes:

- zig-zager sur un écran
- reculer quand il fonce dans un autre individu de son espèce
- regarder autour de lui pour aller à peu près dans la même direction que les indvididus les plus proches

Les boids ne prennent aucune initiative: ils ne font qu’appliquer ces règles toute la journée.

#### paramètres

La vie des boids de ma simulation est régie par 2 paramètres:
- leur amitié: la vitesse à laquelle ils s’alignent avec leurs copains
- leur intimité: le rayon de la zone dans laquelle ils veulent être seuls.

Vous pouvez influer sur ces deux paramèters en bougeant votre curseur sur l’écran.

    de gauche à droite: leur amitié
    de haut en bas: leur intimité


On peut bien sur ajouter plus de paramètres pour faire des simulations plus jolies, comme sur ce site:
https://eater.net/boids


<br>


### Continuer d’explorer

Une super vidéo qui explique comment simuler la foule (au cinéma, mais pas que)

[![](https://img.youtube.com/vi/w-Oy4TYDnoQ/0.jpg)](https://www.youtube.com/watch?v=w-Oy4TYDnoQ)