import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AllSubmissions from "./AllSubmissions/AllSubmissions";
import Banner from "./Banner/Banner";
import FavouriteSubmissions from "./FavouriteSubmissions/FavouriteSubmissions";

const Home = () => {
  const [allSubmissions, setAllSubmissions] = useState(true);
  const [favouriteSubmissions, setFavouriteSubmissions] = useState(false);

  const handleAllSubmissions = () => {
    console.log("valo");
    setAllSubmissions(true);
    setFavouriteSubmissions(false);
  };

  const handleFavouriteSubmissions = () => {
    setFavouriteSubmissions(true);
    setAllSubmissions(false);
  };
  return (
    <div>
      <Banner></Banner>
      <Container className="my-5">
        <div className="d-flex">
          <h4
            role="button"
            onClick={handleAllSubmissions}
            className={
              allSubmissions ? "text-success pe-auto" : "text-secondary pe-auto"
            }
          >
            All Submissions
          </h4>
          <h4
            role="button"
            onClick={handleFavouriteSubmissions}
            className={
              favouriteSubmissions ? "ms-4 text-success" : "text-secondary ms-4"
            }
          >
            Favourite Submissions
          </h4>
        </div>
      </Container>
      {allSubmissions && <AllSubmissions></AllSubmissions>}
      {favouriteSubmissions && <FavouriteSubmissions></FavouriteSubmissions>}
    </div>
  );
};

export default Home;
