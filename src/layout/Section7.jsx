import './Section4.css';
import './mediaquery.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


import img1 from '../images/Section7/1.svg';
import img2 from '../images/Section7/2.svg';
import img3 from '../images/Section7/3.svg';
import img4 from '../images/Section7/4.svg';

export default function Sectionseven(){
    return(
        <div className="pt-4 pb-5 learning-apps-section">
            <div className="container">
                <div className="learning-apps-row row">
                    <div className="apps-card-wrapper">
                        <a href="" style={{textDecoration:'none', color:'inherit'}}>
                            <div className="apps-card mb-4">
                                <div className="apps-card-img-wrapper">
                                    <img src={img1} className="img-fluid" alt="" />
                                </div>
                                <div className="apps-card-content-wrapper text-start">
                                    <h4 className='mb-2'>Cyber Security</h4>
                                    <p>Learn cybersecurity skills with practical tutorial, course, videos, and more.</p>
                                    <span className='text-decoration-none'>
                                        Get App
                                        <FontAwesomeIcon icon={faArrowRight} className='ms-3'/>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="apps-card-wrapper">
                        <a href="" style={{textDecoration:'none', color:'inherit'}}>
                            <div className="apps-card mb-4">
                                <div className="apps-card-img-wrapper">
                                    <img src={img2} className="img-fluid" alt="" />
                                </div>
                                <div className="apps-card-content-wrapper text-start">
                                    <h4 className='mb-2'>Digital Marketing</h4>
                                    <p>Complete digital marketing course with tutorials, notes, videos, and quizzes.</p>
                                    <span className='text-decoration-none'>
                                        Get App
                                        <FontAwesomeIcon icon={faArrowRight} className='ms-3'/>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="apps-card-wrapper">
                        <a href="" style={{textDecoration:'none', color:'inherit'}}>
                            <div className="apps-card mb-4">
                                <div className="apps-card-img-wrapper">
                                    <img src={img1} className="img-fluid" alt="" />
                                </div>
                                <div className="apps-card-content-wrapper text-start">
                                    <h4 className='mb-2'>Cyber Security</h4>
                                    <p>Learn cybersecurity skills with practical tutorial, course, videos, and more.</p>
                                    <span className='text-decoration-none'>
                                        Get App
                                        <FontAwesomeIcon icon={faArrowRight} className='ms-3'/>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="apps-card-wrapper">
                        <a href="" style={{textDecoration:'none', color:'inherit'}}>
                            <div className="apps-card mb-4">
                                <div className="apps-card-img-wrapper">
                                    <img src={img1} className="img-fluid" alt="" />
                                </div>
                                <div className="apps-card-content-wrapper text-start">
                                    <h4 className='mb-2'>Cyber Security</h4>
                                    <p>Learn cybersecurity skills with practical tutorial, course, videos, and more.</p>
                                    <span className='text-decoration-none'>
                                        Get App
                                        <FontAwesomeIcon icon={faArrowRight} className='ms-3'/>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}