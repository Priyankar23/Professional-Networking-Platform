import React, { useState } from 'react';
import './Space.css';

function Space() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);

  const toggleCollapse1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const toggleCollapse2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const toggleCollapse3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  const toggleCollapse4 = () => {
    setIsExpanded4(!isExpanded4);
  };

  return (
    <div className="out">
      <div className="tt">
        <h1>Frequently<br />Asked<br />Questions</h1>
      </div>
      <div className="clear">
        <div className="seccc">
          <hr />
          <div className="question-container">
            <h3>How do I join a community on Circle?</h3>
            <div className="button-container">
              <span onClick={toggleCollapse1}>
                {isExpanded1 ? "-" : "+"}
              </span>
            </div>
          </div>
          {isExpanded1 && (
            <div className="collapse-content">
              <p>...</p>
            </div>
          )}
        </div>
        <div className="seccc">
          <hr />
          <div className="question-container">
            <h3>Can I create my own events within the platform?</h3>
            <div className="button-container">
              <span onClick={toggleCollapse2}>
                {isExpanded2 ? "-" : "+"}
              </span>
            </div>
          </div>
          {isExpanded2 && (
            <div className="collapse-content">
              <p>Yes, you can create your own events on Circle. Simply navigate to the "Events" section and click on the option
              to create a new event. From there, you can add event details such as 
              the title, date, time, location, and description. You can also customize 
              event settings and invite members to attend.</p>
            </div>
          )}
          <hr />
        </div>
        <div className="seccc">
          <div className="question-container">
            <h3>How can I find and connect with other professionals in my industry?</h3>
            <div className="button-container">
              <span onClick={toggleCollapse3}>
                {isExpanded3 ? "-" : "+"}
              </span>
            </div>
          </div>
          {isExpanded3 && (
            <div className="collapse-content">
              <p>...</p>
            </div>
          )}
          <hr />
        </div>
        <div className="seccc">
          <div className="question-container">
            <h3>Is there a mobile app available for Circle?</h3>
            <div className="button-container">
              <span onClick={toggleCollapse4}>
                {isExpanded4 ? "-" : "+"}
              </span>
            </div>
          </div>
          {isExpanded4 && (
            <div className="collapse-content">
              <p>...</p>
            </div>
          )}
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Space;

