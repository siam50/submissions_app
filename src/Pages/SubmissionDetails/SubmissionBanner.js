import React from "react";
import { Button, Container } from "react-bootstrap";
import {
  BsFillCalendarFill,
  BsFillTagFill,
  BsFillTrashFill,
  BsStar,
} from "react-icons/bs";

const SubmissionBanner = ({
  parseId,
  coverImage,
  title,
  summery,
  hackathonStart,
}) => {
  const posts = JSON.parse(localStorage.getItem("hackathonSubmission"));
  const restPosts = posts.filter((post) => parseId !== post.id);
  console.log(restPosts);

  // Submission Post Delete
  const handleDelete = () => {
    console.log("valo");
  };

  // Favourite Hackathon submission posts saved
  const handleFavSubmission = () => {
    const singlePost = posts.filter((post) => parseId === post.id);

    if (!localStorage.getItem("favSubmissions")) {
      localStorage.setItem("favSubmissions", JSON.stringify(singlePost));
    } else {
      const savedFavSubmission = JSON.parse(
        localStorage.getItem("favSubmissions")
      );

      const savedSameId = savedFavSubmission.filter(
        (element) => element.id === parseId
      );

      if (savedSameId.length === 0) {
        localStorage.setItem(
          "favSubmissions",
          JSON.stringify([...savedFavSubmission, singlePost[0]])
        );
      }
    }
  };

  return (
    <div height="416" className="bg-dark">
      <Container className=" text-light py-5">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              className="rounded me-3"
              width="150"
              height="150"
              src={coverImage}
              alt=""
            />
            <h1 className="ms-5 fs-1 fw-bold">{title}</h1>
          </div>
          <div>
            <Button className="px-5 fs-5 mb-2" variant="outline-light">
              <BsFillTagFill className="me-2"></BsFillTagFill>Edit
            </Button>
            <br />
            <Button
              onClick={handleDelete}
              className="px-5 fs-5 mt-2"
              variant="outline-light"
            >
              <BsFillTrashFill className="me-2"></BsFillTrashFill>Delete
            </Button>
          </div>
        </div>
        <h5 className="py-4">{summery}</h5>
        <BsStar onClick={handleFavSubmission} className="fs-4 me-4"></BsStar>
        <Button variant="outline-light">
          <BsFillCalendarFill> {""}</BsFillCalendarFill> {hackathonStart}
        </Button>
      </Container>
    </div>
  );
};

export default SubmissionBanner;
