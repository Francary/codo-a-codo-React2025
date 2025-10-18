import "../styles/card.css"
import { CardProductos } from "./CardProductos.jsx"

const Carrito = ({ carrito, deleteProducto, vaciarCarrito }) => {

    return (
        <>
            <h2>Carrito de Productos:</h2>
            <button onClick={() => vaciarCarrito()}>Vaciar</button>
            {carrito.length === 0 ?
                (
                    <p>El carrito está vacío</p>
                ) : (
                <>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p className="contador">{carrito.length}</p>
                    <div className="contenedorCard">
                        {carrito.map((producto, index) => (
                            <CardProductos key={index} datosProductos={producto} accion1={() => deleteProducto(index)} textoBoton1='Eliminar' textoBoton2='Detalles' />
                        ))}
                    </div >
                </>
                )}


        </>
    )
}

export {
    Carrito
}
