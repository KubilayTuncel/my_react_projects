import React, { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = (props)=>{
    const [enteredTitle, setEntredTitle] = useState('')
    const [enteredAmount, setEntredAmount] = useState('')
    const [enteredDate, setEntredDate] = useState('')
    //const [userInput, setUserInput] = useState({
    //    enteredTitle:"",
    //    enteredAmount:"",
    //    enteredDate:""
    //})

    const titleChangeHandler=(event)=>{
        setEntredTitle(event.target.value)
       // setUserInput({
       //     ...userInput,   //burada ...userInput yazmamizin sebebi bu set isleminde diger degerlerin kaybolmamasi icin.
                            //Cünkü sadece bir set islemi yapabiliriz.
       //     enteredTitle:event.target.value,
       // })
        //setUserInput ((prevState)=>{
        //    return { ...prevState, enteredTitle:event.target.value}
        //})
        //bu yazim seklinde de daha önceki veriye dönüs imkani olan bir uygulama
    }   
    const amountChangeHandler = (event)=>{
        setEntredAmount(event.target.value)
        //setUserInput({
        //    ...userInput,
        //    enteredAmount:event.target.value
        //})
    }

    const dateChangeHandler = (event)=>{
        setEntredDate(event.target.value)
        //setUserInput({
        //    ...userInput,
        //    enteredDate:event.target.value
        //})
    }

    const submitHandler=(event)=>{
        event.preventDefault()
        const expenseData={
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEntredAmount('');
        setEntredDate('');
        setEntredTitle('');
    }
    

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2022-01-01" max="2025-12-31"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm