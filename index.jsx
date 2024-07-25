import React from "react";
import { Video } from "./Video";
import "./styled.css";

export const HotelCard = () => {
  return (
    <div className="hotel-card">
      <img className="lake-louise-image" alt="Lake louise image" src="lake-louise-image.svg" />
      <div className="stay-details">
        <div className="stay-details-rows">
          <div className="text-wrapper">Deluxe King Room</div>
          <div className="div">Lake Louise Inn</div>
          <div className="text-wrapper-2">$244/night</div>
        </div>
        <Video className="video-instance" color="#1262AF" />
      </div>
      <div className="rating">
        <div className="text-wrapper-3">(63 reviews)</div>
        <div className="group">
          <div className="text-wrapper-4">4.6</div>
          <img className="vector" alt="Vector" src="vector.svg" />
        </div>
      </div>
      <div className="more-details-button">
        <button className="button">MORE DETAILS</button>
      </div>
    </div>
  );
};
