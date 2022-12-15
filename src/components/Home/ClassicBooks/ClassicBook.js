import React from 'react';

const ClassicBook = ({product}) => {
    const{ _id, name, picture,} = product;

    return (
      <div className='col-lg-2 trending-card'>
          <div>
        <div className='d-flex flex-column'>
        <img src={picture} class="card-img" alt="..."/>
        <div>
         <div className='text-center button'>
            {
                name === 'Borrow'?<button  className="details-button">{name}</button>:''||name === 'Preview'? <button  className="details-preview-button text-xl ">{name}</button>:'' || name === 'Not in Library'? <button  className="details-not-button text-xl ">{name}</button>:''||  name === 'Join WaitList'?<button  className="details-button">{name}</button>:'' || name === 'Checked Out'? <button  className="details-not-button text-xl ">{name}</button>:''
            }
       
         </div>
        </div>
        </div>
      </div>
      
      </div>
      
    );
};

export default ClassicBook;