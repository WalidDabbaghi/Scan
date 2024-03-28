import React from "react";
import NavStyles from "./Nav.module.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../JS/userSlice/userSlice";
import { useDispatch } from "react-redux";
const Nav = () => {
  const isAuth = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogoutClick = async () => {
    try {
      // Supposons que 'userLogin' soit une action Redux qui effectue la connexion et stocke le token dans le store
      await dispatch (logout());;
  
      // Naviguez vers la page de profil après la connexion réussie
      navigate("/account/login");
    } catch (error) {
      console.error("Une erreur s'est produite lors de la connexion :", error);
      // Gérer les erreurs de connexion ici (par exemple, afficher un message d'erreur à l'utilisateur)
    }
  };
  return (
    <nav className={NavStyles.mainNav}>
      <div>
        <div className={NavStyles.container1}>
          <img
            className={NavStyles.img}
            src="/—Pngtree—ninja with hoodie mascot e_5538541.png"
            alt="img"
          />
          {/* <h3>Hunt</h3> */}
        </div>
      </div>
      <div>
        {isAuth ? (
          <div className={NavStyles.rightSideNav}>
            <div className={NavStyles.ww}>
              <h1>
                <Link className={NavStyles.ww} to="/">
                  {" "}
                  scan
                </Link>
              </h1>
            </div>
            <div>
              {/* <span className="d-blcok">Account</span> */}
              <div className={NavStyles.container2}>
                <Link
                  className={`d-block ${NavStyles.linkBTN}`}
                  to="/account/profile"
                >
                  Profile
                </Link>
                <span className={NavStyles.or}></span>
                <Link className={NavStyles.linkBTN} onClick={handleLogoutClick} to="account/signup">
                Logout
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className={NavStyles.rightSideNav}>
            <div className={NavStyles.ww}>
              <h1>
                <Link className={NavStyles.ww} to="/">
                  {" "}
                  scan
                </Link>
              </h1>
            </div>
            <div>
              {/* <span className="d-blcok">Account</span> */}
              <div className={NavStyles.container2}>
                <Link
                  className={`d-block ${NavStyles.linkBTN}`}
                  to="/account/login"
                >
                  Login
                </Link>
                <span className={NavStyles.or}></span>
                <Link className={NavStyles.linkBTN} to="account/signup">
                  Singup
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
