import React from 'react'
import { useRef, useState } from 'react'

function Ejercicio9() {

    let inputRef = useRef(null) //hook useRef para el Input
    const [name, setName] = useState([]) //hook useState para colocar las coincidencias


    const arrayUsers = [
        { nombre: 'Bruce'},
        { nombre: 'Edward'},
        { nombre: 'Harvey'},
        { nombre: 'Bane' },
        { nombre: 'Jason' },
        { nombre: 'Bruce' },
        { nombre: 'Clark' },
        { nombre: 'Diana' },
        { nombre: 'Barry' },
        { nombre: 'Arthur'},
        { nombre: 'Oliver'},
        { nombre: 'Hal' },
        { nombre: 'Victor'},
        { nombre: 'Billy'},
        { nombre: 'Selina'}]

    const buscar = () => {

        const inputValue = (inputRef.current.value).toUpperCase();
        var inputValue_TS = inputValue.charAt(0);

        const coincidenciaEncontrada = arrayUsers.filter((user) => {
            const nombreUsuario = user.nombre;
            const inicialNombre = nombreUsuario.charAt(0).toUpperCase();

            return inicialNombre === inputValue_TS;
        })



        setName(coincidenciaEncontrada.map((user) => user.nombre))




    }



    return (
        <div>

            <input type="text" ref={inputRef} />
            <button type='button' onClick={buscar}> Buscar </button>

            <div>
                Resultados:
                {name.map((nombre, index) => (
                    <p key={index}>{nombre}</p>
                ))}
            </div>


        </div>
    )
}

export default Ejercicio9


