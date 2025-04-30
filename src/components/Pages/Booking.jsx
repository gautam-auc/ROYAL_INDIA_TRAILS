import React, { useState } from 'react';
import './Booking.css';
import { NavLink, useNavigate } from 'react-router';

// Mock hotel data for testing
import { mockHotels } from './mockHotels';

const Booking = () => {
    const [searchTerm, setSearchTerm] = useState("");  // To track the search term
    const [filteredHotels, setFilteredHotels] = useState(mockHotels); // Initially, show all hotels
    const navigate = useNavigate();

    // Handle the change in the search input field
    const handleSearchChange = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        // Filter the hotels based on the search term
        const filtered = mockHotels.filter((hotel) =>
            hotel.address.toLowerCase().includes(term)
        );
        setFilteredHotels(filtered);
    };

    return (
        <div className="booking-container">
            <h1>Book Your Dream Hotel in India</h1>

            {/* Search input */}
            <div className="search-container">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search for hotels by city or area"
                />
            </div>

            {/* Display hotels based on the filtered data */}
            <div className="hotel-list">
                {filteredHotels.length > 0 ? (
                    filteredHotels.map((hotel) => (
                        <div className="hotel-card" key={hotel.id} >
                            <img src={hotel.image_url} alt={hotel.name} />
                            <div className="hotel-info">
                                <h3>{hotel.name}</h3>
                                <p>{hotel.address}</p>
                                <span className="price">₹{hotel.price}</span>

                                {/* Book Now Button */}
                                <button className="book-now-btn" onClick={() => navigate(`/book-now/${hotel.id}`)}>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hotels found for your search criteria.</p>
                )}
            </div>
        </div>
    );
};


export default Booking;
