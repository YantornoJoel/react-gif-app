import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {

    return (
        
        <div className="card animate__animated animate__fadeIn animate__zoomInLeft ">
            <img src={ url } alt= { title } className="animate__flipInY"/> 
            <p> { title } </p> 
        </div>
    )
}
