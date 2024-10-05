import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { Button } from 'react-bootstrap';

import { faBootstrap, faCss3Alt, faGitAlt, faGithub, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Repository from './Repository';
import Contributions from './Contributions';

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


                <img src="https://camo.githubusercontent.com/4fbc8a39d7149c3d9de950ac65928c03080bffa7a605c1ec74832f332d1784b2/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d52454e4a49544850533130267468656d653d746f6b796f6e6967687426686964655f626f726465723d7472756526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d66616c7365" alt="" className='mb-1' />
                <img src="https://camo.githubusercontent.com/42386764ebc1d7208b1be7b2e5ab8f695d7a60dfbdc153a01955f65a158823ec/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d52454e4a49544850533130267468656d653d746f6b796f6e6967687426686964655f626f726465723d74727565" alt="" className='mb-1' />
                <br />
                <img src="https://camo.githubusercontent.com/af39bb9160c17f35574b1a77e9c8bc137624803c2e749c2e3e2e215cbe11c2a3/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d52454e4a49544850533130267468656d653d746f6b796f6e6967687426686964655f626f726465723d7472756526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d66616c7365266c61796f75743d636f6d70616374" alt="" />

                <h5 className='mt-2'>✍️ Random Dev Quote</h5>
                <img src="https://camo.githubusercontent.com/540b7ddca5ec8693e939aac37b3ef6cbf509820e7624de69e8e0c4a9b00c8831/68747470733a2f2f71756f7465732d6769746875622d726561646d652e76657263656c2e6170702f6170693f747970653d686f72697a6f6e74616c267468656d653d746f6b796f6e69676874" alt="" />
                <hr className='line2' />
                <img src="https://camo.githubusercontent.com/749689ac0c13516e6fca939af4d5261c81c90dbae081b4015787049259999f19/68747470733a2f2f7669736974636f756e742e69747376672e696e2f6170693f69643d52454e4a495448505331302669636f6e3d3026636f6c6f723d30" alt="" />
            </div>
            <div className='text-white'>
                <div className='d-flex justify-content-between mt-4'>
                    <p className=''>Pinned</p>
                    <a href="" className='text-decoration-none ' style={{fontSize:'12px'}}  >Customize Your pins</a>
                </div>
               <Repository/>
               <Contributions/>

            </div>

        </>
    )
}

export default Details
