import React from 'react';
import resume from '../../photos/Tim Dolan Resume - 2023.jpg'
import { HiChevronRight } from "react-icons/hi";

export default function Resume() {
    return (
        <div className='res-page'>
            <h2>Want to Know More?</h2>
            <p>Check out my resume below!</p>
            <a href={resume} Download={resume} class="res-btn btn btn-primary btn-lg active" role="button" aria-pressed="true" id='res-btn'>Download My Resume</a>
            <div className='profs'>
                <div class="flex-container">
                    <div class="flex-child green">
                        <h4>Front End Proficiencies</h4>
                        <p>
                            <ul><HiChevronRight />HTML</ul>
                            <ul><HiChevronRight />CSS</ul>
                            <ul><HiChevronRight />Bootstrap</ul>
                            <ul><HiChevronRight />React</ul>
                        </p>
                    </div>
                    <div class="flex-child green">
                        <h4>Back End Proficiencies</h4>
                        <p>
                            <ul><HiChevronRight />JavaScript</ul>
                            <ul><HiChevronRight />SQL</ul>
                            <ul><HiChevronRight />MERN Stack</ul>
                            <ul><HiChevronRight />GraphQL</ul>
                            <ul><HiChevronRight />Sequelize</ul>
                            <ul><HiChevronRight />Mongoose</ul>
                            <ul><HiChevronRight />MongoDB</ul>
                            <ul><HiChevronRight />State</ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
