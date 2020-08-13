import React from "react";
import './Styles.css';
import './About.css';
import {Row, Col} from 'reactstrap';
import Resume from '../assets/KristopherPrater.pdf';

let About = () => {
  return (
    <section id="aboutMe">
        <h1 id="aboutTitle">A little about me...</h1>
        <br/>
            <img src={require('../assets/KrisPrater.jpg')} alt="Kris Prater" className="headshot" class="img-fluid"/>
        <br/>
        <div className="aboutContainer">
        <Row className="row">
            <Col className="columnOne">
            {/* <h3>Who I am</h3> */}
            <p id="aboutText"> After a decade of working for the same company, in the warehouse industry, at levels varying from entry level to middle management I decided it was time for a change.  I left what I knew and embarked on a new journey in the world of computers. I am a recent graduate of the Web Development Bootcamp at Eleven Fifty Academy. After such a great experience and the feeling of accomplishment from all that I learned I decided to start the Software Development program. Outside of coding I am an avid football and race fan, and enjoy traveling with my family.</p>
            </Col>
            
            <Col id="columnTwo">
            </Col>
            
            <Col id="columnThree">
                {/* <h3>Some Information</h3> */}
                <ul>
                        <li>Bachelor's Degree from Indiana University</li>
                        <li>15 years of management experience</li>
                        <li>20 years of customer service experience</li>
                        <li>Proficient in Microsoft Office</li>
                        <li>Skilled in Javascript, React, TypeScript, CSS, HTML</li>
                        <li>Learning C#</li>
                </ul>
                <div id="resume"> 
                        <a href={Resume} download="KristopherPrater.pdf">Click to download my resume!</a>
                </div>
                <br/>
                <br/>
                <Row>
                    <Col>
                        <img src={require('../assets/skills.png')} alt="Skills List" className="skills"/>
                    </Col>
                </Row>
            </Col>
        </Row>
        </div>
    </section>
  );
}

export default About;