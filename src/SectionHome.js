import React from 'react';
import './styles/SectionHome.css';
import logo from './img/logo-centrale.png';


const SectionHome = () => {
    return (
        <main className="container">
            <section className="col left-desc">
                <p>
                    <span id="hi">Hi</span><span id="im"> I am</span>
                </p>
            </section>
            
            <section className="col image">
                <div className="logo-container">
                    <img src={logo} alt="" className="logo-container__logo" />
                </div>
            </section>
            <section className="col right-desc">
                <p>
                    <span id="rina">RINA's</span><br />
                </p>
            </section>
            {/* <section className="col left-desc">
                <div className="description">
                    <p>I am an Italian student. I don't sleep at night, so I use my time <span style={{color: '#f65284'}}>crocheting</span> </p>
                    <Arrow id='arrow-down'/>
                </div>
                
            </section> */}
        </main>
    )
}

export default SectionHome
