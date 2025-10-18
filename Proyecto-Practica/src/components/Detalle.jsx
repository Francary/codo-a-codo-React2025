import '/src/styles/card.css'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


const Detalle = () =>{
    const {id} = useParams()
    
    const [producto , setProducto] = useState([])
    const [carrito, setCarrito] = useState([])
    const [cargando , setCargando] = useState(true)
    const [ error , setError] = useState(null)
    
    useEffect(() => {
    const URL = `https://fakestoreapi.com/products/${id}`
    fetch(URL)
      .then(respuesta => respuesta.json())
      .then(datos => {
        setProducto(datos);
      })
      .catch(error => {
        setError('Error a Cargar Productos')
      })
      .finally(() => setCargando(false))
  }, [])

  if(cargando)
        return<p>Estamos Cargando los Productos</p>

    if(error)
        return <p>{error}</p>






    const { title, price, description, category , image ,rating } =producto
 
    return (
        <div className='card'> 
            <h3>{title}</h3>
            <p> Categoria: {category}  </p>
            <p> Descripcion: {description}  </p>
            <img src={image} alt="" />
            <p> Rating : {rating.rate}</p>
            <p> Precio : {price}</p>

            <div>

            <button onClick={() =>accion1(datos)}>Comprar</button>
            
            </div>
        </div>
    )
}

export {
    Detalle
}