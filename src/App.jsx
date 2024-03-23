import { BrowserRouter } from "react-router-dom";

import { About, Experience,  Hero, Navbar, Tech, Works, Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-opacity-100 bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/> 
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
