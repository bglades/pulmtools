import React, { useState } from 'react';
import './rsbicalculator.css'

const RSBIcalculator = () => {
  const [tidalVolume, setTidalVolume] = useState(0);
  const [respiratoryRate, setRespiratoryRate] = useState(0);
  const [rsbi, setRSBI] = useState(0);

  const handleTidalVolumeChange = (e) => {
    setTidalVolume(Number(e.target.value));
  };

  const handleRespiratoryRateChange = (e) => {
    setRespiratoryRate(Number(e.target.value));
  };

  const calculateRSBI = () => {
    if (respiratoryRate !== 0) {
      setRSBI(tidalVolume / respiratoryRate);
    } else {
      setRSBI(0);
    }
  };

  return (
    <div className='rsbi-widget'>
      <h2>RSBI Calculator</h2>
      <div className='form-group'>
        <label>
          Actual Tidal Volume (ml):
          <input type="number" value={tidalVolume} onChange={handleTidalVolumeChange} />
        </label>
      </div>
      <div className='form-group'>
        <label>
          Actual Respiratory Rate (/min):
          <input type="number" value={respiratoryRate} onChange={handleRespiratoryRateChange} />
        </label>
      </div>
      <button className='calculate-btn' onClick={calculateRSBI}>Calculate RSBI</button>
      <div className='result'>
        <h3>RSBI: {rsbi}</h3>
      </div>
    </div>
  );
};

export default RSBIcalculator;
