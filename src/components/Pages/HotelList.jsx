import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './HotelList.css'

const HotelList = () => {
    const [hotels, setHotels] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/api/hotels') // Adjust base URL if needed
            .then(res => setHotels(res.data))
            .catch(err => console.error('Error fetching hotels:', err));
    }, []);

    const getImageSrc = (hotel) => {
        if (hotel.image && hotel.image.data) {
            return `data:${hotel.image.contentType};base64,${hotel.image.data}`;
        }
        return '/default-hotel.jpg'; // fallback
    };

    const handleBookNow = (hotelId) => {
        navigate(`/booking/${hotelId}`);
    };

    return (
        <div className="hotel-list">
            <h2>🏨 Available Hotels</h2>
            {hotels.map(hotel => (
                <div key={hotel._id} className="hotel-card">
                    <img
                        src={getImageSrc(hotel)}
                        alt={hotel.name}
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            height: '250px',
                            objectFit: 'cover',
                            borderRadius: '10px'
                        }}
                    />
                    <h3>{hotel.name}</h3>
                    <p>{hotel.address}</p>
                    <p>Price: ₹{hotel.price}</p>
                    <button onClick={() => handleBookNow(hotel._id)}>Book Now</button>
                </div>
            ))}
        </div>
    );
};

export default HotelList;