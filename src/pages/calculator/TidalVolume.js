import React, { useState } from 'react';
import './tidalvolume.css'



const TidalVolume = () => {
  const [gender, setGender] = useState('female');
  const [height, setHeight] = useState(0);
  const [mlPerKg, setMlPerKg] = useState(0);
  const [result, setResult] = useState(0);

  //event handler function, taking an event object "e" as a parameter. This represents the event that triggered the function. 
  const handleGenderChange = (e) => {
    //e.target refers to the element that triggered the event. e.target.value retrieves the value property of the '<select>' element, which is either male or female in this case. 
    //setGender(e.target.value) is the function returned by the useState hook. By calling 'setGender', we update the value of the gender state variable with the selected value from the dropdown. 
    //When the user selects a different gender from the dropdown, the event handler is triggered. It updates the gender state variable with the new value, and the new gender will be reflected with each re-render. 
    setGender(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(Number(e.target.value));
  };

  const handleMlPerKgChange = (e) => {
    setMlPerKg(Number(e.target.value));
  };

  const calculateTidalVolume = () => {
    if (gender === 'female') {
      setResult((45.5 + 2.3 * (height - 60)) * mlPerKg);
    } else if (gender === 'male') {
      setResult((50 + 2.3 * (height - 60)) * mlPerKg);
    }
  };

  return (
    <div className="calculation-widget">
      <h2>Calculate Tidal Volume</h2>
      <div className="form-group">
        <label>
          Gender:
          <select className="select-gender" value={gender} onChange={handleGenderChange}>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label>
          Height (in inches):
          <input className="input-height" type="number" value={height} onChange={handleHeightChange} />
        </label>
      </div>
      <div className="form-group">
        <label>
          ml/kg:
          <input className="input-ml-per-kg" type="number" value={mlPerKg} onChange={handleMlPerKgChange} />
        </label>
      </div>
      <button className="calculate-btn" onClick={calculateTidalVolume}>Calculate</button>
      <div className="result">
        <h3>Result: {result} ml</h3>
      </div>
    </div>
  );
};

export default TidalVolume;
