import "./App.css";
import { RouterProvider } from "react-router-dom";
import routers from "./Routes/Routes/Routes";
import WishLishtProbaider from "./Context/WishLishtProbaider";

function App() {
  return (
    <div className="">
      <WishLishtProbaider>
        <RouterProvider router={routers}></RouterProvider>
      </WishLishtProbaider>
    </div>
  );
}

export default App;
