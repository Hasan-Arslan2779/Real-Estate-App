import React from "react";
import { list } from "../../components/data/Data";
import "./recent.css";
const RecentCard = () => {
  return (
    <>
      <div className="content grid3 mtop">
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="image" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#091EBE" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
                <p className="location">
                  <i className="fa fa-location-dot"></i>
                  {location}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn1">{price}</button>
                </div>
                {type}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
