import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import InfrastructureServices from '../../services/InfrastructureServices'
import Header from '../Header/Header'

const PostPutInfrastructureComponent = () => {
  const [item_id, setItem_Id] = useState('')
  const [tables, setTables] = useState('')
  const [lights, setLights] = useState('')
  const [fans, setFans] = useState('')
  const [ac, setAc] = useState('')
  const [cost, setCost] = useState('')
  const [numberOfItemsAvailable, setNumberOfItemsAvailable] = useState('')
  const [date, setDate] = useState('')
  const cars = ['Ford', 'BMW', 'Audi'];
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }
  const history1 = useNavigate()
  var { itemId } = useParams()
  var infrastructure = { itemId, tables, lights, fans, ac, cost, numberOfItemsAvailable, date }
//   // an array of country names
// const countryNames = ["united states", "united kingdom", "syria", "spain", "mexico"]
// //state
// const [country, setCountry] = useState("");
// function handleCountry({target}){
// setCountry(target.value)
// }
  const addOrEditInfrastructure = (e) => {
    e.preventDefault()
    if (itemId) {
      console.log("Editing infrastructure...")
      console.log(itemId)
      console.log(infrastructure)
      InfrastructureServices.updateInfrastructure(itemId, infrastructure).then(
        (response) => {
          history1('/infrastructures')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      itemId = item_id
      infrastructure = { itemId, tables, lights, fans, ac, cost, numberOfItemsAvailable, date }
      console.log(infrastructure)
      InfrastructureServices.addInfrastructure(infrastructure).then(
        (response) => {
          history1('/infrastructures')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    InfrastructureServices.getInfrastructureByItemId(itemId).then((response) => {
      setItem_Id(response.data.itemId)
      setTables(response.data.infrastructureId)
      setLights(response.data.itemName)
      setFans(response.data.infrastructureId)
      setAc(response.data.itemName)
      setCost(response.data.cost)
      setNumberOfItemsAvailable(response.data.numberOfItemsAvailable)
      setDate(response.data.date)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const title = () => {
    if (itemId) {
      return "Update Infrastructure"
    } else {
      return "Add Infrastructure"
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
                <label for="text">*Item Id:</label>
                <input type='text' class='form-control' placeholder='Enter Item Id' name='itemId'
                  value={itemId} onChange={(e) => setItem_Id(e.target.value)}>
                </input>
                {/* <select name="country" value={country} onChange={handleCountry}>
  {countryNames.map((country, i) => {
    return <option key={i} value={country} onSelect={() => handleCountry(country,i)}>{country}</option>
  })}
</select> */}
              </div>
              <div class="col-3">
                <label for="text">*Item Id:</label>
                <input type='text' class='form-control' placeholder='Enter Item Id' name='itemId'
                  value={itemId} onChange={(e) => setItem_Id(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Tables:</label>
                <input type='text' class='form-control' placeholder='Enter Tables' name='tables'
                  value={tables} onChange={(e) => setTables(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Lights:</label>
                <input type='text' class='form-control' placeholder='Enter Lights' name='lights'
                  value={lights} onChange={(e) => setLights(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Fans:</label>
                <input type='text' class='form-control' placeholder='Enter Fans' name='fans'
                  value={fans} onChange={(e) => setFans(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Ac:</label>
                <input type='text' class='form-control' placeholder='Enter Ac' name='ac'
                  value={ac} onChange={(e) => setAc(e.target.value)}>
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
                  addOrEditInfrastructure(e)}>{title()}</button>
                <Link to="/infrastructures" className='btn btn-danger ms-1'>Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutInfrastructureComponent