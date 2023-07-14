import './Section4.css';

import rightimg from '../images/Section6/right1.png';
import leftimg from '../images/Section6/leftimg.png';

export default function Sectionsix(){
    return(
        <div>
            <div className="container">
                <div className="align-items-center row">
                    <div className='col-lg-6'>
                        <div className="learning-content-wrapper pb-5 text-center text-lg-start">
                            <h2>Get the learning app today</h2>
                            <p className='pe-md-5'>Check out our app library and download the one that you want to learn anytime, anywhere.</p>
                            <a href="">
                                <img src={leftimg} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="text-center text-lg-start">
                            <img src={rightimg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}