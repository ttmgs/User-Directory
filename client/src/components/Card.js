import React from "react";
import { useState } from "react";
import JSONDATA from "./data/data.json";
import Wrapper from "./wrapper/wrapper";


function Card() {

  // setting the state for the search bar
  const [ input, setInput ] = useState("");

  return (
  <div>
    <h1 id="title">EMPLOYEE DIRECTORY</h1>

    {/* wrapping the search bar in a wrapper so it doesnt interfere with other elements */}
    <Wrapper>
    <div class="input-group">
    <input type="search" id="input" class="form-control rounded" placeholder="Search" aria-label="Search"
    // event.target almost always represents a dom element. In this case the text entered in the search bar
      aria-describedby="search-addon" onChange={(event) => {
      setInput(event.target.value);
      }} /> 
</div>
  </Wrapper>

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


{/* persons table */}
<table id="table" class="table table-dark table-striped">
      
      {/* basically the state for the persons table */}
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Job Position</th>
  </tr>
</thead>

{/* grabs the value strings from the db */}
{/* outputs each persons info into the table */}
<tbody>
<tr>
<th scope="row">{val["number"]}</th>
<td> {val["first-name"]}  </td>
<td> {val["last-name"]}  </td>
<td> {val["job-position"]}  </td>
  </tr>


</tbody>
</table>

</div>


      )})};


  </div> 
  )};

export default Card;


































