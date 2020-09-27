import React from 'react';

const cart = (props) => {
    const cart = props.cart

    let total = 0;
    for(let i=0;i<cart.length;i++){
        const product =cart[i];
        total=total+product.price;

    }
   
    let shipping = 0;

     if(total>35){
        shipping= 12.99
    }
    else if(total>15){
        shipping=4.99
    }
    const vat = (total/10);

   /* const formatNumber = num =>{
        const precision = num.tofixed(2);
        return Number(precision);
    }*/
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p>Vat + Tax: {vat}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Total Price: {total+shipping+vat}</p>
        </div>
    );
};

export default cart;