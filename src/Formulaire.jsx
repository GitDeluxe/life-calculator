import React, { useState } from 'react';

const Formulaire = ({ onSubmit }) => {
  const [sleepTimePerDay, setSleepTimePerDay] = useState(8);
  const [socialNetworkTimePerDay, setSocialNetworkTimePerDay] = useState(2);
  const [socialNetworkName, setSocialNetworkName] = useState('instagram');
  const [cookAndEatTimePerDay, setCookAndEat] = useState(1);
  const [healthAndCareTimePerDay, setHealthAndCare] = useState(1);
  const [hobbiesTimePerDay, setHobbies] = useState(1);
  const [socialLifeTimePerDay, setSocialLife] = useState(1);
  const [workTimePerDay, setWork] = useState(1);
  const [sportTimePerDay, setSport] = useState(1);
  const verifyNbrHourInADay = () => {
    const count= sleepTimePerDay + socialNetworkTimePerDay + cookAndEatTimePerDay + healthAndCareTimePerDay + hobbiesTimePerDay + socialLifeTimePerDay + workTimePerDay + sportTimePerDay
    if (count > 24) {
      return false;
    }
    if (count < 0) {
      return null;
    }
    return count;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit prop and pass the form data
    if (verifyNbrHourInADay() === false) {
      alert("You can't have more than 24 hours in a day")
      return
    }
    if (verifyNbrHourInADay() === null) {
      alert("You can't have less than 0 hours in a day")
      return
    }
    
    onSubmit({ 
      sleepTimePerDay,
      socialNetworkTimePerDay,
      socialNetworkName,
      cookAndEatTimePerDay,
      healthAndCareTimePerDay,
      hobbiesTimePerDay,
      socialLifeTimePerDay,
      workTimePerDay,
      sportTimePerDay,

     
     });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-4 border border-primary rounded">
      <div className="mb-3">
        <label className="form-label">Sleep time per day (hours):</label>
        <input
          type="number"
          className="form-control"
          value={sleepTimePerDay}
          onChange={(e) => setSleepTimePerDay(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Social network time per day (hours):</label>
        <input
          type="number"
          className="form-control"
          value={socialNetworkTimePerDay}
          onChange={(e) => setSocialNetworkTimePerDay(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Cook and eat time per day </label>
        <input
          type="number"
          className="form-control"
          value={cookAndEatTimePerDay}
          onChange={(e) => setCookAndEat(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Health and Care per day</label>
        <input
          type="number"
          className="form-control"
          value={healthAndCareTimePerDay}
          onChange={(e) => setHealthAndCare(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Hobbies per day</label>
        <input
          type="number"
          className="form-control"
          value={hobbiesTimePerDay}
          onChange={(e) => setHobbies(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Social in real life per day</label>
        <input
          type="number"
          className="form-control"
          value={socialLifeTimePerDay}
          onChange={(e) => setSocialLife(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Work per day </label>
        <input
          type="number"
          className="form-control"
          value={workTimePerDay}
          onChange={(e) => setWork(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Sport per day </label>
        <input
          type="number"
          className="form-control"
          value={sportTimePerDay}
          onChange={(e) => setSport(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Social network:</label>
        <input
          type="text"
          className="form-control"
          value={socialNetworkName}
          onChange={(e) => setSocialNetworkName(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Calculate</button>
    </form>
  );
};

export default Formulaire;
