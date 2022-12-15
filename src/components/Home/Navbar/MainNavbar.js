import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './MainNavbar.css'
import Offcanvas from './Offcanvas';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
const MainNavbar = () => {
    return (
        <div className="container main-Navbar">
             <Navbar>
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://openlibrary.org/static/images/openlibrary-logo-tighter.svg" alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link className='ms-4' href="..">My Books</Nav.Link>
            <NavDropdown className='browse-dropDown' title="Browse" id="navbarScrollingDropdown">
              <NavDropdown.Item href="..">Action</NavDropdown.Item>
              <NavDropdown.Item href="..">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="..">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavDropdown className='all-button' title="All" id="navbarScrollingDropdown">
              <NavDropdown.Item href="..">Action</NavDropdown.Item>
              <NavDropdown.Item href="..">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="..">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <div className='position-relative'>
            <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 search-filed"
                  aria-label="Search"
                />
                
              </Form>
                 <div className='search-icon-button'>
                     <MagnifyingGlassIcon className='search-icon'/>
                 </div>
            </div>
          <div className='d-flex align-items-center ms-3 mt-3 nav-left-part'>
             <div>
             <a href='..' className='login-button2'>Log In</a>
             </div>
             <div className=''>
             <Button className='singUp-button2' href="#">Sing Up</Button>
             </div>
              <div className='ms-3'>
              <Offcanvas className="mt-2 ms-5"></Offcanvas>
              </div>
          </div>
          
       
      </Container>
    </Navbar>
        </div>
    );
};

export default MainNavbar;