import './App.css';
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import myLocationList from './dataSource/location';
import myApatmentList from './dataSource/apartment';
import myAllTelList from './dataSource/allTelList';

import TableSearch from './tableSearch';

function App() {

  const [dataLocation, setDataLocation] = useState(myLocationList);
  const [dataApartment, setDataApartment] = useState(myApatmentList)
  const [dataAllTelList, setDataAllTelList] = useState(myAllTelList)

  useEffect(() => {

    // setDataLocation(myLocationList.unshift({"Company": "همه موارد"}))
    // setDataLocation
    console.log("apartmentSelected ----: ", dataLocation.length)
    // const dataFetch = async () => {
    //   const data = await (
    //     await fetch("./dataSource/apartment.json"));
    //   console.log("my data:", data);
    //   setDataApartment(data);
    // };

    // dataFetch();
    // const filtered = dataApartment.filter((item) => item.Company === myLocationSelected);
    // setApartmentSelected(filtered);

  }, []);

  const changeFirstSelect = (event) => {
    event.target.value === "همه موارد" ?
      (setDataApartment(myApatmentList)) :
      (setDataApartment(myApatmentList.filter(item => item.Company === event.target.value)))
    console.log("select 2: *****", dataApartment)
  }

  const changeSecondSelect = (event) => {
    // event.target.value === "همه موارد" ?
    //   (setDataApartment(myApatmentList)) :
    //   (setDataApartment(myApatmentList.filter(item => item.Company === event.target.value)))
    // console.log("select 2: *****", dataApartment)
  }

  return (

    <div className="container mt-5" dir="rtl">
      <div className='row-sm col-8 d-grid gap-2' >
        <select className="form-select mt-1 col-8 col-sm" aria-label="Default select example" onChange={(e) => { changeFirstSelect(e) }}>
          <option key="-1" value="همه موارد">همه موارد</option>
          {dataLocation.length === 0 ?
            (<option>1</option>) :
            (
              dataLocation.map((item, index) => <option key={index} value={item.Company}>{item.Company}</option>)
            )}
        </select>
        <select className="form-select mt-1 col-8 col-sm" aria-label="Default select example" onChange={(e) => { changeSecondSelect(e) }}>
          {/* {dataApartment.map ((item, index) => <option key={index} value={item.Place}>{item.Company+"|"+item.Place}</option>)} */}
          <option key="-1" value="همه موارد">همه موارد</option>
          {dataApartment.map((item, index) => <option key={index} value={item.Place}>{item.Company + "|" + item.Place}</option>)}
        </select>
        <button title="tester" className="btn btn-primary col-default mt-1 col-4 col-sm"
          onClick={(e) => {
            // filterTableData;
            alert(dataApartment);
          }}
        >
          جستجو کن
        </button>
      </div>
      <div className='row-sm'>
        <TableSearch allList={dataAllTelList} />
      </div>
    </div>

  );
}

export default App;
