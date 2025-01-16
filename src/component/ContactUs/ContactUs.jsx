import React from "react";
import "./ContactUs.css";
import ContactUsForm from "../../component/ContactUs/ContactUsForm";
import {
  CallOutlined,
  EmailOutlined,
  Facebook,
  Instagram,
  PlaceOutlined,
  X,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="">
      <div className="banner-holder mb-5">
        <div className="contant-us-banner d-flex justify-content-center align-items-center ">
          <p>Get a memorable </p>
          <p>Ecstasy with</p>
          <p className="contact-us-pakh-stores">PAKH-STORES</p>
        </div>
      </div>
      <div className="container">
        <div>
          <>
            <h2 className="d-flex justify-content-center mb-5 fw-bold">
              Get In Touch
            </h2>
          </>
          <div className="d-flex justify-content-center row">
            <div className="col-lg-7">
              <ContactUsForm />
            </div>
            <div className="contact-us-information col-lg-5">
              <div className="shadow py-2 mb-3">
                <span className="d-flex justify-content-center mb-2">
                  <PlaceOutlined color="warning" fontSize="large" />
                </span>
                <p className=" d-flex justify-content-center px-3">
                  Covenant street off Upper Mission Rd.
                </p>
              </div>
              <div className="shadow py-2 mb-3">
                <span className="d-flex justify-content-center mb-2">
                  <CallOutlined color="warning" fontSize="large" />
                </span>
                <p className=" d-flex justify-content-center px-3">
                  +234 705 493 2345
                </p>
              </div>
              <div className="shadow py-2 mb-4">
                <span className="d-flex justify-content-center mb-2">
                  <EmailOutlined color="warning" fontSize="large" />
                </span>
                <p className=" d-flex justify-content-center  px-3">
                  paulakhere@gmail.com
                </p>
              </div>
              <div>
                <div>
                  <p className="text-secondary follow-us-on-sm">
                    <i>Follow us on social media </i>{" "}
                  </p>
                </div>

                <div className="d-flex gap-3">
                  <Link to="https://x.com/OdiaseAkhere?t=Ym1s4PbNYBdcRNdLhb39Yw&s=08">
                    <span>
                      <X color="warning" fontSize="large" />
                    </span>
                  </Link>
                  <Link to="https://www.instagram.com/odiase.paul?igsh=ZGUzMzM3NWJiOQ==">
                    <span>
                      <Instagram color="warning" fontSize="large" />
                    </span>
                  </Link>
                  <Link to="https://www.facebook.com/odiase.paul?mibextid=ZbWKwL">
                    <span>
                      <Facebook color="warning" fontSize="large" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
