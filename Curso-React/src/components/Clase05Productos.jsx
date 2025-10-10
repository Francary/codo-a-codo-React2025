import { useState, useEffect} from "react";

const URL = 'https://68e90893f2707e6128cd3f7b.mockapi.io/productos'
const Clase05Productos = ( ) => {

    const [producto , setProducto] = useState([])
    const [cargando , setCargando] = useState(true)
    const [ error , setError] = useState(null)

    useEffect(() => {
        fetch(URL)
        .then( respuesta => respuesta.json() )
        .then(datos => {
            setProducto(datos);
            setCargando(false)
            console.log(datos);
            
        })
        .catch(error => {
            setError('     Error a Cargar Productos')
            setCargando(false)
        });
       
    },[])

    if(cargando)
        return<p>Estamos Cargando los Productos</p>

    if(error)
        return <p>{error}</p>

    return(
        <>
        <h2>Productos</h2>
        <ul>
            {producto.map(producto=>
                <li key={producto.id}>
                    Producto: {producto.nombre}
                    Prcio: $ {producto.precio}

                </li>
            )}
        </ul>
        </>
    )

}

export {
    Clase05Productos
}