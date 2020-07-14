import React from 'react';
import { Jumbotron} from 'reactstrap';
import './Home.css';


const Home = (props) => {
  return (
    <div id="top">
      <Jumbotron className='jumbotron'>
        <h1 className="name">Kris Prater</h1>
        <h4>Web Developer</h4>
        <h4>&</h4>
        <h4>Software Developer(In Training)</h4>
      </Jumbotron>
    </div>
  );
};

export default Home;