import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import Navbar from './Navbar.js';
import Install from './Install.js';
import Framework from './Framework.js';
import Tuitorial from './Tuitorial.js';
import Conclusion from './Conclusion.js';
import Error404 from './Error404.js';
import References from './References.js';
import RotateLoader from "react-spinners/RotateLoader";
import styled from "styled-components";
const Middle = styled.div`
text-align: center;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`;
function Example() {
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);
    return (
        <>
        {loading ? <Middle className="align-middle"><RotateLoader /></Middle> : 
        <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/install"exact element={<Install />} />
                <Route path="/framework"exact element={<Framework />} />
                <Route path="/tuitorial"exact element={<Tuitorial />} />
                <Route path="/conclusion" exact element={<Conclusion />} />
                <Route path="/references" element={<References />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
        </>
        }
        </>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
