const CardProductos = ({datosProductos , accion,textoBoton }) =>{
    const {id , nombre, precio, categoria , imagen} =datosProductos
 
    return (
        <div style={{ backgroundColor:'#333', borderRadius:'15px', padding: '5px'}}> 
            <h3>{nombre}</h3>
            <p> Precio : {precio}</p>
            <p> Categoria: {categoria}  </p>
            {/* <img src={imagen} alt="" /> */}
            <button onClick={() =>accion(datosProductos)}>{textoBoton}</button>
        </div>
    )
}

export {
    CardProductos
}