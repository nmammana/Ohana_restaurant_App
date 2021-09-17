import React , {createContext, useEffect, useState} from 'react';

import Papa from 'papaparse';

export const ItemsContext = createContext();

export default function ItemsContextProvider({children}) {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSglSGGFTjezO_EaPESq9Fuv4FsAgMNQ6FFt3dAGOOu0cRK0Cq4-WkulBwgQQvSvw/pub?gid=1660030371&single=true&output=csv';
    const [items, setItems] = useState();
    const [isLoadingItems, setIsLoadingItems] = useState(false);

    useEffect(() => {
        try{
          setIsLoadingItems(true);
          Papa.parse(url, {
            download: true,
            header: true,
            complete: function(results) {
              var data = results.data
              setItems(data);
              setIsLoadingItems(false);
            }
          });
          
        }catch(error){
          console.error(error);
        }    
      }, []);

    return (
        <ItemsContext.Provider value={{items, setItems, isLoadingItems, setIsLoadingItems}}>
            {children}
        </ItemsContext.Provider>
    )
}
