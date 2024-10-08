import { faArrowsToDot, faBookBookmark, faCircle, faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

function Contributions2() {
  return (
    <>
      <div className='mt-4'>
        <p>Contribution activity</p>
        <div className='d-flex align-items-center'>
          <p style={{ fontSize: '13px' }} className='m-0 '>October <span className='text-warning'>2024</span></p>
          <hr className='ms-3' style={{ width: "87%" }} />
        </div>

        {/* Main Row for contributions */}
        <Row>
          {/* Column for vertical line and icons */}
          <Col className='col-1 position-relative'>
            <div className='position-absolute bg-secondary' style={{ width: '2px', height: '100%', left: '50%', }}></div>
            <div className='d-flex justify-content-center align-items-center position-relative mb-5 mt-3'>
              <FontAwesomeIcon icon={faCircle} className='fa-xl text-success' />
              <FontAwesomeIcon icon={faFileArrowUp} className='text-warning position-absolute' />
            </div>

            <div className='d-flex justify-content-center align-items-center position-relative  '>
              <FontAwesomeIcon icon={faCircle} className='fa-xl text-success ' />
              <FontAwesomeIcon icon={faBookBookmark} className='text-warning position-absolute fa-sm' />
            </div>





          </Col>

          {/* Column for descriptions */}
          <Col className='col-11'>
            <div className='mt-3'>
              <div className=' d-flex justify-content-between align-items-center '>
                <p className='m-0'>Created 9 commits in 1 repository</p>
                <FontAwesomeIcon icon={faArrowsToDot} className='text-warning' />
              </div>
              <div className=' d-flex justify-content-between align-items-center '>
                <a className='m-0 text-decoration-none mt-2 ' style={{ fontSize: '14px' }}>RENJITHPS10/github_profile <span className='text-warning ms-1' style={{ fontSize: '12px' }}> 9 commits</span> </a>
                <div className='rounded-5' style={{ height: '8px', width: '25%', backgroundColor: '#216e39' }}></div>
              </div>
            </div>
            <div className='mt-3
            '>
              <div className=' d-flex justify-content-between align-items-center '>
                <p className='m-0'>Created  1 repository</p>
                <FontAwesomeIcon icon={faArrowsToDot} className='text-warning' />
              </div>
              <div className=' d-flex justify-content-between align-items-center '>
                <a className='m-0 text-decoration-none  mt-2' style={{ fontSize: '14px' }}><FontAwesomeIcon icon={faBookBookmark} className='text-warning me-2' /> RENJITHPS10/github_profile <span className='text-warning ms-1' style={{ fontSize: '12px' }}>  </span> </a>
              <div className='d-flex justify-content-center align-items-center'> 
                 <FontAwesomeIcon icon={faCircle} style={{color: "#FFD43B"}} className=' me-1 fa-sm' />
                 <p className='m-0 text-warning 'style={{fontSize:'12px'}}>Javascript <span className='js' >Oct 2</span></p>
                 </div>
              </div>

            </div>
          </Col>
        </Row>
        <Button variant='but' className='border border-secondary w-100 mt-5 text-info fw-semibold p-2 ' style={{fontSize:'13px'}}>Show more activity</Button>

        <p className='text-warning mt-4' style={{fontSize:'12px'}}>Seeing something unexpected? Take a look at the <a href="">GitHub profile guide</a></p>
      </div>
    </>
  );
}

export default Contributions2;
