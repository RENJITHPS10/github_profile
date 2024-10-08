import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLink, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import profileImage from '/src/assets/profile.jpg';


function Profile() {
    return (
        <>
            <div className="d-flex flex-column align-items-center mt-3 ms-sm-5">
               <div className='ms-sm-5 '>
                    <div className=" py-4   ">
                        <img src={profileImage} className="rounded-circle profile" alt="" height="290px" width="290px" />
                    </div>
                    <div >
                        <h6 className="text-white fs-4 m-0">RENJITH PS</h6>
                        <h5 className="fw-light text-warning mb-3" >RENJITHPS10</h5>
                        <button className="btn btn-success border-1 border-secondary   w-100 fw-normal  p-0" style={{height:'2rem'}}>Edit profile</button>
    
                        <div className="d-flex">
                            <a href="" className="d-flex align-items-center mt-3 text-decoration-none">
                            <FontAwesomeIcon icon={faUserGroup} className='text-warning fa-sm'  />
                                <p className="mb-0 ms-2 text-warning" >
                                    <span className="text-white">6</span> followers
                                </p>
                            </a>
                            <a href="" className="d-flex align-items-center mt-3 text-decoration-none ms-2">
                              
                                <p className="mb-0  text-warning" >
                                    <span className="text-white">4</span> following
                                </p>
                            </a>
                        </div>
                        <a href="https://renjithps10.github.io/portfolio/" className="text-decoration-none ">
                            <p className="text-white d-flex align-items-center mt-3" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faLink} className='text-warning me-2 fa-sm  ' />
                                https://renjithps10.github.io/portfolio/
                            </p>
                        </a>
                        <a href="https://www.linkedin.com/in/renjithps/" className="text-decoration-none ">
                            <p className="text-white d-flex align-items-center mt-3 " style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faLinkedin} className='text-warning me-2 fa-lg'  />
                                in/renjithps
                            </p>
                        </a>
                    </div>
               </div>
            </div>

        </>
    )
}

export default Profile
