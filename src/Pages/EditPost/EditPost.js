import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const parseId = parseInt(id);
  const allPost = JSON.parse(localStorage.getItem("hackathonSubmission"));
  const singlePost = allPost?.filter((element) => element.id === parseId);
  const filterAllPosts = allPost?.filter((element) => element.id !== parseId);
  const {
    title,
    summery,
    description,
    coverImage,
    hackathonStart,
    hackathonEnd,
    hackathonName,
    gitRepo,
    otherLink,
  } = singlePost[0];

  console.log(filterAllPosts);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEditPost = (data) => {
    const updatedPost = {
      id: parseId,
      title: data.title,
      summery: data.summery,
      description: data.description,
      coverImage,
      hackathonName: data.hackathonName,
      hackathonStart,
      hackathonEnd,
      gitRepo: data.gitRepo,
      otherLink: data.otherLink,
    };

    filterAllPosts.push(updatedPost);
    localStorage.setItem("hackathonSubmission", JSON.stringify(filterAllPosts));
    toast.success("Post Successfully Updated");
  };

  return (
    <div>
      <Container>
        <form
          className="mt-5 bg-light p-5"
          onSubmit={handleSubmit(handleEditPost)}
        >
          <h3 className="fs-2 fw-semibold mb-5">New Hackathon Submission</h3>
          <Form.Group className="mb-5">
            <Form.Label className="fs-4 fw-normal">Title</Form.Label>
            <Form.Control
              className="w-75 p-3 fs-4 fw-normal"
              type="text"
              defaultValue={title}
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
              defaultValue={summery}
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
              defaultValue={description}
              {...register("description", {
                required: "This field is required",
              })}
              placeholder="Write a long description of your project"
            />
            {errors.description && <span>{errors.description?.message}</span>}
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label className="fs-4 fw-normal">Cover Image</Form.Label>
            <Form.Control
              className="w-75 p-3 fs-4 fw-normal"
              type="file"
              disabled
              {...register("coverImage")}
              //   placeholder="A short summery of your submission"
            />
            {errors.coverImage && <span>{errors.coverImage?.message}</span>}
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label className="fs-4 fw-normal">Hackathon Name</Form.Label>
            <Form.Control
              className="w-75 p-3 fs-4 fw-normal"
              type="text"
              defaultValue={hackathonName}
              {...register("hackathonName", {
                required: "This field is required",
              })}
              placeholder="Enter the name of the hackathon"
            />
            {errors.hackathonName && (
              <span>{errors.hackathonName?.message}</span>
            )}
          </Form.Group>
          <div className="row w-75">
            <Form.Group className="mb-5 col">
              <Form.Label className="fs-4 fw-normal">
                Hackathon Start Date
              </Form.Label>
              <Form.Control
                className="p-3 fs-4 fw-normal"
                type="date"
                defaultValue={hackathonStart}
                disabled
                {...register("hackathonStart")}
                // placeholder="Enter the name of the hackathon"
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
                defaultValue={hackathonEnd}
                disabled
                {...register("hackathonEnd")}
                // placeholder="Enter the name of the hackathon"
              />
              {errors.hackathonEnd && (
                <span>{errors.hackathonEnd?.message}</span>
              )}
            </Form.Group>
          </div>
          <Form.Group className="mb-5">
            <Form.Label className="fs-4 fw-normal">
              Github Repository
            </Form.Label>
            <Form.Control
              className="w-75 p-3 fs-4 fw-normal"
              type="text"
              defaultValue={gitRepo}
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
              defaultValue={otherLink}
              {...register("otherLink", {
                required: "This field is required",
              })}
              placeholder="You can upload your Video demo"
            />
            {errors.otherLink && <span>{errors.otherLink?.message}</span>}
          </Form.Group>
          <Button className="p-2 fs-5" variant="success" type="submit">
            Update Post
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default EditPost;
