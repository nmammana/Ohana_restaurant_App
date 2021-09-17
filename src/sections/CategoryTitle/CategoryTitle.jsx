import React from 'react'
import './CategoryTitle.scss';


export default function CategoryTitle({category}) {

    const capitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }

    return (
        <div className="category-title-container">
            <h1 className="category-title heading2" id={category}>{capitalize(category)}</h1>
        </div>
    )
}
