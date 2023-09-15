import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import AccountServices from '../../services/AccountServices'
import Header from '../Header/Header'

const PostPutAccountComponent = () => {
  const [account_id, setAccount_Id] = useState('')
  const [accountName, setAccountName] = useState('')
  const [createdOn, setCreatedOn] = useState('')
  const [createdBy, setCreatedBy] = useState('')
  const [createdBranch, setCreatedBranch] = useState('')
  const [branchAdd, setBranchAdd] = useState('')
  const [branchManagerId, setBranchManagerId] = useState('')
  const [amount, setAmount] = useState('')
  const [blockedAmount, setBlockedAmount] = useState('')
  const [finalAmount, setFinalAmount] = useState('')
  const [accountPlan, setAccountPlan] = useState('')
  const [accountSubPlan, setAccountSubPlan] = useState('')
  const [accCurrentManager, setAccCurrentManager] = useState('')
  const [accountStatus, setAccountStatus] = useState('')

  const history1 = useNavigate()
  var { accountId } = useParams()
  var account = { accountId, accountName, createdOn, createdBy, createdBranch, branchAdd, branchManagerId, amount, blockedAmount, finalAmount, accountPlan, accountSubPlan, accCurrentManager, accountStatus }

  const addOrEditAccount = (e) => {
    e.preventDefault()
    if (accountId) {
      console.log("Editing account...")
      console.log(accountId)
      console.log(account)
      AccountServices.updateAccount(accountId, account).then(
        (response) => {
          history1('/accounts')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      accountId = account_id
      account = { accountId, accountName, createdOn, createdBy, createdBranch, branchAdd, branchManagerId, amount, blockedAmount, finalAmount, accountPlan, accountSubPlan, accCurrentManager, accountStatus }
      console.log(account)
      AccountServices.addAccount(account).then(
        (response) => {
          history1('/accounts')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    AccountServices.getAccountById(accountId).then((response) => {
      setAccount_Id(response.data.accountId)
      setAccountName(response.data.accountName)
      setCreatedOn(response.data.createdOn)
      setCreatedBy(response.data.createdBy)
      setCreatedBranch(response.data.createdBranch)
      setBranchAdd(response.data.branchAdd)
      setBranchManagerId(response.data.branchManagerId)
      setAmount(response.data.amount)
      setBlockedAmount(response.data.blockedAmount)
      setFinalAmount(response.data.finalAmount)
      setAccountPlan(response.data.accountPlan)
      setAccountSubPlan(response.data.accountSubPlan)
      setAccCurrentManager(response.data.accCurrentManager)
      setAccountStatus(response.data.accountStatus)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const title = () => {
    if (accountId) {
      return "Update Account"
    } else {
      return "Add Account"
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
                <label for="text">*Account Id:</label>
                <input type='text' class='form-control' placeholder='Enter Account Id' name='accountId'
                  value={account_id} onChange={(e) => setAccount_Id(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">*Account Name:</label>
                <input type='text' class='form-control' placeholder='Enter Account Name' name='accountName'
                  value={accountName} onChange={(e) => setAccountName(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Created On:</label>
                <input type='text' class='form-control' placeholder='Enter Created On' name='createdOn'
                  value={createdOn} onChange={(e) => setCreatedOn(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Created By:</label>
                <input type='text' class='form-control' placeholder='Enter Created By' name='createdBy'
                  value={createdBy} onChange={(e) => setCreatedBy(e.target.value)}>
                </input>
              </div>
            </div>
            <div class="row mt-3 mb-3">
            <div class="col-3">
                <label for="text">Created Branch:</label>
                <input type='text' class='form-control' placeholder='Enter Created Branch' name='createdBranch'
                  value={createdBranch} onChange={(e) => setCreatedBranch(e.target.value)}>
                </input>
              </div>
            <div class="col-3">
                <label for="text">Branch Address:</label>
                <input type='text' class='form-control' placeholder='Enter Branch Address' name='branchAdd'
                  value={branchAdd} onChange={(e) => setBranchAdd(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Branch Manager Id:</label>
                <input type='text' class='form-control' placeholder='Enter Branch Manager Id' name='branchManagerId'
                  value={branchManagerId} onChange={(e) => setBranchManagerId(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Amount:</label>
                <input type='text' class='form-control' placeholder='Enter Amount' name='amount'
                  value={amount} onChange={(e) => setAmount(e.target.value)}>
                </input>
              </div>
            </div>
            <div class="row mt-3 mb-3">
            <div class="col-3">
                <label for="text">Blocked Amount:</label>
                <input type='text' class='form-control' placeholder='Enter Blocked Amount' name='blockedAmount'
                  value={blockedAmount} onChange={(e) => setBlockedAmount(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Final Amount:</label>
                <input type='text' class='form-control' placeholder='Enter Final Amount' name='finalAmount'
                  value={finalAmount} onChange={(e) => setFinalAmount(e.target.value)}>
                </input>
              </div>
            <div class="col-3">
                <label for="text">Account Plan:</label>
                <input type='text' class='form-control' placeholder='Enter Account Plan' name='accountPlan'
                  value={accountPlan} onChange={(e) => setAccountPlan(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Sub Account Plan:</label>
                <input type='text' class='form-control' placeholder='Enter Account Sub Plan' name='accountSubPlan'
                  value={accountSubPlan} onChange={(e) => setAccountSubPlan(e.target.value)}>
                </input>
              </div>
            </div>       
            <div class='mb-3 row'>              
            <div class="col-3">
                <label for="text">Current Manager:</label>
                <input type='text' class='form-control' placeholder='Enter Current Manager' name='accCurrentManager'
                  value={accCurrentManager} onChange={(e) => setAccCurrentManager(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">*Account Status:</label>
                <input type='text' class='form-control' placeholder='Enter Account Status' name='accountStatus'
                  value={accountStatus} onChange={(e) => setAccountStatus(e.target.value)}>
                </input>
              </div>
              <div class='col-sm-8'>
                <br></br>
                <button className='btn btn-success ms-1' onClick={(e) =>
                  addOrEditAccount(e)}>{title()}</button>
                <Link to="/accounts" className='btn btn-danger ms-1'>Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutAccountComponent