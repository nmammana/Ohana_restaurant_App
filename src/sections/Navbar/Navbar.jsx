import React, { useContext } from 'react'
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { ItemsContext } from '../../contexts/ItemsContext';

import './Navbar.scss';

export default function Navbar() {
    const {categories} = useContext(CategoriesContext);
    const {items} = useContext(ItemsContext);

    const capitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }

    return (
        <nav className="navbar">
            <div className="navbar-wrapper">
                <ul className="categories-list">
                    {categories && categories.map((category, index) => 
                        items?.find((item)=> item.categoria.toLowerCase().includes(category.categoria.toLowerCase())) &&
                        
                        <a key={index} className="category-tag nav-font" href={`#${category.categoria}`}>{capitalize(category.categoria)}</a>
                        
                    )}
                </ul>
            </div>
        </nav>
        
    )

}
