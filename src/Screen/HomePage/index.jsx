import React, { useState } from "react";
import {
  FleetsContainer,
  HeroContainer,
  HomeContainer,
  CardContainer,
  BannerContainer,
  ValuesContainer,
  ReviewsContainer,
  BoxesContainer,
  MarqueContaainer,
} from "./style";
import { FaHeart } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { GiCarDoor, GiTrophy } from "react-icons/gi";
import { AiOutlineCar } from "react-icons/ai";
import { ImRoad } from "react-icons/im";
import { FaMapPin } from "react-icons/fa";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="left">
        <h3>Plan your trip now</h3>
        <h1>Explore the world with comfortable car</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="btns">
          <div className="green">Choose a car</div>
          <div className="dark">Get the App</div>
        </div>
      </div>
      <div className="right">
        <img src="car-2.png" alt="" />
      </div>
    </HeroContainer>
  );
};

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
          <div className="btn">Rent Now</div>
        </div>
      </div>
    </CardContainer>
  );
};

const Fleets = () => {
  return (
    <FleetsContainer>
      <h1>Our Vehicle Fleet</h1>
      <p>
        Sit labore et officia eiusmod tempor officia eiusmod dolor exercitation
        nulla dolore ut id velit et ut anim.
      </p>
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </FleetsContainer>
  );
};

const Banner = () => {
  const [tab, setTab] = useState(0);
  const data = [
    "Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.",
    "Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.",
    "Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum",
  ];
  return (
    <BannerContainer>
      <div className="left">
        <img src="/driver.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Only Quality For Clients</h2>
        <div className="btn_row">
          <div
            onClick={() => setTab(0)}
            className={`btn ${tab == 0 && "active"}`}
          >
            LUXURY
          </div>
          <div
            onClick={() => setTab(1)}
            className={`btn ${tab == 1 && "active"}`}
          >
            COMFORT
          </div>
          <div
            onClick={() => setTab(2)}
            className={`btn ${tab == 2 && "active"}`}
          >
            PRESTIGE
          </div>
        </div>
        <p>{data[tab]}</p>
      </div>
    </BannerContainer>
  );
};

const Values = () => {
  return (
    <ValuesContainer>
      <div className="value">
        <div className="icon">
          <GiTrophy />
        </div>
        <h4>First Class Services</h4>
        <p>
          Aliquip consequat excepteur non dolor irure ad irure labore ex eiusmod
          est duis culpa ex ut minim ut ea.
        </p>
      </div>
      <div className="value">
        <div className="icon">
          <ImRoad />
        </div>
        <h4>24/7 road assistance</h4>
        <p>
          Aliquip consequat excepteur non dolor irure ad irure labore ex eiusmod
          est duis culpa ex ut minim ut ea.
        </p>
      </div>
      <div className="value">
        <div className="icon">
          <FaMapPin />
        </div>
        <h4>Free Pick-Up & Drop-Off</h4>
        <p>
          Aliquip consequat excepteur non dolor irure ad irure labore ex eiusmod
          est duis culpa ex ut minim ut ea.
        </p>
      </div>
    </ValuesContainer>
  );
};

const Reviews = () => {
  return (
    <ReviewsContainer>
      <div className="review">
        <img src="/person1.jpg" alt="" />
        <div className="text">
          <h4>Excellent Service! Car Rent Service!</h4>
          <h6>
            I have been using Rentaly for my Car Rental needs for over 5 years
            now. I have never had any problems with their service. Their
            customer support is always responsive and helpful. I would recommend
            Rentaly to anyone looking for a reliable Car Rental provider.
          </h6>
          <h5>Stepanie Hutchkiss</h5>
        </div>
      </div>
      <div className="review">
        <img src="/person2.jpg" alt="" />
        <div className="text">
          <h4>Excellent Service! Car Rent Service!</h4>
          <h6>
            I have been using Rentaly for my Car Rental needs for over 5 years
            now. I have never had any problems with their service. Their
            customer support is always responsive and helpful. I would recommend
            Rentaly to anyone looking for a reliable Car Rental provider.
          </h6>
          <h5>Stepanie Hutchkiss</h5>
        </div>
      </div>
      <div className="review">
        <img src="/person3.jpg" alt="" />
        <div className="text">
          <h4>Excellent Service! Car Rent Service!</h4>
          <h6>
            I have been using Rentaly for my Car Rental needs for over 5 years
            now. I have never had any problems with their service. Their
            customer support is always responsive and helpful. I would recommend
            Rentaly to anyone looking for a reliable Car Rental provider.
          </h6>
          <h5>Stepanie Hutchkiss</h5>
        </div>
      </div>
    </ReviewsContainer>
  );
};

const Boxes = () => {
  return (
    <BoxesContainer>
      <div className="cont">
        <div className="box">
          <h1>15425</h1>
          <h3>Trips Powered</h3>
          <p>
            Lorem ipsum adipisicing officia in adipisicing do velit sit tempor
            ea consectetur.
          </p>
        </div>
        <div className="box">
          <h1>8745</h1>
          <h3>Happy Customers</h3>
          <p>
            Lorem ipsum adipisicing officia in adipisicing do velit sit tempor
            ea consectetur.
          </p>
        </div>
        <div className="box">
          <h1>235</h1>
          <h3>Fleets Vehicle</h3>
          <p>
            Lorem ipsum adipisicing officia in adipisicing do velit sit tempor
            ea consectetur.
          </p>
        </div>
        <div className="box">
          <h1>15</h1>
          <h3>Years Experience</h3>
          <p>
            Lorem ipsum adipisicing officia in adipisicing do velit sit tempor
            ea consectetur.
          </p>
        </div>
      </div>
    </BoxesContainer>
  );
};

const Marque = () => {
  return (
    <MarqueContaainer>
      <marquee>
        <div className="container">
          <div className="dot"></div>
          <h1>SUV</h1>
          <div className="dot"></div>
          <h1>Hatchback</h1>
          <div className="dot"></div>
          <h1>Crossover</h1>
          <div className="dot"></div>
          <h1>Sedan</h1>
          <div className="dot"></div>
          <h1>Sports Car</h1>
          <div className="dot"></div>
          <h1>Coupe</h1>
          <div className="dot"></div>
          <h1>Minivan</h1>
          <div className="dot"></div>
          <h1>Station Wagon</h1>
          <div className="dot"></div>
          <h1>Pickup Truck</h1>
          <div className="dot"></div>
          <h1>Minivan</h1>
          <div className="dot"></div>
          <h1>Exotic Cars</h1>
         
        </div>
      </marquee>
    </MarqueContaainer>
  );
};

function HomePage() {
  return (
    <HomeContainer>
      <Hero />
      <Fleets />
      <Banner />
      <Values />
      <Reviews />
      <Boxes />
      <Marque />
    </HomeContainer>
  );
}

export default HomePage;
