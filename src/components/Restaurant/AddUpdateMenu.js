import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import MenuServices from '../../services/MenuServices'
import Header from '../Header/Header'

const PostPutMenuComponent = () => {
  const [item_id, setItem_Id] = useState('')
  const [menuId, setMenuId] = useState('')
  const [itemName, setItemName] = useState('')
  const [cost, setCost] = useState('')
  const [numberOfItemsAvailable, setNumberOfItemsAvailable] = useState('')
  const [date, setDate] = useState('')
  
  const history1 = useNavigate()
  var { itemId } = useParams()
  var menu = { itemId, menuId, itemName, cost, numberOfItemsAvailable, date}

  const addOrEditMenu = (e) => {
    e.preventDefault()
    if (itemId) {
      console.log("Editing menu...")
      console.log(itemId)
      console.log(menu)
      MenuServices.updateMenu(itemId, menu).then(
        (response) => {
          history1('/menus')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      itemId = item_id
      menu = { itemId, menuId, itemName, cost, numberOfItemsAvailable, date}
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
    MenuServices.getMenuByItemId(itemId).then((response) => {
      setItem_Id(response.data.itemId)
      setMenuId(response.data.menuId)
      setItemName(response.data.itemName)
      setCost(response.data.cost)
      setNumberOfItemsAvailable(response.data.numberOfItemsAvailable)
      setDate(response.data.date)
    }).catch(error => {
      console.log(error)
    })
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
                <label for="text">Cost:</label>
                <input type='text' class='form-control' placeholder='Enter Cost' name='cost'
                  value={cost} onChange={(e) => setCost(e.target.value)}>
                </input>
              </div>
            </div>
            <div class="row mt-3 mb-3">
            <div class="col-3">
                <label for="text">Number of Items Available:</label>
                <input type='text' class='form-control' placeholder='Enter Number of Items Available' name='creatnumberOfItemsAvailableedBranch'
                  value={numberOfItemsAvailable} onChange={(e) => setNumberOfItemsAvailable(e.target.value)}>
                </input>
              </div>
            <div class="col-3">
                <label for="text">Date:</label>
                <input type='text' class='form-control' placeholder='Enter Date' name='date'
                  value={date} onChange={(e) => setDate(e.target.value)}>
                </input>
              </div>
              <div class='col-sm-8'>
                <br></br>
                <button className='btn btn-success ms-1' onClick={(e) =>
                  addOrEditMenu(e)}>{title()}</button>
                <Link to="/menus" className='btn btn-danger ms-1'>Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutMenuComponent