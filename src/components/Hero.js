import React from 'react';
import './Hero.css'
function Hero(){
    return(
        <section className="hero">
             <div className="paraa">
            <h1>Circle, Where<br/>Professionals Gather</h1>
            </div>
            <p>Catch up,connect,and collaborate with Professionals from diverse fields on Circle,the utlimate platfrom
                for<br/>meaningfull networking and communtiy building
            </p>
            <div className="hero__buttons">
            <button className="contact-btn">Contact Team</button>
            <button className="get-started-btn">Get Started Now</button>
            </div>
        </section>
    )
}
export default Hero;
