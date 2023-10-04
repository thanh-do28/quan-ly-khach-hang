import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../redux/user/loginUser";
import "./Login.css";
import { message } from "antd";
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const { isloadLogin } = useSelector(
    (state) => state.persistedReducer.loginUser
  );
  const togglepassword = () => {
    setHidden(!hidden);
  };
  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };
  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    // console.log(formData);
    const result = await dispatch(postLogin(formData));
    if (result?.payload?.status == 200) {
      message.success(result?.payload?.message);
      setErrorEmail(false);
      setErrorPass(false);
      navigate("/");
    } else if (result?.payload?.status == 401) {
      setErrorPass(true);
      setErrorEmail(false);
    } else if (result?.payload?.status == 404) {
      setErrorEmail(true);
      setErrorPass(false);
    }
    console.log(result);
  };
  return (
    <div className='img js-fullheight body-login'>
      <section className='ftco-section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6 text-center mb-3'>
              <h3 className='heading-section'>Login</h3>
            </div>
          </div>
          <div className='row justify-content-center'>
            {/* loading */}
            {isloadLogin ? (
              <div className='spinner'>
                <div className='blob blob-0'></div>
                <div className='loading-login text-info'>loading...</div>
              </div>
            ) : (
              ""
            )}

            {/* form */}
            <div className='col-md-6 col-lg-4'>
              <div className='login-wrap p-0'>
                <form onSubmit={handleSubmitLogin} className='signin-form'>
                  <div className='form-group m-0'>
                    <input
                      type='email'
                      className='form-control'
                      name='signinEmail'
                      placeholder='Email'
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {errorEmail ? (
                    <div className='text-danger ps-4'>Email không đúng</div>
                  ) : (
                    ""
                  )}
                  <div className='form-group m-0 mt-3'>
                    <input
                      id='password-field'
                      type={hidden ? "text" : "password"}
                      className='form-control'
                      name='signinPassword'
                      placeholder='Password'
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
                  {errorPass ? (
                    <div className='text-danger ps-4'>Password không đúng</div>
                  ) : (
                    ""
                  )}
                  <div className='form-group mt-3'>
                    <button type='submit' className='btn-hover color-8 '>
                      Sign In
                    </button>
                  </div>
                  <div className='form-group d-md-flex'>
                    <div className='w-50'>
                      <label className='checkbox-wrap checkbox-primary'>
                        Remember Me
                        <input type='checkbox' defaultChecked />
                        <span className='checkmark'></span>
                      </label>
                    </div>
                    <div className='w-50 text-end'>
                      <a href='#' style={{ color: "#fff" }}>
                        Forgot Password
                      </a>
                    </div>
                  </div>
                </form>
                <div>
                  <div className='text-center'>
                    No account? Click to <Link to='/register'>Register</Link>
                  </div>
                  <p className='w-100 text-center'>
                    &mdash; Or Sign In With &mdash;
                  </p>
                  <div className='social d-flex text-center'>
                    <a href='#' className='px-2 py-2 me-1 rounded'>
                      <span className='ion-logo-facebook mr-2'></span> Facebook
                    </a>
                    <a href='#' className='px-2 py-2 ms-1 rounded'>
                      <span className='ion-logo-twitter mr-2'></span> Twitter
                    </a>
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
