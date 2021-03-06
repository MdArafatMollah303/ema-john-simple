import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons' 
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const {img, name,seller,price,stock} = props.product;
    return (
        <div className="product">

        <div>
        <img src={img} alt="" srcset=""/>
        </div>
        <div>
        <h4 className="product-name">{name}</h4>
        <br/>
        <p><small>by:{seller}</small></p>
        
        <p>${price}</p>
        <br/>
        <p><small>only {stock} left in a stock Order-soon</small></p>
        <button className="btn"  onClick={()=> props.handleAddProduct(props.product) }><FontAwesomeIcon icon={faCoffee} />  add to cart </button>
        </div>
            
        </div>
    );
};

export default Product;