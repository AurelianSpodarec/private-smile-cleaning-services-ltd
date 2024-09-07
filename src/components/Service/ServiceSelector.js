import React, { useEffect, useState } from 'react';

import { getServices } from '../../utils/launch27-client';
import { serviceImageMap } from '../Forms/serviceImageMap';

import * as styles from './ServiceSelector.module.css';

const ServiceSelector = () => {
    const [services, setServices] = useState(null)

    useEffect(() => {
        getServices()
            .then((response) => {
                setServices(response.data)
            })
    }, [])

    const handleBookNow = (service) => {
        // clear previous bookings
        localStorage.clear();
        // start fresh
        localStorage.setItem('selectedService', JSON.stringify(service));
        window.location.href = '/service-booking';
    };

    const handleGetCall = () => {
        alert('Not Implemented Yet');
    };


    return( <>
        <div className="container pt-120 pb-120">
            <div className='row'>
                <div className='col-12'>
                    <h1>Choose your servce</h1>
                    {services && services.length > 0 ?  (
                        services.map(service => (
                            <div className={styles.card} style={{width: "309px"}} key={service.id}>
                                <img src={serviceImageMap[service.name] || '/img/booking/default.png'} className={styles.cardImgTop} alt={service.name} />
                                <div className='card-body'>
                                    <h2>{service.name}</h2>
                                    <p className='card-text'>{service.name}</p>
                                    {service.pricing_parameters ? 
                                        (<button onClick={() => handleBookNow(service)} className="btn btn-primary" style={{width: "100%"}}>Book Now</button>) : 
                                        (<button onClick={handleGetCall} className="btn btn-primary" style={{width: "100%"}}>Get a call</button>)
                                    }
                                </div>
                            </div>
                        ))
                    ) : (<p>Loading...</p>)}
                </div>
            </div>
            
        </div>
    </>)
}

export default ServiceSelector;