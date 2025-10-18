import "../styles/nav.css"
import { Link } from "react-router-dom";

const Nav =( ) => {  
    return (  
        <nav className="nav">  
            <ul >  
                <Link className="link" to={'/'}>Inicio</Link>  
                <Link className="link" to={'/about'}>Acerca de</Link>  
                <Link className="link" to={'/contacto'}>Contacto</Link>  
                <Link className="link" to={'/'}><i className="fa-solid fa-cart-shopping"></i></Link>  
            </ul>  
        </nav>  
    );  
}  


export 
 {
    Nav
}; 