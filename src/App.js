import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';

import Home from '../src/components/Home'
import Persons from '../src/components/Persons'
import Accounts from '../src/components/Accounts'
import Bills from '../src/components/Bills'
import Friends from './components/Friends/Friends';
import Electronics from './components/Electronics/Electronics'
import FamilyMembers from './components/FamilyMembers/FamilyMembers'
import HouseHoldThings from './components/HouseHoldThings/HouseHoldThings'
import Relatives from './components/Relatives/Relatives'
import Vehicles from './components/Vehicles/Vehicles'

function App() {
  return (
    <div className="App">
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/accounts" element={<Accounts />}/>
      <Route path="/bills" element={<Bills/>}/>
      <Route path="/electronics" element={<Electronics/>}/>
      <Route path="/familyMembers" element={<FamilyMembers />}/>
      <Route path="/friends" element={<Friends/>}/>
      <Route path="/persons" element={<Persons/>}/>
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
