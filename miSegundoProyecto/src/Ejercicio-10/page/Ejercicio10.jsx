import React from 'react'
import Carousel from '../components/carousel'
import imagenes from '../../assets/imagenes';




function Ejercicio10() {

    const arrayImgs = [imagenes[0], imagenes[1], imagenes[2]];




   




    return (
        <div>
            <Carousel imagenes = {arrayImgs}/>


            
        </div>
    )
}

export default Ejercicio10