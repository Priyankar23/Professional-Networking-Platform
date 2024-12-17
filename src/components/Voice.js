import React from 'react'
import './Voice.css'
import Mg1 from './Mg1.png'
import Mg2 from './Mg2.png'
import Mg3 from './Mg3.png'


function Voice(){
    return(
        <div className="allflex">
           
        <div className="container">
            <p>I can't say enough positive things about Circle. The platform has not only provided me with valuable networking
                 opportunities but has also served as a source of inspiration and support.</p>
                 <div className="next">
        <img src={Mg1}alt="Example"  />
        <div className="text">
          <h4>Emily<br/><span className="ad">Sales Associate</span></h4>
        </div>
        </div>
      </div> 
      <div className="container">
            <p>As a freelancer, Circle has been a game-changer for finding new clients and projects.</p>
            <div className="next1">
        <img src={Mg2}alt="Example" />
        <div className="text">
          <h4>Jason<br/><span className="ad">Marketing</span></h4>
        </div>
        </div>
      </div>
      <div className="container">
            <p>Circle has been an invaluable resource for me as I've navigated various career transitions. The platform's
                 supportive community and wealth of resources have provided me with the guidance.</p>
                 <div className="next">
        <img src={Mg3} alt="Example"  />
        <div className="text">
          <h4>Michael<br/><span className="ad">Front-end Developer</span></h4>
        </div>
        </div>
      </div>
     
      </div>
    )
}
export default Voice;
 