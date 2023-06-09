import React from 'react';
import resume from '../../photos/propic.png'

export default function Resume() {
    return (
        <div className='res-page'>
            <h3>Want to Know More?</h3>
            <p>Feel to check out my resume below!</p>
            <a href={resume} Download={resume} class="res-btn btn btn-primary btn-lg active" role="button" aria-pressed="true" id='res-btn'>Download My Resume</a>
            <div className='profs'>
                <h4>Front End Proficiencies</h4>
                <p>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                </p>
                <h4>Back End Proficiencies</h4>
                <p>
                    <li>JavaScript</li>
                    <li>SQL</li>
                    <li>React</li>
                    <li>MERN Stack</li>
                    <li>GraphQL</li>
                    <li>Sequelize</li>
                    <li>Mongoose</li>
                    <li>MongoDB</li>
                    <li>State</li>              
                </p>
            </div>
        </div>
    );
}
