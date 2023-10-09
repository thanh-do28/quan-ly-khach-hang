import React from "react";

export default function ModalCostomers() {
  return (
    <div>
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        Detail
      </button>
      <div
        className='modal fade'
        id='exampleModal'
        tablndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Chi tiết khách hàng
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              {/* thông tin khách hàng */}
              <div className='d-flex'>
                <div className='w-25 mx-5'>
                  <img
                    className='w-100'
                    src='https://bizweb.dktcdn.net/100/438/408/files/anh-chan-dung-dep-yodyvn1.jpg?v=1683537734987'
                    alt=''
                  />
                </div>
                <div>
                  <div className='d-flex align-items-center my-1'>
                    <h6 className='mx-4'>Full name :</h6>
                    <h3>Nguyễn Ngọc Anh</h3>
                  </div>
                  <div className='d-flex align-items-center my-1 '>
                    <h6 className='mx-4'>Year of Birth :</h6>
                    <h5>2005</h5>
                  </div>
                  <div className='d-flex align-items-center my-1'>
                    <h6 className='mx-4'>Phone number :</h6>
                    <h5>0399171003</h5>
                  </div>
                  <div className='d-flex align-items-center'>
                    <h6 className='mx-4'>Address:</h6>
                    <h6>
                      R5A 3306 Royal City 72 Nguyễn Trãi, Thượng Đình, Thanh
                      Xuân, Hà Nội
                    </h6>
                  </div>
                </div>
              </div>
              {/* dịch vụ */}
              <div>
                <h3 className='mt-3 border-top w-75 m-auto'>
                  customer service
                </h3>
                <div className='d-flex align-items-center mt-3'>
                  <div className='d-flex align-items-center me-5'>
                    <h6 className='mx-4'>Service :</h6>
                    <h5>Nâng Ngực</h5>
                  </div>
                  <div className='d-flex align-items-center'>
                    <h6 className='mx-4'>Price :</h6>
                    <h5>
                      1.000.000<span>VND</span>
                    </h5>
                  </div>
                </div>
                <div className='mt-1'>
                  <div className='d-flex align-items-center mt-1'>
                    <h6 className='mx-4'>Surgery times :</h6>
                    <table className='table w-75'>
                      <thead>
                        <tr>
                          <th scope='col'>lần 1</th>
                          <th scope='col'>lần 2</th>
                          <th scope='col'>lần 3</th>
                          <th scope='col'>lần 4</th>
                          <th scope='col'>lần 5</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>20/10/2022</td>
                          <td>20/10/2022</td>
                          <td>20/10/2022</td>
                          <td>20/10/2022</td>
                          <td>20/10/2022</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className='d-flex align-items-center mt-1'>
                    <h6 className='mx-4'>index :</h6>
                    <table style={{ width: "83%" }} className='table'>
                      <thead>
                        <tr>
                          <th scope='col'>Chiều cao</th>
                          <th scope='col'>Cân nặng</th>
                          <th scope='col'>Vòng 1</th>
                          <th scope='col'>Vòng 2</th>
                          <th scope='col'>Vòng 3</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            160 <span>cm</span>
                          </td>
                          <td>
                            160 <span>kg</span>
                          </td>
                          <td>
                            160 <span>cm</span>
                          </td>
                          <td>
                            160 <span>cm</span>
                          </td>
                          <td>
                            160 <span>cm</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className='d-flex align-items-center me-5'>
                    <h6 className='mx-4'>Place Of Performance :</h6>
                    <h5>Bệnh viện hà thành</h5>
                  </div>
                  <div className='d-flex align-items-center me-5 mt-1'>
                    <h6 className='mx-4'>Doctor Performed :</h6>
                    <h5>Nguyễn Thị Tám Dơn</h5>
                  </div>
                  <div className='d-flex align-items-center me-5 mt-1'>
                    <h6 className='mx-4'>Implementation Date :</h6>
                    <h5>26/09/2023</h5>
                  </div>
                  <div className='d-flex'>
                    <div className='d-flex align-items-center me-5 mt-1'>
                      <h6 className='mx-4'>Status :</h6>
                      <h5>khám lại lần 1</h5>
                    </div>
                    <div className='d-flex align-items-center me-5 mt-1'>
                      <h6 className='mx-4'>Re-examination Date :</h6>
                      <h5>25/10/2023</h5>
                    </div>
                  </div>

                  <div className='d-flex align-items-center me-5 mt-1'>
                    <h6 className='mx-4'>Note :</h6>
                    <span className='mb-2'>Bệnh nhân bị béo như heo</span>
                  </div>
                </div>
                <div>
                  <div>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th scope='col'>Size</th>
                          <th scope='col'>Volume</th>
                          <th scope='col'>Material</th>
                          <th scope='col'>Handle</th>
                          <th scope='col'>Handle</th>
                          <th scope='col'>Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>10</td>
                          <td>29</td>
                          <td>Sụn mũi silicon</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* img */}
              <div>
                <div>
                  <h6 className='text-start mx-4'>Pre-operative Photo :</h6>
                  <div className='row'>
                    <img
                      className='w-25 my-2'
                      src='https://bizweb.dktcdn.net/100/438/408/files/anh-chan-dung-dep-yodyvn1.jpg?v=1683537734987'
                      alt=''
                    />
                    <img
                      className='w-25 my-2'
                      src='https://bizweb.dktcdn.net/100/438/408/files/anh-chan-dung-dep-yodyvn1.jpg?v=1683537734987'
                      alt=''
                    />
                    <img
                      className='w-25 my-2'
                      src='https://bizweb.dktcdn.net/100/438/408/files/anh-chan-dung-dep-yodyvn1.jpg?v=1683537734987'
                      alt=''
                    />
                    <img
                      className='w-25 my-2'
                      src='https://bizweb.dktcdn.net/100/438/408/files/anh-chan-dung-dep-yodyvn1.jpg?v=1683537734987'
                      alt=''
                    />
                    <img
                      className='w-25 my-2'
                      src='https://bizweb.dktcdn.net/100/438/408/files/anh-chan-dung-dep-yodyvn1.jpg?v=1683537734987'
                      alt=''
                    />
                  </div>
                </div>
                <div className='mt-2'>
                  <h6 className='text-start mx-4'>Post-operative Photo :</h6>
                  <div className='row'>
                    <img
                      className='w-25 my-2'
                      src='https://bizweb.dktcdn.net/100/438/408/files/anh-chan-dung-dep-yodyvn1.jpg?v=1683537734987'
                      alt=''
                    />
                    <img
                      className='w-25 my-2'
                      src='https://bizweb.dktcdn.net/100/438/408/files/anh-chan-dung-dep-yodyvn1.jpg?v=1683537734987'
                      alt=''
                    />
                    <img
                      className='w-25 my-2'
                      src='https://bizweb.dktcdn.net/100/438/408/files/anh-chan-dung-dep-yodyvn1.jpg?v=1683537734987'
                      alt=''
                    />
                    <img
                      className='w-25 my-2'
                      src='https://bizweb.dktcdn.net/100/438/408/files/anh-chan-dung-dep-yodyvn1.jpg?v=1683537734987'
                      alt=''
                    />
                    <img
                      className='w-25 my-2'
                      src='https://bizweb.dktcdn.net/100/438/408/files/anh-chan-dung-dep-yodyvn1.jpg?v=1683537734987'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
