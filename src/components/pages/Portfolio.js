import React from 'react';

export default function Portfolio () {
    return (
        <div className='port-page'>
            <h3>My Portfolio</h3>
            <section class="Work">
                <section id="Work" class="Work-Objects">
                    <div class="imgGrid">
                        <div id="proj-1">
                            <img src="" alt="Proj1"/>
                            <div class="imgInfoContainer">
                                <h4 id="proj-1">Project 1</h4>
                                <p></p>
                            </div>
                        </div>
                        <div id="proj-2">
                            <img src=""  alt="Proj2"/>
                            <div class="imgInfoContainer">
                                <h4 id="proj-4">Project 2</h4>
                                <p></p>
                            </div>
                        </div>
                        <div id="proj-3">
                            <img src="" alt="Proj3"/>
                            <div class="imgInfoContainer">
                                <h4 id="proj-3">Project 3</h4>
                                <p></p>
                            </div>
                        </div>
                        <div id="proj-4">
                            <img src="" alt="Proj4"/>
                            <div class="imgInfoContainer">
                                <h4 id="proj-4">Project 4</h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}