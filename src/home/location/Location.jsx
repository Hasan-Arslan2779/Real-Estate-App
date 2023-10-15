import React from "react";
import Heading from "../../components/common/Heading";
import { location } from "../../components/data/Data";
import "./location.css";
export const Location = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading
            title={"Explore By Location"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias culpa dolore minima, non eligendi possimus nisi accusamus rerum eveniet ipsam."
            }
          />
          <div className="content grid3 mtop">
            {location.map((items, index) => {
              return (
                <div className="box" key={index}>
                  <img src={items.cover} alt="" />
                  <div className="overlay">
                    <h5>{items.name}</h5>
                    <p>
                      <label htmlFor="">{items.Villas}</label>
                      <label htmlFor="">{items.Offices}</label>
                      <label htmlFor="">{items.Apartments}</label>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
