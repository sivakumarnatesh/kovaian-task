/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Testimonial.scss";
import { Images } from "../../../assets/Images";
import ReactStars from "react-rating-stars-component";

function Testimonial() {
  const clients = [
    {
      image: `${Images?.Client1}`,
      name: "Regina Miles",
      role: "Founder",
      rating: "4",
      reviews:
        "This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.",
    },
    {
      image: `${Images?.Client2}`,
      name: "Regina Miles",
      role: "Founder",
      rating: "4",
      reviews:
        "This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.",
    },
    {
      image: `${Images?.Client3}`,
      name: "Regina Miles",
      role: "Founder",
      rating: "4",
      reviews:
        "This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.",
    },
    {
      image: `${Images?.Client4}`,
      name: "Regina Miles",
      role: "Founder",
      rating: "4",
      reviews:
        "This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.",
    },
  ];
  return (
    <div className="TestimonialContainer">
      <div className="TestimonialHeader">
        <div className="TestimonialTitle">What Clients Say</div>
        <div className="TestimonialDesc">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </div>
      </div>
      <div className="TestimonialCard">
        {clients?.map((item) => {
          return (
            <div className="Card">
              <div className="CardImage">
                <img src={item?.image} alt="photo" />
              </div>
              <div className="CardName">{item?.name}</div>
              <div className="CardRole">{item?.role}</div>
              <div className="CardRating">
                <ReactStars
                  count={5}
                  value={item?.rating}
                  // onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
                ,
              </div>
              <div className="CardReview">{item?.reviews}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonial;
