import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
        <p>Je suis le header</p>
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/cocktails">Tous les Cocktails</Link></li>
            </ul>
        </nav>
        </>
    )
}


export default Header;