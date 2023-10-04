import React from "react";
import Body from "./Components/Body";
import { Route, Routes } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import AllCostomers from "./Components/Customers/AllCostomers/AllCostomers";
import AddCostomers from "./Components/Customers/AddCostomers/AddCostomers";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='' element={<Body />}>
          <Route index element={<HomeComponent />} />
          <Route path='/home' element={<HomeComponent />} />
          <Route path='/all-customers' element={<AllCostomers />} />
          <Route path='/add-customers' element={<AddCostomers />} />
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />} /> className
      </Routes>
    </div>
  );
}

export default App;
