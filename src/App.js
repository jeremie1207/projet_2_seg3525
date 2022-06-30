
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import MyNavBar from './Component/NavBar/MyNavBar';


import React from 'react';
// import your route components too

function App() {
  return (
    <div >
     <MyNavBar></MyNavBar>
     <Home></Home>
    </div>
  );
}

export default App;
