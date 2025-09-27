const ListaProductos = () =>{
    const productos = ['Manzanas', 'Peras','Naranjas']
    return(
        <>
        <ol>
            {productos.map(producto =>(
                <li key={producto}> {producto}</li>
            ))}
        </ol>
        </>
    )
}

export{
    ListaProductos
}