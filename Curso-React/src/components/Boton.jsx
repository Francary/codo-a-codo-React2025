const Boton = () => {
      const handleClick = () =>{
        alert('Componente Boton Clikeado')
    }
    return (
        <button onClick={handleClick}>Click me </button>
    )
}

const BotonPersonalizado = ({texto ,color}) => {
    const estilo = { backgroundColor: color, color:'white', padding:'10px', border:'none'}
    

    return (
        <button style={estilo}>{texto}</button>
    )
}


export {
    Boton,
    BotonPersonalizado
}