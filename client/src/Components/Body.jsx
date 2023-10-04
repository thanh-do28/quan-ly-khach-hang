import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Body() {
  return (
    <div className='container-fluid'>
      <div className='row flex-nowrap'>
        <Navbar />
        <Outlet></Outlet>
      </div>
    </div>
  );
}
