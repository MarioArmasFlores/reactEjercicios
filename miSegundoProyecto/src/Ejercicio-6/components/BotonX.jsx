import React from 'react'
import { useState } from 'react'

export const BotonX = () => {

  const [normalState, setState] = useState(true);
    const botonAccion = () => {
      setState(!normalState);

    }

  return (
    <div>
        <h1>
            Boton encendido. {normalState}
        </h1>
        <p>
          El valor de useState: {normalState ? 'true' : 'false'}
        </p>
        <button type='button' onClick={ botonAccion }>
          Lucky
        </button>
    </div>
  )
}
