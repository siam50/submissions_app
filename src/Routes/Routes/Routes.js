import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Submission from "../../Pages/Submission/Submission";
import SubmissionDetails from "../../Pages/SubmissionDetails/SubmissionDetails";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import EditPost from "../../Pages/EditPost/EditPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/submission",
        element: <Submission></Submission>,
      },
      {
        path: "/submission-details/:id",
        element: <SubmissionDetails />,
        loader: ({ params }) => fetch(`submission-details/${params.id}`),
      },
      {
        path: "/edit-post/:id",
        element: <EditPost></EditPost>,
        loader: ({ params }) => fetch(`edit-post/${params.id}`),
      },
    ],
  },
]);

export default router;
