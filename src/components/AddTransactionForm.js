import React, {useState} from "react";

function AddTransactionForm({onSubmit}) {

  const [formData, setFormData]= useState({
    date:"",
    description:"",
    category:"",
    amount:0,

  })

  function handleChange(e){
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()
    console.log("Form Data:", formData)

    // clear data after submission
    setFormData({
      date:"",
    description:"",
    category:"",
    amount:0,
    })
   
  }

  return (
    <div className="ui segment">
      <form onChange={handleChange} onSubmit={handleSubmit}className="ui form">
        <div className="inline fields">
          <input value={formData.date} name="date" type="date"  />
          <input value={formData.description} type="text" name="description" placeholder="Description" />
          <input value={formData.category} type="text" name="category" placeholder="Category" />
          <input value={formData.amount} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
