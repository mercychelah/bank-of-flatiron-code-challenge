import React, {useEffect, useState} from "react";
// import AccountContainer from "./AccountContainer";
import Transactions from "./Transactions";
import AddTransactionForm from "./AddTransactionForm";
import Search from "./Search";

//fetch data from db.json
function App() {
const [transactions, setTransactions] = useState([])

  useEffect(() =>{
  fetch ("http://localhost:8004/transactions")
.then(data => data.json())
.then(transactions => setTransactions(transactions))
},[])
console.log(transactions)


function handleUpdatedSubmission(newTransaction){
  console.log(newTransaction)
  setTransactions(transactions => [...transactions, newTransaction])
  const serverOption = {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
        },
    body: JSON.stringify(newTransaction)
  }
  fetch("http://localhost:8004/transactions", serverOption)
  .then(data => data.JSON())
  .then(newItem =>setTransactions(transactions => [...transactions, newItem]))
  .catch(error => console.log(error))
}

function handleOnSearching (search) {
  setTransactions(transactions => transactions.filter(transaction => transaction.description.includes(search)))
}


  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <div>
      <Search onSearching = {handleOnSearching} />
      <AddTransactionForm onSubmission = {handleUpdatedSubmission}/>
      </div>
      {/* <AccountContainer  /> */}
      <Transactions transactions={transactions}/>
    </div>
  );
}

export default App;
