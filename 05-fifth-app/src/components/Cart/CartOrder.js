import React from "react";
import classes from './CartItem.module.css'

const CartOrder = props =>{
    return (
        <div className={classes['cart-item']} >
            <p>{props.show ? 'Tüm Cicekler Öznur ma gönderilecek':''}</p>
        </div>
    )
}

export default CartOrder