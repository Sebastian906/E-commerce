import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Descripción</div>
                <div className="descriptionbox-nav-box fade">Reseñas (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    Un sitio web de comercio electrónico es una plataforma en línea que facilita la
                    compra y venta de productos y servicios a través de internet. Él
                    sirve como un mercado virtual donde las empresas y los individuos pueden
                    exhibir sus productos, interactuar con los clientes y realizar
                    transacciones sin necesidad de presencia física. Comercio electrónico
                    Los sitios web han ganado una inmensa popularidad debido a su conveniencia,
                    accesibilidad y el alcance global que ofrecen.
                </p>
                <p>
                    Los sitios web de comercio electrónico suelen mostrar productos o servicios junto con
                    descripciones detalladas, imágenes, precios y cualquier variación disponible
                    (por ejemplo, tamaño, colores). Cada producto suele tener su página dedicada
                    con información relevante.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox