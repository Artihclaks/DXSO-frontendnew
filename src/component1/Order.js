import React, { useEffect, useState } from 'react'
import Banner from './Banner';
import Gridlay from './BOMDetails';
import './CustomStyles.css';
import DropdownWithOther from './Material';
import InputWithOther from './Powdercoating';
import CheckboxExample from './metalstamp';

function Order() {

    const [selectedOption, setSelectedOption] = useState('');
    const options = ['Assembly','Non-Assembly','Sub-parts']
    const option1 = ['Sheet Metal', 'Fastener']
    const handleSelectionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
    }
    
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
                <InputWithOther/>
            </div>
    

            <div class="col">
                <div className="input-group input-group-sm">
                    <label class="col-sm-6 col-form-label">Assembly?</label>
                    <div class="col-sm-6">
                    <select class="form-control" value={selectedOption} onChange={handleSelectionChange}>
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    </div>
                </div>     
            </div>


            <div class="col">
                <div className="input-group input-group-sm">
                    <label class="col-sm-6 col-form-label">Commodity</label>
                    <div class="col-sm-6">
                    <select class="form-control" value={selectedOption} onChange={handleSelectionChange}>
                        {option1.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    </div>
                </div>     
            </div>


            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label">Source</label>
                    <div className="col-sm-6">
                        <input  type='text'  class="form-control custom-textfield" placeholder=' '/>
                    </div>
                </div>
            </div>
          
        </div>

        

        <div class="row">
            
        <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label">Bends</label>
                    <div className="col-sm-6">
                        <input type='number' class="form-control custom-textfield" placeholder='1'/>
                </div>
            </div>
            </div>

            <div class="col">
            <div className="input-group input-group-sm">
                    <label class="col-sm-6 col-form-label">Metal Stamp</label>
                    <div class="col-sm-6">
                        <CheckboxExample/>
                    </div>
            </div>  
            </div>
    

            <div class="col">
            <div className="input-group input-group-sm">
                    <label class="col-sm-6 col-form-label">Tapping</label>
                    <div class="col">
                        <CheckboxExample/>
                    </div>
            </div> 
            </div>


            <div class="col">
            <div className="input-group input-group-sm">
                    <label class="col-sm-6 col-form-label">Welding</label>
                    <div class="col-sm-6">
                        <CheckboxExample/>
                    </div>
            </div>     
            </div>


            <div class="col">
            <div className="input-group input-group-sm">
                    <label class="col-sm-6 col-form-label">Clinching/Riveting</label>
                    <div class="col-sm-6">
                        <CheckboxExample/>
                    </div>
            </div>
            </div>


        </div>
        
    </form>



    </>
  )
}

export default Order;
