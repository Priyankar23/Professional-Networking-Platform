import React from 'react'
import './Video.css'
import Vid from './Vid.png';
import Pic1 from './Pic1.png';
import Pic2 from './Pic2.png';
import Pic3 from './Pic3.png';
import Pic4 from './Pic4.png';
import Pic5 from './Pic5.png';
import Pic6 from './Pic6.png';
import Pic7 from './Pic7.png';

function Video(){
    return (
    <div className="vc" >
        <div className="pic">
            <img src={Vid} alt="video-container"></img>
        </div>
        <p>Meet People From Different Companies</p>
        <div className="long">
            <img src={Pic1} alt="google" classname="long-img"/>
            <img src={Pic2} alt="Microsoft" classname="long-img"/>
            <img src={Pic3} alt="Flipkart" classname="long-img"/>
            <img src={Pic4} alt="Capgemini"classname="long-img"/>
            <img src={Pic5} alt="Facebook" classname="long-img"/>
            <img src={Pic6} alt="Zoho" classname="long-img"/>
            <img src={Pic7} alt="Netflix" classname="long-img"/>
        </div>
    </div>
    );
}
export default Video;
