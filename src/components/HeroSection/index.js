import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

import './styles.css'

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
        <div className="container">
          <div 
            className="row home__hero-row"
            style={{ display: 'flex', flexDirection: imgStart ? 'row-reverse' : 'row' }}  
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                <p className={lightText ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                  {description}
                </p>
                <Link to="/sign-up">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="col">
              <div className="home__hero-img-wrapper">
                <img className="home__hero-img" src={img} alt={alt}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) 
}

export default HeroSection
