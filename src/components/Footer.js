import React from 'react'
import './Footer.css'
import Vector from './Vector.png'
import Gpp from './Gpp.png'
function Footer(){
    return(
        <div>
        <div className="alll">
            <div className="foo">
            <div className="hub">
                <img src={Vector} alt="vec" />
            </div>
            <div className="cc">
                <h3>Circle hUB</h3>
               <p> Opportunities to network, collaborate, and learn<br/> from one another</p>
               <img src={Gpp} alt="group"/>
            </div>
            </div>
            <div className="ele">
                <div className="col">
                    <h4>Company</h4>
                    <p>Careers</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Partnerships</p>
                </div>
                <div className="col">
                    <h4>Resources</h4>
                    <p>Tutorials</p>
                    <p>Blog</p>
                    <p>Templates</p>
                    <p>Events</p>
                </div>
                <div className="col">
                    <h4>Product</h4>
                    <p>Pricing</p>
                    <p>Feedback</p>
                    <p>Cookie Policy</p>
                </div>
                <div className="col">
                    <h4>Legal</h4>
                    <p>Terms of use</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
           
        </div>
        <div className="lastt">
                <p>© 2006-2024 Circle hub. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer