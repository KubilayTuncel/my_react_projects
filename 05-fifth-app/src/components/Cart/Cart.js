import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CartOrder from "./CartOrder";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = id =>{
      cartCtx.removeItem(id)
  }
  const cartItemAddHandler = item => {
      cartCtx.addItem({...item,amount:1})
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {" "}
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );
  const [showOrder,setShowOrder] = useState()

  const showOrderHandler=()=>{
    setShowOrder((prevShowOrder)=>!prevShowOrder)
    
  }
  return (
    <div>
    <Modal onClose={props.onClose} >
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        
        {hasItems && <button className={classes.button} onClick={showOrderHandler}>Order</button>}
        <CartOrder show={showOrder}/>
      </div>
    </Modal>    
    </div>
    
  );
};

export default Cart;
