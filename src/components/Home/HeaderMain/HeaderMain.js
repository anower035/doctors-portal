import React from 'react';
import {Link} from 'react-router-dom';
import './HeaderMain.css';
import chair from '../../../images/chair.png';
const HeaderMain = () => {
    return (
        <main style ={{height:'600px'}} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here</h1>
                <p className='text-secondary mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi sint suscipit molestiae, odio reprehenderit officiis modi? Eaque, quisquam quibusdam impedit</p>
                <button className="appointment text-white"><Link className="font-weight-bold"  style={{textDecoration:'none',color:'white'}} to="/appointment">GET APPOINTMENT</Link></button>
            </div>
            <div className="col-md-6">
                <img src={chair} className='img-fluid' alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;