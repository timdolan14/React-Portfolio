import React from 'react';
import propic from '../../photos/propic.png'

export default function Home() {
    return (
        <div className='home-page'>
            <div class="Intro">
                <div class="pro-pic">
                    <center><img src={propic} alt="propic"></img></center>
                </div>
                <h1>Tim Dolan</h1>
                <h2>Aspiring Full Stack Developer</h2>
                <h3>About Me</h3>
                <p>
                    My name is Tim Dolan. Born on Long Island, but currently reside in New York City. An experienced Consultant with expertise in strategy and operations, complemented by a strong computer science background. Always open to learn and developing new skills. Began my coding journey in March 2023.
                </p>
                <h3>Skills</h3>
                <p>
                    HTML, CSS, JavaScript, SQL, React, MERN Stack, GraphQL. Experience in full stack web development, data analysis, software development, Microsoft Office.
                </p>
                <h3>Interests</h3>
                <p>
                    New York Sports, Cinema, Social Media, Golf, Hockey, and Entrepreneurship.
                </p>
            </div>
        </div>
    );
}