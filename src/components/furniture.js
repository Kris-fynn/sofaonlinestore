import React from 'react'
import sofa from '../components/imgs/SODAFINAL.png';
import Leftoption from './leftoption';
function Furniture() {
  return (
    <div class="half-circle">
       <Leftoption/>
      <div>
       
        <h1 className="FURNI">FURNI</h1>
        <img className= "sofa1" src={sofa} alt="sofa"></img>
      </div>

    </div>
  )
}

export default Furniture