import "./subscribe-box.css";
import React from "react";
// import contents from "../../data/upcomingSubscribe";
import SubscribeSport from "../subscribe_sport/SubscribeSport";

const SubscribeBox = () => {
  return (
    <div className="subscribe-box">
      <h5>Subscribe Sport</h5>
      <div className="subscribe-sport">
        <SubscribeSport/>
        <SubscribeSport/>
        <SubscribeSport/>
        <SubscribeSport/>
      </div>
      {/* <div className="subscribe-sport">
        {contents.map((content, index) => {
          return <SubscribeSport key={index}/>;
        })}
      </div> */}
    </div>
  );
};

export default SubscribeBox;
