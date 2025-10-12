const Clase03TarjetaEquipo = ( {datosEquipo}) => {
    const {nombre , rol , imagen} = datosEquipo
    return(
        <>
        <h3>Nombre: {nombre}</h3>
        <p> Rol: {rol}</p>
        <img src={imagen} alt="" style={{width:'150px' ,height: '150px', borderRadius:'50%'}}/>
        </>
    )


}


export {

    Clase03TarjetaEquipo
}