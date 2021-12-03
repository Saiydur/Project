import React from "react";

const Framework = () => {
    return (
        <div className="container">
            <div>
                <div className="row m-4">
                    <h1 className="p-4">Front End - React JS</h1>
                    <div className="col-md-4">
                        <h3>Popularity</h3>
                        <p>ReactJS is highly popular because of its simplicity and flexibility. 
                            Many people are even referring to it as the future of web development. 
                            It is estimated that more than 1,300 developers and over 94,000 sites utilize ReactJS.</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Strength</h3>
                        <ul>
                            <li>Easy to Learn and USe</li>
                            <li>Creating Dynamic Web Applications Becomes Easier</li>
                            <li>Reusable Components</li>
                            <li>Performance Enhancement</li>
                            <li>The Support of Handy Tools</li>
                            <li>Known to be SEO Friendly</li>
                            <li>The Benefit of Having JavaScript Library</li>
                            <li>Scope for Testing the Codes</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Weakness</h3>
                        <ul>
                            <li>The high pace of development</li>
                            <li>Poor Documentation</li>
                            <li>View Part</li>
                            <li>JSX as a barrier</li>
                        </ul>
                    </div>
                </div>
                <div className="row ml-2">
                    <h1 className="p-4 text-center">Used By</h1>
                    <div className="col-md-4 col-sm-12">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" 
                        alt="Instagram" className="img-fluid" style={{width:"150px",height:"150px"}}/>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png" 
                        alt="Facebook" className="img-fluid" style={{width:"150px",height:"150px"}}/>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src="https://pngimg.com/uploads/netflix/netflix_PNG15.png" 
                        alt="Netflix" className="img-fluid" style={{width:"150px",height:"150px"}} />
                    </div>
                </div>
                <div className="row m-4"/>
                <div className="row m-4"/>
                <div className="row m-4">
                    <h1 className="p-4">Back End - Laravel</h1>
                    <div className="col-md-4">
                        <h3>Popularity</h3>
                        <p>The popularity of Laravel framework is on the rise due to its 
                            incredible features. Also, Laravel provides extensive community support as well. Moreover, if businesses want to outsource the web development work or hire Laravel developer then we 
                            at ValueCoders are always there for them.</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Strength</h3>
                        <ul>
                            <li>Best PHP framework</li>
                            <li>MVC structure followed</li>
                            <li>Advance Routing,Artisan,Built-in Redis</li>
                            <li>Queue management</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Weakness</h3>
                        <ul>
                            <li>Lightweight Frameworl</li>
                            <li>Lengthy development</li>
                            <li>Hard leagacy systems</li>
                            <li>Slow Performance</li>
                        </ul>
                    </div>
                    <div className="row ml-2">
                    <h1 className="p-4 text-center">Used By</h1>
                    <div className="col-md-4 col-sm-12">
                        <img src="https://www.signandstylingoss.nl/image-smp/9gag-logo-s_3583_875x1000.png" 
                        alt="9GAG" className="img-fluid" style={{width:"150px",height:"150px"}}/>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src="https://logos-download.com/wp-content/uploads/2016/10/Pfizer_logo.png" 
                        alt="Pfizer" className="img-fluid" style={{width:"150px",height:"150px"}}/>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src="https://biz.prlog.org/TourRadar/logo.png" 
                        alt="Tour Radar" className="img-fluid" style={{width:"150px",height:"150px"}} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Framework;