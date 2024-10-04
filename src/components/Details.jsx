import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { Button } from 'react-bootstrap';
import { faC } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faCss3Alt, faGitAlt, faGithub, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

function Details() {
    return (
        <>
            <div className='border border-secondary rounded-3 text-white p-4'>
                <div className="d-flex justify-content-between p-0">
                    <p className="text-white p-0" style={{ fontSize: "12px" }} >RENJITHPS10 / README.md</p>
                    <FontAwesomeIcon icon={faPen} className='text-secondary p-0' />
                </div>
                <h3 className="text-center ">Hi 👋, I'm RENJITH P S</h3>
                <hr className="line mt-2" />
                <h3 className="text-center">An enthusiastic MERN stack developer from India</h3>
                <hr className="line mt-2 " />
                <h5 className="text-center">On the path to becoming a software engineer</h5>
                <hr className="line mt-2" />
                <h3>💫 About Me:</h3>
                <hr className="line mt-2" />
                <p className=' m-0' style={{ fontSize: "14px" }} >🚀 Passionate about front-end development and design</p>
                <p className='m-0' style={{ fontSize: "14px" }}>🎯 Aiming to become a skilled software engineer</p>
                <p style={{ fontSize: "14px" }}>🌟 Always eager to explore new technologies and projects</p>
                <h5>🌐 Socials:</h5>
                <hr className="line mt-2" />
                <Button variant='info' className=' text-white py-0 px-1 mb-4 '><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</Button>
                <h3>💻 Tech Stack:</h3>
                <hr className="line mt-2" />
                <div className="d-flex flex-wrap" style={{ fontFamily: ' Verdana, Geneva, "DejaVu Sans", sans-serif', gap: '4px', }} >
                    <Button className="text-white rounded-0 fw-bold fs-5 border-0  py-0 d-flex justify-content-center align-items-center " style={{ backgroundColor: "rgb(0, 89, 156)" }}>
                        <span>C</span>
                        <span className="ms-2 fw-bold " style={{ fontSize: '10px' }}>C</span>
                    </Button>
                    <Button className="text-white rounded-0 border-0  d-flex justify-content-center align-items-center   " style={{ backgroundColor: "rgb(21, 114, 182)" }}>
                        <FontAwesomeIcon icon={faCss3Alt} className='fa-md' />
                        <span className="ms-2 fw-bold " style={{ fontSize: '10px', letterSpacing: "1px" }}>CSS3</span>
                    </Button>
                    <Button className="text-white rounded-0 border-0  d-flex justify-content-center align-items-center   " style={{ backgroundColor: "rgb(50, 51, 48)" }}>
                        <FontAwesomeIcon icon={faJs} style={{ color: "#FFD43B", }} className='fa-md' />
                        <span className="ms-2 fw-bold " style={{ fontSize: '10px', letterSpacing: "1px" }}>JAVASCRIPT</span>
                    </Button>
                    <Button className="text-white rounded-0 border-0  d-flex justify-content-center align-items-center   " style={{ backgroundColor: "rgb(227, 79, 38)" }}>
                        <FontAwesomeIcon icon={faHtml5} className='fa-md' />
                        <span className="ms-2 fw-bold " style={{ fontSize: '10px', letterSpacing: "1px" }}>HTML5</span>
                    </Button>
                    <Button className="text-white rounded-0 border-0  d-flex justify-content-center align-items-center   " style={{ backgroundColor: "rgb(133, 17, 250)" }}>
                        <FontAwesomeIcon icon={faBootstrap} className='fa-md' />
                        <span className="ms-2 fw-bold " style={{ fontSize: '10px', letterSpacing: "1px" }}>BOOTSTRAP</span>
                    </Button>
                    <Button className="text-white rounded-0 border-0  d-flex justify-content-center align-items-center   " style={{ backgroundColor: "rgb(109, 165, 95)" }}>
                        <FontAwesomeIcon icon={faNodeJs} className='fa-md' />
                        <span className="ms-2 fw-bold " style={{ fontSize: '10px' }}>NODE.JS</span>
                    </Button>

                    <Button className="text-white rounded-0 border-0  d-flex justify-content-center align-items-center   " style={{ backgroundColor: "rgb(32, 35, 42)" }}>
                        <FontAwesomeIcon icon={faReact} style={{ color: "#74C0FC" }} className='fa-md' />
                        <span className="ms-2 fw-bold " style={{ fontSize: '10px' }}>REACT</span>
                    </Button>
                    <Button className="text-white rounded-0 border-0  d-flex justify-content-center align-items-center   " style={{ backgroundColor: "rgb(56, 178, 172)" }}>
                        <img src="https://www.loopple.com/img/tailwind-logo.png" height={15} width={15} alt="" />
                        <span className="ms-2 fw-bold " style={{ fontSize: '10px' }}>TAILWINDCSS</span>
                    </Button>

                    <Button className="text-white rounded-0 border-0 d-flex justify-content-center align-items-center" style={{ backgroundColor: "rgb(49, 97, 146)" }}>
                        <img src="/src/assets/postgres.svg" height={15} width={15} alt="" />
                        <span className="ms-2 fw-bold" style={{ fontSize: '10px', letterSpacing: "1px" }}>POSTGRES</span>
                    </Button>
                    <Button className="text-white rounded-0 border-0  d-flex justify-content-center align-items-center   " style={{ backgroundColor: "rgb(0, 196, 204)" }}>
                        <img src="https://logowik.com/content/uploads/images/canva8051.logowik.com.webp" className='rounded-circle' height={15} width={15} alt="" />
                        <span className="ms-2 fw-bold " style={{ fontSize: '10px', letterSpacing: "1px" }}>CANVA</span>
                    </Button>
                    <Button className="text-white rounded-0 border-0  d-flex justify-content-center align-items-center   " style={{ backgroundColor: "rgb(227, 79, 38)" }}>
                        <FontAwesomeIcon icon={faGitAlt} className='fa-md' />
                        <span className="ms-2 fw-bold " style={{ fontSize: '10px', letterSpacing: "1px" }}>GIT</span>
                    </Button>
                    <Button className="text-white rounded-0 border-0  d-flex justify-content-center align-items-center   " style={{ backgroundColor: "rgb(18, 16, 17)" }}>
                        <FontAwesomeIcon icon={faGithub} />
                        <span className="ms-2 fw-bold " style={{ fontSize: '10px', letterSpacing: "1px" }}>GITHUB</span>
                    </Button>
                </div>
                <h3 className="mt-4">📊 GitHub Stats:</h3>
                <hr className="line mt-2" />
           


            </div>

        </>
    )
}

export default Details
