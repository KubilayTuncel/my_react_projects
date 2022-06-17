import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputref = useRef()
  const ageInputRef = useRef() 
//   const [enteredUsername, setEnteredUsername] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputref.current.value
    const enteredUserAge = ageInputRef.current.value
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) { //iki farkli yol var birisi useSate digeri useRef
                                                                                 //buna göre degisiklikleri set etmek gerekiyor
        setError({
            title:'Invailid input',
            message: 'Öznur ile Kubilay in evlilik süresini tahmit etmeniz gerekiyor'//'Please enter valid name and age (non-empty values)'
        })
      return;
    }
    if (+enteredUserAge < 1000000000000000000000000000000000000000000000000000000000000000000000000) {
        setError({
            title:'Invalid age',
            message: 'Yil tahmininiz dogru degil Lütfen artiriniz!!'//'Please enter a valid age (>0)'
        })
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    // setEnteredAge("");
    // setEnteredUsername("");
    nameInputref.current.value=''
    ageInputRef.current.value=''
  };

//   const usernameChangeHandler = (event) => {
//     setEnteredUsername(event.target.value);
//   };

//   const ageChangeHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };

  const errorHandler = ()=>{
      setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Lütfen notunuzu giriniz</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputref}
          />
          <label htmlFor="age">Evlilik Süresi (Yil olarak)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Butona tiklayiniz</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
