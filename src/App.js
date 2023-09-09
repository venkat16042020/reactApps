import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';

import Home from '../src/components/Home'
import Persons from '../src/components/Persons'
import Bills from '../src/components/Bills'
import Friends from './components/Friends/Friends';
import Electronics from './components/Electronics/Electronics'
import FamilyMembers from './components/FamilyMembers/FamilyMembers'
import HouseHoldThings from './components/HouseHoldThings/HouseHoldThings'
import Relatives from './components/Relatives/Relatives'
import Vehicles from './components/Vehicles/Vehicles'
import PostPutPersonComponent from './components/Persons/AddOrEditPerson';
import DeletePerson from './components/Persons/DeletePerson';

import Accounts from '../src/components/Accounts'
import PostPutAccountComponent from './components/Accounts/AddOrEditAccount';
import DeleteAccountComponent from './components/Accounts/DeleteAccount';

function App() {
  return (
    <div className="App">
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/bills" element={<Bills/>}/>
      <Route path="/electronics" element={<Electronics/>}/>
      <Route path="/familyMembers" element={<FamilyMembers />}/>
      <Route path="/friends" element={<Friends/>}/>
      <Route path="/persons" element={<Persons/>}/>
      <Route path="/addPerson" element={<PostPutPersonComponent/>}/>
      <Route path="/updatePerson/:personId" element={<PostPutPersonComponent/>}/>
      <Route path="/deletePerson/:personId" element={<DeletePerson/>}/>
      
      <Route path="/accounts" element={<Accounts/>}/>
      <Route path="/addAccount" element={<PostPutAccountComponent/>}/>
      <Route path="/updateAccount/:accountId" element={<PostPutAccountComponent/>}/>
      <Route path="/deleteAccount/:accountId" element={<DeleteAccountComponent/>}/>

      <Route path="/houseHoldThings" element={<HouseHoldThings />}/>
      <Route path="/persons" element={<Persons/>}/>
      <Route path="/relatives" element={<Relatives/>}/>
      <Route path="/vehicles" element={<Vehicles/>}/>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
