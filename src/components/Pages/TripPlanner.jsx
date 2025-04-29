import React, { useState } from 'react';
import './TripPlanner.css';

const cityCoordinates = {
    Delhi: { lat: 28.6139, lng: 77.2090 },
    Jaipur: { lat: 26.9124, lng: 75.7873 },
    Mumbai: { lat: 19.0760, lng: 72.8777 },
    Bangalore: { lat: 12.9716, lng: 77.5946 },
    Chennai: { lat: 13.0827, lng: 80.2707 },
    Kolkata: { lat: 22.5726, lng: 88.3639 },
    Hyderabad: { lat: 17.3850, lng: 78.4867 },
    Pune: { lat: 18.5204, lng: 73.8567 },
    Ahmedabad: { lat: 23.0225, lng: 72.5714 },
    Lucknow: { lat: 26.8467, lng: 80.9462 },
    Surat: { lat: 21.1702, lng: 72.8311 },
    Chandigarh: { lat: 30.7333, lng: 76.7794 },
    Ambikapur: {lat: 23.1294, lng: 83.1861},
    Bhopal: { lat: 23.2599, lng: 77.4126 },
    Indore: { lat: 22.7196, lng: 75.8577 },
    Raipur: {lat: 21.2514, lng: 81.6296},
    Coimbatore: { lat: 11.0168, lng: 76.9558 },
    Vadodara: { lat: 22.3072, lng: 73.1812 },
    Nashik: { lat: 19.9975, lng: 73.7898 },
    Patna: { lat: 25.5941, lng: 85.1376 },
    Kanpur: { lat: 26.4499, lng: 80.3319 },
    Mysore: { lat: 12.2958, lng: 76.6394 },
    Varanasi: { lat: 25.3176, lng: 82.9739 },
    Agra: { lat: 27.1767, lng: 78.0081 },
    Rishikesh: { lat: 30.0869, lng: 78.2676 },
    Udaipur: { lat: 24.5854, lng: 73.7125 },
    Jodhpur: { lat: 26.2389, lng: 73.0243 },
    Darjeeling: { lat: 27.0354, lng: 88.2620 },
    Leh: { lat: 34.1526, lng: 77.5770 },
    Manali: { lat: 32.2396, lng: 77.1887 },
    Nainital: { lat: 29.3795, lng: 79.4545 },
    Kullu: { lat: 32.0010, lng: 77.1051 },
    Bikaner: { lat: 28.0229, lng: 73.3119 },
    Jaisalmer: { lat: 26.9157, lng: 70.9083 },
    Ranikhet: { lat: 29.6214, lng: 79.4401 },
    Khajuraho: { lat: 24.8470, lng: 79.9195 },
    Gaya: { lat: 24.7807, lng: 85.0000 },
    Kodaikanal: { lat: 10.2391, lng: 77.4931 },
    Ooty: { lat: 11.4064, lng: 76.6955 },
    Puri: { lat: 19.8136, lng: 85.8312 },
    Tirupati: { lat: 13.6288, lng: 79.4192 },
    Amritsar: { lat: 31.5497, lng: 74.3436 },
    Haridwar: { lat: 29.9457, lng: 78.1642 },
    Vellore: { lat: 12.9216, lng: 79.1327 },
    Kolhapur: { lat: 16.7050, lng: 74.2430 },
    Rajkot: { lat: 22.3039, lng: 70.8022 },
    Gandhinagar: { lat: 23.2156, lng: 72.6369 },
    Shirdi: { lat: 19.7662, lng: 74.7385 },
    Jalandhar: { lat: 31.3260, lng: 75.5762 },
    Bhubaneswar: { lat: 20.2961, lng: 85.8189 },
    Mangalore: { lat: 12.9141, lng: 74.8560 },
    Belgaum: { lat: 15.8481, lng: 74.5012 },
    Dhanbad: { lat: 23.7988, lng: 86.4304 },
    Gorakhpur: { lat: 26.7464, lng: 83.3700 },
    Jabalpur: { lat: 23.1815, lng: 79.9577 },
    Allahabad: { lat: 25.4358, lng: 81.8463 },
    Aurangabad: { lat: 19.8762, lng: 75.3433 },
    Agartala: { lat: 23.8315, lng: 91.2868 },
    Itanagar: { lat: 27.0841, lng: 93.6054 },
    Imphal: { lat: 24.8176, lng: 93.9368 },
    Aizawl: { lat: 23.1645, lng: 92.9376 },
    Gangtok: { lat: 27.3389, lng: 88.6076 },
    Shillong: { lat: 25.5788, lng: 91.8933 },
    Kohima: { lat: 25.6720, lng: 94.1117 }
};


const TripPlanner = () => {
    const [fromCity, setFromCity] = useState('Delhi');
    const [toCity, setToCity] = useState('Jaipur');
    const [routeSummary, setRouteSummary] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch route data from OpenRouteService
    const fetchRoute = async () => {
        setLoading(true);
        const apiKey = '5b3ce3597851110001cf6248aa023d6fccde40a282db299e4dcfb17e'; // API key from .env
        const origin = cityCoordinates[fromCity];
        const destination = cityCoordinates[toCity];

        try {
            const response = await fetch('https://api.openrouteservice.org/v2/directions/driving-car/geojson', {
                method: 'POST',
                headers: {
                    'Authorization': apiKey,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    coordinates: [
                        [origin.lng, origin.lat],
                        [destination.lng, destination.lat],
                    ],
                }),
            });

            const data = await response.json();

            // Extract route summary data
            const totalDistance = data.features[0].properties.summary.distance / 1000; // Convert to km
            const totalDuration = data.features[0].properties.summary.duration / 60; // Convert to minutes
            const route = {
                distance: totalDistance.toFixed(2),
                duration: totalDuration.toFixed(2),
                start: fromCity,
                end: toCity,
            };

            setRouteSummary(route);
        } catch (error) {
            console.error('Error fetching route:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchRoute();
    };

    return (
        <div className="trip-planner-container">
            <h2 className="title">Plan Your Royal Journey</h2>
            <form onSubmit={handleSubmit} className="trip-form">
                <div className="form-group">
                    <label>From</label>
                    <select value={fromCity} onChange={(e) => setFromCity(e.target.value)}>
                        {Object.keys(cityCoordinates).map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>To</label>
                    <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
                        {Object.keys(cityCoordinates).map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="submit-btn">Get Route</button>
            </form>

            {loading && <p className="loading">Fetching route...</p>}

            {routeSummary && (
                <div className="route-summary">
                    <h3>Route Summary</h3>
                    <p><strong>From:</strong> {routeSummary.start}</p>
                    <p><strong>To:</strong> {routeSummary.end}</p>
                    <p><strong>Total Distance:</strong> {routeSummary.distance} km</p>
                    <p><strong>Estimated Duration:</strong> {routeSummary.duration} minutes</p>
                </div>
            )}
        </div>
    );
};

export default TripPlanner;