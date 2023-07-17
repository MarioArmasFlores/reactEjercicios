import Inicio from './home/Inicio'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Ejercicio11 from './Ejercicio-11/page/Ejercicio11'
import Ejercicio12 from './Ejercicio-12/page/Ejercicio12'
import Ejercicio13 from './Ejercicio-13/page/Ejercicio13'
import Ejercicio14 from './Ejercicio-14/page/Ejercicio14'
import Ejercicio15 from './Ejercicio-15/page/Ejercicio15'

function App() {

  

  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Ejercicio11" element={<Ejercicio11 />} />
        <Route path="/Ejercicio12" element={<Ejercicio12 />} />
        <Route path="/Ejercicio13" element={<Ejercicio13 />} />
        <Route path="/Ejercicio14" element={<Ejercicio14 />} />
        <Route path="/Ejercicio15" element={<Ejercicio15 />} />
      </Routes>

    </>
  )
}

export default App
