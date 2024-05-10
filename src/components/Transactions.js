import React from "react";
import TransactionItem from "./TransactionItem";

function Transactions({transactions}) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
      
{/* check if the array first exists by Using:
{products && products.map((product) => (
    <Grid item key={product.id} item xs={12} sm={6} md={4} lg={3}>
        <Product/>
    </Grid>
))};
Or
{products?.map((product) => (
    <Grid item key={product.id} item xs={12} sm={6} md={4} lg={3}>
        <Product/>
    </Grid>
))}; */}
      {transactions && transactions.map((transaction) => {
      return( 
        <TransactionItem
        date ={transaction.date} 
        description={transaction.description} 
        category={transaction.category} 
        amount={transaction.amount}
        key={transaction.id}/>
      )
      })} 
        </tbody>
    </table>
  );
}

export default Transactions;
