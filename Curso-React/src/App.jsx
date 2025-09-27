import './App.css'
import { Bienvenida, Clase, Mensajes } from './components/Bienvenida.jsx'
import { Boton, BotonPersonalizado } from './components/Boton.jsx'
import { Estudiantes } from './components/Estudiantes.jsx'
import { ListaProductos } from './components/Productos.jsx'
import { Tarjeta } from './components/Tarjeta.jsx'
const App = () => {
  

  return (
    <>
  <Bienvenida clase='01'/>
  <Clase clase='01'/>
  <Boton/>
  <Clase clase='02'/>
  <BotonPersonalizado texto='Aceptar' color='green'/>
  <BotonPersonalizado texto='Cancelar' color='red'/>
  <Estudiantes/>
  <Mensajes texto='Ejercicios Clase 02'/>
  <ListaProductos/>
  <Tarjeta 
  titulo='Oferta Especial'
  descripcion='20% de descuento en efectivo'
  textoBoton='Reclamar Oferta'
  onClickBoton={() => alert('Oferta Aplicada!')}
  />
  <Clase clase='03'/>
    </>
  )
}

export {

  App
} 
