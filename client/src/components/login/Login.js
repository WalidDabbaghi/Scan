import React, { useState } from "react";
import LoginStyles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../JS/userSlice/userSlice";
const Login = () => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
//   const [showPassword, setShowPassword] = useState(false);
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginClick = async () => {
    if (!login.email || !login.password) {
        alert("Veuillez saisir à la fois l'email et le mot de passe");
        return;
      }
    try {
      // Supposons que 'userLogin' soit une action Redux qui effectue la connexion et stocke le token dans le store
      await dispatch(userLogin(login));

      // Naviguez vers la page de profil après la connexion réussie
      navigate("/account/profile");
    } catch (error) {
      console.error("Une erreur s'est produite lors de la connexion :", error);
      // Gérer les erreurs de connexion ici (par exemple, afficher un message d'erreur à l'utilisateur)
      alert("Email ou mot de passe incorrect !");
    }
  };
  return (
    <div className={LoginStyles.loginContainer}>
      <div className={LoginStyles.loginContainerv2}>
        <h1>Welcome back</h1>

        <div className={LoginStyles.inputContainer}>
          <label>EMAIL</label>
          <input
            onChange={(e) => setlogin({ ...login, email: e.target.value })}
            placeholder="enter your email"
            type="email"
          />
        </div>

        <div className={LoginStyles.inputContainer}>
          <label>PASSWORD</label>
          <input
            onChange={(e) => setlogin({ ...login, password: e.target.value })}
            placeholder="enter your password"
            type="password"
            // type={showPassword ? "text" : "password"} // Affiche le texte ou masque le mot de passe en fonction de l'état de showPassword
            // value={login.password}
            // style={{ marginRight: '5px' }}
          />
          {/* <button onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"} Password
          </button> */}
        </div>

        <div className={LoginStyles.forgetmeContainer}>
          {/* <div>
                Remember Me <input type="checkbox" />
            </div> */}
          <div>
            <Link to="/account/forgotpassowrd">Forgot password?</Link>
          </div>
        </div>

        <button onClick={handleLoginClick} className={LoginStyles.loginBTN}>
          LOGIN
        </button>

        <span className={LoginStyles.notreg}>
          Not registered yet?{" "}
          <Link className={LoginStyles.singupBTN} to="/account/signup">
            Signup
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login; 
