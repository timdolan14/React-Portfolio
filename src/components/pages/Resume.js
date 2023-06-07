import React from 'react';
import resume from '../../photos/propic.png'

export default function Resume () {
    return (
        <div>
        <a href={resume} Download={resume} class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Download My Resume</a>
        <p>For more information on my background, please down my resume and feel free to reach out.</p>
        </div>
    );
}
