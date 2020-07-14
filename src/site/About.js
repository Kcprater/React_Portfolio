import React from "react";
import './About.css';
import {Row, Col} from 'reactstrap';
import Resume from '../assets/Resume.pdf';

const About = () => {
  return (
    <section id="aboutMe">
        <h1 id="aboutTitle">All about me...Kris Prater</h1>
        <br/>
        <br/>
        <div className="aboutContainer">
        <Row className="row">
            <Col>
            <h3>Who I am</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue non sapien et accumsan. Aliquam imperdiet varius nunc, non porttitor nunc porta sed. Sed placerat nisi in aliquet pharetra. Aliquam condimentum condimentum odio, mollis mollis nibh dapibus sed. Sed faucibus interdum lacinia. Cras quis euismod ipsum, sed faucibus metus. Ut ut dui eu ante blandit varius et tempus lacus. Integer non augue facilisis, tristique nisl a, pellentesque libero. Proin dignissim placerat consequat. Aliquam fermentum tincidunt lacus, a scelerisque est posuere nec. Quisque vel libero eget ipsum varius rutrum vitae ac lorem. Morbi luctus risus sit amet nulla faucibus, nec sagittis ipsum aliquet. Cras ac augue eget mauris consectetur ultricies nec ornare neque. Duis dapibus placerat sollicitudin. Quisque lacinia mi sodales molestie ullamcorper. Donec et eros pretium, ultrices dolor vel, dictum magna.</p>
            <ul id="qualifications">
                <li>Degree</li>
                <li>managment</li>
                <li>customer service</li>
            </ul>
            </Col>
            
            <Col>
                {/* <h3>Picture of Me</h3> */}
                <img src={require('../assets/KrisPrater.jpg')} alt="Kris Prater" className="headshot"/>
            </Col>
            
            <Col>
                <h3>Some Information</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue non sapien et accumsan. Aliquam imperdiet varius nunc, non porttitor nunc porta sed. Sed placerat nisi in aliquet pharetra. Aliquam condimentum condimentum odio, mollis mollis nibh dapibus sed. Sed faucibus interdum lacinia. Cras quis euismod ipsum, sed faucibus metus. Ut ut dui eu ante blandit varius et tempus lacus. Integer non augue facilisis, tristique nisl a, pellentesque libero. Proin dignissim placerat consequat. Aliquam fermentum tincidunt lacus, a scelerisque est posuere nec. Quisque vel libero eget ipsum varius rutrum vitae ac lorem. Morbi luctus risus sit amet nulla faucibus, nec sagittis ipsum aliquet. Cras ac augue eget mauris consectetur ultricies nec ornare neque. Duis dapibus placerat sollicitudin. Quisque lacinia mi sodales molestie ullamcorper. Donec et eros pretium, ultrices dolor vel, dictum magna.</p>
                <div id="resume"> 
                        <a href={Resume} download="Kris_Prater_Resume.pdf">Click to download my resume!</a>
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