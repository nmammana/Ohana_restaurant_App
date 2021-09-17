import React, { useContext} from 'react'
import { CategoriesContext } from '../../contexts/CategoriesContext'

import Items from '../Items/Items';

export default function Categories() {
    const {categories} = useContext(CategoriesContext);

    return (
       
        <>
            {categories && categories.map((category, index) => (
                <div key={index}> 
                    <Items
                        category={category.categoria}/>
                </div>
            ))}
        </>
            
        
    )
}
