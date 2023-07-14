import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import './mediaquery.css';
import './Footer.css';

import img from '../images/Footer/logo.svg';
import { faFacebook, faFacebookF, faInstagram, faInstagramSquare, faLinkedin, faSquareFacebook, faSquareInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Footer(){
    return(
        <div className="footer-section bg-grey py-4">
            <div className="container">
                <div className="row">
                    <div className="col lg-4">
                        <div className="footer-logo text-center text-lg-start">
                            <a href="">
                                <img src={img} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <ul className="footer-social-icons text-center text-lg-end">
                            <li>
                                <a href="" style={{textDecoration:'none'}}>
                                    <FontAwesomeIcon icon={faSquareFacebook} className="social-logo"/>
                                </a>
                            </li>
                            <li>
                                <a href="" style={{textDecoration:'none'}}>
                                    <FontAwesomeIcon icon={faTwitter} className="social-logo"/>
                                </a>
                            </li>
                            <li>
                                <a href="" style={{textDecoration:'none'}}>
                                    <FontAwesomeIcon icon={faInstagram} className="social-logo"/>
                                </a>
                            </li>
                            <li>
                                <a href="" style={{textDecoration:'none'}}>
                                    <FontAwesomeIcon icon={faLinkedin} className="social-logo"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer-content text-center text-lg-start">
                            <span className='me-2'>
                                <a href="" style={{textDecoration:'none'}}>Terms & Conditions</a>
                            </span>
                            <span className='me-2'>|</span>
                            <span className='me-2'>
                                <a href="" style={{textDecoration:'none'}}>Privacy Policy</a>
                            </span>
                            <span className='me-2'>|</span>
                            <span className='me-2'>
                                <a href="" style={{textDecoration:'none'}}>About Us</a>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="footer-content text-center text-lg-end mb-0">
                        © 2022 Tutorials Freak . All Rights Reserved | Design By 
                        <a href="" className='ms-2 text-decoration-none' >WsCube Tech</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}