import React, { useEffect, useState } from 'react'
import Banner from './Banner';
import Gridlay from './BOMDetails';
import './CustomStyles.css';
import DropdownWithOther from './Material';

function Order() {
    
  return (
    <><div>
      <Banner />
    </div>
    <form>
        <div class="row">
            <div class="col">
                <div class="form-row">
                    <DropdownWithOther/>
                </div>
            </div>

            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label">Qty in Drawing</label>
                    <div className="col-sm-6">
                        <input type='number' class="form-control custom-textfield" placeholder='1'/>
                </div>
            </div>
            </div>

            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label">Thickness</label>
                    <div className="col-sm-6">
                        <input  type='number'  step="0.1" class="form-control custom-textfield" placeholder='1.00'/>
                    </div>
                </div>
            </div>


            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label">Width</label>
                    <div className="col-sm-6">
                        <input  type='number' step="0.1" class="form-control custom-textfield" placeholder='1.00'/>
                    </div>
                </div>
            </div>

            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label">Length</label>
                    <div className="col-sm-6">
                        <input  type='number'  step="0.1" class="form-control custom-textfield" placeholder='1.00'/>
                    </div>
                </div>
            </div>
          
        </div>



        <div class="row">
            
            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label">Qty in Drawing</label>
                    <div className="col-sm-6">
                        <input type='number' class="form-control custom-textfield" placeholder='1'/>
                </div>
            </div>
            </div>

            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label">Qty in Drawing</label>
                    <div className="col-sm-6">
                        <input type='number' class="form-control custom-textfield" placeholder='1'/>
                </div>
            </div>
            </div>

            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label">Thickness</label>
                    <div className="col-sm-6">
                        <input  type='number'  step="0.1" class="form-control custom-textfield" placeholder='1.00'/>
                    </div>
                </div>
            </div>


            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label">Width</label>
                    <div className="col-sm-6">
                        <input  type='number' step="0.1" class="form-control custom-textfield" placeholder='1.00'/>
                    </div>
                </div>
            </div>

            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label">Length</label>
                    <div className="col-sm-6">
                        <input  type='number'  step="0.1" class="form-control custom-textfield" placeholder='1.00'/>
                    </div>
                </div>
            </div>
          
        </div>
        
    </form>



    </>
  )
}

export default Order;
