import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Bienvenida} from './components/Bienvenida.jsx'
import { Clase01 } from './components/Clase01.jsx'
import { Clase02 } from './components/Clase02.jsx'
import { Clase03 } from './components/Clase03.jsx'
import { Clase04 } from './components/Clase04.jsx'
import { Clase05 } from './components/Clase05.jsx'
import { Clase06 } from './components/Clase06.jsx'
import { IndiceClases } from './components/IndiceClases.jsx'
const App = () => {
  

  return (
    <>
  <Bienvenida clase='01'/>
  <IndiceClases/>
  <Routes>
      <Route path={'/clase01'} element={<Clase01/>}/>
      <Route path={'/clase02'} element={<Clase02/>}/>
      <Route path={'/clase03'} element={<Clase03/>}/>
      <Route path={'/clase04'} element={<Clase04/>}/>
      <Route path={'/clase04'} element={<Clase04/>}/>
      <Route path={'/clase05'} element={<Clase05/>}/>
      <Route path={'/clase06'} element={<Clase06/>}/>
  </Routes>


  
    </>
  )
}

export {

  App
} 
