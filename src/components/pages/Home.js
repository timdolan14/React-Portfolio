import React from 'react';
import propic from '../../photos/propic.png'

export default function Home() {
    return (
        <div className='home-page'>
            <div class="Intro">
                <h2>About Me</h2>
                <div class="pro-pic">
                    <center><img src={propic} alt="propic"></img></center>
                </div>
                <p>
                    Hey there! My name is Tim Dolan, born on Long Island and currently living in New York City. I started my coding journey in March 2023, after working as a consultant specializing in strategy and operations at The Hackett Group. I gained valuable experience with Coupa Software Modules during my time there.
                </p>
                <p>
                    I graduated from the University of Scranton in 2019, studying Business Administration & Management. While at the university, I played lacrosse and was elected captain for the 2018-2019 season. Outside of work and academics, I'm a fan of New York Sports, enjoy cinema, social media, golf, hockey, and have a keen interest in entrepreneurship.
                </p>
                <p>
                    I believe my diverse background, ranging from consulting to sports and entrepreneurship, provides me with a unique perspective and skills for any endeavor. Whether it's coding, advancing in business, or pursuing my interests, I'm excited about the experiences that lie ahead.
                </p>
            </div>
        </div>
    );
}