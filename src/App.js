import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
  import Header from './components/Header';
  import India from './components/India';
  import World from './components/World';
  import State from './components/State'
  import {coviData,filterCoviData} from './providers/context'
import { useState } from 'react';
  

function App() {
  const [state, setstate] = useState([]);
  const [filterSate, filtersetState] = useState([]);
  return (
    <filterCoviData.Provider value={{filterSate,filtersetState}}>
    <coviData.Provider value={{state,setstate}}>
   
    <div className='container-fluid'>
    <Router>
         <Header/>
         <Routes>
           
         <Route path='/' element={<World/>}/>
         <Route path="/World" element={<World/>} /> 
         <Route path="/State" element={<State/>} /> 



     

         </Routes>

    </Router>
    </div>
    </coviData.Provider>
    </filterCoviData.Provider>
  );
}

export default App;
