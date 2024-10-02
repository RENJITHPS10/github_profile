import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLink, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Profile() {
    return (
        <>
            <div className="d-flex flex-column align-items-center mt-3 me-5">
                <div className="py-4 me-2">
                    <img src="/src/assets/profile.jpg" className="rounded-circle" alt="" height="290px" width="290px" />
                </div>
                <div style={{ width: '300px' }}>
                    <h6 className="text-white fs-4 m-0">RENJITH PS</h6>
                    <h5 className="fw-light text-secondary" >RENJITHPS10</h5>
                    <button className="btn btn-dark border-1 border-secondary   w-100 fw-normal  p-0" style={{height:'2rem'}}>Edit profile</button>

                    <div className="d-flex">
                        <a href="" className="d-flex align-items-center mt-3 text-decoration-none">
                        <FontAwesomeIcon icon={faUserGroup} className='text-secondary'  />
                            <p className="mb-0 ms-2" style={{ color: '#797979' }}>
                                <span className="text-white">6</span> followers
                            </p>
                        </a>
                        <a href="" className="d-flex align-items-center mt-3 text-decoration-none">
                            <i className="fa-solid fa-user-group fa-sm ms-2" style={{ color: '#797979' }}></i>
                            <p className="mb-0 " style={{ color: '#797979' }}>
                                <span className="text-white">4</span> following
                            </p>
                        </a>
                    </div>
                    <a href="https://renjithps10.github.io/portfolio/" className="text-decoration-none ">
                        <p className="text-white d-flex align-items-center mt-3" style={{ fontSize: '14px' }}>
                        <FontAwesomeIcon icon={faLink} className='text-secondary me-2 ' />
                            https://renjithps10.github.io/portfolio/
                        </p>
                    </a>
                    <a href="https://www.linkedin.com/in/renjithps/" className="text-decoration-none ">
                        <p className="text-white d-flex align-items-center mt-3 " style={{ fontSize: '14px' }}>
                        <FontAwesomeIcon icon={faLinkedin} className='text-secondary me-2' />
                            in/renjithps
                        </p>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Profile
