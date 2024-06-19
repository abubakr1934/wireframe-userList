import React from 'react';
import { FaFacebook, FaGoogle, FaTiktok } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

const Signup = ({ onSwitch }) => {
  const sectionStyle = {
    backgroundColor: 'hsl(218, 41%, 15%)',
    backgroundImage: `radial-gradient(650px circle at 0% 0%, 
                      hsl(218, 41%, 35%) 15%, 
                      hsl(218, 41%, 30%) 35%, 
                      hsl(218, 41%, 20%) 75%, 
                      hsl(218, 41%, 19%) 80%, 
                      transparent 100%),
                      radial-gradient(1250px circle at 100% 100%, 
                      hsl(218, 41%, 45%) 15%, 
                      hsl(218, 41%, 30%) 35%, 
                      hsl(218, 41%, 20%) 75%, 
                      hsl(218, 41%, 19%) 80%, 
                      transparent 100%)`
  };

  const radiusShape1Style = {
    height: '220px',
    width: '220px',
    top: '-60px',
    left: '-130px',
    background: 'radial-gradient(#44006b, #ad1fff)',
    overflow: 'hidden',
  };

  const radiusShape2Style = {
    borderRadius: '38% 62% 63% 37% / 70% 33% 67% 30%',
    bottom: '-60px',
    right: '-110px',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(#44006b, #ad1fff)',
    overflow: 'hidden',
  };

  const bgGlassStyle = {
    backgroundColor: 'hsla(0, 0%, 100%, 0.9)',
    backdropFilter: 'saturate(200%) blur(25px)'
  };

  return (
    <div>
      <section className="background-radial-gradient overflow-hidden" style={sectionStyle}>
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                The best promotion <br />
                <span style={{ color: 'hsl(218, 81%, 75%)' }}>application for your business</span>
              </h1>
              <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
                Info and other things about userList
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" style={radiusShape1Style}></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong" style={radiusShape2Style}></div>

              <div className="card bg-glass" style={bgGlassStyle}>
                <div className="card-body px-4 py-5 px-md-5">
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" />
                          <label className="form-label" htmlFor="form3Example1">First name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" />
                          <label className="form-label" htmlFor="form3Example2">Last name</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" defaultChecked />
                      <label className="form-check-label" htmlFor="form2Example33">
                        Subscribe to our newsletter
                      </label>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4 " style={{width:"100px"}}>
                      Sign up
                    </button>

                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaFacebook />
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaGoogle />
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                      <FaSquareXTwitter />

                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaTiktok />
                      </button>
                    </div>
                    <div className="text-center">
                      <a href="#" onClick={onSwitch}>Already a user?</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
