import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AllSubmissions from "./AllSubmissions/AllSubmissions";
import Banner from "./Banner/Banner";
import FavouriteSubmissions from "./FavouriteSubmissions/FavouriteSubmissions";

const Home = () => {
  const [allSubmissions, setAllSubmissions] = useState(true);
  const [favouriteSubmissions, setFavouriteSubmissions] = useState(false);
  const [search, setSearch] = useState("");
  const allPosts = JSON.parse(localStorage.getItem("hackathonSubmission"));
  const favPosts = JSON.parse(localStorage.getItem("favSubmissions"));

  // All post Search Operation
  const searchItem = allPosts?.filter((item) => {
    if (search === "") {
      return item;
    } else if (item.title.toLowerCase().includes(search.toLocaleLowerCase())) {
      return item;
    }
  });

  // Favourite post Search Operation
  const favSearchItem = favPosts?.filter((item) => {
    if (search === "") {
      return item;
    } else if (item.title.toLowerCase().includes(search.toLocaleLowerCase())) {
      return item;
    }
  });

  // All Submission Button Handle
  const handleAllSubmissions = () => {
    setAllSubmissions(true);
    setFavouriteSubmissions(false);
  };

  // Favourite Submission Button Handle
  const handleFavouriteSubmissions = () => {
    setFavouriteSubmissions(true);
    setAllSubmissions(false);
  };

  return (
    <div>
      <Banner></Banner>
      <Container className="my-5">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h4
              role="button"
              onClick={handleAllSubmissions}
              className={
                allSubmissions
                  ? "text-success pe-auto"
                  : "text-secondary pe-auto"
              }
            >
              All Submissions
            </h4>
            <h4
              role="button"
              onClick={handleFavouriteSubmissions}
              className={
                favouriteSubmissions
                  ? "ms-4 text-success"
                  : "text-secondary ms-4"
              }
            >
              Favourite Submissions
            </h4>
          </div>
          <div>
            <input
              className="p-2 rounded fs-4"
              type="text"
              placeholder="Search"
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </div>
      </Container>
      {allSubmissions && (
        <AllSubmissions searchItem={searchItem}></AllSubmissions>
      )}
      {favouriteSubmissions && (
        <FavouriteSubmissions
          favSearchItem={favSearchItem}
        ></FavouriteSubmissions>
      )}
    </div>
  );
};

export default Home;
