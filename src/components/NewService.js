import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/NewService.module.css';

function NewService() {
    const [serviceName, setServiceName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [paymentOption, setPaymentOption] = useState('');
    const [paymentMethod, setPaymentMethod] = useState(''); // For online payment method
    const [cardNumber, setCardNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const services = [
            { name: 'Haircut', cost: 200 },
            { name: 'Massage', cost: 500 },
            { name: 'Haircut Style', cost: 1000 },
            { name: 'Nail Style', cost: 400 },
            { name: 'Facial Treatment', cost: 700 },
            { name: 'Body Scrub', cost: 600 },
            { name: 'Manicure', cost: 350 },
            { name: 'Pedicure', cost: 450 },
            { name: 'Hair Coloring', cost: 1200 },
            { name: 'Shaving', cost: 150 },
            { name: 'Waxing', cost: 300 },
            { name: 'Bridal Makeup', cost: 2500 },
            { name: 'Deep Tissue Massage', cost: 800 }
    ];

    const handleAddService = (e) => {
        e.preventDefault();

        if (!serviceName || !appointmentDate || !paymentOption) {
            setErrorMessage('All fields are required');
            return;
        }

        // If payment option is online and card details are required
        if (paymentOption === 'Online' && (paymentMethod === '' || (paymentMethod === 'Card' && !cardNumber))) {
            setErrorMessage('Please select a payment method and provide card details if applicable');
            return;
        }

        // Find the selected service
        const selectedService = services.find(service => service.name === serviceName);

        if (!selectedService) {
            setErrorMessage('Please select a valid service');
            return;
        }

        // Store appointment details in localStorage
        const appointmentDetails = {
            serviceName: selectedService.name,
            serviceCost: selectedService.cost,
            appointmentDate,
            paymentOption,
            paymentMethod,
            cardNumber
        };
        localStorage.setItem('appointmentDetails', JSON.stringify(appointmentDetails));

        setErrorMessage('');
        alert('Service and appointment booked successfully');
        navigate('/dashboard');
    };

    return (
        <div className="container">
            <h2>Add a New Service</h2>
            <form onSubmit={handleAddService}>
                <div className="form-group">
                    <select
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                    >
                        <option value="">Select Service</option>
                        {services.map((service) => (
                            <option key={service.name} value={service.name}>
                                {service.name} - ₹{service.cost}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        placeholder="Appointment Date"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <select
                        value={paymentOption}
                        onChange={(e) => setPaymentOption(e.target.value)}
                    >
                        <option value="">Select Payment Option</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                    </select>
                </div>

                {paymentOption === 'Online' && (
                    <div className="form-group">
                        <label>Select Payment Method:</label>
                        <select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                            <option value="">Select Method</option>
                            <option value="GPay">GPay</option>
                            <option value="Card">Credit/Debit Card</option>
                        </select>
                    </div>
                )}

                {paymentMethod === 'Card' && (
                    <div className="form-group">
                        <label>Enter Card Number:</label>
                        <input
                            type="text"
                            placeholder="Enter your card number"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </div>
                )}

                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit">Add Service</button>
            </form>
            <div>
                <a className="go-back-btn" href="/dashboard">Go Back</a>
            </div>
        </div>
    );
}

export default NewService;
