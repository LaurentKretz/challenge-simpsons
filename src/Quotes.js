// src/Quotes.js (est un composant parent)
import React from "react";
import Quote from "./Quote" //appeler le composant enfant Quote afin de mettre en page le contenu de mon tableau quotesTableau

const quotesTableau = [
    {
      quote:
        "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
      character: "Homer Simpson",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
    },
    {
      quote: "Nothing you say can upset us. We're the MTV generation.",
      character: "Bart Simpson",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
    },
    {
      quote: "That's where I saw the leprechaun...He told me to burn things.",
      character: "Ralph Wiggum",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
    },
    {
      quote:
        "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.",
      character: "Principal Skinner",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460"
    }
  ];
  //on utilise la fonction element en parametre de la méthode map, element passe dans chaque case de notre tableau et prends la valeur de la case
  //en écrivant element.quote on accède à la propriété quote de la variable element qui est égale à un objet
  //avec la méthode map, on passe dans chaque case de notre tableau et donc dans chaque objet
  //index c'est un paramètre que l'on peut mettre spécifiquement à la méthode map, içi il nous permet d'attribuer un index à chaque element/objet
  //on met le tout dans la balise Quote qu'on a appelé en haut de page afin que la mise en page soit respectée et que le lien se fasse !

  const Quotes = () => (
    <div>
      {quotesTableau.map((element, index) => (
        <Quote key={index} quote={element.quote} image={element.image} character={element.character} />)
        // "<Quote {...element} />"" raccourci qui prends en compte tous les paramètres de l'objet du tableau quotesTableau        
      )}
    </div>
  );
  
  export default Quotes;

  