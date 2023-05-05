import React from 'react'
import header from '../../images/Header-image.png'
import Rectangle1 from '../../images/Rectangle 1.png'
import Rectangle2 from '../../images/Rectangle 2.png'
import mobile from "../../images/mobile.png"
import skipping from "../../images/skipping.png"
import Rectangle3 from "../../images/Rectangle 3.png"
import doctor from "../../images/doctor.png"
import "../Header/Header.css"
import live from "../../images/Live.png"
import calender from "../../images/calender.png"
import time from "../../images/Time.png"
import icon1 from "../../images/icon-1.png"
import icon3 from "../../images/icon-3.png"
import icon4 from "../../images/icon-4.png"
import icon2 from "../../images/icon-2.png"

const Header = () => {
    return (
        <React.Fragment>
            <div className='bg-[#FBF8F0]'>
                {/* Header section */}
                <div className='bg-[#FBF8F0] lg:flex lg:flex-row min-[561px]:flex min-[561px]:flex-row '>
                    <div className='flex flex-col  lg:mt-28 lg:ml-56 min-[561px]:mt-20 min-[561px]:ml-10 
                       
                       font-family:League Spartan' >
                        <div className='mt-10  min-[561px]:mt-0  max-[560px]:text-center '>
                            <h1 className='lg:text-5xl min-[561px]:text-4xl text-3xl font-bold '>Stop Neck Pain</h1>
                            <p className='mt-2 lg:w-96 min-[561px]:w-96 min-[561px]:text-xl lg:text-xl text-lg '>Stop letting neck pain hold you back - take control and say goodbye to discomfort!</p>
                        </div>
                        <div className='max-[560px]:text-center'>
                            <button type='button' className='btn btn-active btn-primary lg:mt-10 min-[561px]:mt-5 mt-8 '><a href="https://forms.myfunc.in/myfunc/form/NeckDisabilityIndexNDI1/formperma/g4vvKynOw-4TJipkyv4feHT-UZ1b7yj0HVi2_QXaHJw" target="_blank" >Assessment Link</a></button>
                        </div>
                    </div>
                    <div >
                        <img src={header} alt='' className='w-96%  lg:-ml-6 min-[561px]:-ml-5 min-[561px]:mt-20 max-[560px]:w-[90%] ' />
                    </div>
                </div>

                {/* Rectangle section */}
                <div className='bg-[#FBF8F0]' >
                    <div className='lg:-mt-8 min-[561px]:-mt-5 -mt-6'>
                        <img src={Rectangle1} alt='' className='lg:-mt-8 mt-2 max-[560px]:h-32 ' />

                    </div>
                    <div className='lg:-mt-80 min-[561px]:-mt-40 -mt-32 relative font-family:Urbanist'>
                        <img src={Rectangle2} alt='' className='max-[560px]:h-32 ' />
                        <div className='lg:right-4 min-[561px]:right-16 right-4 -mt-24 lg:-mt-56 min-[561px]:-mt-40 absolute text-white w-[50%] max-[500px]:w-[60%] '>
                            <h2 className='lg:text-3xl min-[561px]:text-xl text-md font-bold '>Don't Let reels Win</h2>
                            <p className='mt-2 lg:text-xl min-[561px]:text-lg text-xs max-[560px]:mt-1 '> Act now and start your journey towards a
                                pain-free life with the help of a medical professional today!</p>
                        </div>
                    </div>
                    <div className='absolute lg:-mt-96 lg:ml-48 min-[561px]:-mt-[28%] min-[561px]:ml-12 -mt-36 ml-2'>
                        <img src={mobile} className='lg:w-64 min-[561px]:w-36 w-20' />
                    </div>
                    <div className='absolute lg:-mt-52 lg:ml-80 min-[561px]:-mt-32 min-[561px]:ml-28 -mt-20 ml-14 '>
                        <img src={skipping} className='lg:w-60 min-[561px]:w-36 w-20 ' />
                    </div>

                </div>

                {/* White space section */}
                <div className='max-[560px]:-mt-10'>
                    <div className='lg:w-[58rem]  lg:ml-[30.9%] min-[561px]:w-[90%] min-[561px]:ml-[9.4%] max-[560px]:w-[70] max-[560px]:h-72 max-[560px]:bg-white relative max-[560px]:mt-36' >
                        <img src={Rectangle3} alt='' className='mt-36 max-[560px]:rounded-[20%] max-[560px]:hidden  ' />
                    </div>
                    <div className='absolute lg:right-44 lg:-mt-[35%] font-bold min-[561px]:right-20 min-[561px]:-mt-[45%] 
                    max-[560px]:-mt-[80%] max-[560px]:ml-20'>
                        <h1 className='lg:text-4xl min-[561px]:text-3xl max-[560px]:text-lg text-center '>Ignoring neck pain can lead to</h1>
                    </div>

                    <div className='absolute white-row lg:-mt-[27%] lg:right-10 lg:w-[55%] min-[561px]:-mt-[35%]  min-[561px]:w-[80%] min-[561px]:ml-32 
                    max-[560px]:-mt-[62%] max-[560px]:w-[96%]'>
                        <div className='row-1 '>
                            <div className='row lg:w-[40] min-[561px]:w-[40] '>
                                <img src={icon1} alt='' className='lg:w-20 lg:h-20 min-[561px]:w-16 min-[561px]:h-16 max-[560px]:w-10 max-[560px]:h-10 mr-2' />
                                <div className='d-flex lg:w-[66%] min-[561px]:w-[60%] max-[560px]:w-[96%]'>
                                    <h4 className='font-bold max-[560px]:text-sm'>Chronic Pain</h4>
                                    <p className='min-[561px]:text-sm lg:text-[16px] max-[560px]:text-xs  '>Ignoring neck pain can lead to the development of chronic pain,
                                        which can become debilitating and negatively impact the quality of life.</p>
                                </div>
                            </div>
                            <div className='row'>
                                <img src={icon2} alt='' className='lg:w-20 lg:h-20 min-[561px]:w-16 min-[561px]:h-16 max-[560px]:w-10 max-[560px]:h-10 mr-2 ' />
                                <div className='d-flex lg:w-[66%] min-[561px]:w-[60%] '>
                                    <h4 className='font-bold max-[560px]:text-sm'>Limited Mobility</h4>
                                    <p className='min-[561px]:text-sm lg:text-[16px] max-[560px]:text-xs'>Untreated neck pain can lead to a reduced range of motion,
                                        making it difficult to perform daily activities and affecting overall mobility.</p>
                                </div>
                            </div>
                        </div>

                        <div className='row-1 lg:mt-5'>
                            <div className='row'>
                                <img src={icon3} alt='' className='lg:w-20 lg:h-20 mr-2 min-[561px]:w-16 min-[561px]:h-16 max-[560px]:w-10 max-[560px]:h-10 ' />
                                <div className='d-flex  lg:w-[66%] min-[561px]:w-[60%] '>
                                    <h4 className='font-bold max-[560px]:text-sm'>Headache </h4>
                                    <p className='min-[561px]:text-sm lg:text-[16px] max-[560px]:text-xs'>Neck pain can cause tension headaches, which can be painful and interfere with daily functioning.</p>
                                </div>
                            </div>
                            <div className='row'>
                                <img src={icon4} alt='' className='lg:w-20 lg:h-20 mr-2 min-[561px]:w-16 min-[561px]:h-16 max-[560px]:w-10 max-[560px]:h-10' />
                                <div className='d-flex  lg:w-[66%] min-[561px]:w-[60%] '>
                                    <h4 className='font-bold max-[560px]:text-sm'>Depression and Anxiety</h4>
                                    <p className='min-[561px]:text-sm lg:text-[16px] max-[560px]:text-xs'>Chronic pain can significantly impact mental health,
                                        leading to depression and anxiety in some individuals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Doctor section */}
                <div className='lg:mt-48 min-[561px]:mt-40 mt-24'>
                    <img src={doctor} alt='' />
                </div>

                {/* Features section */}
                <div className='d-flex ' >
                    <h1 className='lg:text-3xl min-[561px]:text-3xl text-xl font-bold lg:w-[61%] min-[561px]:w-[80%] w-[85%]  text-center m-auto'>Complete the assessment to get the link for the live session with a spine specialist</h1>
                    <div className='d-row mt-10'>
                        <div className='d-col'>
                            <img src={live} alt='' className='lg:w-24 min-[561px]:w-24 w-12' />
                            <p className='lg:text-xl min-[561px]:text-xl text-lg font-semibold'>LIVE</p>
                        </div>
                        <div className='d-col'>
                            <img src={calender} alt='' className='lg:w-24 min-[561px]:w-24 w-12' />
                            <p className='lg:text-xl min-[561px]:text-xl text-lg font-semibold'>Saturday</p>
                        </div>
                        <div className='d-col'>
                            <img src={time} alt='' className='lg:w-24 min-[561px]:w-24 w-12' />
                            <p className='lg:text-xl min-[561px]:text-xl text-lg font-semibold'>4pm</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button type='button' className='btn btn-active btn-primary mt-10 '><a href="https://forms.myfunc.in/myfunc/form/NeckDisabilityIndexNDI1/formperma/g4vvKynOw-4TJipkyv4feHT-UZ1b7yj0HVi2_QXaHJw" target="_blank" >Assessment Link</a></button>
                    </div>
                    <div style={{ textAlign: 'center' }} className='m-20'>
                        <h1 className='lg:text-4xl min-[561px]:text-4xl text-2xl font-bold'>Let’s Get Started</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}
export default Header
