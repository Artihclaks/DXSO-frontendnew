import React from "react";
import './req.css';
import { useState,useEffect } from "react";

function Requirement(){

    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
      const today = new Date();
      const formatedDate = today.toISOString().substr(0, 10);
      setCurrentDate(formatedDate);
    }, []);

    return(
        <div class="custom-container">
            <center>

            <h3  class=" w-25 rounded">ACE Electricals Planning</h3><br></br>
            <div class="card w-50 custom-card">
            <div class="title"><h4>REQUIREMENTS</h4></div>
            <div class="card-body custom-cardbdy">
            <center>
            <form class="needs-validation" noValidate>
                <div class="form-group row">
                    <label for="inputDate" class="col-sm-5 col-form-label custom-field">Date</label>
                    <div class="col-sm-5">
                        <input type="date" class="form-control custom-textfld" id="inputDate" placeholder="Date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} required />
                    </div>
                </div><br></br>

                <div class="form-group row">
                <label for="inputOrderNumber" class="col-sm-5 col-form-label custom-field">Order Number</label>
                <div class="col-sm-5">
                    <input type="number" class="form-control custom-textfld" id="inputOrderNumber" placeholder="AC20UCS000" required/>
                </div>
                </div><br></br>

                <div class="form-group row">
                <label for="inputCustomerName" class="col-sm-5 col-form-label custom-field">Customer Name</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control custom-textfld" id="inputCustomerName" placeholder="Name" required/>
                </div>
                </div><br></br>

                <div class="form-group row">
                <label for="inputPlannerName" class="col-sm-5 col-form-label custom-field">Planner Name</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control custom-textfld" id="inputPlannerName" placeholder="Name" required/>
                </div>
                </div><br></br>

                <div class="form-group row">
                <label for="inputDeadline" class="col-sm-5 col-form-label custom-field">Dead-line</label>
                <div class="col-sm-5">
                    <input type="date" class="form-control custom-textfld" id="inputDeadline" placeholder=" " required/>
                </div>
                </div><br></br>

                <div class="form-group row">
                <label for="inputBatchControl" class="col-sm-5 col-form-label custom-field">Batch Control</label>
                <div class="col-sm-5">
                    <input type="number" class="form-control custom-textfld" id="inputBatchControl" placeholder="0" required/>
                </div>
                </div><br></br>

                <div class="form-group row">
                <label for="inputQuantity" class="col-sm-5 col-form-label custom-field">Quantity</label>
                <div class="col-sm-5">
                    <input type="number" class="form-control custom-textfld" id="inputQuantity" placeholder="0" required/>
                </div>
                </div><br></br>

                <div class="form-group row">
                <label for="inputPartNO" class="col-sm-5 col-form-label custom-field">Part Number</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control custom-textfld" id="inputPartNO" placeholder="AC20UCS---" required/>
                </div>
                </div><br></br>

            </form>
            </center>
            </div>
            <footer>
                <div class="form-group row"><center>
                    <button class="btn btn-block custom-btn " style={{width: '150px', backgroundColor: '#5E7D7E'}} type="submit"><b>Make Plan</b></button></center>
                </div>
            </footer><br></br>


            </div>
            </center> 
        </div>
    );
}
export default Requirement;