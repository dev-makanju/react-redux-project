import React , { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts , removeSelectedProducts } from "../redux/actions/productActions";

const ProductDetail = () => {
   const product = useSelector( (state) => state.product.product );
   const { image , title , price , category , description } = product;
   const { productId } = useParams();
   const dispatch = useDispatch();
   const getSingleProduct = async() => {
      try{
         const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
         if(response.status){
            dispatch(selectedProducts(response.data));
         }
      }catch(err){
         console.log(err)
      }
   }

   useEffect( () => {
      if(productId && productId !== "" ) getSingleProduct();
      return () => {
         dispatch(removeSelectedProducts())
      }
   } , [productId])

   return (
      <div className="ui grid container">
         { Object.keys(product).length === 0 ? (
             <div>Loading...</div>
         ):(
         <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
               <div className="ui vertical divider">AND</div>  
               <div className="middle aligned row"></div>
                  <div className="column 1p">
                     <img className="ui fluid image" src={image}/>
                  </div>
                  <div className="column rp">
                     <h1>{title}</h1>
                     <h2>
                        <a href="" className="ui teal tag label">$ {price}</a>
                     </h2>
                     <h3 className="ui brown block header">{category}</h3>
                     <p>{description}</p>
                     <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content">
                           <i className="shop icon"></i>
                        </div>
                        <div className="visible content">Add to Cart</div>
                     </div>
                  </div>
            </div>
         </div>
         )}
      </div>
   )
}

export default ProductDetail;