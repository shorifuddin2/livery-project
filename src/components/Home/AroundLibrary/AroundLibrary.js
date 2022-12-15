import React from 'react';
import image1 from '../../../image/Capture1.PNG'
import image2 from '../../../image/Capture2.PNG'
import image3 from '../../../image/Capture3.PNG'
import image4 from '../../../image/Capture4.PNG'
import image5 from '../../../image/Capture5.PNG'
import './AroundLibrary.css'
const AroundLibrary = () => {
    return (
        <div className='container bg-white'>
            <div className='ps-4 d-flex'>
                <h4 className='around-title'>Around the Library</h4>
                <div className='mt-2 ms-2'>
                    <span>Here's what's happened over the last 28 days. More<a href='..' className='ms-1'>recent changes.</a>
                    </span>
                </div>
            </div>
                <div className='row'>
                    <div className='library col-lg-2 ms-4'>
                        <img className='ms-4' src={image1} alt=''/>
                          <div className='ms-5 mt-2'>
                             <p className='visitors'>4,095,566</p>
                             <p className='unique'>UNIQUE VISITORS</p>
                          </div>
                    </div>
                    <div className='library col-lg-2 ms-4'>
                        <img className='ms-4' src={image2} alt=''/>
                          <div className='ms-5 mt-2'>
                             <p className='visitors'>4,095,566</p>
                             <p className='unique'>UNIQUE VISITORS</p>
                          </div>
                    </div>
                    <div className='library col-lg-2 ms-4'>
                        <img className='ms-4' src={image3} alt=''/>
                          <div className='ms-5 mt-2'>
                             <p className='visitors'>4,095,566</p>
                             <p className='unique'>UNIQUE VISITORS</p>
                          </div>
                    </div>
                    <div className='library col-lg-2 ms-4'>
                        <img className='ms-4' src={image4} alt=''/>
                          <div className='ms-5 mt-2'>
                             <p className='visitors'>4,095,566</p>
                             <p className='unique'>UNIQUE VISITORS</p>
                          </div>
                    </div>
                    <div className='library col-lg-2 ms-4'>
                        <img className='ms-4' src={image5} alt=''/>
                          <div className='ms-5 mt-2'>
                             <p className='visitors'>4,095,566</p>
                             <p className='unique'>UNIQUE VISITORS</p>
                          </div>
                    </div>
                   
                </div>
        </div>
    );
};

export default AroundLibrary;