import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../custom.scss'
import '../App.css'
import { faAngleDown, faBookBookmark, faCodePullRequest, faCube, faEnvelopeOpen, faPlus, faTable } from '@fortawesome/free-solid-svg-icons';
import { faCircleDot, faStar } from '@fortawesome/free-regular-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen';
import profileImage from '/src/assets/profile.jpg';


function Header() {
    return (
        <>
            <div className='bg-dark'>
                <Navbar style={{ backgroundColor: "black" }}>
                    <Container fluid className=''>
                        <div className='d-flex justify-content-center align-items-center ' >
                            <Button variant='dark' className=' border border-secondary text-warning bar ms-1 mt-1 bar bg-dark ' ><FontAwesomeIcon icon={faBars} /></Button>
                            <Button variant='dark' className=' border-0 ms-1  bg-dark' ><FontAwesomeIcon icon={faGithub} className='fa-2x' /></Button>
                            <Button variant='dark' className='border-0 bg-dark fw-semibold ms-1  p-0 ' style={{ fontSize: "14px" }} >RENJITHPS10</Button>
    
                        </div>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <input type="text" className='form-control  bg-black text-warning border-secondary me-2' placeholder='⌕ Search' />
                            <div className='d-flex align-items-center' >
                                <hr className='vertical_line me-2 d-none d-sm-block ' />
                            </div>
                            <div className='border border-secondary rounded-2 plusheight me-2 d-none d-sm-block'>
                                <Button variant='dark'  >
                                    <FontAwesomeIcon icon={faPlus} className='me-3 text-warning' />
                                    <FontAwesomeIcon icon={faAngleDown} className='text-warning fa-sm' /></Button>
                            </div>
                            <Button variant='dark' className='border-1 border-secondary normalbutton me-2 d-none d-sm-block '><FontAwesomeIcon icon={faCircleDot} className='text-warning' /></Button>
    
                            <Button variant='dark' className='border-1 border-secondary normalbutton me-2 d-none d-sm-block'  ><FontAwesomeIcon icon={faCodePullRequest} className='text-warning' /></Button>
                            <Button variant='dark' className='border-1 border-secondary normalbutton me-2'  > <FontAwesomeIcon icon={faEnvelopeOpen} className='text-warning' /></Button>
                            <img src={profileImage} alt="no image" height={35} width={35} className='rounded-circle' />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <header className='line   px-3  ' >
                    <Button variant='dark' className="border-0 p-0 me-2 bg-dark ">
                        <p className='text-white ms-3 ' style={{ fontSize: '14px' }} ><FontAwesomeIcon icon={faBookOpen} className='me-1 fa-md text-warning  ' /> Overview</p>
                    </Button>
                    <Button variant='dark' className="border-0 p-0 me-2 bg-dark">
                        <p className='text-white ms-3 ' style={{ fontSize: '14px' }} ><FontAwesomeIcon icon={faBookBookmark} className='me-1 fa-md text-warning' /> Repositories <span className='round ms-2' style={{fontSize:'12px'}}>14</span></p>
                    </Button>
                    <Button variant='dark' className="border-0 p-0 me-2 bg-dark d-none d-sm-inline  ">
                        <p className='text-white ms-3 ' style={{ fontSize: '14px' }} ><FontAwesomeIcon icon={faTable} className='me-1 fa-md text-warning ' /> Projects</p>
                    </Button>
                    <Button variant='dark' className="border-0 p-0 me-2 bg-dark d-none d-sm-inline">
                        <p className='text-white ms-3 ' style={{ fontSize: '14px' }} ><FontAwesomeIcon icon={faCube} className='me-1 fa-md text-warning ' /> Packages</p>
                    </Button>
                    <Button variant='dark' className="border-0 p-0 me-2 bg-dark d-none d-sm-inline">
                        <p className='text-white ms-3 ' style={{ fontSize: '14px' }} ><FontAwesomeIcon icon={faStar} className='me-1 fa-md text-warning ' /> Stars</p>
                    </Button>
                    <div className='hr'></div>
                </header>
    
            </div>
        </>
    )
}

export default Header
