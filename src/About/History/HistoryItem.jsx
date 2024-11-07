import React from "react";
import "./HistoryItem.css";
import history01 from "../../assets/history-01.png";
import history02 from "../../assets/history-02.png";
import history03 from "../../assets/history-03.png";
import history04 from "../../assets/history-04.png";
import lineImage from '../../assets/Line.png';



export const HistoryItem = () => {
  return (
    <>
      <div className="history-items">
        <div className="history-item">
          {" "}
          <img src={history01} alt="" />
          <br />
          <br />
          <br />
          <br />
          <h2>Defining Moments: Significant Campaigns and Elections</h2>
          <p>
            Defining Moments: Significant Campaigns and Elections" highlights
            pivotal campaigns and electoral battles that shaped Raju Karemore's
            political trajectory. Each campaign not only tested his strategic
            acumen but also underscored his commitment to the issues he
            championed. These moments were crucial in establishing his
            reputation and influence within the political arena.
          </p>
        </div>
        <div className="history-item">
          {" "}
          <h2>Early Beginnings: The Foundation of Political Aspirations</h2>
          <p>
            The foundation of Raju Karemore's political aspirations was laid
            during his formative years, where he first engaged with grassroots
            issues and community needs. His early involvement in local activism
            and advocacy ignited a passion for public service and shaped his
            vision for change. These initial experiences provided a solid base
            for his future political endeavors and commitment to leadership.
          </p>
          <br />
          <br />
          <br />
          <br />
          <img src={history04} alt="" />
        </div>
        <div className="history-item">
          {" "}
          <img src={history03} alt="" />
          <br />
          <br />
          <br />
          <br />
          <h2>Vision for the Future</h2>
          <p>
            Raju Karemore's vision for the future is centered on fostering
            innovation and creating sustainable solutions that address pressing
            global challenges. He aims to build on his past successes by driving
            positive change and empowering communities through forward-thinking
            initiatives. By embracing new technologies and inclusive strategies,
            Raju aspires to lead efforts that shape a better, more equitable
            world for generations to come.
          </p>
        </div>
        <div className="history-item">
          {" "}
          <h2>Leadership and Vision: Shaping Policy and Reform</h2>
          <p>
            In his role as a leader, Raju Karemore has been instrumental in
            shaping policy and driving meaningful reform. His visionary approach
            to governance has led to the development of innovative strategies
            that address key societal issues. By focusing on progressive change,
            Raju has significantly influenced the direction of policy and set a
            new standard for effective leadership.
          </p>
          <br />
          <br />
          <br />
          <br />
          <img src={history02} alt="" />
        </div>
        <div className="line">
          <img src={lineImage} alt="" />
        </div>
      </div>
    </>
  );
};
