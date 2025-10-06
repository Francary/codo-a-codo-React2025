import { CardProductos } from "./CardProductos.jsx"

const Carrito = ({ carrito, deleteProducto , vaciarCarrito }) => {

    return (
        <>
            <h2>Carrito de Productos:</h2>
            <button onClick={() => vaciarCarrito()}>Vaciar</button>
            {carrito.length === 0 ?  (
        <p>El carrito está vacío</p>
      ) :(

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: "10px" }}>
                {carrito.map((producto, index) => (
                    <CardProductos key={index} datosProductos={producto}  accion={() => deleteProducto(index)} textoBoton='Eliminar' />
                ))}
            </div >
      )}


        </>
    )
}

export {
    Carrito
}
