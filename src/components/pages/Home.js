import React from 'react';
import propic from '../../photos/propic.png'

export default function Home() {
    return (
        <div className='home-page'>
            <div class="Intro">
            <h3>About Me</h3>
                <div class="pro-pic">
                    <center><img src={propic} alt="propic"></img></center>
                </div>
                <h2>Aspiring Full Stack Developer</h2>
                <p>
                    My name is Tim Dolan. Born on Long Island, but currently reside in New York City. An experienced Consultant with expertise in strategy and operations, complemented by a strong computer science background. Always open to learn and developing new skills. Began my coding journey in March 2023.
                </p>
                <p>
                    New York Sports, Cinema, Social Media, Golf, Hockey, and Entrepreneurship.
                </p>
            </div>
        </div>
    );
}