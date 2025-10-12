const Clase02Estudiantes = () => {
    const estudiantes = ['Ana', 'Luis', ' Pedro', 'Maria']
    
    return (
        <>
        <h2>Lista de Estudiantes </h2>
        <ul>
            {estudiantes.map(estudiante =>(

            <li key={estudiante}> {estudiante}

            </li>
            ) )}
        </ul>
        </>
    )
}

export {
    Clase02Estudiantes
}