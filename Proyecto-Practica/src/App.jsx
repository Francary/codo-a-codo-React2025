import { Footer } from "./components/Footer.jsx"
import { Gallery } from "./components/Gallery.jsx"
import { Header } from "./components/Header.jsx"
import { Main } from "./components/Main.jsx"
import { Nav } from "./components/Nav.jsx"

const  App = () => {


  return (
    <>
      <Header/>
      <Nav/>
      <Main/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export {
  App
}
