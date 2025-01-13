import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="container about-us pt-4">
      <div className="d-flex justify-content-center">
        <h1 className="fw-bold">About us</h1>
      </div>
      <div className=" d-flex justify-content-center">
        <hr />
      </div>
      <div className="about-us-video d-flex justify-content-center row">
        <div className="video col-lg-6">
          <iframe
            title="advert"
            width="100%"
            height="360"
            // src="https://www.youtube.com/embed/gbLmku5QACM?autoplay=1&mute=1&loop=1&playlist=gbLmku5QACM"
            src="https://www.youtube.com/embed/gbLmku5QAC"
            frameBorder="0"
            allow="autoplay"
          ></iframe>
        </div>

        <div className="about-us-write-up col-lg-6 ">
          <h2 className="d-flex justify-content-center">About</h2>
          <div className="d-flex justify-content-center ">
            <hr className="text-danger" />
          </div>
          <p>
            Welcome to PAKH_Stores, your one-stop destination for the latest in
            fashion and cutting-edge electronics. At PAKH_stores, we believe in
            delivering style and innovation to your doorstep. Whether you're
            upgrading your wardrobe or hunting for the newest tech gadgets,
            we’ve got you covered. Our curated clothing collection features
            trendy designs, quality fabrics, and options for every occasion. For
            tech enthusiasts, our electronics range includes the latest devices,
            ensuring you stay ahead in the digital age. Customer satisfaction is
            at the heart of what we do. With seamless shopping, secure payments,
            and fast delivery, we aim to make your online shopping experience
            delightful and hassle-free. Explore. Shop. Enjoy. Let PAKH_stores
            bring convenience and style to your life.
          </p>
        </div>
      </div>
      <div className="about-us-background-image my-5 d-flex justify-content-center align-items-center">
        <p>Explore. Shop. Enjoy</p>
        <p>Stay Happy</p>
      </div>
      <div className="about-us-mission row my-5">
        <div className="col-lg-7 about-us-mv-div">
          <img
            className="about-us-mv-image"
            width="100%"
            height="100%"
            src="https://images.pexels.com/photos/5418898/pexels-photo-5418898.jpeg"
            alt=""
          />
        </div>
        <div className="col-lg-5">
          <h2>Our Mission</h2>
          <div className=" ">
            <hr />
          </div>
          <p>
            To provide a seamless and personalized shopping experience by
            offering high-quality clothing and electronics at competitive
            prices, ensuring customer satisfaction through exceptional service,
            innovation, and convenience.
          </p>
        </div>
      </div>
      <div className="about-us-vision row my-5">
        <div className="col-lg-5">
          <h2>Our Vision</h2>
          <div className=" ">
            <hr />
          </div>
          <p>
            To become the leading e-commerce platform for clothing and
            electronics, recognized globally for quality, innovation, and
            empowering customers to live stylish and connected lives.
          </p>
        </div>
        <div className="col-lg-7 about-us-mv-div">
          <img
            className="about-us-mv-image"
            width="100%"
            height="100%"
            src="https://images.pexels.com/photos/5264945/pexels-photo-5264945.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
