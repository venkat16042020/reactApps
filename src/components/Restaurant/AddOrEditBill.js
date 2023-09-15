import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import BillServices from '../../services/BillServices '
import Header from '../Header/Header'

const PostPutBillComponent = () => {
  const [bill_Id, setBill_Id] = useState('')
  const [date, setDate] = useState('')
  const [address, setAddress] = useState('')
  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [amount, setAmount] = useState('')

  const history1 = useNavigate()
  var {billId} = useParams()
  var bill = {bill_Id, date, address, item, quantity, price, discount, amount}

const addOrEditBill = (e)=>{
  e.preventDefault()
  if(bill_Id){
    console.log("Editing bill...")
    console.log(bill_Id)
    console.log(bill)
    BillServices.updateBill(bill_Id, bill).then(
      (response)=>{
        history1('/bills')
      }
    ).catch(error=>{
      console.log(error)
    })
  }else{
    bill_Id = bill_Id
    bill = {bill_Id, date, address, item, quantity, price, discount, amount}
    console.log(bill)
    BillServices.addBill(bill).then(
      (response)=>{
        history1('/bills')
      }
    ).catch(error=>{
      console.log(error)
    })
  }
}

useEffect(()=>{
  BillServices.getBillById(billId).then((response)=>{
    setBill_Id(response.data.billId)
    setDate(response.data.date)
    setAddress(response.data.address)
    setItem(response.data.item)
    setQuantity(response.data.quantity)
    setPrice(response.data.price)
    setDiscount(response.data.discount)
    setAmount(response.data.city)
    
  }).catch(error =>{
    console.log(error)
  })
}, [])

const title = () =>{
  if(billId){
    return "Update Bill"
  }else{
    return "Add Bill"
  }
}

  return (
    <div>
      <Header></Header>
      <br></br>
      <div className='row'></div>
      <div className='card col-md-6 offset-md-3'>
        <br></br>
        <h3 className='text-center'>{title()}</h3>
        <div className='card-body'>
          <form> 
          <div class="row mt-3 mb-3">
            <div class="col-3">
                <label for="text">Bill Id:</label>
                <input type='text' class='form-control' placeholder='Enter Bill Id' name='billid'
                  value={billId} onChange={(e) => setBill_Id(e.target.value)}>
                </input>
              </div>       
          <div class="col-3">
                <label for="text">Date:</label>
                <input type='text' class='form-control' placeholder='Date' name='date'
                  value={date} onChange={(e) => setDate(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Address:</label>
                <input type='text' class='form-control' placeholder='Address' name='address'
                  value={address} onChange={(e) => setAddress(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Item:</label>
                <input type='text' class='form-control' placeholder='Item' name='item'
                  value={item} onChange={(e) => setItem(e.target.value)}>
                </input>
              </div>
            </div>
            <div class="row mt-3 mb-3">
            <div class="col-3">
                <label for="text">Quantity: </label>
                <input type='text' class='form-control' placeholder='Quantity' name='quantity'
                  value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Price:</label>
                <input type='text' class='form-control' placeholder='Price' name='price'
                  value={price} onChange={(e) => setPrice(e.target.value)}>
                </input>
              </div>
            <div class="col-3">
                <label for="text">Discount:</label>
                <input type='text' class='form-control' placeholder='Discount' name='discount'
                  value={discount} onChange={(e) => setDiscount(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Amount: </label>
                <input type='text' class='form-control' placeholder='Amount' name='amount'
                  value={amount} onChange={(e) => setAmount(e.target.value)}>
                </input>
              </div>
              <div class='col-sm-8'>        
                <br></br>
                <button className='btn btn-success ms-1' onClick={(e)=>
                addOrEditBill(e)}>{title()}</button>
                <Link to="/bills" className='btn btn-danger ms-1'>Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutBillComponent