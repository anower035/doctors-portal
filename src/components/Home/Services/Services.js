import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import toothWhitening from '../../../images/tooth whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
    {
        name:'Fluoride Treatment',
        img:fluoride
    },
    {
        name:'Cavity Filling',
        img:cavity
    },
    {
        name:'Teeth Whitening',
        img:toothWhitening
    },
]

const Services = () => {
    return (
        <section className='services-container mt-5'>
            <div className="text-center">
                <h6 style={{color:'#34C6C3'}}>OUR SERVICES</h6>
                <h1>Services We Provide</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;