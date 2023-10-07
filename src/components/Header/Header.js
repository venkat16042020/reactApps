import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <h1>KLN HOTELS</h1>
      <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active"><Link class="nav-link text-dark" to="/Home">Home</Link></li>
      <li class="nav-item active"><Link class="nav-link text-dark" to="/Accounts">Accounts</Link></li>
      <li class="nav-item active"><Link class="nav-link text-dark" to="/Bills">Bills</Link></li>
      {/* <li class="nav-item active"><Link class="nav-link text-dark" to="/Electornics">Electornics</Link></li> */}
      {/* <li class="nav-item active"><Link class="nav-link text-dark" to="/FamilyMembers">FamilyMembers</Link></li> */}
      {/* <li class="nav-item active"><Link class="nav-link text-dark" to="/Friends">Friends</Link></li> */}
      {/* <li class="nav-item active"><Link class="nav-link text-dark" to="/HouseHoldThings">HouseHoldThings</Link></li> */}
      <li class="nav-item active"><Link class="nav-link text-dark" to="/Persons">Persons</Link></li>
      <li class="nav-item active"><Link class="nav-link text-dark" to="/menus">Menu</Link></li>
      <li class="nav-item active"><Link class="nav-link text-dark" to="/order">Order</Link></li>
      <li class="nav-item active"><Link class="nav-link text-dark" to="/stock">Stock</Link></li>
      <li class="nav-item active"><Link class="nav-link text-dark" to="/infrastructure">Infrastucture</Link></li>
      <li class="nav-item active"><Link class="nav-link text-dark" to="/rent">Rent</Link></li>
      <li class="nav-item active"><Link class="nav-link text-dark" to="/feedback">Feedback</Link></li>
      
      <li class="nav-item active"><Link class="nav-link text-dark" to="/admin">Admin</Link></li>
      <li class="nav-item active"><Link class="nav-link text-dark" to="/attendance">Attendance</Link></li>
      <li class="nav-item active"><Link class="nav-link text-dark" to="/students">Students</Link></li>
      <li class="nav-item active"><Link class="nav-link text-dark" to="/staff">Staff</Link></li>
      <li class="nav-item active"><Link class="nav-link text-dark" to="/nonstaff">NonStaff</Link></li>
      <li class="nav-item active"><Link class="nav-link text-dark" to="/classes">Classes</Link></li>
      
      {/* <li class="nav-item active"><Link class="nav-link text-dark" to="/Assets">Assets</Link></li> */}
      {/* <li class="nav-item active"><Link class="nav-link text-dark" to="/Money">Money</Link></li> */}

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    </form>
  </div>
</nav>
      </header>

    </div>
  )
}

export default Header