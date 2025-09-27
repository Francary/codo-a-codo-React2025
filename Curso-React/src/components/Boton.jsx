const Boton = () => {

    const handleClick = () =>{
        alert('Componente Boton Clikeado')
    }
    return (
        <button onClick={handleClick}>Click me </button>
    )
}

export {
    Boton
}