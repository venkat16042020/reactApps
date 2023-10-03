import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import OrderServices from '../../services/OrderServices'
import Header from '../Header/Header'
import MenuServices from '../../services/MenuServices'

const PostPutOrderComponent = () => {
  const [order_Id, setOrder_Id] = useState('')
  const [itemId, setItemId] = useState('')
  const [itemName, setItemName] = useState('')
  const [numberOfItems, setNumberOfItems] = useState(1.00)
  const [isTakeAway, setIsTakeAway] = useState('')
  const [discount, setDiscount] = useState(0.00)
  const [couponId, setCouponId] = useState('')
  const [cost, setCost] = useState(0.00)
  const [centralGst, setCentralGst] = useState(0.00)
  const [stateGst, setStateGst] = useState(0.00)
  const [totalGst, setTotalGst] = useState(0.00)
  const [totalCost, setTotalCost] = useState(0.00)
  const history1 = useNavigate()

  const [allItems, setAllItems] = useState([]);
  const [item, setItem] = useState("");

  function handleNumberOfItems(target) {
    setNumberOfItems(parseFloat(target))
    setTotalCost(parseFloat((parseFloat(target) * parseFloat(cost)) - parseFloat(discount)))
  }

  function handleDiscount(target) {
    setDiscount(parseFloat(target))
    setTotalCost(parseFloat((parseFloat(numberOfItems) * parseFloat(cost)) - parseFloat(target)))
  }

  function handleCost(target) {
    setCost(parseFloat(target))
    setTotalCost(parseFloat((parseFloat(numberOfItems) * parseFloat(target)) - parseFloat(discount)))
  }
  function handleItem({ target }) {
    console.log(target)
    console.log(target.value)
    setItem(target.value)
    setItemId(target.value)
    MenuServices.getMenuByItemId(target.value).then((response) => {
      console.log(response.data)
      setItemName(response.data.itemName)
      setCost(response.data.totalCost)
      setCentralGst(response.data.centralGst)
      setStateGst(response.data.stateGst)
      setTotalGst(response.data.totalGst)
      setTotalCost(parseFloat((parseFloat(numberOfItems) * parseFloat(response.data.totalCost)) - parseFloat(discount)))

    }).catch(error => {
      console.log(error)
    })
  }
  var { orderId } = useParams()
  var order = { orderId, itemId, itemName, numberOfItems, isTakeAway, discount, couponId, cost, centralGst, stateGst, totalGst, totalCost }

  const addOrEditOrder = (e) => {
    e.preventDefault()
    if (orderId) {
      console.log("Editing order...")
      console.log(orderId)
      console.log(order)
      OrderServices.updateOrder(orderId, order).then(
        (response) => {
          history1('/order')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      orderId = order_Id
      order = { orderId, itemId, itemName, numberOfItems, isTakeAway, discount, couponId, cost, centralGst, stateGst, totalGst, totalCost }
      console.log(order)
      OrderServices.addOrder(order).then(
        (response) => {
          history1('/order')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    MenuServices.getAllMenuItems().then((response) => {
      setAllItems(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    OrderServices.getOrderById(orderId).then((response) => {
      setOrder_Id(response.data.orderId)
      setItemId(response.data.itemId)
      setItemName(response.data.itemName)
      setNumberOfItems(response.data.numberOfItems)
      setIsTakeAway(response.data.isTakeAway)
      setDiscount(response.data.discount)
      setCouponId(response.data.couponId)
      setCost(response.data.cost)
      setCentralGst(response.data.centralGst)
      setStateGst(response.data.stateGst)
      setTotalGst(response.data.totalGst)
      setTotalCost(response.data.totalCost)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const title = () => {
    if (orderId) {
      return "Update Order"
    } else {
      return "Add Order"
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
                <label for="text">Order Id:</label>
                <input type='text' class='form-control' placeholder='Enter Order Id' name='orderid'
                  value={orderId} onChange={(e) => setOrder_Id(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Item Id:</label>
                <select name="allItems" class='form-control' value={item} onChange={handleItem}>
                  {allItems.map((item, i) => {
                    return <option key={i} value={item} onSelect={
                      () => handleItem(item, i)}>{item}</option>
                  })
                  }
                </select>
              </div>
              <div class="col-3">
                <label for="text">Item Name:</label>
                <input type='text' class='form-control' placeholder='Enter Item Name' name='itemName'
                  value={itemName} disabled onChange={(e) => setItemName(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Number Of Items:</label>
                <input type='text' class='form-control' placeholder='Number Of Items' name='numberOfItems'
                  value={numberOfItems} onChange={(e) => handleNumberOfItems(e.target.value)}>
                </input>
              </div>
              {/* <div class="col-3">
                <label for="text">Is Take Away:</label>
                <input type='text' class='form-control' placeholder='Is Take Away' name='isTakeAway'
                  value={isTakeAway} onChange={(e) => setIsTakeAway(e.target.value==="yes" ? "true" : "false")}>
                </input>
              </div> */}
              <div class="col-3">
              <label for="text">Is Take Away:</label>

                <div className="radio">
                    <input
                      type="radio"
                      name="isTakeAway"
                      value="true"
                      onChange={(e) => setIsTakeAway(e.target.value==="yes" ? "true" : "false")} />
                    Yes
                </div>
                <div className="radio">
     
                    <input
                      type="radio"
                      name="isTakeAway"
                      value="false"
                      onChange={(e) => setIsTakeAway(e.target.value==="no" ? "false" : "true")} />
                    No
                </div>
              </div>
              <div class="col-3">
                <label for="text">CouponId:</label>
                <input type='text' class='form-control' placeholder='Coupon Id' name='couponId'
                  value={couponId} onChange={(e) => setCouponId(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Discount:</label>
                <input type='text' class='form-control' placeholder='Discount' name='discount'
                  value={discount} onChange={(e) => handleDiscount(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Cost:</label>
                <input type='text' class='form-control' placeholder='Cost' name='cost'
                  value={cost} disabled onChange={(e) => handleCost(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Central Gst:</label>
                <input type='text' class='form-control' placeholder='Central Gst' name='centralGst'
                  value={centralGst} disabled onChange={(e) => setCentralGst(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">State Gst:</label>
                <input type='text' class='form-control' placeholder='State Gst' name='stateGst'
                  value={stateGst} disabled onChange={(e) => setStateGst(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Total Gst:</label>
                <input type='text' class='form-control' placeholder='Total Gst' name='totalGst'
                  value={totalGst} disabled onChange={(e) => setTotalGst(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Total Cost:</label>
                <input type='text' class='form-control' placeholder='Total Cost' name='totalCost'
                  value={totalCost} disabled onChange={(e) => setTotalCost(e.target.value)}>
                </input>
              </div>
              <div class='col-sm-8'>
                <br></br>
                <button className='btn btn-success ms-1' onClick={(e) =>
                  addOrEditOrder(e)}>{title()}</button>
                <Link to="/order" className='btn btn-danger ms-1'>Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutOrderComponent