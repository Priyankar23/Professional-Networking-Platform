import React from 'react';
import './Edit.css';
import Image from './Image.png'
import Frame from './Frame.png';
function Edit(){
    return(
        <div>
            <div class="contain">
            <div class="main-text">
                <img src={Image} alt="app"/>
                </div>
                <div className="topic">
                    <p className="bb">Recognition and Opportunities</p>
                    <h1>Enhanced Recognition and Opportunities</h1>
                    <p>Within the vibrant Circle community, your active engagement<br/>
                     and valuable contributions are celebrated through a range of<br/> recognition mechanisms, 
                     including badges, awards, and featured <br/>spotlights.</p>
                     <div className="srcc">
                     <img src={Frame} alt="frr" />
                     <a className="abc" href="https://www.example.com">LearnMore</a>
                     </div>
                </div>
                </div>
        </div>
    )
}
export default Edit;