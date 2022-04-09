import React, { useState,useContext, useEffect } from "react";
import{Card} from "react-bootstrap"
import axios from "axios";

function India(){

  const [coviData, setcoviData] = useState([]);
  useEffect((e) => {
  
    axios.get("https://api.rootnet.in/covid19-in/stats/history").then(Response=>{
      console.log(Response.data)
    })
    
  }, []);
  console.log(coviData)

  

    return(
        <div className="row">
            <div>
                <img className="indiaFlag" src="https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png" alt="" />
                <h1>India</h1>
            </div>
        <div className="container col-md-12">
            <div className="row  ">
           
         
             
                  <div className="col-md-3">
            
                  <Card style={{ width: '18rem' }}>
                  <Card.Body className="Card bg-primary">
                  <Card.Title>Total cases</Card.Title>
                        <h4></h4>
                         <Card.Text>
                         [today:25]
                       </Card.Text>
                         </Card.Body>
                                       </Card></div>
                 
         


          
        </div></div> 
                   
         </div>
    )
}export default India ;