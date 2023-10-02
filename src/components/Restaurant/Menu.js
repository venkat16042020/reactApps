import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuServices from '../../services/MenuServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const MenuComponent = () => {
  const [menu, setMenu] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = menu.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(menu.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  useEffect(() => {
    setCurrentPage(1)
    MenuServices.getAllMenu().then((response) => {
      setMenu(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Menu</h2>

      <div className="float-right">
        <Link to="/addMenuItem" className='btn btn-primary mb-2' >Add MenuItem</Link>
      </div>
      <div>
      </div>
      <table id='tblkv1'>
        <thead>
          <tr>
            <th>Menu Id</th>
            <th>Item Id</th>
            <th>Item Name</th>
            <th>Number of Items Available</th>
            <th>Date</th>
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
              menuItemMapObj =>
                <tr key={menuItemMapObj.itemId}>
                  <td>{menuItemMapObj.menuId}</td>
                  <td>{menuItemMapObj.itemId}</td>
                  <td>{menuItemMapObj.itemName}</td>
                  <td>{menuItemMapObj.numberOfItemsAvailable}</td>
                  <td>{menuItemMapObj.date}</td>
                  <td>{menuItemMapObj.cost}</td>
                  <td>{menuItemMapObj.cGst}</td>
                  <td>{menuItemMapObj.sGst}</td>
                  <td>{menuItemMapObj.totalGst}</td>
                  <td>{menuItemMapObj.totalCost}</td>
                  <td>
                    <Link className='btn btn-success ms-1' to={`/updateMenu/${menuItemMapObj.itemId}`}>Update</Link>
                    <Link className='btn btn-danger ms-1' to={`/deleteMenu/${menuItemMapObj.itemId}`}>Delete</Link>
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
          numbers.map((n, i) => (
            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
              <a href='#' className='page-link'
                onClick={() => changeCPage(n)
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
  function perPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1)
    }
  }

}

export default MenuComponent