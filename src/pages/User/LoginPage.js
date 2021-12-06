import React from "react";
import "../User/Style/style.css";
import img from "../User/image/authentication.svg";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { BiLock, BiUserCircle } from "react-icons/bi";
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
              <BiUserCircle />
            </div>

            <div class="form__div-input">
              <input type="text" class="form__input" placeholder="Username" />
            </div>
          </div>

          <div class="form__div">
            <div class="form__icon">
              <BiLock />
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
              <GrInstagram />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
