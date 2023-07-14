import './main.css';
import './mediaquery.css';
import banner_img from '../images/banner-middle.png';
import kotlin from '../images/float_img/kotlin-img.svg';
import eagle from '../images/float_img/eagle-img.svg';
import android from '../images/float_img/android-img.svg';
import angular from '../images/float_img/angular-img.svg';
import apple from '../images/float_img/apple-img.svg';
import java from '../images/float_img/java-img.svg';
import python from '../images/float_img/python-img.svg';
import react from '../images/float_img/react-img.svg';
export default function SectionOne(){
    return(
        <div className="banner-section position-relative ">
            <div className='container h-100'>
                <div className="justify-content-center row">
                    <div className="col-lg-10">
                        <div className='banner-content-wrapper'>
                            <div className='banner-ocean mx-auto'>AN OCEAN OF</div>
                            <div className="banner-heading-wrapper">
                                <h1 className='fw-600 my-3 '>High-Quality and Comprehensive Tutorials for IT Freaks.</h1>
                                <p className='fw-400'>Kickstart effective learning with Tutorials Freak, with new content published every month.</p>
                                <button>Get Started Now</button>
                            </div>
                            <div className='banner-img-wrapper'>
                                <img src={banner_img} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-boxes d-flex align-items-center justify-content-center" style={{top:'15%',left:'15%'}}>
                <a href="">
                    <img src={kotlin} alt="" />
                </a>
            </div>
            <div className="banner-boxes d-flex align-items-center justify-content-center" style={{top:'32%',left:'4%'}}>
                <a href="">
                    <img src={eagle} alt="" />
                </a>
            </div>
            <div className="banner-boxes d-flex align-items-center justify-content-center" style={{top:'55%',left:'18%'}}>
                <a href="">
                    <img src={apple} alt="" />
                </a>
            </div>
            <div className="banner-boxes d-flex align-items-center justify-content-center" style={{bottom:'10%',left:'8%'}}>
                <a href="">
                    <img src={angular} alt="" />
                </a>
            </div>
            <div className="banner-boxes d-flex align-items-center justify-content-center" style={{top:'15%',right:'15%'}}>
                <a href="">
                    <img src={python} alt="" />
                </a>
            </div>
            <div className="banner-boxes d-flex align-items-center justify-content-center" style={{top:'45%',right:'4%'}}>
                <a href="">
                    <img src={react} alt="" />
                </a>
            </div>
            <div className="banner-boxes d-flex align-items-center justify-content-center" style={{top:'55%',right:'18%'}}>
                <a href="">
                    <img src={android} alt="" />
                </a>
            </div>
            <div className="banner-boxes d-flex align-items-center justify-content-center" style={{bottom:'5%',right:'14%'}}>
                <a href="">
                    <img src={java} alt="" />
                </a>
            </div>
        </div>
    )
}