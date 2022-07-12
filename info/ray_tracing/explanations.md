3D, calculs et ray-casting
==========

Le monde 3D que vous pouvez explorer sur cette page utilise la méthode du ray-casting. 

Le [ray-casting](https://fr.wikipedia.org/wiki/Raycasting) est une méthode informatique pour créer des rendus 3D simples.

Le concept n’est pas forcémment facile à utiliser, et ce n’est pas le meilleur choix pour du rendu 3D dans un navigateur (j’y reviendrais).

<br>

Alors pourquoi avoir utilisé cette technique ?

- I. parce que j’avais envie 😄
- II. parce que le concept en soi est plus simple

En effet, le ray-casting est beaucoup plus facile à comprendre que d’autres techniques comme les matrices de projection.


### Approche classique des moteurs 3D

L’approche classique est de décomposer l’objet en pleins de triangles, et de regarder où chaque triangle doit aller sur l’écran pour ensuite le colorier.

![](https://static.techspot.com/articles-info/1888/images/2019-08-11-image-3-p_1100.webp)
(le rectangle bleu est l’écran sur lequel on veut afficher l’objet)

Pour effectuer cette transformation du triangle dans l’espace vers l’écran, on a besoin de ce genre d’outils mathématiques:

![](https://tse2.mm.bing.net/th?id=OIP.Y_Ucu0vydOiGrlMS-dBuCgHaB5&pid=Api)

Et après avoir trouvé sa position sur l’écran, il faut colorier toute la zone de l’écran correspondant, et faire varier la couleur en fonction de la couleur de l’objet, de l’orientation par rapport à la lumière …

C’est comme ça qu’est faite la 3D dans les jeux comme minecraft, mais pour un premier projet, je dois avouer que je cherchais plus simple.


<br>

### Approche du ray-casting


L’approche du ray-casting est beaucoup plus simple:

On va imaginer qu’un rayon de lumière part d’une source (l’œil de l’observateur), traverse l’écran, et on va regarder où ce rayon de lumière touche un mur/bloc/objet quelconque.

![](https://tse3.mm.bing.net/th?id=OIP.K6v1nr6uSoSpLH5c03XdBwAAAA&pid=Api)

Et en continuant de suivre la trajectoire de ce rayon lumineux après qu’il ai rebondi sur la surface, on peux ajouter l’éclairement, les reflets, la transparence … Cela devient du [ray-tracing](https://fr.wikipedia.org/wiki/Ray_tracing)

Le ray-tracing a été énormément utilisé dans les films d’animation. Par exemple, Disney utilise maintenant dans tous ces films [renderman](https://www.pixar.com/renderman), un outil 3D basé sur le ray-tracing.



La technique est donc très simple, mais elle est **couteuse en calculs**:
Il faut calculer la trajectoire de chaque rayon pour chaque pixel, en le faisant rebondir sur chaque objet avant qu’il touche la source de lumière.


Sur cette page, le rendu n’est pas trop lent car il suffit de regarder si le rayon traverse un plan (dans x, y et z) ce qui est assez facile. Pas de rebond, de source de lumière ou de triangles à considérer !

<br>

### Comparatif des 2 techniques

|ray-tracing | rendu 3D classique
|--|--|
simple à comprendre | beaucoup de maths, même pour un seul triangle 
couteux en calculs donc très lent | très rapide
rendus plus beaux que réels quand on attend assez longtemps | rendus limités (pas mieux que minecraft)
[beaucoup de recherche](https://www.youtube.com/watch?v=Popg7ej4AUU&list=PLujxSBD-JXgk1hb8lyu6sTYsLL39r_3bG&index=30), avec sans cesse de nouvelles techniques | beaucoup moins


<br>

Récemment, diverses techniques hybrides ont vu le jour, qui mélangent les deux approches. Elles sont principalement utilisées dans les [jeux vidéos](https://www.jeuxvideo.com/news/1183427/ray-tracing-qu-est-ce-que-c-est-et-comment-ca-marche.htm)

Il y a énormément de nouveautés dans ces domaines, avec par exemple les [gpu de l’entreprise Nvidia](https://developer.nvidia.com/rtx/raytracing) qui permettent de calculer ces 3D plus vraies que natures en temps réel !

---

## Pour aller plus loin
Un [article](https://www.techspot.com/article/1888-how-to-3d-rendering-rasterization-ray-tracing/) très complet pour comprendre la différence entre les deux techniques