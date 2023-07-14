
import './Section4.css';
import './mediaquery.css';

import Compilor from '../images/Section4/compilor.png';
import img1 from '../images/Section4/1.svg';
import img2 from '../images/Section4/2.svg';
import img3 from '../images/Section4/3.svg';
import img4 from '../images/Section4/4.svg';
import img5 from '../images/Section4/5.svg';
import img6 from '../images/Section4/6.svg';
import img7 from '../images/Section4/7.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Sectionfour(){
    return(
        <div className="online-compiler">
            <div className="container">
                <div className="row align-items-center">
                    <div className="heading-wrapper">
                        <h2 className="fw-semibold">Practice with our Online Compilers</h2>
                    </div>
                    <div className="mb-4 mb-md-0 text-center text-lg-start col-xl-7 col-lg-6">
                        <img src={Compilor} className='img-fluid mt-5' alt="" width="90%" />
                    </div>
                    <div className="mb-4 mb-lg-0 col-xl-5 col-lg-6">
                        <div className="row">
                            <div className="mb-3 compiler-column col-lg-6 col-sm-6">
                                <a href="" style={{textDecoration:'none'}}>
                                    <div className="course-compiler-card card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="compilor-icon-wrapper mb-0 me-3 rounded-circle d-flex align-items-center justify-content-center">
                                                    <img src={img1} width='25' alt="" />
                                                </div>
                                                <div>
                                                    <h5 className='text-truncate mb-0 text-start'>C Compiler</h5>
                                                    <div>
                                                        <span className='text-truncate'>
                                                            Start Coding C
                                                            <FontAwesomeIcon icon={faArrowRight} className='ms-2'/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="mb-3 compiler-column col-lg-6 col-sm-6">
                                <a href="" style={{textDecoration:'none'}}>
                                    <div className="course-compiler-card card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="compilor-icon-wrapper mb-0 me-3 rounded-circle d-flex align-items-center justify-content-center">
                                                    <img src={img2} width='25' alt="" />
                                                </div>
                                                <div>
                                                    <h5 className='text-truncate mb-0 text-start'>CSS Editor</h5>
                                                    <div>
                                                        <span className='text-truncate'>
                                                            Start Coding CSS
                                                            <FontAwesomeIcon icon={faArrowRight} className='ms-2'/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="mb-3 compiler-column col-lg-6 col-sm-6">
                                <a href="" style={{textDecoration:'none'}}>
                                    <div className="course-compiler-card card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="compilor-icon-wrapper mb-0 me-3 rounded-circle d-flex align-items-center justify-content-center">
                                                    <img src={img3} width='25' alt="" />
                                                </div>
                                                <div>
                                                    <h5 className='text-truncate mb-0 text-start'>HTML Editor</h5>
                                                    <div>
                                                        <span className='text-truncate'>
                                                            Start Coding HTML
                                                            <FontAwesomeIcon icon={faArrowRight} className='ms-2'/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="mb-3 compiler-column col-lg-6 col-sm-6">
                                <a href="" style={{textDecoration:'none'}}>
                                    <div className="course-compiler-card card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="compilor-icon-wrapper mb-0 me-3 rounded-circle d-flex align-items-center justify-content-center">
                                                    <img src={img4} width='25' alt="" />
                                                </div>
                                                <div>
                                                    <h5 className='text-truncate mb-0 text-start'>jQuery Editor</h5>
                                                    <div>
                                                        <span className='text-truncate'>
                                                            Start Coding jQuery
                                                            <FontAwesomeIcon icon={faArrowRight} className='ms-2'/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="mb-3 compiler-column col-lg-6 col-sm-6">
                                <a href="" style={{textDecoration:'none'}}>
                                    <div className="course-compiler-card card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="compilor-icon-wrapper mb-0 me-3 rounded-circle d-flex align-items-center justify-content-center">
                                                    <img src={img5} width='25' alt="" />
                                                </div>
                                                <div>
                                                    <h5 className='text-truncate mb-0 text-start'>C++ Compiler</h5>
                                                    <div>
                                                        <span className='text-truncate'>
                                                            Start Coding C++
                                                            <FontAwesomeIcon icon={faArrowRight} className='ms-2'/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="mb-3 compiler-column col-lg-6 col-sm-6">
                                <a href="" style={{textDecoration:'none'}}>
                                    <div className="course-compiler-card card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="compilor-icon-wrapper mb-0 me-3 rounded-circle d-flex align-items-center justify-content-center">
                                                    <img src={img6} width='25' alt="" />
                                                </div>
                                                <div>
                                                    <h5 className='text-truncate mb-0 text-start'>PHP Compiler</h5>
                                                    <div>
                                                        <span className='text-truncate'>
                                                            Start Coding PHP
                                                            <FontAwesomeIcon icon={faArrowRight} className='ms-2'/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="mb-3 compiler-column col-lg-6 col-sm-6">
                                <a href="" style={{textDecoration:'none'}}>
                                    <div className="course-compiler-card card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="compilor-icon-wrapper mb-0 me-3 rounded-circle d-flex align-items-center justify-content-center">
                                                    <img src={img7} width='25' alt="" />
                                                </div>
                                                <div>
                                                    <h5 className='text-truncate mb-0 text-start'>Python Compiler</h5>
                                                    <div>
                                                        <span className='text-truncate'>
                                                            Start Coding Python
                                                            <FontAwesomeIcon icon={faArrowRight} className='ms-2'/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}