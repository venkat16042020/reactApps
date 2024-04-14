import React, { useState } from 'react';

import { createStudent } from '../Services/StudentSrervices';

const Student = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    course: '',
    section: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createStudent(formData);
      console.log(response.data);
      setFormData({
        Id: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        course: '',
        section: ''
      });
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  const handleClear = () => {
    setFormData({
      Id: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      course: '',
      section: ''
    });
  };

  return (
    <div>
      <h4>Add Student</h4>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          <div>
          <label style={{ fontWeight: 'bold' }}>Id</label> <br/>
            <input type="text" name="studentId" value={formData.Id} onChange={handleChange}  style={{ width: '250px' }} placeholder='Enter your ID'/>
          </div>
          <div>
          <label style={{ fontWeight: 'bold' }}>First Name</label> <br/>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} style={{ width: '250px' }} placeholder='Enter Your First Name' />
          </div>
          <div>
          <label style={{ fontWeight: 'bold' }}>Last Name</label> <br/>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} style={{ width: '250px' }} placeholder='Enter Your Last Name' />
          </div>
          <div>
          <label style={{ fontWeight: 'bold' }}>PhoneNumber</label> <br/>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}  style={{ width: '250px' }} placeholder='Enter Your PhoneNumber' />
          </div>
          <div>
            <label style={{fontWeight: 'bold'}}>Address</label><br/>
            <input type="text" name="address" value={formData.address} onChange={handleChange} style={{ width: '250px' }} placeholder='Enter Your Address'/>
          </div>
          <div>
            <label style = {{fontWeight:'bold'}}>Course</label><br/>
            <input type="text" name="course" value={formData.course} onChange={handleChange} style={{ width: '250px' }} placeholder='Enter Tour Course'/>
          </div>
          <div>
            <label style = {{fontWeight: 'bold'}} >Section</label><br/>
            <input type="text" name="section" value={formData.section} onChange={handleChange} style={{ width: '250px' }} placeholder='Enter Youe Section'/>
          </div>
        </div>
        <button type="submit" style={{ marginRight: '8px' }}>Submit</button>
        <button type="button" onClick={handleClear} style={{ backgroundColor: 'red', color: 'white' }}>Clear</button>
      </form>
    </div>
  );
};

export default Student;

