import React from 'react'
import crochet from './img/cactus1.jpg';
import balls from './img/plant1.jpg';
import './styles/SectionDesc.css'

const SectionDesc = () => {
    return (
        <section className="sec two-columns" id = "desccription-block">
            <div className="left-col">
                <div className="card">
                    <img src= {crochet} alt="" className="card__picture" />
                </div>
                <div className="card card-under">
                    <img src= {balls} alt="" className="card__picture card__picture-under" />
                </div>
                <div className="frame" id='frame-1'></div>
                <div className="frame" id='frame-2'></div>
            </div>
            
            <div className="right-col">
                <div className="description">
                    <p>I am an Italian student. I don't sleep at night, so I use my time <span style={{color: '#f65284'}}>crocheting.</span> Check this out!
                     </p>
                    <button className="btn">Shop</button>
                </div>
            </div>
            
        </section>
    )
}

export default SectionDesc
