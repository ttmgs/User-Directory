import React from "react";
import { useState } from "react";
import JSONDATA from "./data/data.json";



function Card() {

  // setting the state for the search bar
  const [ input, setInput ] = useState("");

  return (
  <div>
    <h1 id="title">EMPLOYEE DIRECTORY</h1>
    <div class="input-group">
    <input type="search" id="input" class="form-control rounded" placeholder="Search" aria-label="Search"
    // event.target almost always represents a dom element. In this case the text entered in the search bar
      aria-describedby="search-addon" onChange={(event) => {
      setInput(event.target.value);
      }} /> 

{/* filter the elements in the original array first then map through the new array */}
      {JSONDATA.filter((val)=> {
        if (input === "") {
          return val;
        } else if (val["first-name"].toLowerCase().includes(input.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return  ( <thead>
                 <tr>
                 <th scope="row">#</th>
                 <td> {val["first-name"]}  </td>
                 <td> {val["last-name"]}  </td>
                 <td> {val["job-position"]}  </td>
                 </tr>
                 </thead>
      )})};

    <button type="button" class="btn btn-outline-primary">search</button>
  </div>    <table id="table" class="table table-dark table-striped">
      
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Job Position</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td id="Magdi">Magdi</td>
          <td>Tiea</td>
          <td id="">Owner</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td id="name">Abdulaziz</td>
          <td>Musa</td>
          <td>Head Manager</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td id="name">Waleed</td>
          <td>Tiea</td>
          <td>Leader</td>
        </tr>



        <tr>
          {/* <th scope="row">4</th>
          <td id="name">Dominic</td>
          <td>Finnegan</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Kafi</td>
          <td>Musa</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Tamsin Rees</td>
          <td>Rees</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Miyah</td>
          <td>Kendall</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Lia</td>
          <td>Robinson</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Brandi</td>
          <td>Sullivan</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Matias</td>
          <td>Rodrigaz</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Siana</td>
          <td> Mcnamara</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Allan</td>
          <td>Walton</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Vivek</td>
          <td>Stamp</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Laura</td>
          <td>Lovell</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Khalid</td>
          <td>Ryder</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Hasnain</td>
          <td>Moody</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Blythe</td>
          <td>Krueger</td>
          <td>Employee</td>
        </tr>
        <tr> */}
          {/* <th scope="row">3</th>
          <td>Samira</td>
          <td>Buxton</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Caiden</td>
          <td>Donaldson</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cameron</td>
          <td>Easton</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Nakita</td>
          <td>Mcneill</td>
          <td>Employee</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Rojin</td>
          <td>Camacho</td>
          <td>Employee</td> */}
        </tr>
      </tbody>
    </table>
  </div> 
  )};

export default Card;
