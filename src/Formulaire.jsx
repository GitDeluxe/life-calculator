import React, { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { use } from 'i18next';
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
  const [totalTime, setTotalTime] = useState(0);

  const verifyNbrHourInADay = (e) => {
    console.log(e.target);
    const data = new FormData(e.target);
    console.log(data);
    // const {sleepTimePerDay, socialNetworkTimePerDay, cookAndEatTimePerDay, healthAndCareTimePerDay, hobbiesTimePerDay, socialLifeTimePerDay, workTimePerDay, sportTimePerDay} = data
    const count = 1 //sleepTimePerDay + socialNetworkTimePerDay + cookAndEatTimePerDay + healthAndCareTimePerDay + hobbiesTimePerDay + socialLifeTimePerDay + workTimePerDay + sportTimePerDay
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
    if (verifyNbrHourInADay(e) === false) {
      alert("You can't have more than 24 hours in a day")
      return
    }
    if (verifyNbrHourInADay(e) === null) {
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
  const useVerifyNbrHourInADay = (value , setValue) => {
    useEffect(() => {
      let diff = totalTime - 24
      console.log(diff);
      if (totalTime > 24) {
        // alert("You can't have more than 24 hours in a day")
        setValue(value -1)
      }
    }, [value]);
  }
  useVerifyNbrHourInADay(sleepTimePerDay, setSleepTimePerDay)
  useVerifyNbrHourInADay(socialNetworkTimePerDay, setSocialNetworkTimePerDay)
  useVerifyNbrHourInADay(cookAndEatTimePerDay, setCookAndEat)
  useVerifyNbrHourInADay(healthAndCareTimePerDay, setHealthAndCare)
  useVerifyNbrHourInADay(hobbiesTimePerDay, setHobbies)
  useVerifyNbrHourInADay(socialLifeTimePerDay, setSocialLife)
  useVerifyNbrHourInADay(workTimePerDay, setWork)
  useVerifyNbrHourInADay(sportTimePerDay, setSport)
  
useEffect(() => {
  const time = workTimePerDay + sportTimePerDay + socialLifeTimePerDay + hobbiesTimePerDay + healthAndCareTimePerDay + cookAndEatTimePerDay + sleepTimePerDay + socialNetworkTimePerDay
  setTotalTime(time)
}, [workTimePerDay, sportTimePerDay, socialLifeTimePerDay, hobbiesTimePerDay, healthAndCareTimePerDay, cookAndEatTimePerDay, sleepTimePerDay, socialNetworkTimePerDay]);


  return (
    <form onSubmit={handleSubmit} className="mt-4 p-5 border border-primary rounded ">
      <Box sx={{ width: "80%", marginBottom: 0 }}>
        <Typography id="sleep-time-slider" gutterBottom>
          Sleep time per day (hours): {sleepTimePerDay}
        </Typography>
        <Slider
          id='sleepTimePerDay'
          value={sleepTimePerDay}
          onChange={(e, newValue) => setSleepTimePerDay(newValue)}
          valueLabelDisplay="auto"
          step={0.25}
          marks
          min={0}
          max={24}
          aria-labelledby="sleep-time-slider"
          sx={{ height: "10px" }}
        />
      </Box>
      <Box sx={{ width: "80%", marginBottom: 0 }}>
        <Typography id="sleep-time-slider" gutterBottom>
          Work time per day (hours): {workTimePerDay} h
        </Typography>
        <Slider
          id="workTimePerDay"
          value={workTimePerDay}
          onChange={(e, newValue) => setWork(newValue)}
          valueLabelDisplay="auto"
          step={0.25}
          marks
          min={0}
          max={24}
          aria-labelledby="sleep-time-slider"
          sx={{ height: "10px" }}
        />
      </Box>
      <Box sx={{ width: "80%", marginBottom: 0 }}>
        <Typography id="sleep-time-slider" gutterBottom>
          Sport per day (hours): {sportTimePerDay}
        </Typography>
        <Slider
          id='sportTimePerDay'
          value={sportTimePerDay}
          onChange={(e, newValue) => setSport(newValue)}
          valueLabelDisplay="auto"
          step={0.25}
          marks
          min={0}
          max={24}
          aria-labelledby="sleep-time-slider"
          sx={{ height: "10px" }}
        />
      </Box>
      <Box sx={{ width: "80%", marginBottom: 0 }}>
        <Typography id="sleep-time-slider" gutterBottom>
          Social in real life per day (hours): {socialLifeTimePerDay}
        </Typography>
        <Slider
          id="socialLifeTimePerDay"
          value={socialLifeTimePerDay}
          onChange={(e, newValue) => setSocialLife(newValue)}
          valueLabelDisplay="auto"
          step={0.25}
          marks
          min={0}
          max={24}
          aria-labelledby="sleep-time-slider"
          sx={{ height: "10px" }}
        />
      </Box>
      <Box sx={{ width: "80%", marginBottom: 0 }}>
        <Typography id="sleep-time-slider" gutterBottom>
          Hobbies per day (hours): {hobbiesTimePerDay}
        </Typography>
        <Slider
          id="hobbiesTimePerDay"
          value={hobbiesTimePerDay}
          onChange={(e, newValue) => setHobbies(newValue)}
          valueLabelDisplay="auto"
          step={0.25}
          marks
          min={0}
          max={24}
          aria-labelledby="sleep-time-slider"
          sx={{ height: "10px" }}
        />
      </Box>
      <Box sx={{ width: "80%", marginBottom: 0 }}>
        <Typography id="sleep-time-slider" gutterBottom>
          Health and Care per day (hours): {healthAndCareTimePerDay}
        </Typography>
        <Slider
          id="healthAndCareTimePerDay"
          value={healthAndCareTimePerDay}
          onChange={(e, newValue) => setHealthAndCare(newValue)}
          valueLabelDisplay="auto"
          step={0.25}
          marks
          min={0}
          max={24}
          aria-labelledby="sleep-time-slider"
          sx={{ height: "10px" }}
        />
      </Box>
      <Box sx={{ width: "80%", marginBottom: 0 }}>
        <Typography id="sleep-time-slider" gutterBottom>
          Cook and eat time per day (hours): {cookAndEatTimePerDay}
        </Typography>
        <Slider
          id="cookAndEatTimePerDay"
          value={cookAndEatTimePerDay}
          onChange={(e, newValue) => setCookAndEat(newValue)}
          valueLabelDisplay="auto"
          step={0.25}
          marks
          min={0}
          max={24}
          aria-labelledby="sleep-time-slider"
          sx={{ height: "10px" }}

        />
      </Box>
      <Box sx={{ width: "80%", marginBottom: 0 }}>
        <Typography id="sleep-time-slider" gutterBottom>
          Network time per day (hours): {socialNetworkTimePerDay}
        </Typography>
        <Slider
          id="socialNetworkTimePerDay"
          value={socialNetworkTimePerDay}
          onChange={(e, newValue) => setSocialNetworkTimePerDay(newValue)}
          valueLabelDisplay="auto"
          step={0.25}
          marks
          min={0}
          max={24}
          aria-labelledby="sleep-time-slider"
          sx={{ height: "10px" }}
        />
      </Box>


      <div className="mb-3">
        <label className="form-label">Total busy time {totalTime}  h / 24h</label>

      </div>
      <div className="mb-3">
        <label className="form-label">Social network:</label>
        <input
          id='socialNetworkName'
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
