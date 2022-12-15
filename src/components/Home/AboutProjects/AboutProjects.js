import React from 'react';
import './AboutProject.css'

const AboutProjects = () => {
    return (
        <div className='container bg-white'>
            <div className='row align-items-center'>
                <div className='about-project col-lg-6'>
                    <h4 className='around-title'>About the Project</h4>
                    <p className='project-info mt-3'>
                    Open Library is an open, editable library catalog, building towards a web page for every book ever published. <a href='..'>More</a>
                    </p>
                     <p className='project-info2'>
                     Just like Wikipedia, you can contribute new information or corrections to the catalog. You can browse by subjects, authors or lists members have created. If you love books, why not help build a library?
                     </p>
                </div>
                <div className='col-lg-6'>
                    <h5><a href='..'>Latest Blog Posts</a></h5>
                     <p><a href='..'>2022 Review</a>  <i>- November 23, 2022</i></p>
                     <p><a href='..'>Search for Books in your Reading Log</a><i>- November 23, 2022</i></p>
                     <p><a href='..'>Improvements to the Main Navigation</a><i>- November 22, 2022</i></p>
                </div>
            </div>
             
        </div>
    );
};

export default AboutProjects;