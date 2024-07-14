import './App.css';
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import myLocationList from './dataSource/location';
import myApatmentList from './dataSource/apartment';
import myAllTelList from './dataSource/allTelList';

import TableSearch from './tableSearch';

function App() {

  const newLocationList = [{ "Company": "همه موارد" }, ...myLocationList]
  const newApartmentList = [{ "Company": "همه موارد", "Place": "همه موارد" }, ...myApatmentList]
  // console.log("locationSelected --++++--: ", myLocationList)
  // console.log("locationSelected --++++--: ", newLocationList)

  const [dataLocation, setDataLocation] = useState(newLocationList);
  const [dataApartment, setDataApartment] = useState(newApartmentList)
  const [dataAllTelList, setDataAllTelList] = useState(myAllTelList)
  const [select1Value, setSelect1Value] = useState("همه موارد")
  const [select2Value, setSelect2Value] = useState("همه موارد")

  useEffect(() => {
    console.log("select 111 value: >>>>>>>>", select1Value)
    console.log("select 222 value: >>>>>>>>", select2Value)
    var flag = "00"
    select1Value === "همه موارد" ? flag = "0" : flag = "1"
    select2Value === "همه موارد" ? flag = flag + "0" : flag = flag + "1"

    console.log("flag: 000000000000", flag)

    var newFilter
    switch (flag) {
      case "00":
        newFilter = myAllTelList;
        break;
      case "01":
        newFilter = myAllTelList.filter(item => (item.Place === select2Value))
        break;
      case "10":
        newFilter = myAllTelList.filter(item => (item.Company === select1Value))
        break;
      case "11":
        newFilter = myAllTelList.filter(item => (item.Company === select1Value && item.Place === select2Value))
        break;
      // default:
      //   break;
    }
    console.log("newFilter: xxxxxxxxxxxxx", newFilter)

    setDataAllTelList(newFilter)

  }, [select1Value, select2Value]);

  const changeFirstSelect = (event) => {
    setSelect1Value(event.target.value)
    setSelect2Value("همه موارد");
    event.target.value === "همه موارد" ?
      (setDataApartment(newApartmentList)) :
      (setDataApartment(newApartmentList.filter(item => (item.Company === (event.target.value) || item.Company === "همه موارد"))))
  }

  const changeSecondSelect = (event) => {
    setSelect2Value(event.target.value)
    // event.target.value === "همه موارد" ?
    //   (setDataApartment(myApatmentList)) :
    //   (setDataApartment(myApatmentList.filter(item => item.Company === event.target.value)))
    // console.log("select 2: *****", dataApartment)
  }

  return (

    <div className="container mt-5" dir="rtl">
      <div className='row-sm col-8 d-grid gap-2' >
        <select className="form-select mt-1 col-8 col-sm" aria-label="Default select example" defaultValue={select1Value} onChange={(e) => { changeFirstSelect(e) }}>
          {dataLocation.length === 0 ?
            (<option>1</option>) :
            (
              dataLocation.map((item, index) =>
                <option key={index} value={item.Company}>
                  {item.Company}
                </option>)
            )}
        </select>
        <select className="form-select mt-1 col-8 col-sm" aria-label="Default select example" value={select2Value} onChange={(e) => { changeSecondSelect(e) }}>
          {dataApartment.map((item, index) =>
            <option key={index} value={item.Place}>
              {item.Place === "همه موارد" ? "همه موارد" : item.Company + "|" + item.Place}
            </option>)}
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
