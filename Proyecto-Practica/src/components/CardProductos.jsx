import '/src/styles/card.css'
import { Link } from "react-router-dom"

const CardProductos = ({datosProductos , accion1, textoBoton1, textoBoton2 , accion2 }) =>{
    const {id , title, price, category , image , description} =datosProductos
 
    return (
        <div className='card'> 
            <h3>{title}</h3>
            <p> Precio : {price}</p>
            <p> Categoria: {category}  </p>
            <img src={image} alt="" />
            <div>

            <button onClick={() =>accion1(datosProductos)}>{textoBoton1}</button>
            <Link to={`/producto/${id}`}>
            <button onClick={() =>accion2(datosProductos)}>{textoBoton2}</button>
            </Link>
            </div>
        </div>
    )
}

export {
    CardProductos
}