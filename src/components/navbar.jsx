import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Avatar } from "@mui/material";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

function Navbar() {
  const [user, setUser] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // console.log("User=>", user);

  // // agr user hai tw dashboard pr le joa warna login page le joa
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     navigate("/");
  //   } else {
  //     navigate("/SignIn");
  //   }
  // });

  // user ko logout karwaya hai
  const handleOnLogOut = async () => {
    console.log("data");
    try {
      setLoading(true);
      const userSignOut = await signOut(auth);
      message.success("Logout Successfully");
      navigate("/SignIn");
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="container-fluid pt-2 pb-2"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 12,
          backgroundColor: "#fff",
        }}
        id="nav2"
      >
        <div className="container">
          <nav className="nav navbar navbar-expand-xxl text-center pb-1 pt-1" style={{
            border:'2px solid red'
          }}>
            <Link
              to="/"
              className="navbar-brand"
              style={{ fontFamily: "poppins" }}
            >
              <img
                src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png.webp"
                alt="Logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navi"
            >
              <i className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end pe-5"
              id="navi"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link pe-4"
                    style={{ fontFamily: "poppins" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link pe-4"
                    style={{ fontFamily: "poppins" }}
                  >
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#"
                    className="nav-link pe-4"
                    style={{ fontFamily: "poppins" }}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#"
                    className="nav-link pe-4"
                    style={{ fontFamily: "poppins" }}
                  >
                    <ShoppingCartOutlined />
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Logout <FontAwesomeIcon icon={faUser} />{" "}
                  </button>
                </li>
                <li className="nav-item">
                  {/* Example single danger button */}
                  <div className="userPhoto">
                        <Avatar src={user?.userInfo?.UserPhoto} />
                      </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* Modal Box for Log Out */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h5
                className="text-center"
                style={{
                  fontFamily: "poppins",
                  fontSize: "1.4rem",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: 15,
                }}
              >
                Log out of Caza Store
              </h5>
              <p style={{ fontFamily: "poppins", fontSize: "0.8rem" }}>
                Are you sure that you want to log out of Caza Store before
                confirming your email address? Confirming the email address on
                your account ensures that you will be able to log in again.
              </p>
            </div>
            <div className="modal-footer">
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  style={{ fontFamily: "poppins" }}
                >
                  Confirm Account
                </button>
              </Link>
              <button
                type="button"
                className="btn btn-success"
                style={{ fontFamily: "poppins" }}
                onClick={handleOnLogOut}
              >
                {loading ? <h5>loading...</h5> : "Logout"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
