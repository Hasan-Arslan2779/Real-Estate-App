import React from "react";
import Heading from "../../components/common/Heading";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title={"Recent Property Listed"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum laudantium consectetur porro repudiandae pariatur suscipit non quis iusto beatae!"
            }
          />
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Recent;
