import React from 'react';
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import RR from '../../photos/RR Screenshot.jpeg';
import PW from '../../photos/pw.png';
import Planner from '../../photos/DP.png';
import Weather from '../../photos/weather-app.png';
import TXD from '../../photos/TXD.png';
import Budget from '../../photos/Budget.png'
import StyleTrack from '../../photos/StyleTrack.png'


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
                                <p>Discover your perfect dining experience or culinary adventure! Our website lets you explore restaurants and recipes tailored to your favorite food groups with ease.</p>
                                <p>This app utilizes HTML, CSS, JavaScript, Bootstrap and API callouts.</p>
                            </div>
                        </div>
                        <div id="proj-3">
                            <img src={TXD} alt="TXD" />
                            <div class="imgInfoContainer">
                                <h4 id="proj-3">TXD <a href="https://github.com/timdolan14/TXD"><BsGithub /> </a> </h4>
                                <p>Connect with your community like never before! Our innovative social media platform lets you post, view, and comment on local updates based on your location.</p>
                                <p>This app utilizes MongoDB, Express, Node, React, CSS, JavaScript, Bootstrap, Bcrypt and Tailwind.</p>
                            </div>
                        </div>
                        <div id="proj-4">
                            <img src={Planner} alt="WDS" />
                            <div class="imgInfoContainer">
                                <h4 id="proj-4">Day Planner <a href="https://timdolan14.github.io/Day-Planner/"><CgWebsite /></a> <a href="https://github.com/timdolan14/Day-Planner"><BsGithub /> </a> </h4>
                                <p>Stay on top of your weekly goals with ease! Our website empowers you to track activities, meals, and more, for a productive and organized week.</p>
                                <p>This app utilizes HTML, CSS and JavaScript.</p>
                            </div>
                        </div>
                        <div id="proj-5">
                            <img src={Weather} alt="WA" />
                            <div class="imgInfoContainer">
                                <h4 id="proj-5">Weather App <a href="https://timdolan14.github.io/Weather-App/"><CgWebsite /></a> <a href="https://github.com/timdolan14/Weather-App"><BsGithub /> </a> </h4>
                                <p>Plan your travels with confidence! Our website offers real-time and 5-day weather forecasts for any city worldwide, helping you stay prepared for your adventures.</p>
                                <p>This app utilizes HTML, CSS, JavaScript, Bootstrap and API callouts.</p>
                            </div>
                        </div>
                        <div id="proj-6">
                            <img src={PW} alt="PW" />
                            <div class="imgInfoContainer">
                                <h4 id="proj-6">Password Generator <a href="https://timdolan14.github.io/Password_Gen/"><CgWebsite /></a> <a href="https://github.com/timdolan14/Password_Gen"><BsGithub /> </a> </h4>
                                <p>Generate secure passwords effortlessly! Our website lets you customize length, include Uppercase, Lowercase, and special characters for strong, randomized password creation.</p>
                                <p>This app utilizes HTML, CSS and JavaScript.</p>
                            </div>
                        </div>
                        <div id="proj-7">
                            <img src={Budget} alt="Budget" />
                            <div class="imgInfoContainer">
                                <h4 id="proj-7">Budget Tracker <a href="https://timdolan14.github.io/Budget-App/"><CgWebsite /></a> <a href="https://github.com/timdolan14/Budget-App"><BsGithub /> </a> </h4>
                                <p>The Budget Tracker App is a user-friendly tool designed to help companies efficiently manage and track budgets across various departments. This app provides a centralized platform for budget planning and monitoring, enabling businesses to make informed financial decisions and achieve their strategic goals.</p>
                                <p>This app utilizes React, Bootstrap, CSS and JavaScript. </p>
                            </div>
                        </div>
                        <div id="proj-8">
                            <img src={StyleTrack} alt="StyleTrack" />
                            <div class="imgInfoContainer">
                                <h4 id="proj-8">StyleTrack <a href="https://timdolan14.github.io/StyleTrack/"><CgWebsite /></a> <a href="https://github.com/timdolan14/StyleTrack"><BsGithub /> </a> </h4>
                                <p>StyleTrack is the ultimate fashion app for effortlessly tracking and managing your clothing and accessory purchases, helping you track and organize your wardrobe with ease.</p>
                                <p>This app utilizes React, Bootstrap, CSS and JavaScript. </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}