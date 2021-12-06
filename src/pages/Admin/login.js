import React from "react";
import "../Admin/Style/login.css";
import img from "../Admin/image/authentication.svg";
import * as icons from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
function login() {
  return (
    <div class="l-form">
      <div class="shape1"></div>
      <div class="shape2"></div>

      <div class="form">
        <img src={img} alt="" class="form__img" />

        <form action="" class="form__content">
          <h1 class="form__title">Welcome</h1>

          <div class="form__div form__div-one">
            <div class="form__icon">
              <i class="bx bx-user-circle"></i>
            </div>

            <div class="form__div-input">
              <input type="text" class="form__input" placeholder="Username" />
            </div>
          </div>

          <div class="form__div">
            <div class="form__icon">
              <i class="bx bx-lock"></i>
            </div>

            <div class="form__div-input">
              <input
                type="password"
                class="form__input"
                placeholder="Password"
              />
            </div>
          </div>
          <a href="#" class="form__forgot">
            Forgot Password?
          </a>

          <input type="submit" class="form__button" value="Login" />

          <div class="form__social">
            <span class="form__social-text">Our login with</span>

            <a href="#" class="form__social-icon">
              <BsFacebook />
            </a>
            <a href="#" class="form__social-icon">
              <AiOutlineGoogle />
            </a>
            <a href="#" class="form__social-icon">
              <i class="bx bxl-instagram"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
