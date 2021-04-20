Le [**jeu de la vie**](https://fr.wikipedia.org/wiki/Jeu_de_la_vie) est l’automate cellulaire le plus connu.

Il a été inventé par [John Conway](https://fr.wikipedia.org/wiki/John_Horton_Conway), un mathématicien génial !

(On appel d’ailleurs le jeu de la vie `Conway’s Game of life` en anglais)

Un automate cellulaire est un type de simualiton extremement simple. C’est presque un jeu informatique.

Pour faire un automate cellulaire, il faut seulement:
- Une grille de cellules
- Des états à mettre dans cette grille
- Une règle qui va déterminer comment chaque cellule va évoluer en fonction de ses voisins.

**Note**: On considère en général les 8 voisins autour d’une cellule:

```
⬜⬜⬜⬜⬜
⬜⭕⭕⭕⬜   Les 8 voisins (en rouge)
⬜⭕⬛⭕⬜    de la cellule noire
⬜⭕⭕⭕⬜
⬜⬜⬜⬜⬜
```

Pour les automates cellulaires type *jeu de la vie*, ce qu’on appelle le nombre de voisins est simplement le nombre de cellules vivantes parmi les voisins.

```
⬜⬜⬜🟫🟫
⬜🟫🟫⬜⬜   La cellule bleue a 5 voisins
⬜🟫🟦🟫⬜  (en marron): parmi ses 8 voisins,
⬜⬜🟫⬜⬜       5 sont vivants
⬜⬜⬜⬜🟫
```


### La grille du jeu de la vie
> Une grille de carrés, soit morts soit vivant. Tout simplement

### Les règles du jeu de la vie:
- une cellule morte avec 3 voisins ⟶ une cellule nait
- une cellule vivante avec 2 ou 3 voisins ⟶ la cellule survit
- sinon ⟶ la cellule meurt (ou reste morte)

Et c’est tout ! 

Il suffit de répéter ces règles sur toutes les cellules, le tout pendant des milliers de générations.


---

L’intéret de cette page web est de pouvoir changer ces règles et voir ce qui se passe.

Et on se rend vite compte que les règles choisies par Conway est très simple, et pourtant crée des phénomènes passionants.

<br>

### Quelques règles intéréssantes

#### Notation: on note une règle B<b style="color: red">[naissance]</b>/S<b style="color: blue">[survie]</b> 
Exemple:  B<b style="color: red">3</b>/S<b style="color: blue">23</b> signifie que la cellule
- quand elle est morte, nait seulement avec <b style="color: red">3</b> voisins vivants (la lettre B est pour *"birth"*)
- quand elle est vivante, survie seulement avec <b style="color: blue">2</b> ou <b style="color: blue">3</b> voisins vivants (lettre S pour *"survive"*).

    B3/S23 est donc la règle originale du jeu de la vie.

---

| règle |
|---|
|**B**0/ **S**8|
|**B**23/ **S**0|
|**B**0/ **S**56|
|**B**2/ **S**0|
|**B**3/ **S**1235|
|**B**3/ **S**012345678|
|**B**3/ **S**45678|
|**B**25678/ **S**5678|

Essayez de tester la première règle. Cette règle s’appelle **B**0/ **S**8, c’est à dire qu’une cellule morte nait quand elle a 0 voisins vivants (quand elle est isolée), et une cellule vivante survit uniquement quand elle a 8 voisins.

Donc il faut cocher les carrés suivants:

![](./demo.png)

Ensuite, cliquez simplement sur "tester la règle"

---


## Pour aller plus loin:

Une vidéo qui présente le jeu de la vie:

[![](https://img.youtube.com/vi/S-W0NX97DB0/0.jpg)](https://www.youtube.com/watch?v=S-W0NX97DB0)