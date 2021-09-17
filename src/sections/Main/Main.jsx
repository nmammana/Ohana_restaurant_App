import React, { useContext } from 'react'
import Categories from '../Categories/Categories'
import Loading from '../../components/Loading/Loading';
import { ItemsContext } from '../../contexts/ItemsContext';

export default function Main() {

    const {isLoadingItems} = useContext(ItemsContext);

    return (
        <main className="items">
            {isLoadingItems && <Loading/>}
            <div className="items-wrapper">
                <Categories/>
            </div>   
        </main>
    )
}
