import React from 'react';


import { Pie } from 'react-chartjs-2';

import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);
const Result = ({ results }) => {


    const { sleep, socialNetwork, work, socialLife, hobby, healthAndCare, cookAndEat, sport } = results
    const lifetime = 100 - (sleep.percentage + socialNetwork.percentage + work.percentage + socialLife.percentage + hobby.percentage + healthAndCare.percentage + cookAndEat.percentage + sport.percentage)
    const data = {
        labels: ['Social Network', 'Sleep', 'Work', 'Social Life', 'Hobby', 'Health and Care', 'Cook and Eat', 'Sport', "Life"],
        datasets: [
            {
                data: [
                    socialNetwork.percentage,
                    sleep.percentage,
                    work.percentage,
                    socialLife.percentage,
                    hobby.percentage,
                    healthAndCare.percentage,
                    cookAndEat.percentage,
                    sport.percentage,
                    lifetime
                ],
                backgroundColor: ['#007BFF', '#28A745', "#FFC107", "#DC3545", "#6C757D", "#17A2B8", "#6610F2", "#FD7E14", "#6F42C1", "#E83E8C"],
            },
        ],
    };
    const options = {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                enabled: true
            }
        }
    };
    return (

        <div className="mt-4 p-4 border border-success rounded container">
            <div className='row'>
            <h4>Time Distribution</h4>
            <div class="col-lg-4 col-sm-12 mb-4 ">
                <Pie key={Math.random()} data={data} options={options} />
            </div>
            <div className="col-lg-8 col-sm-12">
                
                    <p className="mb-3">Vous passez : </p>
                    <p>{Math.round(work.percentage)}% de votre temps au travail chaque année, soit {Math.round(socialNetwork.days)} jours par an  </p>
                    <p>{Math.round(cookAndEat.percentage)}% de votre temps à cuisiner et à manger par année, soit {Math.round(cookAndEat.days)} jours par an  </p>
                    <p>{Math.round(healthAndCare.percentage)}% de votre temps a prendre soin de vous par année, soit {Math.round(healthAndCare.days)} jours par an  </p>
                    <p>{Math.round(hobby.percentage)}% de votre temps à vous divertir par année, soit {Math.round(hobby.days)} jours par an  </p>
                    <p>{Math.round(sport.percentage)}% de votre temps à faire du sport par année, soit {Math.round(sport.days)} jours par an  </p>
                    <p>{Math.round(socialNetwork.percentage)}% de votre temps sur les réseaux sociaux par année, soit {Math.round(socialNetwork.days)} jours par an  </p>
                    <p>{Math.round(socialLife.percentage)}% de votre temps avec vos proches par année, soit {Math.round(socialLife.days)} jours par an  </p>
                    <p>{Math.round(sleep.percentage)}% de votre temps à dormir par année, soit {Math.round(sleep.days)} jours par an  </p>
                    <p>{Math.round(lifetime)}% de votre temps est a vous, soit {Math.round(sleep.days)} jours par an  </p>

           

            </div>
            </div>
           



        </div>
    );
};

export default Result;
