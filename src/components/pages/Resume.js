import React from 'react';
import resume from '../../photos/propic.png'

export default function Resume () {
    return (
        <div>
        <a href={resume} Download={resume} class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Download My Resume!</a>
        </div>
    );
}
