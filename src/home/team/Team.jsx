import React from "react";
import Heading from "../../components/common/Heading";
import { team } from "../../components/data/Data";
import "./team.css";

const Team = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading
            title={"Our Featured Agents "}
            subtitle={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dignissimos sed excepturi in consequuntur impedit fuga odit, sunt dolores magni. "
            }
          />
          <div className="content mtop grid3">
            {team.map((val, index) => {
              return (
                <div className="box" key={index}>
                  <button className="btn1">{val.list} Listings</button>
                  <div className="details">
                    <div className="img">
                      <img src={val.cover} alt="" />
                      <i className="tik fa fa-circle-check"></i>
                    </div>
                    <i className="fa fa-location-dot"></i>
                    <label htmlFor="">{val.address}</label>
                    <h4>{val.name}</h4>
                    <ul>
                      {val.icon.map((icon, i) => (
                        <li key={i}>{icon}</li>
                      ))}
                    </ul>
                    <div className="button flex">
                      <button className="btn1">
                        <i className="fa fa-envelope"></i>Message
                      </button>
                      <button className="btn2">
                        <i className="fa fa-phone-alt"></i>
                      </button>
                    </div>
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

export default Team;
