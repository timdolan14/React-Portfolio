import React from 'react';
import resume from '../../photos/propic.png'

export default function Resume () {
    return (
        <div className='res-page'>
            <h3>My Resume</h3>
            <p>Feel to check out my resume below!</p>
        <a href={resume} Download={resume} class="res-btn btn btn-primary btn-lg active" role="button" aria-pressed="true" id='res-btn'>Download My Resume</a>
        </div>
    );
}
