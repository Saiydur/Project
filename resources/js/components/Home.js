import React, { useRef, useState, useEffect } from "react";
import laravelImg from "../../image/laravel.jpeg";
import reactImg from "../../image/react.png";
import webdevImg from "../../image/webdev.jpg";
import aayan from '../../image/aayan.png';
import riya from '../../image/riya.jpg';
import {Fade,Zoom,Roll} from 'react-reveal/';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../css/app.css";
import ReavealDetails from "./RevealDetails";
import ReavealDetails2 from "./RevealDetails2";
const Home = () => {
    useEffect(() => {
        AOS.init({
            duration : 3000,
        });
    }, []);
    return (
        <>
        <div id="backimg" className="text-center">
                <Fade top >
                    <h1 id="welcomeText">Welcome Everyone</h1>
                </Fade>
            <div>
                <div id="carouselExampleIndicators" className="container carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="0"className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <Zoom top>
                        <div className="carousel-item ">
                            <img style={{width:"900px",height:"600px"}}className="d-block w-100" src={laravelImg} alt="First slide" />
                        </div>
                        </Zoom>
                        <Zoom bottom>
                        <div className="carousel-item active">
                            <img style={{width:"900px",height:"600px"}}className="d-block w-100" src={reactImg} alt="Second slide" />
                        </div>
                        </Zoom>
                        <Zoom right>
                        <div className="carousel-item">
                            <img style={{width:"900px",height:"600px"}}className="d-block w-100" src={webdevImg} alt="Third slide" />
                        </div>
                        </Zoom>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="container">
                <div className="row p-4">
                    <div data-aos="fade-left" className="col-md-4">
                        <div className="card img-div">
                            <Zoom><img style={{width:"300px",height:"300px"}}src={aayan} alt="" /></Zoom>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="col-md-8">
                        <div className="card img-div text-white">
                            <Roll bottom>
                                <ReavealDetails/>
                            </Roll>
                        </div>
                    </div>
                </div>
                <div className="row p-4">
                    <div data-aos="fade-left" className="col-md-4">
                        <div className="card img-div">
                            <Zoom><img style={{width:"300px",height:"300px"}}src={riya} alt="" /></Zoom>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="col-md-8">
                        <div className="card img-div text-white">
                            <Roll bottom>
                                <ReavealDetails2/>
                            </Roll>
                        </div>
                    </div>
                </div>
                <div className="row p-4">
                    <div data-aos="fade-left" className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Worked By Ayan</h3>
                                <ul style={{listStyle:"none"}} className="card-text">
                                    <li>React</li>
                                    <li>Laravel</li>
                                    <li>Server Management</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-4">
                    <div data-aos="fade-right" className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Worked By Riya</h3>
                                <ul style={{listStyle:"none"}}className="card-text">
                                    <li>React</li>
                                    <li>Laravel</li>
                                    <li>Server Management</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        </>
    );
}
export default Home;