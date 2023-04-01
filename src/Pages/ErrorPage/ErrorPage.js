import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="mt-5 text-center">
      <h1>Not Found Page</h1>
      <Link to="/">
        <Button className="btn btn-success p-2 fs-5" variant="success">
          Back to home
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
