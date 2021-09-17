import React , {createContext, useEffect, useState} from 'react';

import Papa from 'papaparse';

export const CategoriesContext = createContext();

export default function CategoriesContextProvider({children}) {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSglSGGFTjezO_EaPESq9Fuv4FsAgMNQ6FFt3dAGOOu0cRK0Cq4-WkulBwgQQvSvw/pub?gid=226957290&single=true&output=csv';
    const [categories, setCategories] = useState();
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);

    useEffect(() => {
        
        try{
          Papa.parse(url, {
            download: true,
            header: true,
            complete: function(results) {
              var data = results.data
              setCategories(data);
            }
          });
          
        }catch(error){
          console.error(error);
        }
      }, []);

    return (
        <CategoriesContext.Provider value={{categories, setCategories, isLoadingCategories, setIsLoadingCategories}}>
            {children}
        </CategoriesContext.Provider>
    )
}
