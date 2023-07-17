import React from 'react'
import ContadorAuto from '../components/ContadorAuto'
import { useState, useEffect } from 'react'

function Ejercicio8() {


    const [counter, setCounter] = useState(0);
    const [repetir, setRepetir] = useState(false);


    const aumentador = () => {
        setCounter(counter + 1);
    }
   
    useEffect(() => {
        let tempo;

        if(repetir){
            tempo = setInterval(aumentador, 1000)
        }

        return () => {
            clearTimeout(tempo)
        }
    }, [counter, repetir])

    
    return (
        <div>

            <h1>Contador Automatico. {counter}</h1>
            <button type='button' onClick={() => setRepetir(!repetir)} > iniciar/Parar </button>


        </div>
    )
}

export default Ejercicio8