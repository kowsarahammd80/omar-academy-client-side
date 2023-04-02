import { createBrowserRouter } from "react-router-dom";
import BooksDetails from "../../Components/BooksDetails/BooksDetails";
import BookStore from "../../Components/BookStore/BookStore";
import ShopingCart from "../../Cards/ShopingCart/ShopingCart";
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
import ShopingPage from "../../Pages/ShopingPage/ShopingPage";
import CoursDettails from "../../Components/CoursVideo/CoursDettails";
 

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
        path:"/coursvideo/:id",
        loader:({params})=>fetch(`http://localhost:5000/coursvideo/${params.id}`),
        element:<CoursDettails></CoursDettails>
       }
,
      {
        path: "/login",
        element: <Login></Login>,
      },

      {

        path: "/signUp",
        element: <SignUp></SignUp>,

      },

      {

        path: "/coursdettails/:id",
       loader:async({params})=>fetch(`http://localhost:5000/cours/${params.id}`),
        element: (
          <PrivateRoute>

             <DetailsOfCourse/>

          </PrivateRoute>
        ),

      },
      {
        path:"/shoping",
        element:<ShopingPage></ShopingPage>
      },
      {
        path:"/shop",
         element:<ShopingCart></ShopingCart>
      }


,


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
