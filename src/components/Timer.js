import React, { useState, useEffect, useCallback } from 'react';
import CountdownDisplay from './CountdownDisplay';

const Timer = ({ targetDate, onStop }) => {
    const calculateTimeLeft = useCallback(() => {
        const difference = new Date(targetDate) - new Date();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    useEffect(() => {
        if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
            onStop();
        }
    }, [timeLeft, onStop]);

    return (
        <div className="timer">
            <CountdownDisplay time={timeLeft} />
            <button onClick={onStop}>Cancel Timer</button>
        </div>
    );
};

export default Timer;
