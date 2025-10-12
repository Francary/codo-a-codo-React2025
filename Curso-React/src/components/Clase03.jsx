import { Clase } from "./Bienvenida.jsx"
import { Clase03EquipoTalentoLap} from "./Clase03EquipoTalentoLap.jsx"
import { Clase03Proyectos} from "./Clase03TarjetaProyecto.jsx"
import {Clase03GaleriaIntereses} from "./Clase03GaleriaIntereses.jsx"

const Clase03 = () => {
    return (
        <>
            <Clase clase='03' />
            <Clase03EquipoTalentoLap/>
            <Clase03Proyectos />
            <Clase03GaleriaIntereses />

        </>
    )
}

export {
    Clase03
}