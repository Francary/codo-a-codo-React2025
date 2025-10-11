import { useState , useEffect } from "react"
import { CardProductos } from "./CardProductos.jsx"
import { Carrito } from "./Carrito.jsx"

const URL = 'https://68e90893f2707e6128cd3f7b.mockapi.io/productos'
const Productos = () => {
  const [producto , setProducto] = useState([])
  const [carrito, setCarrito] = useState([])
  const [cargando , setCargando] = useState(true)
  const [ error , setError] = useState(null)

  useEffect(() => {
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

  const addProducto = (producto) => {
    setCarrito([...carrito, producto])

  }

  const deleteProducto = (index) => {
    setCarrito((prev) => prev.filter((_, i) => i !== index));
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: "10px" }}>
        {producto.map((producto) => (
          <CardProductos key={producto.id} datosProductos={producto} accion={addProducto} textoBoton='Comprar' />
        ))}
      </div >

      <Carrito
        carrito={carrito}
        deleteProducto={deleteProducto}
        vaciarCarrito={vaciarCarrito}
      />
    </>
  )
}

export {
  Productos
}