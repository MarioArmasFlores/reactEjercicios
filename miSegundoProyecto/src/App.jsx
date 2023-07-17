import React from "react"
import { Route, Routes } from 'react-router-dom'
import Inicio from './home/Inicio'
import Ejercicio6 from "./Ejercicio-6/page/Ejercicio6"
import Ejercicio7 from "./Ejercicio-7/page/Ejercicio7"
import Ejercicio8 from "./Ejercicio-8/page/Ejercicio8"
import Ejercicio9 from "./Ejercicio-9/page/Ejercicio9"
import Ejercicio10 from "./Ejercicio-10/page/Ejercicio10"



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Ejercicio6" element={<Ejercicio6 />} />
        <Route path="/Ejercicio7" element={<Ejercicio7 />} />
        <Route path="/Ejercicio8" element={<Ejercicio8 />} />
        <Route path="/Ejercicio9" element={<Ejercicio9 />} />
        <Route path="/Ejercicio10" element={<Ejercicio10 />} />
      </Routes>


    </>
  )
}

export default App;
