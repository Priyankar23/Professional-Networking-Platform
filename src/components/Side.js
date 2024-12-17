import React from 'react'
import Fi from'./Fi.png';
import Fi1 from'./Fi1.png';
import Fi2 from'./Fi2.png';
import Fi3 from'./Fi3.png';
import './Side.css'
function Side(){
    return(
            <div className="head">
                <div className="box">
                    <img src={Fi} alt="feature"/>
                    <h3>Diverse communities</h3>
                    <p>Explore our array of diverse communities, each representing a unique blend of
                         industries, interests, and locations</p>
                </div>
                <div className="box">
                    <img src={Fi1} alt="feature1"/>
                    <h3>Easy Event Creation</h3>
                    <p>Easily create and promote events tailored to your community's interests and needs.</p>
                </div>
                <div className="box">
                    <img src={Fi2} alt="feature2"/>
                    <h3>Networking</h3>
                    <p>Utilize advanced networking tools such as private messaging and virtual meetups
                         to expand your professional network.</p>
                </div>
                <div className="box">
                    <img src={Fi3} alt="feature3"/>
                    <h3>Member Spotlight</h3>
                    <p>Highlight standout members and their achievements through member spotlights, 
                        interviews, or featured profiles.</p>
                </div>
            
            </div>
    )
}
export default Side;