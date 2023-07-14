import React from "react";
import { Images } from "../../../assets/Images";
import './Footer.scss';

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterColumnOne">
        <div><img src={Images?.FooterLogo} alt='logo' /><span className="ColumnOneTitle">CORAL</span><img src={Images?.FooterLogo} alt='logo' /></div>
        <div className="ColumnOneDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>
        <div className="ColumnOneLogos">
          <img src={Images.Fb} alt="face_book" />
          <img src={Images.Twitter} alt="twitter" />
          <img src={Images.Linkedin} alt="linkedin" />
          <img src={Images.Instagram} alt="Instagram" />
        </div>
      </div>
      <div className="FooterColumnTwo">
        <div className="ColumnTwoTitle">CATALOG</div>
        <div className="ColumnTwoList">Necklaces</div>
        <div className="ColumnTwoList">Hoodies</div>
        <div className="ColumnTwoList">Jewelry Box</div>
        <div className="ColumnTwoList">T-shirt</div>
        <div className="ColumnTwoList">Jacket</div>
      </div>
      <div className="FooterColumnThree">
        <div className="ColumnTwoTitle">ABOUT US</div>
        <div className="ColumnTwoList">Our Producers</div>
        <div className="ColumnTwoList">Sitemap</div>
        <div className="ColumnTwoList">FAQ</div>
        <div className="ColumnTwoList">About Us</div>
        <div className="ColumnTwoList">Terms & Conditions</div>
      </div>
      <div className="FooterColumnFour">
        <div className="ColumnTwoTitle">CUSTOMER SERVICES</div>
        <div className="ColumnTwoList">Contact Us</div>
        <div className="ColumnTwoList">Track Your Order</div>
        <div className="ColumnTwoList">Product Care & Repair</div>
        <div className="ColumnTwoList">Book An Appointment</div>
        <div className="ColumnTwoList">Shipping & Returns</div>
      </div>
    </div>
  );
}

export default Footer;
