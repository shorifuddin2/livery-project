import React from 'react';
import Navbar2 from './Navbar2';

const Offcanvas = () => {
        return (
        <div className='offCanvas-button'>
              {['end'].map((placement, idx) => (
          <Navbar2 key={idx} placement={placement} name={placement}/>
      ))}
        </div>
    );
};

export default Offcanvas;