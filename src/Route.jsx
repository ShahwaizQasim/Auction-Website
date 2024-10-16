import { useContext } from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/signup";
import SignIn from "./pages/auth/signin";
import Home from "./pages/Home";
import AddProduct from "./pages/products/addProduct";
import UserProfile from "./userProfile/userprofile";
import { AuthContext } from "./context/AuthContext";
import ProductDetail from "./pages/products/productDetail";
import AllProducts from "./pages/products/allProduct";

function App() {
  const [user, setUser] = useContext(AuthContext);
  console.log("user", user);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Loading />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />

          {/* <Route
            path="/"
            element={
              user?.isLogin ? <Home /> : <Navigate to={"/signIn"} />
            }
          > */}
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/ProductDetail/:id" element={<ProductDetail />} />
            <Route path="/AllProducts" element={<AllProducts />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
