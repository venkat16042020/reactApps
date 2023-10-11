import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import StockServices from '../../services/StockServices'
import Header from '../Header/Header'

const PostPutStockComponent = () => {
  const [stock_Id, setStock_Id] = useState('')
  const [itemName, setItemName] = useState('')
  const [amount, setAmount] = useState('')
  const [unitCost, setUnitCost] = useState('')
  const [totalCost, setTotalCost] = useState('')
  const [numberOfItemsAvailable, setNumberOfItemsAvailable] = useState('')
  const [date, setDate] = useState('')
  const cars = ['Ford', 'BMW', 'Audi'];
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }
  const history1 = useNavigate()
  var { stockId } = useParams()
  var stock = { stockId, itemName, amount, unitCost, totalCost, numberOfItemsAvailable, date }
//   // an array of country names
// const countryNames = ["united states", "united kingdom", "syria", "spain", "mexico"]
// //state
// const [country, setCountry] = useState("");
// function handleCountry({target}){
// setCountry(target.value)
// }
  const addOrEditStock = (e) => {
    e.preventDefault()
    if (stockId) {
      console.log("Editing stock...")
      console.log(stockId)
      console.log(stock)
      StockServices.updateStock(stockId, stock).then(
        (response) => {
          history1('/stocks')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      stockId = stock_Id
      stock = { stockId, itemName, amount, unitCost, totalCost, numberOfItemsAvailable, date }
      console.log(stock)
      StockServices.addStock(stock).then(
        (response) => {
          history1('/stocks')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    StockServices.getStockById(stockId).then((response) => {
      setStock_Id(response.data.stockId)
      setItemName(response.data.itemName)
      setAmount(response.data.amount)
      setUnitCost(response.data.unitCost)
      setTotalCost(response.data.totalCost)
      setNumberOfItemsAvailable(response.data.numberOfItemsAvailable)
      setDate(response.data.date)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const title = () => {
    if (stockId) {
      return "Update Stock"
    } else {
      return "Add Stock"
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
                <label for="text">*Stock Id:</label>
                <input type='text' class='form-control' placeholder='Enter Stock Id' name='stockId'
                  value={stockId} onChange={(e) => setStock_Id(e.target.value)}>
                </input>
                {/* <select name="country" value={country} onChange={handleCountry}>
  {countryNames.map((country, i) => {
    return <option key={i} value={country} onSelect={() => handleCountry(country,i)}>{country}</option>
  })}
</select> */}
              </div>
              <div class="col-3">
                <label for="text">Item Name:</label>
                <input type='text' class='form-control' placeholder='Enter Item Name' name='itemName'
                  value={itemName} onChange={(e) => setItemName(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Amount :</label>
                <input type='text' class='form-control' placeholder='Enter Amount' name='amount'
                  value={amount} onChange={(e) => setAmount(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Unit Cost:</label>
                <input type='text' class='form-control' placeholder='Enter Unit Cost' name='unitCost'
                  value={unitCost} onChange={(e) => setUnitCost(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Total Cost:</label>
                <input type='text' class='form-control' placeholder='Enter Total Cost' name='totalCost'
                  value={totalCost} onChange={(e) => setTotalCost(e.target.value)}>
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
                  addOrEditStock(e)}>{title()}</button>
                <Link to="/stocks" className='btn btn-danger ms-1'>Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutStockComponent