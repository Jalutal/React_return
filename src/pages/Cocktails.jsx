import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Cocktails = () => {

    const [cocktails, setCocktails] = useState(null);

    useEffect(() => {
        (async () => {
    
            const cocktailsAll = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
            const cocktailsAllJson = await cocktailsAll.json();
            setCocktails(cocktailsAllJson.drinks)
            }) ();
    }, []);
    
        return(
            <>
            <Header />
            <p>Liste des Cocktails :</p>
            <div>
                {cocktails ? 
                <>
                {cocktails.map((cocktail) => {
                    return (
                        <article>
                            <h2>{cocktail.strDrink}</h2>
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                            <p>Catégorie : {cocktail.strCategory}</p>
                            <Link to={`/cocktails/detail/${cocktail.idDrink}`}>Voir le détail</Link>
                        </article>
                    )

                })}
                </>
                : 
                <p>En cours de chargement</p>}
            </div>

            
            <Footer />
            </>
        )

}


export default Cocktails;