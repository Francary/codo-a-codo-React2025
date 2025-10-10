import './App.css'
import { Bienvenida, Clase, Mensajes } from './components/Bienvenida.jsx'
import { Boton, BotonPersonalizado } from './components/Boton.jsx'
import { Clase04Contador } from './components/Clase04Contador.jsx'
import { Clase04Formulario } from './components/Clase04Formulario.jsx'
import { Clase05Clicker } from './components/Clase05Clicker.jsx'
import { Clase05Productos } from './components/Clase05Productos.jsx'
import { EquipoTalentoLap } from './components/EquipoTalentoLap.jsx'
import { Estudiantes } from './components/Estudiantes.jsx'
import { GaleriaIntereses } from './components/GaleriaIntereses.jsx'
import { ListaProductos } from './components/Productos.jsx'
import { Tarjeta } from './components/Tarjeta.jsx'
import { Proyectos } from './components/TarjetaProyecto.jsx'
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
  <EquipoTalentoLap/>
  <Proyectos/>
  <GaleriaIntereses/>

  <Clase clase='04'/>
  <Clase04Contador/>
  <Clase04Formulario/>

  <Clase clase='05'/>
  <Clase05Clicker/>
  <Clase05Productos/>


    </>
  )
}

export {

  App
} 
