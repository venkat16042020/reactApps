import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { StrictMode } from 'react';

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
import PostPutMenuItemComponent from './components/Restaurant/AddOrUpdateMenu'
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

import StockComponent from './components/Restaurant/Stock'
import PostPutStockComponent from './components/Restaurant/AddOrUpdateStock';
import DeleteStockComponent from './components/Restaurant/DeleteStock';

import InfrastructureComponent from './components/Restaurant/Infrastructure'
import PostPutInfrastructureComponent from './components/Restaurant/AddOrUpdateInfrastructure';
import DeleteInfrastructureComponent from './components/Restaurant/DeleteMenu';

import RentComponent from './components/Restaurant/Rent'
import PostPutRentComponent from './components/Restaurant/AddOrUpdateRent'
import DeleteRentComponent from './components/Restaurant/DeleteRent';

import AdminComponent from './components/OngolePublicSchool/Admin'
import PostPutAdminComponent from './components/OngolePublicSchool/AddOrUpdateAdmin'
import DeleteAdminComponent from './components/OngolePublicSchool/DeleteAdmin'

import AttendanceComponent from './components/OngolePublicSchool/Attendance'
import PostPutAttendanceComponent from './components/OngolePublicSchool/AddOrUpdateAttendance'
import DeleteAttendanceComponent from './components/OngolePublicSchool/DeleteAttendance'

import StudentsComponent from './components/OngolePublicSchool/Students'
import PostPutStudentsComponent from './components/OngolePublicSchool/AddOrUpdateStudents'
import DeleteStudentsComponent from './components/OngolePublicSchool/DeleteStudents'

import StaffComponent from './components/OngolePublicSchool/Staff'
import PostPutStaffComponent from './components/OngolePublicSchool/AddOrUpdateStaff'
import DeleteStaffComponent from './components/OngolePublicSchool/DeleteStaff'

import NonStaffComponent from './components/OngolePublicSchool/NonStaff'
import PostPutNonStaffComponent from './components/OngolePublicSchool/AddOrUpdateNonStaff'
import DeleteNonStaffComponent from './components/OngolePublicSchool/DeleteNonStaff'

import ClassesComponent from './components/OngolePublicSchool/Classes'
import PostPutClassesComponent from './components/OngolePublicSchool/AddOrUpdateClasses'
import DeleteClassesComponent from './components/OngolePublicSchool/DeleteClasses'


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/familyMembers" element={<FamilyMembers />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/persons" element={<Persons />} />
            <Route path="/addPerson" element={<PostPutPersonComponent />} />
            <Route path="/updatePerson/:personId" element={<PostPutPersonComponent />} />
            <Route path="/deletePerson/:personId" element={<DeletePerson />} />

            <Route path="/accounts" element={<Accounts />} />
            <Route path="/addAccount" element={<PostPutAccountComponent />} />
            <Route path="/updateAccount/:accountId" element={<PostPutAccountComponent />} />
            <Route path="/deleteAccount/:accountId" element={<DeleteAccountComponent />} />

            <Route path="/houseHoldThings" element={<HouseHoldThings />} />
            <Route path="/persons" element={<Persons />} />
            <Route path="/relatives" element={<Relatives />} />
            <Route path="/vehicles" element={<Vehicles />} />

            <Route path="/menus" element={<MenuItemsComponent />} />
            <Route path="/addMenuItem" element={<PostPutMenuItemComponent />} />
            <Route path="/updateMenu/:itemId" element={<PostPutMenuItemComponent />} />
            <Route path="/deletemenu/:itemId" element={<DeleteMenuItemComponent />} />

            <Route path="/order" element={<OrderComponent />} />
            <Route path="/addorder" element={<PostPutOrderComponent />} />
            <Route path="/updateorder/:orderId" element={<PostPutOrderComponent />} />
            <Route path="/deleteorder/:orderId" element={<DeleteOrderComponent />} />

            <Route path="/feedback" element={<FeedbackComponent />} />
            <Route path="/addFeedback" element={<PostPutFeedbackComponent />} />
            <Route path="/updateFeedback/:feedbackId" element={<PostPutFeedbackComponent />} />
            <Route path="/deleteFeedback/:feedbackId" element={<DeleteFeedbackComponent />} />

            <Route path="/bills" element={<BillComponent />} />
            <Route path="/addBill" element={<PostPutBillComponent />} />
            <Route path="/updateBill/:billId" element={<PostPutBillComponent />} />
            <Route path="/deleteBill/:billId" element={<DeleteBillComponent />} />

            <Route path="/stock" element={<StockComponent />} />
            <Route path="/addStock" element={<PostPutStockComponent />} />
            <Route path="/updateStock/:stockId" element={<PostPutStockComponent />} />
            <Route path="/deletestock/:stockId" element={<DeleteStockComponent />} />

            <Route path="/infrastructure" element={<InfrastructureComponent />} />
            <Route path="/addInfrastructure" element={<PostPutInfrastructureComponent />} />
            <Route path="/updateInfrastructure/:itemId" element={<PostPutInfrastructureComponent />} />
            <Route path="/deleteinfrastructure/:itemId" element={<DeleteInfrastructureComponent />} />

            <Route path="/rent" element={<RentComponent />} />
            <Route path="/addRent" element={<PostPutRentComponent />} />
            <Route path="/updateRent/:rentId" element={<PostPutRentComponent />} />
            <Route path="/deleterent/:rentId" element={<DeleteRentComponent />} />

            <Route path="/admin" element={<AdminComponent />} />
            <Route path="/addAdmin" element={<PostPutAdminComponent />} />
            <Route path="/updateAdmin/:adminId" element={<PostPutAdminComponent />} />
            <Route path="/deleteadmin/:adminId" element={<DeleteAdminComponent />} />
          
            <Route path="/attendance" element={<AttendanceComponent />} />
            <Route path="/addAttendance" element={<PostPutAttendanceComponent />} />
            <Route path="/updateAttendance/:attendanceId" element={<PostPutAttendanceComponent />} />
            <Route path="/deleteattendance/:attendanceId" element={<DeleteAttendanceComponent />} />

            <Route path="/students" element={<StudentsComponent />} />
            <Route path="/addStudents" element={<PostPutStudentsComponent />} />
            <Route path="/updateStudents/:studentsId" element={<PostPutStudentsComponent />} />
            <Route path="/deletestudents/:studentsId" element={<DeleteStudentsComponent />} />

            <Route path="/staff" element={<StaffComponent />} />
            <Route path="/addStaff" element={<PostPutStaffComponent />} />
            <Route path="/updateStaff/:staffsId" element={<PostPutStaffComponent />} />
            <Route path="/deletestaffs/:staffsId" element={<DeleteStaffComponent />} />

            <Route path="/nonStaff" element={<NonStaffComponent />} />
            <Route path="/addNonStaff" element={<PostPutNonStaffComponent />} />
            <Route path="/updateNonStaff/:nonstaffsId" element={<PostPutNonStaffComponent />} />
            <Route path="/deleteNonstaffs/:nonstaffsId" element={<DeleteNonStaffComponent />} />

            <Route path="/classes" element={<ClassesComponent />} />
            <Route path="/addClasses" element={<PostPutClassesComponent />} />
            <Route path="/updateClasses/:classesId" element={<PostPutClassesComponent />} />
            <Route path="/deleteslasses/:classesId" element={<DeleteClassesComponent />} />           
          </Routes>
        </BrowserRouter>
      </div>
  );
}
// hello
export default App;
