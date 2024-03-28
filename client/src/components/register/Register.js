import React, { useState } from 'react'
import SignUp from "./Signup.module.css"
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userRegister } from '../../JS/userSlice/userSlice';
const Register = () => {

  const [register, setregister] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const  navigate=useNavigate();
  const handleRegisterClick = async () => {
    try {
      // Supposons que 'userRegister' soit une action Redux qui effectue la connexion et stocke le token dans le store
      await dispatch(userRegister(register));
  
      // Naviguez vers la page de login après la connexion réussie
      navigate("/account/profile");
    } catch (error) {
      console.error("Une erreur s'est produite lors de la connexion :", error);
      // Gérer les erreurs de connexion ici (par exemple, afficher un message d'erreur à l'utilisateur)
    }
  };

  return (
    <div className={SignUp.loginContainer}>
      <div onSubmit={(e) => e.preventDefault()} className={SignUp.loginContainerv2}>
        <h1>Create your account</h1>

        <div className={SignUp.inputContainer}>
          <label>FRIST NAME</label>
          <input onChange={(e) => setregister({ ...register, name: e.target.value })}
            name="firstName" placeholder="enter your first name" type="text" />
        </div>
        <div className={SignUp.inputContainer}>
          <label>LAST NAME</label>
          <input onChange={(e) => setregister({ ...register, lastName: e.target.value })}
            name="lastName" placeholder="enter your last name" type="text" />
        </div>
        <div className={SignUp.inputContainer}>
          <label>EMAIL</label>
          <input onChange={(e) => setregister({ ...register, email: e.target.value })}
            name="email" placeholder="enter your email" type="email" />
        </div>

        <div className={SignUp.inputContainer}>
          <label>PASSWORD</label>
          <input onChange={(e) => setregister({ ...register, password: e.target.value })}
            name="password" placeholder="enter your password" type="password" />
        </div>

       

        

        <button
          onClick={handleRegisterClick} 
          className={SignUp.loginBTN}>REGISTER</button>
        
       
        <div className={SignUp.footerContainer}>
          <div>
            Already Signed Up? <Link to="/account/login">Login</Link>
          </div>
          <div>
            <Link to="/account/forgotpassword">Forgot Password?</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Register