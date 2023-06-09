import React from 'react';
import resume from '../../photos/propic.png'
import { HiArrowSmRight } from "react-icons/hi";

export default function Resume() {
    return (
        <div className='res-page'>
            <h3>Want to Know More?</h3>
            <p>Feel to check out my resume below!</p>
            <a href={resume} Download={resume} class="res-btn btn btn-primary btn-lg active" role="button" aria-pressed="true" id='res-btn'>Download My Resume</a>
            <div className='profs'>
            <div class="flex-container">
                <div class="flex-child green">
                <h4>Front End Proficiencies</h4>
                <p>
                    <ul><HiArrowSmRight/>HTML</ul>
                    <ul><HiArrowSmRight/>CSS</ul>
                    <ul><HiArrowSmRight/>Bootstrap</ul>
                    <ul><HiArrowSmRight/>React</ul>
                </p>
                </div>
                <div class="flex-child green">
                <h4>Back End Proficiencies</h4>
                <p>
                    <ul><HiArrowSmRight/>JavaScript</ul>
                    <ul><HiArrowSmRight/>SQL</ul>
                    <ul><HiArrowSmRight/>React</ul>
                    <ul><HiArrowSmRight/>MERN Stack</ul>
                    <ul><HiArrowSmRight/>GraphQL</ul>
                    <ul><HiArrowSmRight/>Sequelize</ul>
                    <ul><HiArrowSmRight/>Mongoose</ul>
                    <ul><HiArrowSmRight/>MongoDB</ul>
                    <ul><HiArrowSmRight/>State</ul>
                </p>
                </div>
                </div>
            </div>
        </div>
    );
}
