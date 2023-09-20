import React from 'react';
import './Product.css'
const Product = ({product,handleAddToCart}) => {
    const {id, name, seller, price, img, ratings,shipping} = product;
    console.log(product)
    return (
        <>
            <div className='product'>
                 <img src={img} alt="" />
                 <div className='product-info'>
                     <h6 className='product-name'>{name}</h6>
                     <p>Price:${price}</p>
                     <p>Manufacturer:{seller}</p>
                     <p>Ratings:{ratings}</p>
                     <p>Shipping:{shipping}</p>

                 </div>
                 <button onClick={()=>handleAddToCart(product)} className='btn-cart'>Add to Cart</button>
            </div>   
        </>
    );
};
import './Product.css'
export default Product;