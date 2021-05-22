import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Icon, Nav, Navbar } from 'rsuite';

const NavBar = ({onSelect, activeKey,...props}) => (
        <Navbar appearance="inverse" {...props}>
        <Navbar.Header>
          <Link id="RouterNavLink" to="/" className="d-flex pt-2 align-items-center font-huge text-black">
            Shopping Mall
          </Link>
        </Navbar.Header>
        <Navbar.Body>
          <Nav onSelect={onSelect} activeKey={activeKey}>
            <Nav.Item componentClass={Link} href="/" to="/" icon={<Icon icon="home" className="text-white"/>}>
                HOME
             </Nav.Item>
            <Nav.Item eventKey="2">News</Nav.Item>
            <Nav.Item eventKey="3">Products</Nav.Item>
            <Dropdown title="About">
              <Dropdown.Item eventKey="4">Company</Dropdown.Item>
              <Dropdown.Item eventKey="5">Team</Dropdown.Item>
              <Dropdown.Item eventKey="6">Contact</Dropdown.Item>
            </Dropdown>
          </Nav>
          <Nav pullRight>
            <Nav.Item icon={<Icon icon="shopping-basket" />}>Basket</Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    )

export default NavBar;
