import React from 'react';
import propic from '../../photos/propic.png'

export default function Home() {
    return (
        <div>
            <div class="Intro">
                <div class="pro-pic">
                <img src={propic} alt="propic"></img>
                </div>
                <h2>Tim Dolan - Aspiring Full Stack Developer</h2>
                <h3>Alittle Bit About Me</h3>
                <p>
                    My name is Tim Dolan. Born on Long Island, but currently reside in New York City. An experienced Consultant with expertise in strategy and operations, complemented by a strong computer science background. Skilled in providing guidance and direction for business challenges in supply chain, logistics, procurement, and general operations. Always open to learn and developing new skills.
                </p>
                <h3>Skills</h3>
                <p>
                    Proficient in programming languages such as: HTML, CSS, JavaScript, SQL, React, MERN Stack, GraphQL. Experience in full stack web development, data analysis, software development, Microsoft Office.
                </p>
                <h3>Interests</h3>
                <p>
                    New York Sports, Cinema, Social Media, Golf, Hockey, and Entrepreneurship.
                </p>
            </div>
        </div>
    );
}