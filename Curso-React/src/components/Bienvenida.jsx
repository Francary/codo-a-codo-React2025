
const Bienvenida = () => {
    return <h1>Bienvenidos al Curso de React</h1>
}

const Clase = ({clase}) => {
    return <h2> Clase {clase} del Curso de React</h2>
}

const Mensajes = ({texto})=>{
    return <h3>{texto}</h3>
}

export {
    Bienvenida,
    Clase,
    Mensajes

}