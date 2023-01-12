import './App.css';
import Home from './components/Home';
import {  Routes, Route } from "react-router-dom";
import Bookings from './components/Bookings';

function App() {
 
  
  return (
    <div className="App">
  
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/bookings' element={<Bookings/>} />
      </Routes>
    
      
     
    
      
    </div>
  );
}

export default App;
