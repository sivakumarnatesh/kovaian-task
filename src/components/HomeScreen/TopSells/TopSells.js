import React, { useRef } from "react";
import "./TopSells.scss";
import { Images } from "../../../assets/Images";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TopSells() {
  const sliderRef = useRef(null);
  const products = [
    {
      image: `${Images?.Product1}`,
      name: "Lolita",
      desc: "Luxury big sofa",
      price: "7,00,000",
    },
    {
      image: `${Images?.Product2}`,
      name: "Lolita",
      desc: "Luxury big sofa",
      price: "7,00,000",
    },
    {
      image: `${Images?.Product3}`,
      name: "Lolita",
      desc: "Luxury big sofa",
      price: "7,00,000",
    },
    {
      image: `${Images?.Product4}`,
      name: "Lolita",
      desc: "Luxury big sofa",
      price: "7,00,000",
    },
    {
      image: `${Images?.Product5}`,
      name: "Lolita",
      desc: "Luxury big sofa",
      price: "7,00,000",
    },
    {
      image: `${Images?.Product6}`,
      name: "Lolita",
      desc: "Luxury big sofa",
      price: "7,00,000",
    },
    {
      image: `${Images?.Product7}`,
      name: "Lolita",
      desc: "Luxury big sofa",
      price: "7,00,000",
    },
    {
      image: `${Images?.Product8}`,
      name: "Lolita",
      desc: "Luxury big sofa",
      price: "7,00,000",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  }
  return (
    <div className="TopSellContainer">
      <div className="Title">Top Sellers</div>
      <div className="Btns">
      <button className="CarouselBtn" onClick={() => sliderRef.current.slickPrev()}>Previous</button>
      <button className="CarouselBtn" onClick={() => sliderRef.current.slickNext()}>Next</button>
      </div>
      <div className="Products">
      <Slider ref={sliderRef} {...settings}>
        {products?.map((item) => {
          return (
            <div className="Card" key={item.id}>
              <div className="CardImage">
                <img src={item?.image} alt={item?.name} />
              </div>
              <div className="CardFooter">
                <div className="CardName">{item?.name}</div>
                <div className="CardDesc">{item?.desc}</div>
                <div className="CardPrice">Rp{item?.price}</div>
              </div>
            </div>
          );
        })}
        </Slider>
      </div>
    </div>
  );
}

export default TopSells;
