import React , { useEffect } from "react"
import { useDispatch } from "react-redux";
import Product from '../components/Product';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {
   const dispatch = useDispatch();//redux react hook
  
   useEffect( () => {
      getProducts();
   })

   const getProducts = async () => {
      try{
         const response = await axios.get("https://fakestoreapi.com/products")

         if(response.status){
            dispatch(setProducts(response.data))
         }
      }catch(err){
         console.log(err)
      }
   }

   return (
      <div className="ui grid container">
        <Product/>
      </div>
   )
}

export default ProductListing;