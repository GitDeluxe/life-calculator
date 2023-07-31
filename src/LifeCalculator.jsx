import React, { useState } from 'react';
import Result from './Result';
import TimeForm from './Formulaire';
;
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);


const LifeCalculator = () => {
  const [results, setResults] = useState(null);
  const calculateDayPerYearWithHourPerDay = (hourPerDay) => {

    const dayInHour = 24
    const weekInYear = 52
    const dayInYear = 365
    const timePerWeek = hourPerDay * 7

    const timePerYear = timePerWeek * weekInYear
    const days = timePerYear / dayInHour

    const percentage = (days / dayInYear) * 100
    return { days, percentage }
  }
  
  const calculateTime = ({
    sleepTimePerDay,
    socialNetworkTimePerDay,
    socialNetworkName,
    cookAndEatTimePerDay,
    healthAndCareTimePerDay,
    hobbiesTimePerDay,
    socialLifeTimePerDay,
    workTimePerDay,
    sportTimePerDay,

  }) => {

    const hourPerDay = 24
    const dayPerYear = 365
    const sleep = calculateDayPerYearWithHourPerDay(sleepTimePerDay)
    const socialNetwork = calculateDayPerYearWithHourPerDay(socialNetworkTimePerDay)
    const sport = calculateDayPerYearWithHourPerDay(sportTimePerDay)
    const work = calculateDayPerYearWithHourPerDay(workTimePerDay)
    const socialLife = calculateDayPerYearWithHourPerDay(socialLifeTimePerDay)
    const hobby = calculateDayPerYearWithHourPerDay(hobbiesTimePerDay)
    const healthAndCare = calculateDayPerYearWithHourPerDay(healthAndCareTimePerDay)
    const cookAndEat = calculateDayPerYearWithHourPerDay(cookAndEatTimePerDay)


    // const sleepTimePerWeek = sleepTimePerDay * 7

    // const sleepTimePerYear = sleepTimePerWeek * 52
    // const sleepDayPerYear = sleepTimePerYear / hourPerDay

    // const socialNetworkTimePerWeek = socialNetworkTimePerDay * 7
    // const socialNetworkTimePerYear = socialNetworkTimePerWeek * 52
    // const socialNetworkDayPerYear = socialNetworkTimePerYear / hourPerDay

    // const percentageOfTimePassedOnSnPerYear = (socialNetworkDayPerYear / dayPerYear) * 100
    // const percentageOfTimePassedSleepingPerYear = (sleepDayPerYear / dayPerYear) * 100

    setResults({
      sleep,
      socialNetwork,
      sport,
      work,
      socialLife,
      hobby,
      healthAndCare,
      cookAndEat

    });
  };

  return (
    <div className='container text-left'>

      <h1>Screen Time Calculator</h1>
      <TimeForm onSubmit={calculateTime} />
      {results && (
        <Result
          results={results}
        />
      )}
      {/* <Doughnut data={{
          labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
      }} /> */}
    </div>
  );
};

export default LifeCalculator;
