import React from 'react';
import {Navbar, Nav, NavItem, NavLink, NavbarBrand} from 'reactstrap';
import './Sitebar.css';

const Sitebar = (props) => {

  return (
    <div id="navMain">
      <Navbar id="navbar" className="bg-dark" color="dark" fixed="top">
        <NavbarBrand id="navLogo" href='#top'>KP</NavbarBrand> 
        <Nav>
          <NavItem>
            <NavLink id="link" href='#aboutMe'>About Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="link" href='#myProjects'>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="link" href='#contactMe'>Contact</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Sitebar;

