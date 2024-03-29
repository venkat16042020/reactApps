import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import MenuServices from '../../services/MenuServices'
import Header from '../Header/Header'
import { getCurrentDate } from '../KlnReactLibs/KLN_Lib'
const PostPutMenuComponent = () => {
  const [item_id, setItem_Id] = useState('')
  const [menuId, setMenuId] = useState('')
  const [itemName, setItemName] = useState('')
  const [numberOfItemsAvailable, setNumberOfItemsAvailable] = useState('')
  const [date, setDate] = useState('')
  const [cost, setCost] = useState(0.00)
  const [centralGst, setCentralGst] = useState(0.00)
  const [stateGst, setStateGst] = useState(0.00)
  const [totalGst, setTotalGst] = useState(0.00)
  const [totalCost, setTotalCost] = useState(0.00)
  const history1 = useNavigate()
  var { itemId } = useParams()
  var menu = { itemId, menuId, itemName, numberOfItemsAvailable, date, cost, centralGst, stateGst, totalGst, totalCost }

  function handleCost(target) {
    setCost(parseFloat(target))
    setTotalGst(parseFloat(centralGst) + parseFloat(stateGst))
    setTotalCost(parseFloat(target) + (parseFloat(target) * parseFloat(totalGst) / 100))
  }

  function handleCGst(target) {
    setCentralGst(parseFloat(target))
    setTotalGst(parseFloat(target) + parseFloat(stateGst))
    setTotalCost(parseFloat(cost) + (parseFloat(cost) * parseFloat(totalGst) / 100))
  }

  function handleSGst(target) {
    setStateGst(parseFloat(target))
    setTotalGst(parseFloat(target) + parseFloat(centralGst))
    setTotalCost(parseFloat(cost) + (parseFloat(cost) * (totalGst / 100)))
  }

  const clearMenu = () => {
    document.getElementById("menuId").reset();
  }

  const addOrEditMenu = (e) => {
    e.preventDefault()
    if (itemId) {
      MenuServices.updateMenu(itemId, menu).then(
        (response) => {
          history1('/menus')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      setDate(getCurrentDate())
      itemId = item_id
      menu = { itemId, menuId, itemName, numberOfItemsAvailable, date, cost, centralGst, stateGst, totalGst, totalCost }
      console.log(menu)
      MenuServices.addMenu(menu).then(
        (response) => {
          history1('/menus')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (itemId) {
      MenuServices.getMenuByItemId(itemId).then((response) => {
        setItem_Id(response.data.itemId)
        setMenuId(response.data.menuId)
        setItemName(response.data.itemName)
        setCost(response.data.cost)
        setNumberOfItemsAvailable(response.data.numberOfItemsAvailable)
        setDate(response.data.date)
        setCentralGst(response.data.centralGst)
        setStateGst(response.data.stateGst)
        setTotalGst(response.data.totalGst)
        setTotalCost(response.data.totalCost)
      }).catch(error => {
        console.log(error)
      })
    }
    else {
      setDate(getCurrentDate())
    }
    // return () => console.log("Cleanup..");
  }, [])

  const title = () => {
    if (itemId) {
      return "Update Menu"
    } else {
      return "Add Menu"
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
                <label for="text">*Menu Id:</label>
                <input type='text' class='form-control' placeholder='Enter Menu Id' name='menuId'
                  value={menuId} onChange={(e) => setMenuId(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">*Item Id:</label>
                <input type='text' class='form-control' placeholder='Enter Menu Name' name='menuName'
                  value={itemId} onChange={(e) => setItem_Id(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Item Name:</label>
                <input type='text' class='form-control' placeholder='Enter Item Name' name='itemName'
                  value={itemName} onChange={(e) => setItemName(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Number of Items Available:</label>
                <input type='text' class='form-control' placeholder='Enter Number of Items Available' name='creatnumberOfItemsAvailableedBranch'
                  value={numberOfItemsAvailable} onChange={(e) => setNumberOfItemsAvailable(e.target.value)}>
                </input>
              </div>
            </div>
            <div class="row mt-3 mb-3">
            <div class="col-3">
                <label for="text">Date:</label>
                <input type='text' class='form-control' placeholder='Enter Date' name='date'
                  value={date} onChange={(e) => setDate(e.target.value)}>
                </input>
              </div>
            <div class="col-3">
                <label for="text">Cost:</label>
                <input type='text' class='form-control' placeholder='Enter Cost' name='cost'
                  value={cost} onChange={(e) => handleCost(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">centralGst:</label>
                <input type='text' class='form-control' placeholder='Enter centralGst' name='centralGst'
                  value={centralGst} onChange={(e) => handleCGst(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">stateGst:</label>
                <input type='text' class='form-control' placeholder='Enter stateGst' name='stateGst'
                  value={stateGst} onChange={(e) => handleSGst(e.target.value)}>
                </input>
              </div>
              
            </div>
            <div class="row mt-3 mb-3">
            <div class="col-3">
                <label for="text">Total Gst:</label>
                <input type='text' class='form-control' placeholder='Enter Total Gst' name='totalGst'
                  value={totalGst} onChange={(e) => setTotalGst(e.target.value)}>
                </input>
              </div>
            <div class="col-3">
                <label for="text">Total Cost:</label>
                <input type='text' class='form-control' placeholder='Enter TotalCost' name='totalCost'
                  value={totalCost} onChange={(e) => setTotalCost(e.target.value)}>
                </input>
              </div>
              <div class='col-sm-8'>
                <br></br>
                <button className='btn btn-success ms-1' onClick={(e) =>
                  addOrEditMenu(e)}>{title()}</button>
                <Link to="/menus" className='btn btn-danger ms-1'>Cancel</Link>
                <Link to="/menus" className='btn btn-info ms-1'>Clear</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutMenuComponent