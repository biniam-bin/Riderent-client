import React from "react";
var Carousel = require("react-responsive-carousel").Carousel;
import "react-responsive-carousel/lib/styles/carousel.css";
import { DetailContainer } from "./style";

function DetailScreen() {
  return (
    <DetailContainer>
      <div className="header">
        <img src="/banner1.jpg" alt="" />
        <h1>Vehicle Fleet</h1>
      </div>
      <div className="body">
        <div className="row-1">
          <div className="left">
            <Carousel showArrows={true}>
              <div>
                <img src="/car1.webp" />
              </div>
              <div>
                <img src="/car2.webp" />
              </div>
              <div>
                <img src="/car3.webp" />
              </div>
              <div>
                <img src="/car1.webp" />
              </div>
            </Carousel>
          </div>
          <div className="right">
            <h3>360 Challenge Stradale</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio tempore itaque nobis expedita, praesentium suscipit
              consequatur nisi mollitia ex neque doloremque, molestiae
              voluptatum! Laborum, laboriosam nisi maiores quas natus eveniet.
            </p>
            <div className="box">
              <p>Daily rate</p>
              <h3>$265</h3>
            </div>
          </div>
        </div>
        <div className="row-2">
          <div className="container">
            <h4>Booking this car</h4>
            <form action="">
              <div className="input">
                <h5>Pick Up Location</h5>
                <input type="text" placeholder="Enter your pickup location" />
              </div>
              <div className="input">
                <h5>Drop Off Location</h5>
                <input type="text" placeholder="Enter your dropoff location" />
              </div>
              <div className="input">
                <h5>Pick Up Date & Time</h5>
                <input type="date"/>
              </div>
              <div className="input">
                <h5>Return Date & Time</h5>
                <input type="date"/>
              </div>
              <div className="btn">Book Now</div>
            </form>
          </div>
        </div>
      </div>
    </DetailContainer>
  );
}
// <Carousel showArrows={true}>
//   <div>
//     <img src="/banner1.jpg" />
//   </div>
//   <div>
//     <img src="/banner2.jpg" />
//   </div>
//   <div>
//     <img src="/banner1.jpg" />
//   </div>
// </Carousel>

export default DetailScreen;
