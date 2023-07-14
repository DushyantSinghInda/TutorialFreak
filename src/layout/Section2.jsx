import img1 from '../images/Section2img/3.svg';
import img2 from '../images/Section2img/2.svg';
import img3 from '../images/Section2img/1.svg';
export default function Sectiontwo(){
    return(
        <>
            <div className="why-choose-section">
                <div className="container">
                    <div className="row">
                        <div className="order-1 order-lg-0 col-lg-8 col-md-12">
                            <div className="d-md-flex align-items-md-center why-choose-left-section">
                                <div className="why-choose-left-column">
                                    <div className="why-choose-card card-shadow card text-start">
                                        <img src={img1} className="card-img" alt="" />
                                        <h3 style={{color:'#101828',fontSize:'20px', lineHeight:'30px', fontWeight:'600'}}>Verified & Reliable Content</h3>
                                        <p className='fw-normal card-text' style={{color:'#667085', lineHeight:'24px', fontSize:'16px'}}>The entire content on the site is verified by pro developers and tech freaks.</p>
                                    </div>
                                    <div className="why-choose-card card-shadow card text-start">
                                        <img src={img2} className="card-img" alt="" />
                                        <h3 style={{color:'#101828',fontSize:'20px', lineHeight:'30px', fontWeight:'600'}}>Self-Directed Learning</h3>
                                        <p className='fw-normal card-text' style={{color:'#667085', lineHeight:'24px', fontSize:'16px'}}>The entire content on the site is verified by pro developers and tech freaks. Enabling self-directed learning so that you can learn at your pace and shape your own path.</p>
                                    </div>
                                </div>
                                <div className="why-choose-left-column me-0">
                                    <div className="why-choose-card card-shadow card text-start">
                                        <img src={img3} className="card-img" alt="" />
                                        <h3 style={{color:'#101828',fontSize:'20px', lineHeight:'30px', fontWeight:'600'}}>Dual Learning Methods</h3>
                                        <p className='fw-normal card-text' style={{color:'#667085', lineHeight:'24px', fontSize:'16px'}}>Along with simplified tutorials, you get video content created by industry experts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-0 order-lg-0 col-lg-4 col-md-12">
                            <div className="why-choose-right-section text-center pt-3 pe-3 text-lg-start">
                                <span className='fw-semibold' style={{color:'#6b46ff', lineHeight:'24px', fontSize:'16px'}}>Our Unique Approach</span>
                                <h4 className='fw-semibold' style={{color:'#212529', fontSize:'36px'}}>Why Tutorials Freak?</h4>
                                <p className='fw-normal mb-lg-5' style={{color:'#475467',fontSize:'20px',lineHeight:'30px'}}>Learning programming and technical things can be complex. We are here to make it easy with simple and interactive tutorials.</p>
                                <button className='tf-btn'>Get Started Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}