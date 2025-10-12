import { Clase03TarjetaEquipo } from "./Clase03TarjetaEquipo.jsx";

 const listaEquipo = [
  { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://cdn.pixabay.com/photo/2021/03/03/08/56/woman-6064819_640.jpg' },
  { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://cdn.pixabay.com/photo/2024/09/05/20/13/ai-generated-9026023_1280.jpg' },
  { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://cdn.pixabay.com/photo/2024/09/16/09/19/ai-generated-9050849_640.jpg' },
  { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://cdn.pixabay.com/photo/2021/07/25/02/12/goddess-6490708_640.jpg' },
];


const Clase03EquipoTalentoLap = () => {
    return(
        <>
       

        {listaEquipo.map((equipo , index) =>(
            < Clase03TarjetaEquipo key={index} datosEquipo={equipo}/> 
        ))}
        
        
        </>

    )
}


export {
    Clase03EquipoTalentoLap
}