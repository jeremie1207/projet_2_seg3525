import './Home.css';
import Header from './Header/Header';
import Services from './Services';
import React from 'react';
import Comments from './Comments/Comments';
import Who from './NavBar/Who';

const Home = () => {
    return (
        <div id='home'>
            <Header />
            <Who />
            <Services />
            <Comments />
        </div>);
}

export default Home;