import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {id:'e1',title:'Car Insurance', amount:220.73, date:new Date(2022, 3, 15)},
  {id:'e2',title:'New TV', amount:350.36, date:new Date(2023, 2, 8)},
  {id:'e3',title:'Motorbike', amount:9220.73, date:new Date(2024, 5, 22)},
  {id:'e4',title:'Phone', amount:1220.73, date:new Date(2022, 6, 1)}
]
const App=() => {
  // const parag = document.createElement('p')
  // parag.textContent ='This is also visible!'
  // document.getElementById('root').append(parag);
  //4,5 ve 6. satirlarda yazan kismi alt tarafta html kodu olarak <p>This is also visible!</p> sekilde yazabiliyoruz
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) => {
    
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  return React.createElement('div',{},
   React.createElement(NewExpense, {onAddExpense:addExpenseHandler}),
   React.createElement(Expenses, {items:expenses})
   )

  //return (
  //  <div>
  //    <h2>Let's get started!</h2>
  //    <Expenses items={expenses} />
  //  </div>
  //);
}

export default App;
