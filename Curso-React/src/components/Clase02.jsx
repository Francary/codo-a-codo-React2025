import { Clase , Mensajes } from "./Bienvenida.jsx"
import { BotonPersonalizado  } from "./Boton.jsx"
import { Clase02Estudiantes } from "./Clase02Estudiantes.jsx"
import { Clase02ListaProductos } from "./Clase02ListaProductos.jsx"
import { Clase02Tarjeta } from "./Clase02Tarjeta.jsx"


const Clase02 = () => {
return(
    <>
        <Clase clase='02'/>
        <BotonPersonalizado texto='Aceptar' color='green'/>
        <BotonPersonalizado texto='Cancelar' color='red'/>
        <Clase02Estudiantes/>
        <Mensajes texto='Ejercicios Clase 02'/>
        <Clase02ListaProductos/>
        <Clase02Tarjeta 
        titulo='Oferta Especial'
        descripcion='20% de descuento en efectivo'
        textoBoton='Reclamar Oferta'
        onClickBoton={() => alert('Oferta Aplicada!')}
        />
    </>
)
}

export {
    Clase02
}