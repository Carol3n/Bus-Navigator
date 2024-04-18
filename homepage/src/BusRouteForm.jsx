import React, { useState } from 'react';
import './BusRouteForm.css';

function BusRouteForm() {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [busRoutes, setBusRoutes] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('./findroutes.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ source, destination }),
            });
            if (response.ok) {
                const data = await response.json();
                setBusRoutes(data); // Assuming the API returns an array of bus routes
            } else {
                console.error('Error fetching bus routes:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching bus routes:', error);
        }
    };

    return (
        <div className='BusForm'>
            <h2>Bus Route</h2>
            <form onSubmit={handleSubmit}>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='source'>Source</label>
                        <input type='text' name='source' value={source} onChange={(e) => setSource(e.target.value)} required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='destination'>Destination</label>
                        <input type='text' name='destination' value={destination} onChange={(e) => setDestination(e.target.value)} required />
                    </div>
                    <button className='button' type='submit'>Submit</button>
                </div>
            </form>
            <div>
                {busRoutes.length > 0 ? (
                    <ul>
                        {busRoutes.map((route, index) => (
                            <li key={index}>{route}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No bus routes found from {source} to {destination}</p>
                )}
            </div>
        </div>
    );
}

export default BusRouteForm;