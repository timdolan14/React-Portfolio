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
                    I am a highly skilled Full Stack Web Developer with a diverse background in the strategy and operations consulting industry. With my combined expertise in web development and problem-solving, I have consistently delivered outstanding results and driven business achievements.

                    Throughout my career, I have developed a strong proficiency in creating dynamic and user-friendly web applications. With expertise in front-end development utilizing technologies such as React, HTML, and CSS, as well as back-end programming using frameworks like Javascript, Node.js, Express, and MongoDB, I possess a comprehensive understanding of the complete web development stack.
                </p>
                <p>
                    In addition to my previous work experience, my experience as a collegiate athlete has equipped me with excellent communication and collaboration skills, allowing me to effectively work within cross-functional teams and translate complex technical concepts into clear, concise language for all team members.

                    I graduated from the University of Scranton in 2019, studying Business Administration & Management. While at the university, I played lacrosse and was elected captain for the 2018-2019 season. Outside of work and academics, I'm a fan of New York Sports, enjoy cinema, social media, golf, hockey, and have a keen interest in entrepreneurship.
                </p>
                <p>
                    I believe my diverse background, ranging from consulting to sports and entrepreneurship, provides me with a unique perspective and skills for any endeavor. Whether it's coding, advancing in business, or pursuing my interests, I'm excited about the experiences that lie ahead.

                    If you are seeking a results-driven Full Stack Web Developer who excels in problem-solving and possesses a strong attention to detail, I would welcome the chance to contribute my expertise and drive your organization's success in the tech industry.
                </p>
            </div>
        </div>
    );
}