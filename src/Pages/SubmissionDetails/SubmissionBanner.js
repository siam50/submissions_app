import React from "react";
import { Button, Container } from "react-bootstrap";
import { toast } from "react-hot-toast";
import {
  BsFillCalendarFill,
  BsFillTagFill,
  BsFillTrashFill,
  BsStar,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const SubmissionBanner = ({
  parseId,
  coverImage,
  title,
  summery,
  hackathonStart,
}) => {
  const posts = JSON.parse(localStorage.getItem("hackathonSubmission"));
  const favPosts = JSON.parse(localStorage.getItem("favSubmissions"));
  const restPosts = posts?.filter((post) => parseId !== post.id);
  const restFavPosts = favPosts?.filter((post) => parseId !== post.id);
  console.log(restPosts);

  // Deleted Submission Post
  const handleDelete = () => {
    const ansr = window.confirm("Are you sure! You want to Delete this Post?");
    if (ansr) {
      localStorage.setItem("hackathonSubmission", JSON.stringify(restPosts));
      localStorage.setItem("favSubmissions", JSON.stringify(restFavPosts));
      toast.success("Deleted Successfully");
    }
  };

  // Saved Favourite Hackathon submission posts
  const handleFavSubmission = () => {
    const singlePost = posts?.filter((post) => parseId === post.id);

    // Checking Favourite hackathonSubmission & set Data to Local storage
    if (!localStorage.getItem("favSubmissions")) {
      localStorage.setItem("favSubmissions", JSON.stringify(singlePost));
      toast.success("Saved Successfully");
    } else {
      const savedFavSubmission = JSON.parse(
        localStorage.getItem("favSubmissions")
      );

      // Checking Same ID
      const savedSameId = savedFavSubmission?.filter(
        (element) => element.id === parseId
      );

      if (savedSameId.length === 0) {
        localStorage.setItem(
          "favSubmissions",
          JSON.stringify([...savedFavSubmission, singlePost[0]])
        );
        toast.success("Saved Successfully");
      } else {
        toast.error("Already Saved");
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
            <Link to={`/edit-post/${parseId}`}>
              <Button className="px-5 fs-5 mb-2" variant="outline-light">
                <BsFillTagFill className="me-2"></BsFillTagFill>Edit
              </Button>
            </Link>
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
