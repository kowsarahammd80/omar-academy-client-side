import { createBrowserRouter } from "react-router-dom";
import BooksDetails from "../../Components/BooksDetails/BooksDetails";
import BookStore from "../../Components/BookStore/BookStore";
import DetailsOfCourse from "../../Components/DetailsOfCourse/DetailsOfCourse"
import Login from "../../Components/Login/Login";
import OnlineBatch from "../../Components/OnlineBatch/OnlineBatch";
import OnlineBatchDetails from "../../Components/OnlineBatchDetails/OnlineBatchDetails";
import Profile from "../../Components/Profile/Profile";
import ProfileSetting from "../../Components/ProfileSetting/ProfileSetting";
import SignUp from "../../Components/SignUp/SignUp";
import Main from "../../Layout/Main/Main";
import HomePages from "../../Pages/HomePages/HomePages";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePages></HomePages>,
      },

      {
        path: "/profile",
        element: <Profile></Profile>,
      },

      {
        path: "/profileSetting",
        element: <ProfileSetting></ProfileSetting>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {

        path: "/signUp",
        element: <SignUp></SignUp>,

      },

      {

        path: "/academyDetails",

        element: (
          <PrivateRoute>

             <DetailsOfCourse/>

          </PrivateRoute>
        ),

      },

      {
        path: "/onlineBatch",
        element: <OnlineBatchDetails/>
      },

      {
        path: '/booksStore',
        element: <BookStore/>
      },

      {
        path: "/booksDetails",
        element: <BooksDetails/>
      }

    ],

  },

]);

export default routers;
