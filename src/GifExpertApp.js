import React, { useState } from 'react'

import {AddCategory} from './components/AddCategory'
import {GifGrid} from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Futbol"])

    // const handleAdd = () => {
    //     DOS FORMAS DE ACTUALIZAR EL ESTADO CATEGORIES
    //     setCategories([...categories, "Superman"]) //con expect
    //     setCategories(cats => [...cats, "Superman"]) con callback 
    // }


    return (
        <>
            <h2>GifApp</h2>
            <AddCategory setCategories= {setCategories} />
            <hr/>
            
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                          key={category}
                          category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
