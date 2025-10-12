import { Clase } from "./Bienvenida.jsx"
import { Clase05Clicker} from "./Clase05Clicker.jsx"
import {Clase05Productos} from "./Clase05Productos.jsx"

const Clase05 = () => {
    return (
        <>
            <Clase clase='05' />
            <Clase05Clicker />
            <Clase05Productos />
        </>
    )
}

export {
    Clase05
}