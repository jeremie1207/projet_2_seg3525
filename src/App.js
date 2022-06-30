
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import MyNavBar from './Component/NavBar/MyNavBar';
import Services from './Component/Services';
import Comments from './Component/Comments/Comments';

import React from 'react';
// import your route components too

function App() {
  return (
    <div >
     <MyNavBar></MyNavBar>
     <Home></Home>
     <Services></Services>
     <Comments></Comments>
    </div>
  );
}

export default App;
