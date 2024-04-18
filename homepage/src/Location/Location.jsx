import React, { useState } from 'react';
import './Location.css';

const Location = () => {
    const [location, setLocation] = useState('');
    const [busRoutes, setBusRoutes] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('./Location.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ location }),
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
        <div className='SearchForm'>
            <div className='header'>
                <h2>Search</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='location'>Location:</label>
                        <input
                            type='text'
                            name='location'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
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
                    <p>No bus routes found for {location}</p>
                )}
            </div>
        </div>
    );
};

export default Location;