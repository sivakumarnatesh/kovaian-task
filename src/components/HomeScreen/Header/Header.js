import React from "react";
import "./Header.scss";
import { Images } from "../../../assets/Images";

function Header() {
  return (
    <div className="HeaderContainer">
      <div className="HeaderLeft">
        <img src={Images.HeaderLogo} alt="logo" />
        <div className="Title">Furniro</div>
      </div>
      <div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li className="dropdown">
            <a className="dropbtn">Shop</a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#" className="NestedBtn">
                Link 3
              </a>
              <div className="dropdown-content1">
                <a href="#">Nested Link 1</a>
                <a href="#">Nested Link 2</a>
                <a href="#">Nested Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="HeaderIcon">
     
          <img src={Images.User} alt="logo" />
     
          <img src={Images.Search} alt="logo" />
    
          <img src={Images.Heart} alt="logo" />
      
          <img src={Images.Cart} alt="logo" />
     
      </div>
    </div>
  );
}

export default Header;
