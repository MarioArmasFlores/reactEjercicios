import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';



const Fecha = () => {

  const [dias, mostrarDias] = useState(''); //Para cambiar y mostrar los dias en el html.
  const myRef = useRef(); // para recuperar el valor en el input y poder invocarlos mas adelante.

  var fechaActual = new Date(); //calcula internamiente dle dia actual

  const currentMonth_TS = fechaActual.getMonth() + 1; //los meses empiezan a partir del 0, siendo diciembre el mes 11, por eso aumento 1 posicion adelante para que pueda mostrarme el mes correcto
  const currentDate_TS = fechaActual.getDate()
  let fechaActual_TS = fechaActual.getFullYear() + "/" + currentMonth_TS + "/" + currentDate_TS //organizo los dias el mes y el año en una sola variable.

  var missingDays; // dos variables para que existan fuera de la funcion del boton, esto fue necesario para evitar errore.s

  var dateTarget;




  const calcular = () => { //funcion que calcula los dias faltantes
 

    dateTarget = new Date(myRef.current.value) //utilizando el hook useRef, pude tomar el valor del input date para posteriormente transformarla en una fecha de js basada en milisegundos

    let difference = dateTarget - fechaActual; //diferencia en milisegundos entre ambas fechas.

    missingDays = Math.floor(1 + difference / (1000 * 60 * 60 * 24)); //se hace un pequeño redondeo para obtener los dias 1000= 1s, x 60s x 60 => 60min x 24 => 24h === 1 dia. Se le suma porque dias empiezan desde el 0 igualmente

    mostrarDias(missingDays) // se uso hook useState para poder mostrar la cantidad de dias restantes,

    console.log(missingDays) ///dos console.log() adicionales para revisar el codigo en consola.
    console.log(myRef.current.value)


  }

  return (
    <div>
      <h2>Calcular dias faltantes</h2>
      <p>Ingrese la fecha objetivo</p> <input type="date" ref={myRef} />
      <p>fecha actual es... {fechaActual_TS}</p>
      <h1>Dias faltantes: {dias}</h1>

      <button type='button' onClick={calcular}>
        Calcular
      </button>


    </div>
  )
}
export default Fecha;