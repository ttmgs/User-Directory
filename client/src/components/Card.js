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
        return  ( 
              <div>





<table id="table" class="table table-dark table-striped">
      
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
<th scope="row">#</th>
<td> {val["first-name"]}  </td>
<td> {val["last-name"]}  </td>
<td> {val["job-position"]}  </td>
  </tr>
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


</tbody>
</table>
</div>


      )      })};










  </div>   
  </div> 
  )};

export default Card;


{/* <table id="table" class="table table-dark table-striped">
      
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


</tbody>
</table> */}


{/* <thead>
<tr>
<th scope="row">#</th>
<td> {val["first-name"]}  </td>
<td> {val["last-name"]}  </td>
<td> {val["job-position"]}  </td>
</tr>
</thead>
</div> */}