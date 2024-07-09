import './App.css';
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import myLocationList from './dataSource/location';
import myApatmentList from './dataSource/apartment';
import myAllTelList from './dataSource/allTelList';

function App() {

  const [dataLocation, setDataLocation] = useState(myLocationList);
  const [dataApartment, setDataApartment] = useState(myApatmentList)

  useEffect(() => {
    
    // setDataLocation(myLocationList.unshift({"Company": "همه موارد"}))
    // setDataLocation
    console.log ("apartmentSelected ----: " , dataLocation.length)
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

  const filter = (event) => {
    event.target.value === "همه موارد" ?
    (setDataApartment(myApatmentList)) :
    (setDataApartment(myApatmentList.filter(item => item.Company===event.target.value)))
    console.log ("select 2: *****" , dataApartment)
  }

  return (
    <div className="container mt-5" dir="rtl">
      <div className='row-sm d-grid gap-2' >
        <select className="form-select mt-1 col-sm" aria-label="Default select example" dir="rtl" onChange={(e) => {filter(e)}}>
          <option key="-1" value="همه موارد">همه موارد</option>
          {dataLocation.length === 0 ? 
          (<option>1</option>)  : 
          (
            dataLocation.map((item, index) => <option key={index} value={item.Company}>{item.Company}</option>)
          )}
        </select>
        <select className="form-select mt-1 col-sm" aria-label="Default select example">
          {/* {dataApartment.map ((item, index) => <option key={index} value={item.Place}>{item.Company+"|"+item.Place}</option>)} */}
          <option key="-1" value="همه موارد">همه موارد</option>
          {dataApartment.map((item, index) => <option key={index} value={item.Place}>{item.Company + "|" + item.Place}</option>)}
        </select>
        <button title="tester" className="btn btn-primary col-default mt-1 col-sm"
          onClick={() => {
            alert(dataApartment);
          }}
        >
          test
        </button>
      </div>
    </div>
  );
}

export default App;
