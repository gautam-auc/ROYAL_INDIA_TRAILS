import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router"; // 🧭 Added useNavigate
import './BookNow.css';

// Mock hotel data for testing
import { mockHotels } from "./mockHotels";

export const BookNow = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // 🧭 Hook for navigation
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        const selectedHotel = mockHotels.find((hotel) => hotel.id.toString() === id);
        setHotel(selectedHotel);
    }, [id]);

    const handleBooking = (e) => {
        e.preventDefault();
        alert("Booking confirmed for " + hotel.name);
    };

    const handleBack = () => {
        navigate(-1); // 👈 Go back to previous page
        // Or use: navigate("/booking"); for specific navigation
    };

    if (!hotel) return <p>Loading...</p>;

    return (
        <div className="book-now-container">
            <button className="back-button" onClick={handleBack}>← Back</button> {/* 👈 Back Button */}

            <h1>Book Your Stay at {hotel.name}</h1>

            <div className="hotel-details" key={hotel.id}>
                <img src={hotel.image_url} alt={hotel.name} />
                <div className="hotel-info">
                    <h3>{hotel.name}</h3>
                    <p>{hotel.address}</p>
                    <span className="price">₹{hotel.price}</span>
                </div>
            </div>

            <div className="booking-form">
                <h2>Complete Your Booking</h2>
                <form onSubmit={handleBooking}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" placeholder="Enter your name" required />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                        <label>Phone:</label>
                        <input type="tel" placeholder="Enter your phone number" required />
                    </div>

                    <button type="submit" className="book-now-btn">
                        Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    );
};
