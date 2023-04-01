import React from "react";
import { BsFillCalendarFill, BsGithub, BsLink45Deg } from "react-icons/bs";
import { Button, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import SubmissionBanner from "./SubmissionBanner";

const SubmissionDetails = () => {
  const { id } = useParams();
  const parseId = parseInt(id);

  const hackathonSubmission = JSON.parse(
    localStorage.getItem("hackathonSubmission")
  );
  const details = hackathonSubmission?.find(
    (element) => element.id === parseId
  );
  const {
    title,
    coverImage,
    description,
    gitRepo,
    hackathonEnd,
    hackathonName,
    hackathonStart,
    otherLink,
    summery,
  } = details;
  // console.log(details);
  return (
    <div>
      <SubmissionBanner
        parseId={parseId}
        title={title}
        coverImage={coverImage}
        summery={summery}
        hackathonStart={hackathonStart}
      ></SubmissionBanner>
      <Container>
        <div className="row gx-5 text-dark mt-5">
          <div className="col-8">
            <h2>Description</h2>
            <p>{description}</p>
          </div>
          <div className="col-4">
            <h4 className="text-secondary">Hackathon</h4>
            <h2 className="py-3">{hackathonName}</h2>
            <p className="text-secondary fs-5 fw-semibold">
              <BsFillCalendarFill></BsFillCalendarFill> {hackathonStart} -{" "}
              {hackathonEnd}
            </p>
            <Link to={gitRepo}>
              <Button className="px-5 fs-5 my-3" variant="outline-secondary">
                <BsGithub></BsGithub> Github Repo
              </Button>
            </Link>
            <br />
            <Link to={otherLink}>
              <Button className="px-5 fs-5" variant="outline-secondary">
                <BsLink45Deg></BsLink45Deg> Other Link
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubmissionDetails;
