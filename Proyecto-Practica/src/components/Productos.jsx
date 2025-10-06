import { useState } from "react"
import { CardProductos } from "./CardProductos.jsx"
import { Carrito } from "./Carrito.jsx"


   const listaProducto = [
{
    id: 1,
    nombre: "Teclado mecánico RGB",
    precio: 85,
    categoria: "Periféricos",
    imagen: "https://cdn.example.com/teclado-rgb.jpg"
  },
  {
    id: 2,
    nombre: "Mouse gamer inalámbrico",
    precio: 60,
    categoria: "Periféricos",
    imagen: "https://cdn.example.com/mouse-gamer.jpg"
  },
  {
    id: 3,
    nombre: "Auriculares con micrófono",
    precio: 70,
    categoria: "Audio",
    imagen: "https://cdn.example.com/auriculares-gamer.jpg"
  },
  {
    id: 4,
    nombre: "Monitor curvo 27''",
    precio: 300,
    categoria: "Monitores",
    imagen: "https://cdn.example.com/monitor-curvo.jpg"
  },
  {
    id: 5,
    nombre: "Silla gamer ergonómica",
    precio: 250,
    categoria: "Muebles",
    imagen: "https://cdn.example.com/silla-gamer.jpg"
  },
  {
    id: 6,
    nombre: "Alfombrilla RGB",
    precio: 35,
    categoria: "Accesorios",
    imagen: "https://cdn.example.com/alfombrilla-rgb.jpg"
  },
  {
    id: 7,
    nombre: "Control para PC y consola",
    precio: 90,
    categoria: "Controles",
    imagen: "https://cdn.example.com/control-pc.jpg"
  },
  {
    id: 8,
    nombre: "Micrófono profesional USB",
    precio: 120,
    categoria: "Audio",
    imagen: "https://cdn.example.com/microfono-usb.jpg"
  },
  {
    id: 9,
    nombre: "Webcam Full HD",
    precio: 80,
    categoria: "Video",
    imagen: "https://cdn.example.com/webcam-hd.jpg"
  },
  {
    id: 10,
    nombre: "Placa de video RTX 4070",
    precio: 950,
    categoria: "Hardware",
    imagen: "https://cdn.example.com/rtx4070.jpg"
  },


   ]

const Productos = () => {

    const[carrito , setCarrito] =useState([])

    const addProducto = (producto) => {
        setCarrito([... carrito , producto])
             
    }

const deleteProducto = (index) => {
  setCarrito((prev) => prev.filter((_, i) => i !== index));
}

    const vaciarCarrito = () =>{
        setCarrito([])
    }
    

    return(
        <>
        <div style={{display:'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: "10px"}}> 
        {listaProducto.map((producto )=>(
            <CardProductos key={producto.id} datosProductos={producto} accion={addProducto} textoBoton='Comprar'/>
        ))}

       
        </div >
        {/* <h2>Carrito de Productos:</h2>
        <button onClick={()=> vaciarCarrito()}>Vaciar</button>    
         <div style={{display:'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: "10px"}}> 
           {carrito.map((producto, index)=>(
                <CardProductos key={index} datosProductos={producto} accion={()=>deleteProducto(index)} textoBoton='Eliminar'/>
            ))}
        </div > */}

            <Carrito
        carrito={carrito}
        deleteProducto={deleteProducto}
        vaciarCarrito={vaciarCarrito}
      />
        </>
    )
    

}

export{
    Productos
}