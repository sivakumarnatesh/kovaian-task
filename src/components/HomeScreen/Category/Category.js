import React from "react";
import "./Category.scss";
import { Images } from "../../../assets/Images";

function Category() {
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
  return (
    <div className="ProductContainer">
       <div className="Title">Our Products</div>
   
    <div className="Products">
     
      {products?.map((item) => {
        return (
          <div className="Card">
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
    </div>
    </div>
  );
}

export default Category;
