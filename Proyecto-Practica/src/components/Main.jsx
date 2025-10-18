import "../styles/index.css"
import { Route, Routes } from "react-router-dom";
import { Productos } from "./Productos.jsx";

import { Contacto } from "./Contacto.jsx";
import { About } from "./About.jsx";
import { Carrito } from "./Carrito.jsx";
import { Detalle } from "./Detalle.jsx";

const Main = ( ) => {  
    return (  
        <main>
            <Routes>
                <Route path={"/"} element={ <Productos/> }/>
                <Route path={"/about"} element={ <About/> }/>
                <Route path={"/contacto"} element={ <Contacto/> }/>
                <Route path={"/carrito"} element={ <Carrito/> }/>
                <Route path={"/producto/:id"} element={ <Detalle/> }/>
            </Routes>  
            
            
        </main>  
    );  
}  
export 
{

    Main
} 