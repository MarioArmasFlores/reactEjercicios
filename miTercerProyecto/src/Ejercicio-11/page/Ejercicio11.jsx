import React, { useState } from 'react';
import Users from '../components/Users';

function Ejercicio11() {


  
   
  const arregloUsuarios = [
    { nombre: "John Doe", id: "1", email: "Jd.007@gmail.com",  ocupacion: "Desarrollador", edad: "30" },
    { nombre: "Jane Smith", id: "2", email: "JaneSmith@gmai.com",  ocupacion: "Diseñadora", edad: "25" },
    { nombre: "Michael Johnson", id: "3", email: "MichaelJohnson@gmail.com",  ocupacion: "Gerente de Proyecto", edad: "35" },
    { nombre: "Emily Williams", id: "4", email: "Emmy@gmail.com",  ocupacion: "Analista de Datos", edad: "28" },
    { nombre: "Daniel Brown", id: "5", email: "DanBrown@gmail.com",  ocupacion: "QA Tester", edad: "32" }
  ];







  return (
    <div>


      <Users usuarios={arregloUsuarios}  />




    </div>
  )
}

export default Ejercicio11;
