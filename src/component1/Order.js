import React, { useEffect, useState } from 'react'
import Banner from './Banner';
import Gridlay from './BOMDetails';
import './CustomStyles.css';

function Order() {
    
  return (
    <><div>
      <Banner />
    </div>
    <form>
          <div class="form-row">
            
             <label>Material</label> 
            <select name="material" id="material form-control" class="form-control rounded custable" required>
              <option value="sgcc">SGCC</option>
              <option value="ms">MS</option>
              <option value="other">Other</option>
              </select>
            </div>
    
        
        
        </form>

    <div class="card w-25 custom-card">
        <div class="title"><h4>SPECIFICATIONS</h4></div>
        
        
            
            <div class="card-body custom-cardbdy">
            <center>
            <form class="needs-validation" noValidate>
            <div class="form-group">
                <label class="c1 col-form-label">Material</label>



                

        
              
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
                </div>

            </form>
            </center>
            </div>
            <footer>
                <div class="form-group row"><center>
                    <button class="btn btn-block custom-btn " style={{width: '150px', backgroundColor: '#5E7D7E'}} type="submit"><b>Make Plan</b></button></center>
                </div>
            </footer><br></br>


            </div>
      
    </>
  )
}

export default Order
