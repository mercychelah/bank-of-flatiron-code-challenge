import React from "react";
import TransactionsList from "./Transactions";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Transactions from "./Transactions";

function AccountContainer() {

  
  return (
    <div>
      <Search />
      <AddTransactionForm />
      <Transactions />
    </div>
  );
}

export default AccountContainer;
