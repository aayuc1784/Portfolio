import React from "react";
import "./Portfolio.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={ project1 } alt="Image"/>
                    </div>
                    <div className="portfolio__item-cta">
                        <h3> <b>Damn-Delicious</b> : A Website for Cooking Recipes</h3>
                        <h5>
                            <ul>
                                ◦ Developed and launched a User-friendly recipe website with a comprehensive database.
                            </ul>
                            <ul>
                                ◦ Users have the option to explore food items based on Category or Name.
                            </ul>
                            <ul>
                                ◦ Integrated the feature for random food discovery.
                            </ul>
                            <ul>
                                ◦ Tech Stack: MongoDB, Express JS, NodeJS, EJS.
                            </ul>
                        </h5>
                        <br></br>
                        <a href="" className="btn btn-primary" target="_blank">GitHub</a>
                    </div>
                </article>


                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={ project2 } alt="Image"/>
                    </div>
                    <div className="portfolio__item-cta">
                        <h3> <b>Code Sync</b>: A Realtime Code Editor</h3>
                        <h5>
                        <ul>
                            ◦ Developed and implemented a collaborative Real-Time Code-Editor, enabling simultaneous code editing by multiple users.
                        </ul>
                        <ul>
                            ◦ Spearheaded the development and integration of a code-compilation and room sharing feature using Room IDs.
                        </ul>
                        <ul>
                            ◦ Incorporated the functionality of a real-time messaging application.
                        </ul>
                        <ul>
                            ◦ Tech Stack: React JS, NodeJS, Express JS, Socket IO.
                        </ul>
                        </h5>
                        <br></br>
                        <a href="" className="btn btn-primary" target="_blank">GitHub</a>
                    </div>
                </article>


                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={ project3 } alt="Image"/>
                    </div>
                    <div className="portfolio__item-cta">
                        <h3><b>File Sharing App</b> : A Website for Sharing Files</h3>
                        <h5>
                            <ul>
                            A website where user can upload files and share it with others via link.
                            </ul>
                            <ul>
                            Tech stack: HTML, CSS, JavaScript, Express.JS, MongoDB, NodeJS
                            </ul>
                        </h5>
                        <br></br>
                        <a href="" className="btn btn-primary" target="_blank">GitHub</a>
                    </div>
                </article>


                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={ project4 } alt="Image"/>
                    </div>
                    <div className="portfolio__item-cta">
                        <h3><b>Polling Website</b> : An Online Platform for Polls</h3>
                        <h5>
                            <ul>
                            A website where user can create polls in seconds and share it with others.
                            </ul>
                            <ul>
                            Users can log in, create Polls, and can also share it with others and can visualize results through Graphical Representation.
                            </ul>   
                            <ul>
                            Tech stack: HTML, CSS, JavaScript, Canvas JS, Firebase Authentication, and Database.
                            </ul>
                        </h5>
                        <br></br>
                        <a href="" className="btn btn-primary" target="_blank">GitHub</a>
                    </div>
                </article>
            </div>
        </section>
    )
}
export default Portfolio;