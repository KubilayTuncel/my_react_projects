import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title) //bir buton yapildiginda aktif bir sekilde calisabilmesi icin bu anatation i kullaniyoruz. 
  //Muhakkak Component function nin icinde olmali
  
  const clickHandler = ()=> {
    setTitle('Updated!')
    console.log(title)
  }
    
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title} (in Leipzig)</h2>
        <div className='expense-item__price'>€{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
