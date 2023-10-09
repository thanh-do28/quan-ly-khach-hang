import React, { useReducer, useState } from "react";
import errorImg from "../../../assets/Images/noimage.png";
import "./AddCostomers.css";
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function AddCostomers() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [fileAvatar, setFileAvatar] = useReducer(formReducer, {});
  const [dataAvatar, setDataAvatar] = useState(null);
  const [fileBefore, setFileBefore] = useReducer(formReducer, []);
  const [dataBefore, setDataBefore] = useState([]);
  const [fileAfter, setFileAfter] = useReducer(formReducer, {});
  const [dataAfter, setDataAfter] = useState([]);

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleFileChangeAvatar = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.onloadend = () => {
        setDataAvatar({
          imagePreview: reader.result,
          nameImg: file.name,
        });
      };
      setFileAvatar({
        name: event.target.name,
        value: event.target.files[0],
      });
      reader.readAsDataURL(file);
    } else {
      setDataAvatar(null);
      setFileAvatar({
        name: event.target.name,
        value: null,
      });
    }
  };

  const handleFileChangeBefore = (event) => {
    console.log(event.target.files);
    if (event.target.files && event.target.files[0]) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const file = files[i];
        reader.onloadend = () => {
          setDataBefore((dataBefore) => [
            ...dataBefore,
            {
              imagePreview: reader.result,
              nameImg: file.name,
            },
          ]);
        };

        reader.readAsDataURL(file);
      }
      setFileBefore({
        name: event.target.name,
        value: files,
      });
    } else {
      setDataBefore([]);
      setFileBefore({
        name: event.target.name,
        value: null,
      });
    }
  };

  const handleFileChangeAfter = (event) => {
    if (event.target.files && event.target.files[0]) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const file = files[i];
        reader.onloadend = () => {
          setDataAfter((fileAfter) => [
            ...fileAfter,
            {
              imagePreview: reader.result,
              nameImg: file.name,
            },
          ]);
        };

        reader.readAsDataURL(file);
      }
      setFileAfter({
        name: event.target.name,
        value: files,
      });
    } else {
      setDataAfter([]);
      setFileAfter({
        name: event.target.name,
        value: null,
      });
    }
  };

  const handleSubmitAdd = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  // return
  return (
    <div className='card addcostomers '>
      <h3 className='card-header'>Add Costomers</h3>
      <div className='mt-5'>
        {/* form */}
        <form
          onSubmit={handleSubmitAdd}
          className='w-75 m-auto border p-4 rounded-3'
        >
          <div className='d-flex align-items-center flex-wrap mb-3'>
            {/* thêm avatar */}
            <div className='w-25'>
              <label className='form-label w-25'>Avatar :</label>
              <input
                onChange={handleFileChangeAvatar}
                style={{ display: "none" }}
                className='form-control me-5'
                type='file'
                id='formFileAvatar'
                name='formFileAvatar'
                multiple
              />
            </div>
            <div className='w-75 d-flex align-items-center'>
              <div className='w-25 mb-3' style={{ height: "125px" }}>
                {dataAvatar ? (
                  <img
                    className='w-100 h-100 img-avatar'
                    src={dataAvatar?.imagePreview}
                    alt=''
                  />
                ) : (
                  <img className='w-100 h-100' src={errorImg} alt='' />
                )}
              </div>
              <div className='col-9 ps-5'>
                <label htmlFor='formFileAvatar'>
                  Chọn hình ảnh upload &nbsp;&nbsp;&nbsp;&nbsp;
                  <i className='text-info'>( chọn 1 ảnh )</i>
                </label>
              </div>
            </div>
          </div>

          {/* thêm tên */}
          <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center mb-3 w-50 me-5'>
              <label htmlFor='fullname' className='form-label w-25'>
                Full Name :
              </label>
              <input
                onChange={handleChange}
                type='text'
                className='form-control w-75'
                id='fullname'
                name='fullname'
                placeholder='Nhập tên khách hàng'
                required
              />
            </div>

            {/* thêm năm sinh */}
            <div
              style={{ width: "40%" }}
              className='d-flex align-items-center mb-3'
            >
              <label htmlFor='yearofbirth' className='form-label w-25'>
                Year of Birth :
              </label>
              <div className='input-group mb-3 w-75'>
                <input
                  onChange={handleChange}
                  type='date'
                  className='form-control'
                  id='yearofbirth'
                  name='yearofbirth'
                  min='0'
                  placeholder='Nhập năm sinh'
                  required
                />
                <span className='input-group-text' id='basic-addon2'>
                  Tuổi
                </span>
              </div>
            </div>
          </div>

          <div className='d-flex align-items-center justify-content-between'>
            {/* thêm địa chỉ */}
            <div className='d-flex align-items-center mb-3 w-50 me-5'>
              <label htmlFor='address' className='form-label w-25'>
                Address :
              </label>
              <input
                onChange={handleChange}
                type='text'
                className='form-control w-75'
                id='address'
                name='address'
                placeholder='Nhập địa chỉ khách hàng'
                required
              />
            </div>

            {/* thêm sdt */}
            <div
              style={{ width: "40%" }}
              className='d-flex align-items-center mb-3'
            >
              <label htmlFor='phonenumber' className='form-label w-25 '>
                Phone Number :
              </label>
              <input
                onChange={handleChange}
                type='number'
                className='form-control w-75'
                id='phonenumber'
                name='phonenumber'
                min='0'
                placeholder='Nhập SĐT khách hàng'
                required
              />
            </div>
          </div>

          {/* thêm chỉ số người dùng */}
          <div>
            <label className='form-label'>Index :</label>
            <div className='row row-cols-3'>
              <div className='col input-group mb-3'>
                <div className='input-group-text'>
                  <span>Height</span>
                </div>
                <input
                  type='number'
                  className='form-control'
                  aria-label='Text input with checkbox'
                  min='0'
                />
                <div className='input-group-text'>
                  <span>Cm</span>
                </div>
              </div>
              <div className='col input-group mb-3'>
                <div className='input-group-text'>
                  <span>Weight</span>
                </div>
                <input
                  type='number'
                  className='form-control'
                  aria-label='Text input with checkbox'
                  min='0'
                />
                <div className='input-group-text'>
                  <span>Kg</span>
                </div>
              </div>
              <div className='col input-group mb-3'>
                <div className='input-group-text'>
                  <span>Chest</span>
                </div>
                <input
                  type='number'
                  className='form-control'
                  aria-label='Text input with checkbox'
                  min='0'
                />
                <div className='input-group-text'>
                  <span>Cm</span>
                </div>
              </div>
              <div className='col input-group mb-3'>
                <div className='input-group-text'>
                  <span>Belly</span>
                </div>
                <input
                  type='number'
                  className='form-control'
                  aria-label='Text input with checkbox'
                  min='0'
                />
                <div className='input-group-text'>
                  <span>Cm</span>
                </div>
              </div>
              <div className='col input-group mb-3'>
                <div className='input-group-text'>
                  <span>Butt</span>
                </div>
                <input
                  type='number'
                  className='form-control'
                  aria-label='Text input with checkbox'
                  min='0'
                />
                <div className='input-group-text'>
                  <span>Cm</span>
                </div>
              </div>
            </div>
          </div>

          <div className='d-flex align-items-center justify-content-between'>
            {/* thêm dịch vụ */}
            <div className='d-flex align-items-center mb-3 w-50 me-5'>
              <label htmlFor='service' className='form-label w-25'>
                Service :
              </label>
              <select
                onChange={handleChange}
                className='form-select w-75'
                aria-label='Default select example'
                id='service'
                name='service'
                required
              >
                <option defaultValue>Chọn dịch vụ</option>
                <option value='1'>Cắt mí</option>
                <option value='2'>Nâng mũi</option>
                <option value='3'>Nâng ngực</option>
              </select>
            </div>

            {/* thêm tiền */}
            <div
              style={{ width: "40%" }}
              className='d-flex align-items-center  mb-3'
            >
              <label htmlFor='price' className='form-label w-25 '>
                Price :
              </label>
              <div className='input-group w-75'>
                <input
                  onChange={handleChange}
                  type='number'
                  className='form-control'
                  id='price'
                  name='price'
                  min='0'
                  placeholder='Nhập số tiền'
                  required
                />
                <span className='input-group-text' id='basic-addon2'>
                  VND
                </span>
              </div>
            </div>
          </div>

          <div className='d-flex align-items-center justify-content-between'>
            {/* thêm địa chỉ mổ */}
            <div className='d-flex align-items-center mb-3 w-50 me-5'>
              <label htmlFor='surgeryaddress' className='form-label w-25'>
                Nơi mổ :
              </label>
              <input
                onChange={handleChange}
                type='text'
                className='form-control w-75'
                id='surgeryaddress'
                name='surgeryaddress'
                placeholder='Nhập nơi mổ'
                required
              />
            </div>

            {/* thêm bác sĩ mổ */}
            <div
              style={{ width: "40%" }}
              className='d-flex align-items-center  mb-3'
            >
              <label htmlFor='doctor' className='form-label w-25 '>
                BSTH :
              </label>
              <input
                onChange={handleChange}
                type='text'
                className='form-control w-75'
                id='doctor'
                name='doctor'
                placeholder='Nhập tên bác sĩ'
                required
              />
            </div>
          </div>

          <div className='d-flex align-items-center justify-content-between'>
            {/* thêm chất liệu */}
            <div className='d-flex align-items-center mb-3'>
              <label
                style={{ width: "40%" }}
                htmlFor='material'
                className='form-label'
              >
                Material :
              </label>
              <select
                onChange={handleChange}
                className='form-select w-75'
                aria-label='Default select example'
                id='material'
                name='material'
                required
              >
                <option defaultValue>Chọn chất liệu</option>
                <option value='1'>Sụn mũi silicon</option>
                <option value='2'>Sụn superform</option>
                <option value='3'>Sụn surgiform</option>
                <option value='4'>Túi Mentor nhám</option>
                <option value='5'>Túi Mentor trơn</option>
                <option value='6'>Túi Mentor xtra</option>
                <option value='7'>Túi Nano</option>
                <option value='8'>Túi Nanochip</option>
                <option value='9'>Túi Ergonomic</option>
              </select>
            </div>

            {/* thêm kích thước */}
            <div className='d-flex align-items-center mb-3'>
              <label htmlFor='size' className='form-label w-25 '>
                Size :
              </label>

              <input
                onChange={handleChange}
                type='text'
                className='form-control'
                id='size'
                name='size'
                placeholder='Nhập kích thước'
                required
              />
            </div>

            {/* thêm thể tích */}
            <div className='d-flex align-items-center mb-3'>
              <label
                style={{ width: "35%" }}
                htmlFor='volume'
                className='form-label'
              >
                Volume :
              </label>

              <input
                onChange={handleChange}
                type='text'
                className='form-control'
                id='volume'
                name='volume'
                placeholder='Nhập thể tích'
                required
              />
            </div>
          </div>

          <div className='d-flex align-items-center'>
            {/* thêm trạng thái */}
            <div
              style={{ width: "25%" }}
              className='align-items-center mb-3 me-5'
            >
              <label htmlFor='status' className='form-label'>
                Status :
              </label>
              <select
                onChange={handleChange}
                className='form-select'
                aria-label='Default select example'
                id='status'
                name='status'
                required
              >
                <option defaultValue>Chọn trạng thái</option>
                <option value='1'>Khám lại lần 1</option>
                <option value='2'>Khám lại lần 2</option>
                <option value='3'>Khám lại lần 3</option>
                <option value='4'>Khám lại lần 4</option>
                <option value='5'>Khám lại lần 5</option>
                <option value='6'>Khám lại lần 6</option>
                <option value='0'>Hoàn thành</option>
              </select>
            </div>
            <div
              style={{ width: "25%" }}
              className='align-items-center mb-3 me-5'
            >
              <label htmlFor='examination' className='form-label'>
                Day examination :
              </label>
              <input
                onChange={handleChange}
                type='date'
                className='form-control'
                id='examination'
                name='examination'
                placeholder='Chọn ngày khám '
                required
              />
            </div>

            {/* thêm ghi chú */}
            <div style={{ width: "75%" }} className='align-items-center mb-3'>
              <label htmlFor='note' className='form-label'>
                Note :
              </label>

              <textarea
                onChange={handleChange}
                className='form-control'
                id='note'
                name='note'
                rows='1'
                placeholder='Nhập ghi chú'
                required
              ></textarea>
            </div>
          </div>

          {/* thêm số lần mổ */}
          <div>
            <label className='form-label'>Surgery times :</label>
            <div className='row row-cols-3'>
              <div className='col input-group mb-3'>
                <div className='input-group-text'>
                  <input
                    className='form-check-input mt-0 me-3'
                    type='checkbox'
                    aria-label='Checkbox for following text input'
                  />
                  <span>lần 1</span>
                </div>
                <input
                  type='date'
                  className='form-control'
                  aria-label='Text input with checkbox'
                />
              </div>
              <div className='col input-group mb-3'>
                <div className='input-group-text'>
                  <input
                    className='form-check-input mt-0 me-3'
                    type='checkbox'
                    aria-label='Checkbox for following text input'
                  />
                  <span>lần 2</span>
                </div>
                <input
                  type='date'
                  className='form-control'
                  aria-label='Text input with checkbox'
                />
              </div>
              <div className='col input-group mb-3'>
                <div className='input-group-text'>
                  <input
                    className='form-check-input mt-0 me-3'
                    type='checkbox'
                    aria-label='Checkbox for following text input'
                  />
                  <span>lần 3</span>
                </div>
                <input
                  type='date'
                  className='form-control'
                  aria-label='Text input with checkbox'
                />
              </div>
              <div className='col input-group mb-3'>
                <div className='input-group-text'>
                  <input
                    className='form-check-input mt-0 me-3'
                    type='checkbox'
                    aria-label='Checkbox for following text input'
                  />
                  <span>lần 4</span>
                </div>
                <input
                  type='date'
                  className='form-control'
                  aria-label='Text input with checkbox'
                />
              </div>
              <div className='col input-group mb-3'>
                <div className='input-group-text'>
                  <input
                    className='form-check-input mt-0 me-3'
                    type='checkbox'
                    aria-label='Checkbox for following text input'
                  />
                  <span>lần 5</span>
                </div>
                <input
                  type='date'
                  className='form-control'
                  aria-label='Text input with checkbox'
                />
              </div>
              <div className='col input-group mb-3'>
                <div className='input-group-text'>
                  <input
                    className='form-check-input mt-0 me-3'
                    type='checkbox'
                    aria-label='Checkbox for following text input'
                  />
                  <span>lần 6</span>
                </div>
                <input
                  type='date'
                  className='form-control'
                  aria-label='Text input with checkbox'
                />
              </div>
            </div>
          </div>

          <div>
            {/* thêm ảnh trước mổ */}
            <div>
              <div className='d-flex align-items-center mb-3'>
                <label className='form-label w-25'>Ảnh trước mổ :</label>
                <input
                  style={{ display: "none" }}
                  onChange={handleFileChangeBefore}
                  className='form-control'
                  type='file'
                  id='formFileBefore'
                  name='formFileBefore'
                  multiple
                />
                <label htmlFor='formFileBefore' className='form-label'>
                  Chọn hình ảnh upload &nbsp;&nbsp;&nbsp;&nbsp;
                  <i className='text-info'>( chọn tối đa 8 ảnh )</i>
                </label>
              </div>
              <div className='row row-cols-4'>
                {dataBefore.length != 0 ? (
                  dataBefore.map((e, key) => (
                    <div
                      key={key}
                      className='g-col-4 mb-3'
                      style={{ height: "150px" }}
                    >
                      <img
                        className='w-100 h-100 img-avatar'
                        src={e.imagePreview}
                        alt=''
                      />
                    </div>
                  ))
                ) : (
                  <div className='g-col-4 mb-3' style={{ height: "150px" }}>
                    <img className='w-100 h-100' src={errorImg} alt='' />
                  </div>
                )}
              </div>
            </div>

            {/* thêm ảnh sau mổ */}
            <div>
              <div className='d-flex align-items-center  mb-3'>
                <label className='form-label w-25'>Ảnh sau mổ :</label>
                <input
                  style={{ display: "none" }}
                  onChange={handleFileChangeAfter}
                  className='form-control'
                  type='file'
                  id='formFileAfter'
                  name='formFileAfter'
                  multiple
                />
                <label htmlFor='formFileAfter' className='form-label'>
                  Chọn hình ảnh upload &nbsp;&nbsp;&nbsp;&nbsp;
                  <i className='text-info'>( chọn tối đa 8 ảnh )</i>
                </label>
              </div>
              <div className='row row-cols-4'>
                {dataAfter.length != 0 ? (
                  dataAfter.map((e, key) => (
                    <div className='g-col-4 mb-3' style={{ height: "150px" }}>
                      <img
                        key={key}
                        className='w-100 h-100 img-avatar'
                        src={e.imagePreview}
                        alt=''
                      />
                    </div>
                  ))
                ) : (
                  <div className='g-col-4 mb-3' style={{ height: "150px" }}>
                    <img className='w-100 h-100' src={errorImg} alt='' />
                  </div>
                )}
              </div>
            </div>
          </div>

          <button type='submit' className='btn btn-primary'>
            Thêm khách hàng
          </button>
        </form>
      </div>
    </div>
  );
}
