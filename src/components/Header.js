
import { Nav,Navbar,Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { useContext, useEffect, useState } from "react"
import { coviData,filterCoviData } from "../providers/context";



function Header(){
  const {state} = useContext(coviData);
  const {filterSate,filtersetState} = useContext(filterCoviData);

 



  const searchkey=(e)=>{
     console.log(e.target.value)
     filtersetState(state.filter((item) => {
       return item.Country.toLowerCase().includes(e.target.value.toLowerCase())
  }))
  }

    return(
        <div>

            <Navbar text="text-white" bg="secondary" expand="lg">
  <Container>
    <Navbar.Brand href="#home">COVID_19</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
       
       <Link className="navLink"  to="/world">world</Link>
<input onChange={searchkey} className="justify-content-end" type="text" placeholder="Search" />

       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


        </div>
    )
}export default Header;