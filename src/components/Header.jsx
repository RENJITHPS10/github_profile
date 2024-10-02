import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../custom.scss'
import '../App.css'
import { faAngleDown, faCodePullRequest, faCube, faEnvelopeOpen, faPlus, faTable } from '@fortawesome/free-solid-svg-icons';
import { faCircleDot, faStar } from '@fortawesome/free-regular-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';


function Header() {
    return (
        <>
            <Navbar style={{ backgroundColor: "black" }}>
                <Container fluid className=''>
                    <div className='d-flex justify-content-center align-items-center ' >
                        <Button variant='dark' className=' border border-secondary text-secondary bar ms-1 mt-1 bar bg-dark ' ><FontAwesomeIcon icon={faBars} /></Button>
                        <Button variant='dark' className=' border-0 ms-1  bg-dark' ><FontAwesomeIcon icon={faGithub} className='fa-2x' /></Button>
                        <Button variant='dark' className='border-0 bg-dark fw-semibold ms-1  p-0 ' style={{ fontSize: "14px" }} >RENJITHPS10</Button>

                    </div>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <input type="text" className='form-control  bg-black text-secondary border-secondary me-2' placeholder='Search' />
                        <div className='d-flex align-items-center' >
                            <hr className='vertical_line me-2' />
                        </div>
                        <div className='border border-secondary rounded-2 plusheight me-2'>
                            <Button variant='dark'  >
                                <FontAwesomeIcon icon={faPlus} className='me-3 text-secondary' />
                                <FontAwesomeIcon icon={faAngleDown} className='text-secondary fa-sm' /></Button>
                        </div>
                        <Button variant='dark' className='border-1 border-secondary normalbutton me-2'><FontAwesomeIcon icon={faCircleDot} className='text-secondary' /></Button>

                        <Button variant='dark' className='border-1 border-secondary normalbutton me-2'  ><FontAwesomeIcon icon={faCodePullRequest} className='text-secondary' /></Button>
                        <Button variant='dark' className='border-1 border-secondary normalbutton me-2'  > <FontAwesomeIcon icon={faEnvelopeOpen} className='text-secondary' /></Button>
                        <img src="/src/assets/profile.jpg" alt="no image" height={35} width={35} className='rounded-circle' />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <header className='line bg-dark px-3' >
                <Button variant='dark' className="border-0 p-0 me-2 ">
                    <p className='text-white ms-3 ' style={{fontSize:'14px'}} ><FontAwesomeIcon icon={faBookOpen} className='me-1 fa-md ' /> Overview</p>
                </Button>
                <Button variant='dark' className="border-0 p-0 me-2">
                    <p className='text-white ms-3 ' style={{fontSize:'14px'}} ><FontAwesomeIcon icon={faCode} className='me-1 fa-md' /> Repositories <span className='round'>13</span></p>
                </Button>
                <Button variant='dark' className="border-0 p-0 me-2">
                    <p className='text-white ms-3 ' style={{fontSize:'14px'}} ><FontAwesomeIcon icon={faTable} className='me-1 fa-md' /> Projects</p>
                </Button>
                <Button variant='dark' className="border-0 p-0 me-2">
                    <p className='text-white ms-3 ' style={{fontSize:'14px'}} ><FontAwesomeIcon icon={faCube} className='me-1 fa-md' /> Packages</p>
                </Button>
                <Button variant='dark' className="border-0 p-0 me-2">
                    <p className='text-white ms-3 ' style={{fontSize:'14px'}} ><FontAwesomeIcon icon={faStar} className='me-1 fa-md' /> Stars</p>
                </Button>
            <hr className='hr' />
            </header>

        </>
    )
}

export default Header
