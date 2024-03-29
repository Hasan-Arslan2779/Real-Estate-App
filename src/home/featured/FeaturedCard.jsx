import React from "react";
import { featured } from "../../components/data/Data";
const FeaturedCard = () => {
  return (
    <>
      <div className="container grid5 mtop">
        {featured.map((items, index) => (
          <div className="box" key={index}>
            <img src={items.cover} alt="" />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedCard;
