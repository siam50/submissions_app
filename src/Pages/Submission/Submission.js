import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { json, Navigate } from "react-router-dom";

const Submission = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const good = localStorage.getItem("hackathonSubmission");
  // const godd = JSON.parse(good);
  // console.log(godd);
  const handleSubmission = (data) => {
    const image = data.coverImage[0];
    const formData = new FormData();
    formData.append("image", image);
    const imgbbApi = process.env.REACT_APP_imgbb;
    fetch(`https://api.imgbb.com/1/upload?key=${imgbbApi}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          let hackathonSubmission = {
            id: 1,
            title: data.title,
            summery: data.summery,
            description: data.description,
            coverImage: result.data.url,
            hackathonName: data.hackathonName,
            hackathonStart: data.hackathonStart,
            hackathonEnd: data.hackathonEnd,
            gitRepo: data.gitRepo,
            otherLink: data.otherLink,
          };
          if (localStorage.getItem("hackathonSubmission")) {
            console.log("if a dhukse");
            const savedHackathon = JSON.parse(
              localStorage.getItem("hackathonSubmission")
            );
            hackathonSubmission.id = savedHackathon.length + 1;
            localStorage.setItem(
              "hackathonSubmission",
              JSON.stringify([...savedHackathon, hackathonSubmission])
            );
            // <Navigate to="/Home" replace={true}></Navigate>;
          } else {
            console.log("else a dhukse");
            localStorage.setItem(
              "hackathonSubmission",
              JSON.stringify([hackathonSubmission])
            );
          }
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <Container>
      <form
        className="mt-5 bg-light p-5"
        onSubmit={handleSubmit(handleSubmission)}
      >
        <h3 className="fs-2 fw-semibold mb-5">New Hackathon Submission</h3>
        <Form.Group className="mb-5">
          <Form.Label className="fs-4 fw-normal">Title</Form.Label>
          <Form.Control
            className="w-75 p-3 fs-4 fw-normal"
            type="text"
            {...register("title", { required: "This field is required" })}
            placeholder="Title of your submission"
          />
          {errors.title && <span>{errors.title?.message}</span>}
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label className="fs-4 fw-normal">Summery</Form.Label>
          <Form.Control
            className="w-75 p-3 fs-4 fw-normal"
            type="text"
            {...register("summery", { required: "This field is required" })}
            placeholder="A short summery of your submission"
          />
          {errors.summery && <span>{errors.summery?.message}</span>}
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label className="fs-4 fw-normal">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            className="w-75 p-3 fs-4 fw-normal"
            type="text-area"
            {...register("description", { required: "This field is required" })}
            placeholder="Write a long description of your project"
          />
          {errors.description && <span>{errors.description?.message}</span>}
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label className="fs-4 fw-normal">Cover Image</Form.Label>
          <Form.Control
            className="w-75 p-3 fs-4 fw-normal"
            type="file"
            {...register("coverImage", { required: "This field is required" })}
            placeholder="A short summery of your submission"
          />
          {errors.coverImage && <span>{errors.coverImage?.message}</span>}
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label className="fs-4 fw-normal">Hackathon Name</Form.Label>
          <Form.Control
            className="w-75 p-3 fs-4 fw-normal"
            type="text"
            {...register("hackathonName", {
              required: "This field is required",
            })}
            placeholder="Enter the name of the hackathon"
          />
          {errors.hackathonName && <span>{errors.hackathonName?.message}</span>}
        </Form.Group>
        <div className="row w-75">
          <Form.Group className="mb-5 col">
            <Form.Label className="fs-4 fw-normal">
              Hackathon Start Date
            </Form.Label>
            <Form.Control
              className="p-3 fs-4 fw-normal"
              type="date"
              {...register("hackathonStart", {
                required: "This field is required",
              })}
              placeholder="Enter the name of the hackathon"
            />
            {errors.hackathonStart && (
              <span>{errors.hackathonStart?.message}</span>
            )}
          </Form.Group>
          <Form.Group className="mb-5 col">
            <Form.Label className="fs-4 fw-normal">
              Hackathon End Date
            </Form.Label>
            <Form.Control
              className="p-3 fs-4 fw-normal"
              type="date"
              {...register("hackathonEnd", {
                required: "This field is required",
              })}
              placeholder="Enter the name of the hackathon"
            />
            {errors.hackathonEnd && <span>{errors.hackathonEnd?.message}</span>}
          </Form.Group>
        </div>
        <Form.Group className="mb-5">
          <Form.Label className="fs-4 fw-normal">Github Repository</Form.Label>
          <Form.Control
            className="w-75 p-3 fs-4 fw-normal"
            type="text"
            {...register("gitRepo", {
              required: "This field is required",
            })}
            placeholder="Enter your Github repository Link"
          />
          {errors.gitRepo && <span>{errors.gitRepo?.message}</span>}
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label className="fs-4 fw-normal">Other Links</Form.Label>
          <Form.Control
            className="w-75 p-3 fs-4 fw-normal"
            type="text"
            {...register("otherLink", {
              required: "This field is required",
            })}
            placeholder="You can upload your Video demo"
          />
          {errors.otherLink && <span>{errors.otherLink?.message}</span>}
        </Form.Group>
        <Button variant="success" type="submit">
          Upload Submission
        </Button>
      </form>
    </Container>
  );
};

export default Submission;
