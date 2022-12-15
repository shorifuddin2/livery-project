import React from 'react';
import MainNavbar from './Navbar/MainNavbar';
import './Home.css'
import Banner from './Banner/Banner';
import TrendingBooks from './TrendingBooks/TrendingBooks';
// import ClassicBooks from './ClassicBooks/ClassicBooks';
// import BooksWeLoves from './BooksWeLoves/BooksWeLoves';
// import RecentlyReturns from './RecentlyReturns/RecentlyReturns';
// import Romances from './Romances/Romances';
// import Kids from './Kids/Kids';
// import Thrillers from './Thrillers/Thrillers';
// import Textbooks from './Textbooks/Textbooks';
// import AuthorsAlliances from './AuthorsAlliances/AuthorsAlliances';
// import BrowseSubjects from './BrowseSubjects/BrowseSubjects';
import AroundLibrary from './AroundLibrary/AroundLibrary';
import AboutProjects from './AboutProjects/AboutProjects';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='home-page'>
            
            <MainNavbar></MainNavbar>
             <Banner></Banner> 
             <TrendingBooks></TrendingBooks>
            {/*<ClassicBooks></ClassicBooks>
            <BooksWeLoves></BooksWeLoves>
            <RecentlyReturns></RecentlyReturns>
           <Romances></Romances>
           <Kids></Kids>
           <Thrillers></Thrillers>
           <Textbooks></Textbooks>
           <AuthorsAlliances></AuthorsAlliances>
           <BrowseSubjects></BrowseSubjects>*/}
           <AroundLibrary></AroundLibrary>
           <AboutProjects></AboutProjects>  
           <Footer></Footer>
        </div>
    );
};

export default Home;