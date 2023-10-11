import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuServices from '../../services/MenuServices'
import Header from '../Header/Header'
import '../../css/abc.css'
import BootstrapTable from 'react-bootstrap-table-next';

const MenuComponent = () => {
  const [data, setData] = useState([])

  useEffect(() => {
   getData()
  }, [])
  const getData = () =>{
    MenuServices.getAllMenu().then((response) => {
      setData(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  }
  const columns = [{dataFiled: 'menuId', text: "Menu Id", sort: true},
                    {dataFiled: "itemId", text: "Item Id"},
                    {dataFiled: "itemName", text: "Item Name"},
                    {dataFiled: "date", text: "Date"},
                    {dataFiled: "numberOfItemsAvailable", text: "Number Of Items Available"},
                    {dataFiled: "stateGst", text: "state Gst"},
                    {dataFiled: "centralGst", text: "central Gst"},
                    {dataFiled: "cost", text: "cost"},
                    {dataFiled: "totalGst", text: "total Gst"},
                    {dataFiled: "totalCost", text: "total Cost"}
                  ];
  return (
    <div>
  <BootstrapTable  
  bootstrap4
        keyField={'menuId'}
        data={data}
        columns={columns} 
        responsive = {true}
        condensed
        hover/>
 </div>
  )

}

export default MenuComponent