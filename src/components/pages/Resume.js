import React from 'react';
import resume from '../../photos/Tim Dolan Resume - 2023-1.jpg'
import { HiChevronRight } from "react-icons/hi";

export default function Resume() {
    return (
        <div className='res-page'>
            <h2>Want to Know More?</h2>
            <p>Check out my resume below!</p>
            <a href={resume} download={resume} class="res-btn btn btn-primary btn-lg active" role="button" aria-pressed="true" id='res-btn'>Download My Resume</a>
            <div className='profs'>
                <div class="flex-container container-sm">
                    <div class="flex-child green">
                        <h4>Front End Proficiencies</h4>
                        <p>
                            <ul><HiChevronRight />HTML</ul>
                            <ul><HiChevronRight />CSS</ul>
                            <ul><HiChevronRight />Bootstrap</ul>
                            <ul><HiChevronRight />React</ul>
                            <ul><HiChevronRight />jQuery</ul>
                            <ul><HiChevronRight />Tailwind CSS</ul>
                        </p>
                    </div>
                    <div class="flex-child green">
                        <h4>Back End Proficiencies</h4>
                        <p>
                            <ul><HiChevronRight />JavaScript</ul>
                            <ul><HiChevronRight />SQL</ul>
                            <ul><HiChevronRight />NoSQL</ul>
                            <ul><HiChevronRight />MERN Stack</ul>
                            <ul><HiChevronRight />GraphQL</ul>
                            <ul><HiChevronRight />MongoDB</ul>
                            <ul><HiChevronRight />State</ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
