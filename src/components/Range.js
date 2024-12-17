import React from 'react'
import './Range.css'
import Group from './Group.png';
import Group1 from './Group1.png';
import Gp1 from './Gp1.png';
import Gp2 from './Gp2.png';
import Gp3 from './Gp3.png';
import Linee from './Linee.png'

function Range(){

return (
    <div>
    <div className="Access">
        <h1>Wide Range Of Access</h1>
        <p>Explore our array of diversecommunities, each representing a </p>
    </div>
    <div className="section">
    <div className="section1">
        <img src={Group1} alt="gp" />
    <div className="port">
        <h2>Identify By Professions
        </h2>
    <p>Explore our array of diverse communities, each representing a 
    unique blend of industries, interests, and locations</p>
    </div>
    </div>
    <div className="section1">
        
        <img src={Group} alt="gp" />

    <div className="port">
        <h2>
        Chat Support
        </h2>
    <p>Explore our array of diverse communities, each representing a unique
         blend of industries, interests, and locations</p>
         </div>
    </div>

    </div>
    <div className="node">
    <div className="sec">
        
        <img src={Gp1} alt="gpp" />

    <div className="ported">
        <h2>
        Integrations
        </h2>
    <p>Explore our array of diverse communities, each representing a 
        unique blend of industries, interests, and locations</p>
         </div>
    </div>
    <div className="sec">
        
        <img src={Gp2} alt="gpp" />

    <div className="ported">
        <h2>
        Event Management
        </h2>
    <p>Explore our array of diverse communities, each representing
         a unique blend of industries, interests, and locations</p>
         </div>
    </div>
    <div className="sec">
        
        <img src={Gp3} alt="gpp" />

    <div className="ported">
        <h2>
        Chat Support
        </h2>
    <p>Explore our array of diverse communities, each representing a unique
         blend of industries, interests, and locations</p>
         </div>
    </div>
    </div>
    <div className="line">
    <img src={Linee} alt="Line" />
    </div>
    </div>
)
}
export default Range;