import React from "react";
import banner from "../../../assets/waves.png";
import handBulb from "../../../assets/Hand holding bulb 3D.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-dark  position-relative d-flex justify-content-end ">
      <img height="416" src={banner} alt="" />
      <Container className="d-flex justify-content-between position-absolute top-0 start-0 align-items-center pt-5">
        <div className="px-5 text-start">
          <h1 className="text-light">Hackathon Submission</h1>
          <p className="text-light">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </p>
          <Link to="/submission">
            <button className="btn btn-success p-2 fs-5">
              Upload Submission
            </button>
          </Link>
        </div>
        <div className="px-5">
          <img height="300" src={handBulb} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
