import React from 'react'
import './Join.css'
import Pay1 from './Pay1.png'
import Pay3 from './Pay3.png'
import Pay4 from './Pay4.png'
import Pay5 from './Pay5.png'

function Join(){
    return(
        <div>
            <div className="mean">
            <h1>Join Us NOW & Find Your Circle</h1>
            <p>We are committed to fostering meaningful connections</p>
            </div>
            <div className="contains">
            <div className="pay">
                <p>Download Now, <br/>
                available on both Android & Ios</p>
                <div clssName="store">
                    <div className="abc">
                <img src={Pay1} alt="playstore" />
                </div>
                <div className="port">
                <img src={Pay3} alt="playstore"/>
                </div>
                </div>
            </div>
            <div className="pay1">
                <p>Hold Tight!<br/>
                For Desktop Application</p>
                <div clssName="store1">
                <div className="bcd">
                <img src={Pay4} alt="playstore"></img>
                </div>
                <div className="port1">
                <img src={Pay5} alt="playstore"/>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Join;