import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StockServices from '../../services/StockServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const StockComponent = () => {
  const [stock, setStock] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = stock.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(stock.length/recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)
  
useEffect(()=>{
  setCurrentPage(1)
  StockServices.getAllStock().then((response)=>{
    setStock(response.data)
  }).catch(error =>{
    console.log(error)
  })
}, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Stock</h2>

      <div class='col-xs-6' className="float-right">      
      <Link to = "/addStock" className='btn btn-primary mb-2' >Add Stock</Link>
              </div>
      <div>
      </div>
      <table id ='tblkv1'>
        <thead>
          <tr>
            <th>Stock Id</th>
            <th>Item Name</th>
            <th>Amount</th>
            <th>Unit Cost</th>
            <th>Total Cost</th>
            <th>Number of Items Available</th>
            <th>Date</th>   
            <th>Action</th>     
          </tr>
        </thead>
        <tbody>
          {
            records.map(
              stockMapObj =>
              <tr key={stockMapObj.stockId}>
                <td>{stockMapObj.stockId}</td>
                <td>{stockMapObj.itemName}</td>
                <td>{stockMapObj.amount}</td>
                <td>{stockMapObj.unitCost}</td>
                <td>{stockMapObj.totalCost}</td>
                <td>{stockMapObj.numberOfItemsAvailable}</td>
                <td>{stockMapObj.date}</td>               
                <td>
                  <Link className='btn btn-success ms-1' to={`/updateStock/${stockMapObj.stockId}`}>Update</Link>
                  <Link className='btn btn-danger ms-1' to={`/deleteStock/${stockMapObj.stockId}`}>Delete</Link>
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

export default StockComponent