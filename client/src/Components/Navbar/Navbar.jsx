import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark navbar-ql'>
        <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
          <a
            href='/'
            className='d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none '
          >
            <span className='fs-5 d-none d-sm-inline'>Tám Dơn</span>
          </a>
          <ul
            className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100'
            id='menu'
          >
            <li className='nav-item'>
              <Link
                to='/home'
                className='nav-link text-white align-middle px-0'
              >
                <i className='fa-solid fa-house-chimney'></i>
                <span className='ms-1 d-none d-sm-inline'>Home</span>
              </Link>
            </li>
            <li className='nav-item'>
              <a
                href='#submenu3'
                data-bs-toggle='collapse'
                className='nav-link text-white px-0 align-middle'
              >
                <i className='fa-solid fa-table'></i>
                <span className='ms-1 d-none d-sm-inline'>Customers</span>{" "}
              </a>
              <ul
                className='collapse nav ms-1 w-100'
                id='submenu3'
                data-bs-parent='#menu'
              >
                <li className='nav-item'>
                  <Link
                    to='/all-customers'
                    className='nav-link text-white px-0'
                  >
                    <i className='fa-solid fa-table'></i>
                    <span className='ms-1 d-none d-sm-inline'>
                      all customers
                    </span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/re-examination-one'
                    className='nav-link text-white px-0'
                  >
                    <i className='fa-solid fa-table'></i>
                    <span className='ms-1 d-none d-sm-inline'>
                      Re-examination One
                    </span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/re-examination-two'
                    className='nav-link text-white px-0'
                  >
                    <i className='fa-solid fa-table'></i>
                    <span className='ms-1 d-none d-sm-inline'>
                      Re-examination Two
                    </span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/add-customers'
                    className='nav-link text-white px-0'
                  >
                    <i className='fa-solid  fa-plus'></i>
                    <span className='ms-1 d-none d-sm-inline'>
                      add customers
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

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
                <a className='dropdown-item' href='#'>
                  New project...
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Settings
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Profile
                </a>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li>
                <Link to='/login' className='dropdown-item'>
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
