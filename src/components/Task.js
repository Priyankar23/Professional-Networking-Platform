import React from 'react';
import './Task.css';
import Line from './Line.png';

function Task() {
    return (
        <div className="circle-growth-stats">
      <h2>We Have</h2>
      <h1>Discovered How Our Users<br/>Grown With Circle</h1>

      <div className="stats-container">
        <div className="stat">
            <img src={Line} alt="pic"/>
            <div className = "box1">
                <div>
            <h3>32%</h3>
            </div>
            <div>
                <p>Increase in solving of<br></br> a problem quicker</p>
            </div>
          </div>
        </div>
        <div className="stat">
        <img src={Line} alt="pic"/>
        <div className='box1'>
            <div>
          <h3>18%</h3>
          </div>
          <div>
          <p>Increase in knowing new<br></br> peers very month</p>
          </div>
        </div>
        </div>
        <div className="stat">
        <img src={Line} alt="pic"/>
        <div className='box1'>
            <div>
          <h3>11%</h3>
          </div>
          <div>
          <p>Increase in career<br></br> Advancement</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Task;
