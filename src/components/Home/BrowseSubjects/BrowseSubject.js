import React from 'react';
import './BrowseSubject.css'
const BrowseSubject = ({product}) => {
    const{ _id, name, picture, books} = product;

    return (
      <div className='col-lg-2 browse-subject'>
          <div>
        <div className='d-flex flex-column'>
        <img src={picture} class="browse-img" alt="..."/>
         <div className='text-center browse-titles'>
                <p>{name}</p>
                <p className='book-info'>{books}</p>
         </div>
        
        </div>
      </div>
      
      </div>
      
    );
};

export default BrowseSubject;