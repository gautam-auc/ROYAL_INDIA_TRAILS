import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import './Booking.css'

export const Booking = () => {
    const navigate = useNavigate();
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState(null);
    const [formData, setFormData] = useState({
        hotelId: '',
        name: '',
        email: '',
        phone: '',
        checkInDate: '',
        checkOutDate: ''
    });

    useEffect(() => {
        if (hotelId) {
            axios.get(`http://localhost:5000/api/hotels`)
                .then(res => {
                    const selectedHotel = res.data.find(h => h._id === hotelId);
                    setHotel(selectedHotel);
                    setFormData(prev => ({
                        ...prev,
                        hotelId: hotelId
                    }));
                })
                .catch(err => console.error(err));
        }
    }, [hotelId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/bookings', formData);
            alert('Booking Successful!');
        } catch (error) {
            alert('Booking failed.');
        }
    };

    if (!hotel) return <p>Loading hotel...</p>;

    return (
        <div className='booking-container'>
            <button className="btn btn-primary" onClick={() => navigate(-1)} style={{ textAlign: 'center' }}>← Back</button> {/* 👈 Back Button */}
            <div className="booking-form-container">
                <h2>Booking at {hotel.name}</h2>
                <form onSubmit={handleSubmit} className="booking-form">
                    {/* Form fields like before */}
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    <label>Phone:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    <label>Check-In Date:</label>
                    <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleChange} required />
                    <label>Check-Out Date:</label>
                    <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} required />
                    <button type="submit">Confirm Booking</button>
                </form>
            </div>
        </div>

    );
};