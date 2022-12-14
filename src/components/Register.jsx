import Footer from './Footer'
import Mainheader from './Mainheader'
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [isLoading, setIsLoading] = useState(false);

    let navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        scrollToTop();
    }, [])

    const [fullname, setFullname] = useState("");
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [phone_number, setphone_number] = useState("");
    const [location, setLocation] = useState("");

    const postdata = () => {
        setIsLoading(true)
        axios
          .post("https://ayakart.dauqu.com/api/register", {
            fullName: fullname,
            username: username,
            phone_number: phone_number,
            password: password,
            confirmPassword: confirmpassword,
            email: email,
            location: location,
          })
          .then(function (response) {
            console.log(response);
            alert("Account Created Successfuly")
            navigate("/login", { replace: true });
            setIsLoading(false)
          })
          .catch(function (error) {
            console.log(error);
            alert("User Already Exist / Missing Details");
            navigate("/register", { replace: true });
            setIsLoading(false)

          });
      };
    

    return (
        <>
            <div>
                <Mainheader />
            </div>
            <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2, stiffness: 500 }}
                style={{
                    width: "100%",
                    height: "100%",
                }}>
                <div className="page-content">
                    <div className="container">
                        <div className="login-popup">
                            <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                                <ul className="nav nav-tabs text-uppercase" role="tablist">
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link ">
                                            Sign In
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#sign-up" className="nav-link active">
                                            Sign Up
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="sign-in">
                                        <div className="form-group">
                                            <label>Fullname  *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setFullname(e.target.value)}
                                                name={fullname}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Username  *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setusername(e.target.value)}
                                                name={username}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email  *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setEmail(e.target.value)}
                                                name={email}
                                            />
                                        </div>
                                        <div className="form-group  ">
                                            <label>Password *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                
                                                onChange={(e) => setPassword(e.target.value)}
                                                name={password}
                                            />
                                        </div>
                                        <div className="form-group  ">
                                            <label>Confirmpassword *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setconfirmpassword(e.target.value)}
                                                name={confirmpassword}
                                                id="password"
                                            />
                                        </div>
                                        <div className="form-group  ">
                                            <label>Phone_number *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setphone_number(e.target.value)}
                                                name={phone_number}
                                                id="password"
                                            />
                                        </div>
                                        <div className="form-group  ">
                                            <label>Location *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setLocation(e.target.value)}
                                                name={location}
                                                id="password"
                                            />
                                        </div>
                                        
                                        <button className="btn btn-primary" onClick={() => postdata()}>
                                        {isLoading !== true ? "Signin" : ("Signing-In....") }
                                        </button>
                                    </div>
                                     
                                </div>
                                <p className="text-center">Sign in with social account</p>
                                <div className="social-icons social-icon-border-color d-flex justify-content-center">
                                    <a href="#" className="social-icon social-facebook w-icon-facebook" />
                                    <a href="#" className="social-icon social-twitter w-icon-twitter" />
                                    <a href="#" className="social-icon social-google fab fa-google" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
            <div>
                <Footer />
            </div>
        </>
    )
}

