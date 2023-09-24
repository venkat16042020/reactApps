import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import OrderServices from '../../services/OrderServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const OrdersComponent = () => {
  const [order, setOrders] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = order.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(order.length/recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)
  
useEffect(()=>{
  setCurrentPage(1)
  OrderServices.getAllOrders().then((response)=>{
    setOrders(response.data)
  }).catch(error =>{
    console.log(error)
  })
}, [])
 return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Orders</h2>

      <div class='col-xs-6' className="float-right">
      <Link to = "/addOrder" className='btn btn-primary mb-2' >Add Order</Link>
              </div>
      <div>
      </div>
      <table id ='tblkv1'>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Item Id</th>
            <th>Item Name</th>
            <th>Number Of Items</th>
            <th>Is Take Away</th>           
            <th>Discount</th>
            <th>Coupon Id</th>
            <th>Cost</th>
            <th>CGst</th>
            <th>SGst</th>
            <th>Total Gst</th>            
            <th>Total Cost</th>
            <th>Action</th>            
          </tr>
        </thead>
        <tbody>
          {
            records.map(
              orderMapObj =>
              <tr key={orderMapObj.orderId}>
                <td>{orderMapObj.orderId}</td>
                <td>{orderMapObj.itemId}</td>
                <td>{orderMapObj.itemName}</td>
                <td>{orderMapObj.numberOfItems}</td>
                <td>{orderMapObj.isTakeAway}</td>                                
                <td>{orderMapObj.discount}</td>
                <td>{orderMapObj.couponId}</td>
                <td>{orderMapObj.cost}</td>
                <td>{orderMapObj.cGst}</td>
                <td>{orderMapObj.sGst}</td>
                <td>{orderMapObj.totalGst}</td>
                <td>{orderMapObj.totalCost}</td>
                <td>{orderMapObj.Action}
                  <Link className='btn btn-success ms-1' to={`/updateOrder/${orderMapObj.orderId}`}>Update</Link>
                  <Link className='btn btn-danger ms-1' to={`/deleteOrder/${orderMapObj.orderId}`}>Delete</Link>
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

export default OrdersComponent