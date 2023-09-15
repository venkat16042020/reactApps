import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';

import Home from '../src/components/Home'
import Persons from '../src/components/Persons'
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

import MenuItemsComponent from './components/Restaurant/Menu'
import PostPutMenuItemComponent from './components/Restaurant/AddUpdateMenu'
import DeleteMenuItemComponent from './components/Restaurant/DeleteMenu';

import OrderComponent from './components/Restaurant/Orders'
import PostPutOrderComponent from './components/Restaurant/AddOrUpdateOrder';
import DeleteOrderComponent from './components/Restaurant/DeleteOrder';

import FeedbackComponent from '../src/components/Restaurant/Feedback'
import PostPutFeedbackComponent from './components/Restaurant/AddOrUpdateFeedback';
import DeleteFeedbackComponent from './components/Restaurant/DeleteFeedback';

import BillComponent from '../src/components/Restaurant/Bill'
import PostPutBillComponent from './components/Restaurant/AddOrEditBill';
import DeleteBillComponent from './components/Restaurant/DeleteBill';



function App() {
  return (
    <div className="App">
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
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

      <Route path="/menus" element={<MenuItemsComponent/>}/>
      <Route path="/addMenuItem" element={<PostPutMenuItemComponent/>}/>
      <Route path="/updateMenuItems/:itemId" element={<PostPutMenuItemComponent/>}/>
      <Route path="/deletemenuItems/:itemId" element={<DeleteMenuItemComponent/>}/>

      <Route path="/order" element={<OrderComponent/>}/>
      <Route path="/addorder" element={<PostPutOrderComponent/>}/>
      <Route path="/updateorder/:orderId" element={<PostPutOrderComponent/>}/>
      <Route path="/deleteorder/:orderId" element={<DeleteOrderComponent/>}/>

      <Route path="/feedback" element={<FeedbackComponent/>}/>
      <Route path="/addFeedback" element={<PostPutFeedbackComponent/>}/>
      <Route path="/updateFeedback/:feedbackId" element={<PostPutFeedbackComponent/>}/>
      <Route path="/deleteFeedback/:feedbackId" element={<DeleteFeedbackComponent/>}/>

      <Route path="/bills" element={<BillComponent/>}/>
      <Route path="/addBill" element={<PostPutBillComponent/>}/>
      <Route path="/updateBill/:billId" element={<PostPutBillComponent/>}/>
      <Route path="/deleteBill/:billId" element={<DeleteBillComponent/>}/>

      

      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
