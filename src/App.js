import React, { useState } from 'react';
import DateTimeInput from './components/DateTimeInput';
import Timer from './components/Timer';
import './styles.css';

const App = () => {
    const [targetDate, setTargetDate] = useState(null);

    const handleStart = (dateTime) => {
        setTargetDate(dateTime);
    };

    const handleStop = () => {
        setTargetDate(null);
    };

    return (
        <div className="app">
            <h1>Countdown <span style={{color: 'rgba(162 , 0 , 255 , 0.76)'}}>Timer</span></h1>
            {targetDate ? (
                <Timer targetDate={targetDate} onStop={handleStop} />
            ) : (
                <DateTimeInput onStart={handleStart} />
            )}
        </div>
    );
};

export default App;
