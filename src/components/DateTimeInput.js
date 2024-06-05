import React, { useState } from 'react';

const DateTimeInput = ({ onStart }) => {
    const [dateTime, setDateTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (new Date(dateTime) > new Date() && new Date(dateTime) <= new Date(Date.now() + 99 * 24 * 60 * 60 * 1000)) {
            onStart(dateTime);
        } else {
            alert('Please select a valid date and time within 99 days from now.');
        }
    };

    return (
        <form className="datetime-input" onSubmit={handleSubmit}>
            <input
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                required
                placeholder="Select Date and Time"
            />
            <button type="submit">Start Countdown</button>
        </form>
    );
};

export default DateTimeInput;
