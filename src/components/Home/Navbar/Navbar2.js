import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar2.css'
import { Bars3Icon } from '@heroicons/react/24/outline'

const Navbar2 =({name, ...props }) =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow} className="offCanvas-button">
      <Bars3Icon className='offCanvas-icon'/><span className='d-none'>{name}</span>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        
         <div className='offcanvas-title mt-3'>
         <h2 className='ms-3'>My Open Library</h2>
         </div>
          <div className='d-flex mx-3 mt-3'>
             <div>
             <Button className='login-button' variant="outline-primary">Log In</Button>
             </div>
             <div className='ms-3'>
             <Button className='singUp-button' href="#">Sing Up</Button>
             </div>
          </div>
          <div className=' mt-4'>
          <h5 className='ofcanvas-list-title'>Browse</h5>
            <ul className='offcanvas-list'>
                
                <li>Subjects</li>
                <li>Trending</li>
                <li>Library Explorer</li>
                <li>Lists</li>
                <li>Collections</li>
                <li>K-12 Student Library</li>
                <li>Random Book</li>
                <li>Advanced Search</li>
            </ul>
            <h5 className='ofcanvas-list-title'>Contribute</h5>
            <ul className='offcanvas-list'>
                 <li>Add a Book</li>
                 <li>Recent Community Edits</li>
                 
            </ul>
            <h5 className='ofcanvas-list-title'>Resources</h5>
            <ul className='offcanvas-list'>
                
                 <li>Help & Support</li>
                 <li>Developer Center</li>
                 <li>Librarians Portal</li>
                 
            </ul>
          </div>
      </Offcanvas>
    </div>
  );
}
export default Navbar2;
