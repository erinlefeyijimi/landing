import React from 'react'
import './index.css'
import icon1 from '../../assets/images/icon1.svg'
import icon2 from '../../assets/images/icon2.svg'
import icon3 from '../../assets/images/icon3.svg'
import icon4 from '../../assets/images/icon4.svg'


const Features = () => {
  return (
    <section className='features__container'>
        <div className="features__child">
            <img src={icon1} alt="features icon" />
            <h4>SOCIAL CONNECTION</h4>
            <p>Connect and share with friends as you explore your preferences and interests in TV Shows and movies.</p>
        </div>
        <div className="features__child">
        <img src={icon2} alt="features icon" />
            <h4>SERVICE CONSOLIDATION</h4>
            <p>Consolidate your streaming service providers and organize your subscription plan expenses.</p>
        </div>
        <div className="features__child">
        <img src={icon3} alt="features icon" className='small-img-sbv'/>
            <h4 className='u-features-margin-top'>PERSONALIZED CONTENT</h4>
            <p>Can't decide what to watch? We show you TV Shows and movie recommendations based on your interests.</p>
        </div>
        <div className="features__child">
        <img src={icon4} alt="features icon" />
            <h4>USER FRIENDLY</h4>
            <p>Our easy-to-use interface will allow you track your services and connect with friends without any hiccups.</p>
        </div>
    </section>
  )
}

export default Features