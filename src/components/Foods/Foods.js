import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AccountService from '../../services/AccountServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const AccountsComponent = () => {
  const [account, setAccount] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = account.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(account.length/recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)
  
useEffect(()=>{
  setCurrentPage(1)
  AccountService.getAllAccounts().then((response)=>{
    setAccount(response.data)
  }).catch(error =>{
    console.log(error)
  })
}, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Account</h2>
      <Link to = "/addAccount" className='btn btn-primary mb-2'>Add Account</Link>
      <table id ='tblkv1'>
        <thead>
          <tr>
            <th>Account Id</th>
            <th>Account Name</th>
            <th>Created On</th>
            <th>Created By</th>
            <th>Created Branch</th>
            <th>Branch Add</th>
            <th>Branch ManagerId</th>
            <th>Amount</th>
            <th>Blocked Amount</th>
            <th>Final Amount</th>
            <th>Account Plan</th>
            <th>Account SubPlan</th>
            <th>AccCurrent Manager</th>
            <th>Account Status</th>            
          </tr>
        </thead>
            <tbody>
          {
            records.map(
              accountsMapObj =>
              <tr key={accountsMapObj.accountId}>
                <td>{accountsMapObj.accountId}</td>
                <td>{accountsMapObj.accountName}</td>
                <td>{accountsMapObj.createdOn}</td>
                <td>{accountsMapObj.createdBy}</td>
                <td>{accountsMapObj.createdBranch}</td>
                <td>{accountsMapObj.branchAdd}</td>
                <td>{accountsMapObj.branchManagerId}</td>
                <td>{accountsMapObj.blockedAmount}</td>
                <td>{accountsMapObj.finalAmount}</td>
                <td>{accountsMapObj.accountsPlan}</td>
                <td>{accountsMapObj.accountsSubPlan}</td>
                <td>{accountsMapObj.accCurrentManager}</td>
                <td>{accountsMapObj.accountsStatus}</td>
                
                <td>
                  <Link className='btn btn-success ms-1' to={`/updateAccount/${accountsMapObj.accountId}`}>Update</Link>
                  <Link className='btn btn-danger ms-1' to={`/deleteAccount/${accountsMapObj.accountId}`}>Delete</Link>
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

export default AccountsComponent