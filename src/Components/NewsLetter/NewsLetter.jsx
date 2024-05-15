import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Obtenga Ofertas Exclusivas en su Correo</h1>
            <p>Suscribase a Nuestro Boletín y Mantengase Actualizado</p>
            <div>
                <input type="email" placeholder='Su Identificador de Email'/>
                <button>Suscribir</button>
            </div>
        </div>
    )
}

export default NewsLetter