import React from "react";
import Button from "react-bootstrap/Button";
import { Bootstrap } from "react-bootstrap-icons";
import "./Booking.css";

function Bookings() {
  return (
    <div className="main d-flex align-items-center min-vh-120 justify-content-center sm-6">
      <div class="row ">
      <div className="tag">
       <h1>HOPSITAL</h1>
        <br />
        BOOK YOUR SLOT HERE
        </div>
        <form>
          <div className="form">
            {/* <div className="title"><h1 >HOSPITAL</h1>
            <br />
            <p>BOOK YOUR SLOT HERE</p></div>
             */}


            <div class="form-group">
              
              <label for="email">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your name here"
                id="email"
              ></input>

              <label for="email">Place</label>
              <input
                type="text"
                placeholder="Enter your place here"
                class="form-control"
                id="email"
              ></input>

              <label for="email">Phone number</label>
              <input
                type="text"
                placeholder="Enter your number here"
                class="form-control"
                id="email"
              ></input>

              <label for="email">Age</label>
              <input type="number" class="form-control" id="email"></input>
            </div>
          </div>
          
          <br />
          <div className="select">
          <select name = "dropdown">
            <option value = "#" selected>Select doctor</option>
            <option value = "Shibil">Dr.Shibil</option>
            <option value = "Dhanish">Dr.Dhanish</option>
            <option value = "Salih">Dr.Salih</option>
            <option value = "Salim">Dr.Salim</option>
            </select>
            </div>

          <div className="btn d-flex justify-content-center">
            <button type="submit" class="btn btn-warning">
              Book slot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Bookings;
