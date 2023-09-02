import React from "react";
import "./Experience.css"
import { SiFirebase } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { DiGit } from "react-icons/di";


const Experience = () => {
    return (
        <section id="experience">
            <h5>The Skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                  <h3>Frontend Development</h3>  
                  <div className="experience__content">

                    <article className="experience__details">
                        <SiHtml5 className="experience__details__icons"/>
                        <div>
                            <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>

                    <article className="experience__details">
                        <FaCss3 className="experience__details__icons"/>
                        <div>
                            <h4>CSS</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>

                    <article className="experience__details">
                        <SiJavascript className="experience__details__icons"/>
                        <div>
                            <h4>JavaScript</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>

                    <article className="experience__details">
                        <SiBootstrap className="experience__details__icons"/>
                        <div>
                            <h4>Bootstrap</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>

                    <article className="experience__details">
                        <FaReact className="experience__details__icons"/>
                        <div>
                            <h4>React JS</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>

                  </div>
                </div>
            {/* BACKEND */}
            <div className="experience__backend">
                  <h3>Backend Development</h3>  
                  <div className="experience__content">

                    <article className="experience__details">
                        <FaNode className="experience__details__icons"/>
                        <div>
                            <h4>Node JS</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>

                    <article className="experience__details">
                        <SiMongodb className="experience__details__icons"/>
                        <div>
                            <h4>MongoDB</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>

                    <article className="experience__details">
                        <SiFirebase className="experience__details__icons"/>
                        <div>
                            <h4>FireBase</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>

                  </div>
                  <div className="experience__backend">

        <h3>Others</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <SiPostman className='experience__details__icons'/>
              <div>
                <h4>Postman</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <DiGit className='experience__details__icons'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

          </div>

        </div>

                </div>
            </div>
        </section>
    )
}

export default Experience