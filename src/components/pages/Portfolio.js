import React from 'react';
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import RR from '../../photos/RR Screenshot.jpeg';
import PW from '../../photos/pw.png';
import FS from '../../photos/full-snack.png';
import Planner from '../../photos/DP.png';
import Weather from '../../photos/weather-app.png';
import CB from '../../photos/CB.png';


export default function Portfolio() {
    return (
        <div className='port-page'>
            <h2>My Portfolio</h2>
            <section class="Work">
                <section id="Work" class="Work-Objects">
                    <div class="imgGrid">
                        <div id="proj-1">
                            <img src={RR} alt="R&R" />
                            <div class="imgInfoContainer">
                                <h4 id="proj-1">Restaurants & Recipes <a href="https://timdolan14.github.io/Restaurants-and-Recipes/"><CgWebsite /></a> <a href="https://github.com/timdolan14/Restaurants-and-Recipes"><BsGithub /> </a> </h4>
                                <p></p>
                            </div>
                        </div>
                        <div id="proj-2">
                            <img src={FS} alt="FS" />
                            <div class="imgInfoContainer">
                                <h4 id="proj-4">Full-Snack Wellness App <a href="https://gt-wellness-app.herokuapp.com/"><CgWebsite /></a> <a href="https://github.com/timdolan14/Wellness-App"><BsGithub /> </a> </h4>
                                <p></p>
                            </div>
                        </div>
                        <div id="proj-3">
                            <img src={CB} alt="CB" />
                            <div class="imgInfoContainer">
                                <h4 id="proj-6">Chatterbox <a href="https://duck-wrist-cat-8cf5ac6915ff.herokuapp.com/register"><CgWebsite /></a> <a href="https://github.com/timdolan14/Chatterbox"><BsGithub /> </a> </h4>
                                <p></p>
                            </div>
                        </div>
                        <div id="proj-4">
                            <img src={Planner} alt="WDS" />
                            <div class="imgInfoContainer">
                                <h4 id="proj-4">Day Planner <a href="https://timdolan14.github.io/Day-Planner/"><CgWebsite /></a> <a href="https://github.com/timdolan14/Day-Planner"><BsGithub /> </a> </h4>
                                <p></p>
                            </div>
                        </div>
                           <div id="proj-5">
                            <img src={Weather} alt="WA" />
                            <div class="imgInfoContainer">
                                <h4 id="proj-5">Weather App <a href="https://timdolan14.github.io/Weather-App/"><CgWebsite /></a> <a href="https://github.com/timdolan14/Weather-App"><BsGithub /> </a> </h4>
                                <p></p>
                            </div>
                        </div>
                           <div id="proj-6">
                           <img src={PW} alt="PW" />
                            <div class="imgInfoContainer">
                                <h4 id="proj-3">Random Password Generator <a href="https://timdolan14.github.io/Password_Gen/"><CgWebsite /></a> <a href="https://github.com/timdolan14/Password_Gen"><BsGithub /> </a> </h4>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}