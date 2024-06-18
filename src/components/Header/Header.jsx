import React from "react";
import './Header.css'
const Header = () => {
  return (
    <div class="container">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
        <div class="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            class="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <h2>userList</h2>
          </a>
        </div>

        <ul class="nav col-12 col-md-6 mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" class="nav-link nav-size px-2 ">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-link nav-size px-2">
              My Reviews
            </a>
          </li>
          <li>
            <a href="#" class="nav-link nav-size px-2">
              Rewards
            </a>
          </li>
          <li>
            <a href="#" class="nav-link nav-size px-2">
              Updates
            </a>
          </li>
          
          <li>
            <a href="#" class="nav-link nav-size px-2">
              My Profile
            </a>
          </li>
        </ul>

        <div class="col-md-3 text-end">
          <button type="button" class="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" class="btn btn-primary">
            Sign-up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
