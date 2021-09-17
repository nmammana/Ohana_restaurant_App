import React from 'react'
import Body from '../sections/Body/Body';
import CategoriesContextProvider from '../contexts/CategoriesContext';
import ItemsContextProvider from '../contexts/ItemsContext';

export default function Home() {
    return (
        <>
            <CategoriesContextProvider>
                <ItemsContextProvider>
                    <Body/>
                </ItemsContextProvider>
            </CategoriesContextProvider>
        </>
    )
}
