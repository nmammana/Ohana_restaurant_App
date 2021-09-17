import React, { useContext } from 'react'
import CategoryTitle from '../CategoryTitle/CategoryTitle';
import ItemCard from '../ItemCard/ItemCard';
import { ItemsContext } from '../../contexts/ItemsContext'



import './Items.scss';

export default function Items({category}) {
    const {items} = useContext(ItemsContext);

    return (
        <section className="category">
            {items?.find((item)=> item.categoria.toLowerCase().includes(category.toLowerCase())) 
                && <CategoryTitle 
                        category={category}/> }
            <div className="items-container">
                {items && items.filter((item) => {
                    if(item.categoria.toLowerCase().includes(category.toLowerCase())){
                        return item;
                    }
                }).map((item, index) =>(
                    <ItemCard
                        key={index}
                        item = {item}
                    />
                ))}                
            </div>
        </section>
    )
}
