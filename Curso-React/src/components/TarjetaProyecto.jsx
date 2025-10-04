
const TarjetaProyecto = ({datosProyecto}) =>{
    const {titulo,descripcion, boton} = datosProyecto
     const handleClick = () =>{
        alert(`!Informacion completa del Proyecto ${titulo}`)
    }
    return (
        <div style={{backgroundColor:'#344e41', borderRadius:'25px', padding:'10px', marginBottom:'10px'}}> 

        <h3>Proyecto: {titulo}</h3>
        <p>Descipricon: {descripcion}</p>
        <button onClick={handleClick}>{boton}</button>
        
        </div>
        
    )
}

const proyectos =[
    {titulo:"Plataforma de Gestion", descripcion:"Una herramienta para optimizar la gestión de equipos",boton:"Ver info"},
    {titulo:"LandingPage", descripcion:"Pagina Web Basica",boton:"Ver info"},
    {titulo:"Shop", descripcion:"Tienda de venta Online",boton:"Ver info"},
]

const Proyectos = () => {
    return (
        <>
        {proyectos.map((proyecto, index) =>
        <TarjetaProyecto key={index} datosProyecto={proyecto}/>
        )}
        </>
    )
}


export {
   Proyectos
}