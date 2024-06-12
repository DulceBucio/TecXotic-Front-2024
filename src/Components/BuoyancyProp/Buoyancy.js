import React, { useEffect, useState } from 'react';
import "./Buoyancy.css";

export default function Buoyancy() {
    const [heartbeat, setHeartbeat] = useState(null);
    const [error, setError] = useState(null);
    const [localTime, setLocalTime] = useState('');

    useEffect(() => {
        const getLocalTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const timeString = `${hours}:${minutes}:${seconds}`;
            setLocalTime(timeString);
        };

        const fetchHeartbeat = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/heartbeat'); // Cambiar fetch
                const data = await response.json();
                setHeartbeat(data.heartbeat);
                setError(null); 
            } catch (error) {
                console.error('Error fetching heartbeat:', error);
                setError('Error fetching heartbeat');
            }
        };

        const intervalId = setInterval(() => {
            fetchHeartbeat();
            getLocalTime();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="BuoyancyContainer">
            <h1 className='Title'>TecXotic's Company Number: 18</h1>
            <div className="DataContainer">
                <h2>Test with heartbeat sensor (remove): {heartbeat}</h2>
                <h2>Local Time: {localTime}</h2>
                <h2>Pressure Data:</h2>
                <h2>Depth Data:</h2>
            </div>
        </div>
    );
}
