
import React, { useEffect, useState,useCallback, useContext } from "react";
import axios from "axios";
import { coviData,filterCoviData } from "../providers/context";


function World(){
    const {state,setstate} = useContext(coviData);
    const {filterSate,filtersetState} = useContext(filterCoviData);
  

 
    useEffect((e) => {
     
       const options = {
           method: 'GET',
           url: 'https://api.covid19api.com/summary',
           params: {country: 'India'},
           headers: {
             'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
             'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
           }
         };
         
         axios.request(options).then(function (response) {
          setstate(response.data.Countries)
          filtersetState(response.data.Countries)
         }).catch(function (error) {
             console.error(error);
         });
       
    
    }, []);
    console.log(state)
   return(
       <div className="row">
           <div className="col-md-12">
               <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Country</th>
      <th scope="col">New Cases</th>
      <th scope="col">New deaths</th>
      <th scope="col">Total confirmed</th>
      <th scope="col">TotalDeaths</th>
    </tr>
  </thead>
  <tbody>
  {filterSate.map((item,key)=>{

               return(
                <tr>
                <th scope="row">{key+1}</th>
                <td>{item.Country}</td>
                <th scope="row">{item.NewConfirmed}</th>
                <th scope="row">{item.NewDeaths}</th>
                <td>{item.TotalConfirmed}</td>
                <td>{item.TotalDeaths}</td>
              </tr>
               )
           })}
  
  
  </tbody>
</table>
           
           </div>
       </div>
   )
}export default World;
