import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import RentServices from '../../services/RentServices'
import Header from '../Header/Header'

const PostPutRentComponent = () => {
  const [rent_Id, setRent_Id] = useState('')
  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [advanced, setAdvanced] = useState('')
  const [year, setYear] = useState('')
  const [date, setDate] = useState('')
  const cars = ['Ford', 'BMW', 'Audi'];
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }
  const history1 = useNavigate()
  var { rentId } = useParams()
  var rent = { rentId, address, amount, advanced, year, date }
//   // an array of country names
// const countryNames = ["united states", "united kingdom", "syria", "spain", "mexico"]
// //state
// const [country, setCountry] = useState("");
// function handleCountry({target}){
// setCountry(target.value)
// }
  const addOrEditRent = (e) => {
    e.preventDefault()
    if (rentId) {
      console.log("Editing rent...")
      console.log(rentId)
      console.log(rent)
      RentServices.updateRent(rentId, rent).then(
        (response) => {
          history1('/rent')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      rentId = rentId
      rent = { rentId, address, amount, advanced, year, date }
      console.log(rent)
      RentServices.addRent(rent).then(
        (response) => {
          history1('/rent')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    RentServices.getRentByItemId(rentId).then((response) => {
      setRent_Id(response.data.RentId)
      setAddress(response.data.address)
      setAmount(response.data.amount)
      setAdvanced(response.data.advanced)
      setYear(response.data.year)
      setDate(response.data.date)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const title = () => {
    if (rentId) {
      return "Update Rent"
    } else {
      return "Add Rent"
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
                <label for="text">*Rent Id:</label>
                <input type='text' class='form-control' placeholder='Enter Rent Id' name='rentId'
                  value={rentId} onChange={(e) => setRent_Id(e.target.value)}>
                </input>
                {/* <select name="country" value={country} onChange={handleCountry}>
  {countryNames.map((country, i) => {
    return <option key={i} value={country} onSelect={() => handleCountry(country,i)}>{country}</option>
  })}
</select> */}
              </div>
              <div class="col-3">
                <label for="text">*Address:</label>
                <input type='text' class='form-control' placeholder='Enter Address' name='address'
                  value={address} onChange={(e) => setAddress(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Amount:</label>
                <input type='text' class='form-control' placeholder='Enter Amount' name='amount'
                  value={amount} onChange={(e) => setAmount(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Advanced:</label>
                <input type='text' class='form-control' placeholder='Advanced' name='advanced'
                  value={advanced} onChange={(e) => setAdvanced(e.target.value)}>
                </input>
              </div>
            </div>
            <div class="row mt-3 mb-3">
              <div class="col-3">
                <label for="text">Year:</label>
                <input type='text' class='form-control' placeholder='Enter Year' name='year'
                  value={year} onChange={(e) => setYear(e.target.value)}>
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
                  addOrEditRent(e)}>{title()}</button>
                <Link to="/rent" className='btn btn-danger ms-1'>Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutRentComponent