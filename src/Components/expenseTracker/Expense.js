import React,{useState} from "react";
import "./css/expense.css";

function Expense() {
  const [name, setName] = useState(null)
  const [date, setdate] = useState(null)
  const [amount, setamount] = useState(null)
  const [payment, setpayment] = useState("cash")
  const [data, setData] = useState(JSON.parse(localStorage.getItem('expense')))
  let total=0;
  const resetTracker = ()=>{
    localStorage.removeItem('expense')
    setData(null)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    let data={
      name:name,
      date:date,
      amount:amount,
      payment:payment
    }
    if(!localStorage.getItem('expense')){
      let arr=[];
      arr.push(data);
      localStorage.setItem('expense',JSON.stringify(arr))
      setData(arr)
    }
    else{
      let arr=JSON.parse(localStorage.getItem('expense'));
      arr.push(data)
      localStorage.setItem('expense',JSON.stringify(arr))
      setData(arr)
    }

    e.target.name.value="";
    setName(null);
    e.target.date.value="";
    setdate(null);
    e.target.payment.value="cash";
    setpayment('cash');
    e.target.amount.value="";
    setamount(null);
  }

  return (
    <div id="expenseContainer">
    <form id="expenseForm" onSubmit={(e)=>handleSubmit(e)}>
        <div>
        <label htmlFor="name">Name :</label><br/>
        <input id="name" type="text" onChange={(e)=>setName(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="date">Date :</label><br/>
            <input id="date" type="date" onChange={(e)=>setdate(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="payment">Payment :</label><br/>
            <select id="payment" onChange={(e)=>setpayment(e.target.value)}>
                <option value="cash">Cash</option>
                <option value="credit_card">Credit Card</option>
                <option value="crypto">Cryptocoin</option>
                <option value="other_payments">Other</option>
            </select>
        </div>
        <div>
            <label htmlFor="amount">Amount :</label><br/>
            <input id="amount" type="number" onChange={(e)=>setamount(e.target.value)} required/>
        </div>
        <div>
            <button type="submit">Add Expense</button>
        </div>
    </form>
      <div id="expense_container">
        <div id="table_container">
          <table id="expenseTable">
            <thead>
                <tr>
              <th>Name</th>
              <th>Payment</th>
              <th>Date</th>
              <th>Amount</th>
                </tr>
            </thead>
            <tbody>
            {
              data&&data.map((el,index)=>{
                return(
                  <tr key={index}>
                    <td>{el.name}</td>
                    <td>{el.payment}</td>
                    <td>{el.date}</td>
                    <td>{el.amount}</td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
      </div>
      {
        data&&data.forEach(el => {
          total+=parseInt(el.amount)
        })
      }
      <div id="totalContainer">
      {
      total!==0&&(<h2>Total = {total} $</h2>)
      }
      {
        data!==null&&(<button id="resetTracker" onClick={resetTracker}>Reset Tracker</button>)
      }
      </div>
    </div>
  );
}

export default Expense;