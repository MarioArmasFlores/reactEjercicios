import React from 'react'
import { Link } from "react-router-dom"


function Inicio() {
  return (
    <div>
      <Link to="/" > Inicio </Link>
      <Link to="/Ejercicio6" > Ejercicio 6 </Link>
      <Link to="/Ejercicio7" > Ejercicio 7 </Link>
      <Link to="/Ejercicio8" > Ejercicio 8 </Link>
      <Link to="/Ejercicio9" > Ejercicio 9 </Link>
      <Link to="/Ejercicio10" > Ejercicio 10 </Link>
    </div>
  )
}

export default Inicio;