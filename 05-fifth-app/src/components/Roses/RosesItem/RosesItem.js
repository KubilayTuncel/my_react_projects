import classes from './RosesItem.module.css'
import RosesItemForm from './RosesItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const RosesItem = (props) => {
    const cartCtx = useContext(CartContext)
    const price =`€${props.price.toFixed(2)}`

    const addToCartHandler= amount =>{
      cartCtx.addItem({
        id: props.id,
        name:props.name,
        amount:amount,
        price:props.price
      })
    }

  return (
    <li className={classes.rose}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <RosesItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default RosesItem;
