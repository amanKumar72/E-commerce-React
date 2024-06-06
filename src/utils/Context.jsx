import { createContext, useEffect, useState } from "react"
import axios from './axios'

export const ProductsContext=createContext()

function Context(props) {
  const [products,setProducts]= useState(null)

  const getProducts=async ()=>{
    try {
      const {data}=await axios.get('./products')
      setProducts(data)      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getProducts()
  },[])
  return (
    <ProductsContext.Provider value={[products,setProducts]}>
      {props.children}
    </ProductsContext.Provider>
  )
}

export default Context
