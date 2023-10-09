import React from "react";

import ModalCostomers from "../ModalCostomers/ModalCostomers";

export default function ReexaminationOne() {
  return (
    <>
      <div className='card allcostomers position-relative'>
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
                  type='search'
                  className='form-control border-0 shadow-none bg-body w-100'
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
        <div className='table-allcostomers'>
          <h3 className='card-header'>Re-examination One</h3>
          <div className='table'>
            <table className='table text-center align-middle table-bordered'>
              <thead>
                <tr className='text-nowrap'>
                  <th>Stt</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Place Of Performance</th>
                  <th>Doctor performed</th>
                  <th>Service</th>
                  <th>Price(VND)</th>
                  <th>Re date</th>
                  <th>Status</th>
                  <th>Detail</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className='table-border-bottom-0'>
                <tr>
                  <th scope='row'>1</th>
                  <td>
                    <img
                      className='w-50'
                      src='https://bizweb.dktcdn.net/100/438/408/files/anh-chan-dung-dep-yodyvn1.jpg?v=1683537734987'
                      alt=''
                    />
                  </td>
                  <td>Nguyễn Ngọc Anh</td>
                  <td>0399171003</td>
                  <td>bệnh viện hà thành</td>
                  <td>Mr.Nguyễn Thị Tám Dơn</td>
                  <td>Nâng mũi</td>
                  <td>1888đ</td>
                  <td>25/09/2023</td>
                  <td style={{ color: "blue" }}>khám lại L1</td>
                  <td>
                    <ModalCostomers />
                  </td>
                  <td>
                    <div
                      className='btn-group'
                      role='group'
                      aria-label='Basic example'
                    >
                      <div className='btn-allcostomers-edit position-relative'>
                        <div className='allcostomers-edit'>edit</div>
                        <button
                          type='button'
                          className='bg-primary mx-1 border-0 rounded'
                        >
                          <i className='fa-regular fa-pen-to-square'></i>
                        </button>
                      </div>
                      <div className='btn-allcostomers-del position-relative'>
                        <div className='allcostomers-del'>del</div>
                        <button
                          type='button'
                          className='bg-danger border-0 rounded'
                        >
                          <i className='fa-solid fa-trash'></i>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
