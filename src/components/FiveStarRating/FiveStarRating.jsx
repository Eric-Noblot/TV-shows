// npm i react-bootstrap-icons@1.8.4

import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons"

export function FiveStarRating ({rating}) {

    const starList = []

    const starFillCount = Math.floor(rating) 
    //Math.floor permet de récuperer un nb entier arrondi au dessous, ici ca nous permet de récuprer la valeur de rating(ex 3.19), et de récupérer 3. C'est avec ce nombre qu'on sait combien de StarFill on doit mettre
    
    const hasStarHalf = rating - starFillCount >= 0.5
    // On mettra une étoile à moitié rempli seulement si la valeur après la virgule est superieure à 0.5. Pour cela on récupere le nb entier d'avant pour le soutraire au rating général afin de récuprer seuelement les décimales. hasStarHalf est donc une variable question qui renvoie un booleen
    
    const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0)
    //Pour l'étoile vide, on met 5(nb fixe d'étoile qu'on veut ici) - le nombre entier pour connaitre le nm d'etoiles vides à mettre. Ensuite fonction ternaire qui va permettre de savoir si il y a une étoile à moitié. Si c'est le cas on enleve une étoie vide, sinon on laisse comme ca

    for (let i = 1; i <= starFillCount; i++){
        starList.push(<StarFill key={"star-fill" + i } />)
    }

    if (hasStarHalf) {
        starList.push(<StarHalf key ={"star-half"} />)
    }

    for (let i = 1; i <= emptyStarCount; i++){
        starList.push(<StarEmpty key={"star-empty" + i } />)
    }

    return (
        <div>
            {starList}
        </div>
    )
}