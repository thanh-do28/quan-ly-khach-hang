import React from "react";
import "./HomeComponent.css";

export default function HomeComponent() {
  return (
    <div className='layout-page position-relative home-page'>
      <nav
        className='layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme bg-secondary position-fixed'
        id='layout-navbar'
      >
        <div
          className='navbar-nav-right d-flex align-items-center'
          id='navbar-collapse'
        >
          <div className='navbar-nav align-items-center'>
            <div className='nav-item d-flex align-items-center'>
              <input
                type='text'
                className='form-control border-0 shadow-none bg-body'
                placeholder='Search...'
                aria-label='Search...'
              />
              <button className='ms-4 bg-light py-1 px-2 rounded border-0'>
                <i className='fa-solid fa-magnifying-glass'></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className='content-wrapper content-wrapper-home'>
        <div className='container-xxl flex-grow-1 container-p-y'>
          <div className='row gy-4'>
            <div className='col-md-12 col-lg-4'>
              <div className='card'>
                <div className='card-body'>
                  <h4 className='card-title mb-1'>
                    Congratulations Tám Dơn! 🎉
                  </h4>
                  <p className='pb-0'>number of customers during the month</p>
                  <h4 className='text-primary mb-1'>100</h4>
                  <p className='mb-2 pb-1'>78% of target 🚀</p>
                  <a href='javascript:;' className='btn btn-sm btn-primary'>
                    View Sales
                  </a>
                </div>
                <img
                  src='../assets/img/icons/misc/triangle-light.png'
                  className='scaleX-n1-rtl position-absolute bottom-0 end-0'
                  width='166'
                  alt='triangle background'
                  data-app-light-img='icons/misc/triangle-light.png'
                  data-app-dark-img='icons/misc/triangle-dark.png'
                />
                <img
                  src='../assets/img/illustrations/trophy.png'
                  className='scaleX-n1-rtl position-absolute bottom-0 end-0 me-4 mb-4 pb-2'
                  width='83'
                  alt='view sales'
                />
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='card'>
                <div className='card-header'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <h5 className='card-title m-0 me-2'>Transactions</h5>
                    <div className='dropdown'>
                      <button
                        className='btn p-0'
                        type='button'
                        id='transactionID'
                        data-bs-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        <i className='mdi mdi-dots-vertical mdi-24px'></i>
                      </button>
                      <div
                        className='dropdown-menu dropdown-menu-end'
                        aria-labelledby='transactionID'
                      >
                        <a className='dropdown-item' href='javascript:void(0);'>
                          Refresh
                        </a>
                        <a className='dropdown-item' href='javascript:void(0);'>
                          Share
                        </a>
                        <a className='dropdown-item' href='javascript:void(0);'>
                          Update
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className='mt-3'>
                    <span className='fw-medium'>Total 48.5% growth</span> 😎
                    this month
                  </p>
                </div>
                <div className='card-body'>
                  <div className='row g-3'>
                    <div className='col-md-3 col-6'>
                      <div className='d-flex align-items-center'>
                        <div className='avatar'>
                          <div className='avatar-initial bg-primary rounded shadow'>
                            <i className='mdi mdi-trending-up mdi-24px'></i>
                          </div>
                        </div>
                        <div className='ms-3'>
                          <div className='small mb-1'>Sales</div>
                          <h5 className='mb-0'>245k</h5>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-3 col-6'>
                      <div className='d-flex align-items-center'>
                        <div className='avatar'>
                          <div className='avatar-initial bg-success rounded shadow'>
                            <i className='mdi mdi-account-outline mdi-24px'></i>
                          </div>
                        </div>
                        <div className='ms-3'>
                          <div className='small mb-1'>Customers</div>
                          <h5 className='mb-0'>12.5k</h5>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-3 col-6'>
                      <div className='d-flex align-items-center'>
                        <div className='avatar'>
                          <div className='avatar-initial bg-warning rounded shadow'>
                            <i className='mdi mdi-cellphone-link mdi-24px'></i>
                          </div>
                        </div>
                        <div className='ms-3'>
                          <div className='small mb-1'>Product</div>
                          <h5 className='mb-0'>1.54k</h5>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-3 col-6'>
                      <div className='d-flex align-items-center'>
                        <div className='avatar'>
                          <div className='avatar-initial bg-info rounded shadow'>
                            <i className='mdi mdi-currency-usd mdi-24px'></i>
                          </div>
                        </div>
                        <div className='ms-3'>
                          <div className='small mb-1'>Revenue</div>
                          <h5 className='mb-0'>$88k</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-md-6'>
              <div className='card'>
                <div className='card-header'>
                  <div className='d-flex justify-content-between'>
                    <h5 className='mb-1'>Weekly Overview</h5>
                    <div className='dropdown'>
                      <button
                        className='btn p-0'
                        type='button'
                        id='weeklyOverviewDropdown'
                        data-bs-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        <i className='mdi mdi-dots-vertical mdi-24px'></i>
                      </button>
                      <div
                        className='dropdown-menu dropdown-menu-end'
                        aria-labelledby='weeklyOverviewDropdown'
                      >
                        <a className='dropdown-item' href='javascript:void(0);'>
                          Refresh
                        </a>
                        <a className='dropdown-item' href='javascript:void(0);'>
                          Share
                        </a>
                        <a className='dropdown-item' href='javascript:void(0);'>
                          Update
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-body'>
                  <div id='weeklyOverviewChart'></div>
                  <div className='mt-1 mt-md-3'>
                    <div className='d-flex align-items-center gap-3'>
                      <h3 className='mb-0'>45%</h3>
                      <p className='mb-0'>
                        Your sales performance is 45% 😎 better compared to last
                        month
                      </p>
                    </div>
                    <div className='d-grid mt-3 mt-md-4'>
                      <button className='btn btn-primary' type='button'>
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-md-6'>
              <div className='card'>
                <div className='card-header d-flex align-items-center justify-content-between'>
                  <h5 className='card-title m-0 me-2'>Total Earning</h5>
                  <div className='dropdown'>
                    <button
                      className='btn p-0'
                      type='button'
                      id='totalEarnings'
                      data-bs-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <i className='mdi mdi-dots-vertical mdi-24px'></i>
                    </button>
                    <div
                      className='dropdown-menu dropdown-menu-end'
                      aria-labelledby='totalEarnings'
                    >
                      <a className='dropdown-item' href='javascript:void(0);'>
                        Last 28 Days
                      </a>
                      <a className='dropdown-item' href='javascript:void(0);'>
                        Last Month
                      </a>
                      <a className='dropdown-item' href='javascript:void(0);'>
                        Last Year
                      </a>
                    </div>
                  </div>
                </div>
                <div className='card-body'>
                  <div className='mb-3 mt-md-3 mb-md-5'>
                    <div className='d-flex align-items-center'>
                      <h2 className='mb-0'>$24,895</h2>
                      <span className='text-success ms-2 fw-medium'>
                        <i className='mdi mdi-menu-up mdi-24px'></i>
                        <small>10%</small>
                      </span>
                    </div>
                    <small className='mt-1'>
                      Compared to $84,325 last year
                    </small>
                  </div>
                  <ul className='p-0 m-0'>
                    <li className='d-flex mb-4 pb-md-2'>
                      <div className='avatar flex-shrink-0 me-3'>
                        <img
                          src='../assets/img/icons/misc/zipcar.png'
                          alt='zipcar'
                          className='rounded'
                        />
                      </div>
                      <div className='d-flex w-100 flex-wrap align-items-center justify-content-between gap-2'>
                        <div className='me-2'>
                          <h6 className='mb-0'>Zipcar</h6>
                          <small>Vuejs, React & HTML</small>
                        </div>
                        <div>
                          <h6 className='mb-2'>$24,895.65</h6>
                          <div
                            className='progress bg-label-primary'
                            style={{ height: "4px" }}
                          >
                            <div
                              className='progress-bar bg-primary'
                              style={{ width: "75%" }}
                              role='progressbar'
                              aria-valuenow='75'
                              aria-valuemin='0'
                              aria-valuemax='100'
                            ></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='d-flex mb-4 pb-md-2'>
                      <div className='avatar flex-shrink-0 me-3'>
                        <img
                          src='../assets/img/icons/misc/bitbank.png'
                          alt='bitbank'
                          className='rounded'
                        />
                      </div>
                      <div className='d-flex w-100 flex-wrap align-items-center justify-content-between gap-2'>
                        <div className='me-2'>
                          <h6 className='mb-0'>Bitbank</h6>
                          <small>Sketch, Figma & XD</small>
                        </div>
                        <div>
                          <h6 className='mb-2'>$8,6500.20</h6>
                          <div
                            className='progress bg-label-info'
                            style={{ height: "4px" }}
                          >
                            <div
                              className='progress-bar bg-info'
                              style={{ width: "75%" }}
                              role='progressbar'
                              aria-valuenow='75'
                              aria-valuemin='0'
                              aria-valuemax='100'
                            ></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='d-flex mb-md-3'>
                      <div className='avatar flex-shrink-0 me-3'>
                        <img
                          src='../assets/img/icons/misc/aviato.png'
                          alt='aviato'
                          className='rounded'
                        />
                      </div>
                      <div className='d-flex w-100 flex-wrap align-items-center justify-content-between gap-2'>
                        <div className='me-2'>
                          <h6 className='mb-0'>Aviato</h6>
                          <small>HTML & Angular</small>
                        </div>
                        <div>
                          <h6 className='mb-2'>$1,2450.80</h6>
                          <div
                            className='progress bg-label-secondary'
                            style={{ height: "4px" }}
                          >
                            <div
                              className='progress-bar bg-secondary'
                              style={{ width: "75%" }}
                              role='progressbar'
                              aria-valuenow='75'
                              aria-valuemin='0'
                              aria-valuemax='100'
                            ></div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-md-6'>
              <div className='row gy-4'>
                <div className='col-sm-6'>
                  <div className='card h-100'>
                    <div className='card-header pb-0'>
                      <h4 className='mb-0'>$86.4k</h4>
                    </div>
                    <div className='card-body'>
                      <div id='totalProfitLineChart' className='mb-3'></div>
                      <h6 className='text-center mb-0'>Total Profit</h6>
                    </div>
                  </div>
                </div>

                <div className='col-sm-6'>
                  <div className='card h-100'>
                    <div className='card-header d-flex align-items-center justify-content-between'>
                      <div className='avatar'>
                        <div className='avatar-initial bg-secondary rounded-circle shadow'>
                          <i className='mdi mdi-poll mdi-24px'></i>
                        </div>
                      </div>
                      <div className='dropdown'>
                        <button
                          className='btn p-0'
                          type='button'
                          id='totalProfitID'
                          data-bs-toggle='dropdown'
                          aria-haspopup='true'
                          aria-expanded='false'
                        >
                          <i className='mdi mdi-dots-vertical mdi-24px'></i>
                        </button>
                        <div
                          className='dropdown-menu dropdown-menu-end'
                          aria-labelledby='totalProfitID'
                        >
                          <a
                            className='dropdown-item'
                            href='javascript:void(0);'
                          >
                            Refresh
                          </a>
                          <a
                            className='dropdown-item'
                            href='javascript:void(0);'
                          >
                            Share
                          </a>
                          <a
                            className='dropdown-item'
                            href='javascript:void(0);'
                          >
                            Update
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='card-body mt-mg-1'>
                      <h6 className='mb-2'>Total Profit</h6>
                      <div className='d-flex flex-wrap align-items-center mb-2 pb-1'>
                        <h4 className='mb-0 me-2'>$25.6k</h4>
                        <small className='text-success mt-1'>+42%</small>
                      </div>
                      <small>Weekly Project</small>
                    </div>
                  </div>
                </div>

                <div className='col-sm-6'>
                  <div className='card h-100'>
                    <div className='card-header d-flex align-items-center justify-content-between'>
                      <div className='avatar'>
                        <div className='avatar-initial bg-primary rounded-circle shadow-sm'>
                          <i className='mdi mdi-wallet-travel mdi-24px'></i>
                        </div>
                      </div>
                      <div className='dropdown'>
                        <button
                          className='btn p-0'
                          type='button'
                          id='newProjectID'
                          data-bs-toggle='dropdown'
                          aria-haspopup='true'
                          aria-expanded='false'
                        >
                          <i className='mdi mdi-dots-vertical mdi-24px'></i>
                        </button>
                        <div
                          className='dropdown-menu dropdown-menu-end'
                          aria-labelledby='newProjectID'
                        >
                          <a
                            className='dropdown-item'
                            href='javascript:void(0);'
                          >
                            Refresh
                          </a>
                          <a
                            className='dropdown-item'
                            href='javascript:void(0);'
                          >
                            Share
                          </a>
                          <a
                            className='dropdown-item'
                            href='javascript:void(0);'
                          >
                            Update
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='card-body mt-mg-1'>
                      <h6 className='mb-2'>New Project</h6>
                      <div className='d-flex flex-wrap align-items-center mb-2 pb-1'>
                        <h4 className='mb-0 me-2'>862</h4>
                        <small className='text-danger mt-1'>-18%</small>
                      </div>
                      <small>Yearly Project</small>
                    </div>
                  </div>
                </div>

                <div className='col-sm-6'>
                  <div className='card h-100'>
                    <div className='card-header pb-0'>
                      <h4 className='mb-0'>2,856</h4>
                    </div>
                    <div className='card-body'>
                      <div id='sessionsColumnChart' className='mb-3'></div>
                      <h6 className='text-center mb-0'>Sessions</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
