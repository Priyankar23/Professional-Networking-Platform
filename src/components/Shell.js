import React from 'react'
import "./Shell.css"
import Mg5 from './Mg5.png'
import Mg6 from './Mg6.png'
import Mg7 from './Mg7.png'

function Shell(){
    return(
        <div className="allflex">
           
        <div className="container">
            <p>The platform's diverse range of communities and engaging events have provided 
                me with invaluable networking opportunity.</p>
                 <div className="next11">
        <img src={Mg5}alt="Example"  />
        <div className="text">
          <h4>Rachel<br/><span className="ad">Fashion Designer</span></h4>
        </div>
        </div>
      </div> 
      <div className="container">
            <p>"I've found Circle to be a treasure trove of resources and connections. 
                The supportive community and insightful discussions have broadened my perspective.</p>
            <div className="next1">
        <img src={Mg6}alt="Example" />
        <div className="text">
          <h4>Laura<br/><span className="ad">Photographer</span></h4>
        </div>
        </div>
      </div>
      <div className="container">
            <p>The connections I've made on Circle have led to exciting career advancements. So grateful!</p>
                 <div className="next22">
        <img src={Mg7} alt="Example"  />
        <div className="text">
          <h4>Kane<br/><span className="ad">Dubbing Artist</span></h4>
        </div>
        </div>
      </div>
     
      </div>
    )
}
export default Shell