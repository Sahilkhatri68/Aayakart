import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import Footer from './Footer'
import Mainheader from './Mainheader'
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
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


    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    async function UserLogin() {
        axios
            .post(
                `https://ayakart.dauqu.com/api/login`,
                {
                    username: username,
                    password: password,
                },
                {
                    withCredentials: true,
                }
            )

            .then(() => {
                alert("Successfuly loged in ");
                navigate("/", { replace: true });
            })
            .catch((e) => {
                alert("invalid details");
                navigate("/login", { replace: true });
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
                                        <a href="#sign-in" className="nav-link active">
                                            Sign In
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link">
                                            Sign Up
                                        </Link>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="sign-in">
                                        <div className="form-group">
                                            <label>Username   *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setusername(e.target.value)}
                                                name={username}
                                                id="username"
                                                required=""
                                            />
                                        </div>
                                        <div className="form-group mb-0">
                                            <label>Password *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setPassword(e.target.value)}
                                                name={password}
                                                id="password"
                                                required=""
                                            />
                                        </div>
                                        <div className="form-checkbox d-flex align-items-center justify-content-between">
                                            <input
                                                type="checkbox"
                                                className="custom-checkbox"
                                                id="remember1"
                                                name="remember1"
                                                required=""
                                            />
                                            <label htmlFor="remember1">Remember me</label>
                                            <a href="#">Last your password?</a>
                                        </div>
                                        <button className="btn btn-primary" onClick={() => UserLogin()}>
                                            Log In
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

