import './mainStyle.css'
import backgroundImage from '../assets/pexels-picography-4458.jpg';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

function HeroSection() {
const {userName}=useContext(UserContext);


    return ( 
        <div
  lc-helper="background"
  className="container-fluid py-5 mb-4 d-flex justify-content-center"
  style={{
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderEndEndRadius:'4px',
    borderEndStartRadius:'4px'
  }}
>
  <div
    className="p-5 mb-4 lc-block col-7 col-8 col-11">
    <div className="lc-block">
      <div editable="rich">
        <h2 className="fw-bolder display-3" style={{color:'white'}}>Welcome to <span style={{color:'rgb(0, 166, 204)'}}>ThunderBlog</span></h2>
      </div>
    </div>
    <div className="lc-block col-md-8">
      <div editable="rich">
        <p className="lead" style={{color:'white'}}>
        Start a Blog, and Write like never before.
        </p>
      </div>
    </div>
    {!userName && <div className="lc-block">
      <Link className="btn" to="/login" role="button" style={{background: 'rgb(0, 166, 204)', color:'white'}}>
        Let's start
      </Link>
    </div>}
    {userName && <div className="lc-block">
      <Link className="btn" to="/writeblog" role="button" style={{background: 'rgb(0, 166, 204)', color:'white'}}>
        Let's start
      </Link>
    </div>}
  </div>
</div>
     );
}

export default HeroSection;