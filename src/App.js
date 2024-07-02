import './App.css';
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import myLocationList from './dataSource/location';
import myApatmentList from './dataSource/apartment';

function App() {

  const [building, setBuilding] = useState(0);  
  const [dataLocation, setDataLocation] = useState(myLocationList);
  const [dataApartment, setDataApartment] = useState(myApatmentList)
  const [apartmentFilteredList, setApartmentFilteredList] = useState()

  var myLocationSelected = "پدیدار"

  useEffect(() => {
    // const dataFetch = async () => {
    //   const data = await (
    //     await fetch("./dataSource/apartment.json"));
    //   console.log("my data:", data);
    //   setDataApartment(data);
    // };

    // dataFetch();
    const filter = dataApartment.filter((item) => item.Company === myLocationSelected);
    setApartmentFilteredList(filter);

    console.log("my filter:", filter);

  }, [apartmentFilteredList]);

   function filter () {

  }

  return (
    <div class="container mt-5" dir="rtl">
      <div className='row' >
      <select class="form-select mt-1" aria-label="Default select example" onChange={e => setApartmentFilteredList(e.target.value)}>
        {dataLocation.map ((item, index) => <option key={index} value={item.Company}>{item.Company}</option>)}
      </select>
      <select class="form-select mt-1" aria-label="Default select example">
        {dataApartment.map ((item, index) => <option key={index} value={item.Place}>{item.Company+"|"+item.Place}</option>)}
      </select>
      <button title="tester" class="btn btn-primary mt-1" 
        onClick={() => {
          alert("1");
        }}
      >
        test
      </button>
      </div>
    </div>
  );
}

export default App;
