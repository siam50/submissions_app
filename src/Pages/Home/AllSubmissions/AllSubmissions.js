import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllSubmissions = ({ searchItem }) => {
  console.log(searchItem);
  return (
    <div className="mb-5">
      <Container>
        <div className="row g-5">
          {searchItem?.map((submission) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`/submission-details/${submission.id}`}
              key={submission.id}
              className="col-4 text-dark"
            >
              <Card className="p-4" style={{ width: "24rem" }}>
                <div className="d-flex align-items-center">
                  {/* <Card.Img variant="top" src={} /> */}
                  <img
                    className="rounded"
                    width="130"
                    height="130"
                    src={submission.coverImage}
                    alt=""
                  />
                  <h3 className="ms-4">{submission.title}</h3>
                </div>
                <Card.Body>
                  <Card.Text className="fs-5">
                    {submission.description.slice(1, 80)}...
                  </Card.Text>
                  <p className="text-secondary text-end p-0">
                    Hackathon Start {submission.hackathonStart}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllSubmissions;
