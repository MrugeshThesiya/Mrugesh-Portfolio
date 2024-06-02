import { Outlet } from "react-router-dom";
import {Navbar,Footer} from "./components";

function App() {
  return (
      <div className="relative z-0 bg-primary">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
  )
}

export default App
