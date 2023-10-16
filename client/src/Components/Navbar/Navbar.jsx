import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };
  return (
    <>
      <div id='sidebar' class={isSidebarOpen ? "" : "active"}>
        <div className='d-flex justify-content-between align-items-center w-100 my-3'>
          <a
            href='/'
            className={`d-flex align-items-center mb-md-0 me-md-auto text-white text-decoration-none ${
              isSidebarOpen ? "" : "d-none"
            }`}
          >
            <span className='fs-5 d-none d-sm-inline'>Tám Dơn</span>
          </a>
          <button
            type='button'
            id='sidebarCollapse'
            class='btn ms-2'
            onClick={toggleSidebar}
          >
            <i class='fa fa-bars'></i>
            <span class='sr-only'>Toggle Menu</span>
          </button>
        </div>
        <nav>
          <ul class='list-unstyled components mb-5'>
            <li class='active'>
              <Link to='/home' className='text-decoration-none'>
                <span className='fa fa-home'></span>
                Home
              </Link>
            </li>
            <li>
              <a
                href='#submenu3'
                data-bs-toggle='collapse'
                className='text-decoration-none'
              >
                <span className='fa-solid fa-table'></span>Customers
              </a>
              <ul
                className='collapse nav ms-1 w-100'
                id='submenu3'
                data-bs-parent='#menu'
              >
                <li className='nav-item'>
                  <Link to='/all-customers' className='text-decoration-none'>
                    <span className='fa-solid fa-table'></span>
                    all customers
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/re-examination-one'
                    className='text-decoration-none'
                  >
                    <span className='fa-solid fa-table'></span>
                    Re-examination One
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/re-examination-two'
                    className='text-decoration-none'
                  >
                    <span className='fa-solid fa-table'></span>
                    Re-examination Two
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/add-customers' className='text-decoration-none'>
                    <span className='fa-solid  fa-plus'></span>
                    add customers
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className='user-info dropdown pb-4'>
          <a
            className='d-flex align-items-center text-white text-decoration-none dropdown-toggle'
            id='dropdownUser1'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <img
              src='https://github.com/mdo.png'
              alt='hugenerd'
              width='30'
              height='30'
              className='rounded-circle'
            />
            <span className='d-none d-sm-inline mx-1'>loser</span>
          </a>
          <ul className='dropdown-menu dropdown-menu-dark text-small shadow'>
            <li>
              <a className='dropdown-item1' href='#'>
                New project...
              </a>
            </li>
            <li>
              <a className='dropdown-item1' href='#'>
                Settings
              </a>
            </li>
            <li>
              <a className='dropdown-item1' href='#'>
                Profile
              </a>
            </li>
            <li>
              <Link to='/login' className='dropdown-item1'>
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
