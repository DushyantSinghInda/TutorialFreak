import './Section4.css';
import './main.css';
import './mediaquery.css';

import bgimg from '../images/Section5/setup-layer.png';
export default function Sectionfive(){
    return(
        <>
            <div className="online-compiler">
                <div className="container">
                    <div className="setup-wrapper position-relative bg-grey mb-5 mb-lg-0" style={{background:`#f9fafb url(${bgimg}) no-repeat`,backgroundPosition:'bottom'}}>
                        <div className="content-wrapper mx-auto text-center">
                            <h2 className='mb-md-3 fw-semibold'>Create your free account now on Tutorials Freak and unlock the entire content!</h2>
                            <p className='pb-lg-5'>With an account, you get access to premium content and courses at no cost.</p>
                            <button className='tf-btn setup-btn me-sm-3 me-2 exp-all-btn'>Explore All Courses</button>
                            <button className='tf-btn setup-btn'>Get Started Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}