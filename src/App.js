
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import MyNavBar from './Component/NavBar/MyNavBar';
import Services from './Component/Services';
import Comments from './Component/Comments/Comments';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
// import your route components too

function App() {
  return (
    <div >
      <MyNavBar></MyNavBar>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}>
            <Route exact path='/#services'  smooth element={<Services />}></Route>
            <Route exact path='/#comments'  smooth element={<Comments />}></Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
