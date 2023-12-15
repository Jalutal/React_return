import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const CocktailDetail = () => {

    const {id} = useParams();

    const [cocktail, setCocktails] = useState(null)

    useEffect(() => {
        (async () => {    
            const cocktailsAll = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id);
            const cocktailsAllJson = await cocktailsAll.json();
            setCocktails(cocktailsAllJson.drinks)
            }) ();
    }, []);   

        return(
            <>
            <Header />
            <div>
                {cocktail ? 
                <>
                {cocktail.map((cocktail) => {
                    return (
                        <article>
                            <h2>{cocktail.strDrink}</h2>
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                            <p>Catégorie : {cocktail.strCategory}</p>
                            <p>Instructions : {cocktail.strInstructions}</p>
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


export default CocktailDetail;