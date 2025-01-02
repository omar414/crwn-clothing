import {React, createContext, useState, useEffect} from 'react'
import SHOP_DATA from "../shop-data.js"
import { addCollectionAndDocuments } from '../utils/firebase/firebase.js'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.js'
export const CategoriesContext = createContext({
    categoriesMap: {},

})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setcategoriesMap ]= useState({})

    //one off code to push the data from shop-data.js to firebase the method (addCollectionAndDocuments) can be found in firebase.js
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // },[])

    useEffect(()=>{
        const getCategoriesMap =async ()=>{
            const categoryMap=await getCategoriesAndDocuments();
            // console.log(categoryMap)
            setcategoriesMap(categoryMap)
        }
        getCategoriesMap()
    },[])
    const  value  = {categoriesMap}
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}