import React from 'react';

const CountdownDisplay = ({ time }) => {
    const formatTime = (value) => String(value).padStart(2, '0');

    return (
        <div className="countdown-display">
            <div className="countdown-element">
                <span>{formatTime(time.days)}</span>
                <span>Days</span>
            </div>
            <div className="countdown-element">
                <span>{formatTime(time.hours)}</span>
                <span>Hours</span>
            </div>
            <div className="countdown-element">
                <span>{formatTime(time.minutes)}</span>
                <span>Minutes</span>
            </div>
            <div className="countdown-element">
                <span>{formatTime(time.seconds)}</span>
                <span>Seconds</span>
            </div>
        </div>
    );
};

export default CountdownDisplay;
