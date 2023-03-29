import "./App.css";
import { RouterProvider } from "react-router-dom";
import routers from "./Routes/Routes/Routes";
import WishLishtProbaider from "./Context/WishLishtProbaider";
import BuyProbider from "./Context/BuyProbider";

function App() {
  return (
    <div className="">
      <WishLishtProbaider>
        <BuyProbider>
        <RouterProvider router={routers}></RouterProvider>
        </BuyProbider>
      </WishLishtProbaider>
    </div>
  );
}

export default App;
