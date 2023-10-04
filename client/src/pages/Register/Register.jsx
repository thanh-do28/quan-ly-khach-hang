import React, { useReducer, useState } from "react";
import { message } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRegister } from "../../redux/user/createRegister";
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isloadRegister } = useSelector(
    (state) => state.persistedReducer.createRegister
  );
  const [formData, setFormData] = useReducer(formReducer, {});
  const [hidden, setHidden] = useState(false);
  const [hiddenConfi, setHiddenConfi] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const togglepassword = () => {
    setHidden(!hidden);
  };
  const togglepassword1 = () => {
    setHiddenConfi(!hiddenConfi);
  };
  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };
  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    if (formData.registerPassword === formData.registerConfirmPassword) {
      setErrorPass(false);
      const result = await dispatch(getRegister(formData));
      if (result?.payload?.status == 200) {
        if (result?.payload?.data?.status == 200) {
          message.success(result?.payload?.data?.message);
          setErrorEmail(false);
          navigate("/login");
        } else {
          setErrorEmail(true);
        }
      } else {
        message.error("Có lỗi xảy ra");
      }
    } else {
      setErrorEmail(false);
      setErrorPass(true);
    }
  };
  return (
    <div className='img js-fullheight body-login'>
      <section className='ftco-section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6 text-center mb-3'>
              <h3 className='heading-section'>Register</h3>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-md-6 col-lg-4'>
              <div className='login-wrap p-0'>
                <form onSubmit={handleSubmitRegister} className='register-form'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      name='registerName'
                      placeholder='Username'
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='form-group m-0'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email'
                      name='registerEmail'
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {errorEmail ? (
                    <div className='text-danger ps-4'>
                      Email đã được sử dụng
                    </div>
                  ) : (
                    ""
                  )}
                  <div className='form-group mt-3'>
                    <input
                      id='password-field'
                      type={hidden ? "text" : "password"}
                      className='form-control'
                      placeholder='Password'
                      name='registerPassword'
                      onChange={handleChange}
                      required
                    />
                    <span
                      onClick={togglepassword}
                      toggle='#password-field'
                      className={
                        hidden
                          ? "fa fa-fw fa-eye-slash field-icon toggle-password"
                          : "fa fa-fw fa-eye field-icon toggle-password"
                      }
                    ></span>
                  </div>
                  <div className='form-group m-0'>
                    <input
                      id='confirmpassword-field'
                      type={hiddenConfi ? "text" : "password"}
                      className={
                        errorPass ? "form-control error" : "form-control"
                      }
                      placeholder='Confirm Password'
                      name='registerConfirmPassword'
                      onChange={handleChange}
                      required
                    />
                    <span
                      onClick={togglepassword1}
                      toggle='#confirmpassword-field'
                      className={
                        hiddenConfi
                          ? "fa fa-fw fa-eye-slash field-icon toggle-password"
                          : "fa fa-fw fa-eye field-icon toggle-password"
                      }
                    ></span>
                  </div>
                  {errorPass ? (
                    <div className='text-danger ps-4'>Password không giống</div>
                  ) : (
                    ""
                  )}
                  <div className='form-group mt-3'>
                    <button type='submit' className='btn-hover color-8 '>
                      Sign Up
                    </button>
                  </div>
                </form>
                <div>
                  <div className='text-center'>
                    Do you already have an account?{" "}
                    <Link to='/login'>Please log in</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
