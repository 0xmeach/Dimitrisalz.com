import React from 'react'
import './header.css';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something Amazing with GPT-3 OpenAI</h1>
        <p>What will the world look like as the marginal cost of intelligence approaches zero?</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address"/>
          <button type="button">Get Started</button>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div> 
    </div>
  )
        }

export default Header