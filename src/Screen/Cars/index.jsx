import React from "react";
import { CardContainer, CarsContainer } from "./style";

import Link from "next/link"
import { FaHeart } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { GiCarDoor, GiTrophy } from "react-icons/gi";
import { AiOutlineCar } from "react-icons/ai";
import { ImRoad } from "react-icons/im";
import { FaMapPin } from "react-icons/fa";



const Card = () => {
    return (
      <CardContainer>
        <img src="/lambo.jpg" alt="" />
        <div className="info">
          <div className="row-1">
            <p>Lamborghini</p>
            <span>
              <FaHeart color="#999" />
              <p>23</p>
            </span>
          </div>
          <div className="row-2">
            <span className="icon">
              <BsPerson color="#333" />
            </span>
            <span className="value">2</span>
            <span className="icon">
              <GiCarDoor color="#333" />
            </span>
            <span className="value">2</span>
            <span className="icon">
              <AiOutlineCar color="#333" />
            </span>
            <span className="value">Exotic car</span>
          </div>
          <div className="row-3"></div>
          <div className="row-4">
            <div className="col">
              <h4>Daily rate from</h4>
              <h2>$154</h2>
            </div>
            <div className="btn">
              <Link href="/cars/46465168">Rent Now</Link>
            </div>
          </div>
        </div>
      </CardContainer>
    );
}


function CarsScreen() {
  return (
    <CarsContainer>
      <div className="header">
        <img src="/banner1.jpg" alt="" />
        <h1>Cars</h1>
      </div>
      <div className="body">
        <div className="boxes">
          <div className="box">
            <h4>Vehicle Type</h4>
            <div className="row">
              <input type="checkbox" name="" id="" /> <span>Car</span>
            </div>
            <div className="row">
              <input type="checkbox" name="" id="" /> <span>Van</span>
            </div>
            <div className="row">
              <input type="checkbox" name="" id="" /> <span>Minibus</span>
            </div>
          </div>
          <div className="box">
            <h4>Car Body Type</h4>
            <div className="row">
              <input type="checkbox" name="" id="" /> <span>Car</span>
            </div>
            <div className="row">
              <input type="checkbox" name="" id="" /> <span>Van</span>
            </div>
            <div className="row">
              <input type="checkbox" name="" id="" /> <span>Minibus</span>
            </div>
          </div>
        </div>
        <div className="cards">
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
        </div>
      </div>
    </CarsContainer>
  );
}

export default CarsScreen;
