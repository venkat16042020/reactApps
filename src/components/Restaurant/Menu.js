
// App.js
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuServices from '../../services/MenuServices'
import Header from '../Header/Header'
import '../../css/abc.css'
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search, CSVExport} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import {paginationFn} from'../KlnReactLibs/KLN_Lib'
import paginationFactory from 'react-bootstrap-table2-paginator';
const { ExportCSVButton } = CSVExport;

const MenuComponent = () => {
  const { SearchBar, ClearSearchButton } = Search
  const [data, setData] = useState([])

  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="btn btn-success" onClick={handleClick}>Export to CSV</button>
      </div>
    );
  };
  useEffect(() => {
    getData()
    console.log("999")
    console.log(data)
  }, [])
  const getData = () => {
    MenuServices.getAllMenu().then((response) => {
      setData(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  }
  const index = 0
  const columns = [
    { dataField: 'sl.no', text: 'Sl no.', 
    formatter: (cell, row, rowIndex, formatExtraData) => { return rowIndex + 1; }, sort: true, },
    { dataField: 'menuId', text: "Menu Id", sort: true },
  { dataField: "itemId", text: "Item Id", sort: true },
  { dataField: "itemName", text: "Item Name", sort: true },
  { dataField: "date", text: "Date", sort: true },
  { dataField: "numberOfItemsAvailable", text: "Number Of Items Available", sort: true },
  { dataField: "stateGst", text: "state Gst", sort: true },
  { dataField: "centralGst", text: "central Gst", sort: true },
  { dataField: "cost", text: "cost", sort: true },
  { dataField: "totalGst", text: "total Gst", sort: true },
  { dataField: "totalCost", text: "total Cost", sort: true }
  ];
  const defaultSorted = [{
    dataField: 'menuId',
    order: 'desc'
  }];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 3,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
      // setRowIndex(rowIndex+1)
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
      // setRowIndex(rowIndex+1)
    }
  });

  return (
    <div className="Container">
   <Header></Header>
      <br></br>
      <h2 className='text-center'>Menu Items <Link to="/addMenuItem" className='btn btn-primary mb-2' >Add Menu Item</Link></h2>
  
      <ToolkitProvider
        bootstrap4
        keyField='menuId'
        data={data}
        columns={columns}
        search
        exportCSV
      >
        {
          props => (
            <div>
              <SearchBar {...props.searchProps} />
              <ClearSearchButton {...props.searchProps} />
              <hr />
              <MyExportCSV {...props.csvProps} />

              <BootstrapTable
                defaultSorted={defaultSorted}
                pagination={pagination}
                {...props.baseProps}
              />
            </div>
          )
        }
      </ToolkitProvider>

    </div>
  );
}

export default MenuComponent