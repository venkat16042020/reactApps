import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BillServices from '../../services/BillServices '
import Header from '../Header/Header'
import '../../css/abc.css'

const BillComponent = () => {
  const [bill, setBill] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = bill.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(bill.length/recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)
  
useEffect(()=>{
  setCurrentPage(1)
  BillServices.getAllBill().then((response)=>{
    setBill(response.data)
  }).catch(error =>{
    console.log(error)
  })
}, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Bill</h2>

      <div class='col-xs-6' className="float-right">        
      <Link to = "/addBill" className='btn btn-primary mb-2' >Add Bill</Link>
              </div>
      <div>
      </div>
      <table id ='tblkv1'>
        <thead>
          <tr>
            <th>Bill Id</th>
            <th>Date</th>
            <th>Address</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Amount</th>
            <th>Action</th>            
          </tr>
        </thead>
        <tbody>
          {
            records.map(
              billMapObj =>
              <tr key={billMapObj.billId}>
                <td>{billMapObj.billId}</td>
                <td>{billMapObj.date}</td>
                <td>{billMapObj.address}</td>
                <td>{billMapObj.item}</td>
                <td>{billMapObj.quantity}</td>
                <td>{billMapObj.price}</td>
                <td>{billMapObj.discount}</td>
                <td>{billMapObj.amount}</td>
                <td>
                  <Link className='btn btn-success ms-1' to={`/updateBill/${billMapObj.billId}`}>Update</Link>
                  <Link className='btn btn-danger ms-1' to={`/deleteBill/${billMapObj.billId}`}>Delete</Link>
                </td>
                </tr>
            )
          }
        </tbody>
      </table>
      <nav className='pagination'>
        <li className='page-item'>
          <a href='#' className='page-link'
          onClick={perPage} >Prev</a>
        </li>
        {
          numbers.map((n,i) => (
            <li className={`page-item ${currentPage === n ? 'active': ''}`} key={i}>
              <a href='#' className='page-link'
              onClick={()=>changeCPage(n)
              }>{n}</a>
              </li>
          ))
        }
        <li className='page-item'>
          <a href='#' className='page-link'
          onClick={nextPage}>Next</a>
        </li>
      </nav>
    </div>
  )
  function perPage(){
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id){
    setCurrentPage(id)
  }

  function nextPage(){
    if(currentPage !== nPage){
      setCurrentPage(currentPage + 1)
    }
  }

}

export default BillComponent