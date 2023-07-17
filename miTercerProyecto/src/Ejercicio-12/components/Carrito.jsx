import React from 'react'

const Carrito = ({productoAñadido, activarCarrito}) => {

  

  return (
    <div>
        <h1>Carrito de Compras</h1>
        <ul>
        {productoAñadido.map ((prod, index) => {
            return(
                    <li key={index}>
                        {prod.item}
                    </li>
            )
        })}
        </ul>
        
        
        
    </div>
  )
}

export default Carrito;