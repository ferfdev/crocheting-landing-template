import React from 'react'
import './styles/Footer.css'
import { useState } from 'react'

const Footer = () => {

    const [email, setEmail] = useState('');

    const changeImput = (e) =>{
        setEmail(e.target.value)
    }
    const submitMail = (e) => {
        e.preventDefault();
        let input = document.getElementById('email');
        let isChecked = document.getElementById('agree-age').checked;
        // let container = document.getElementsByClassName('footer-content')[0];
        // let isP = container.getElementsByTagName('p')
        // if (isP.length !== 0) container.removeChild(isP[0]);
        // let response = document.createElement('p');
        let agreeLabel = document.getElementById('agree-age-label');

        if (!isChecked) {

            setEmail('')
            input.placeholder = '❌ Check age confirmation'
            agreeLabel.className = 'lbl-change'
        }
        else{
            setEmail('')
            input.placeholder = 'Submitted ✔️'
        }
        // response.style.marginLeft = '0.5rem';
        setTimeout(()=>{
            agreeLabel.className = '';

        },2050);
        
        // container.appendChild(response);
    }


    return (
        <footer className="footer-home">
            <h2>RINA's</h2><br />
            <div className="footer-content">
                <article>
                    <a href="">Home</a><br />
                    <a href="">Informations</a><br />
                    <a href="">Shop</a><br />
                    <a href="">Customize</a><br />
                </article>
                <article>
                    <a href="">Privacy Policy</a><br />
                    <a href="">Terms & Conditions</a><br />
                </article>
                <form action="" className='mailform' onSubmit={submitMail}>
                    <label htmlFor="email">Get the freshest news</label>
                    <div className="input-button" id = 'input-button' >
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value = {email}
                        onChange={(e) => changeImput(e)}/>
                        <button type='submit' className="btn">Subscribe</button><br />
                    
                    </div>
                    <div className="agree-age">
                        <input type="checkbox" name="agree-age" id="agree-age" />
                        <label htmlFor="agree-age" id='agree-age-label'> *By checking the box, you agree that you are at least 16 of age.</label>
                    </div>
                        
                </form>
            </div>
        </footer>
    )
}

export default Footer
