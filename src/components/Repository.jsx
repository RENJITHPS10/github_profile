import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faBookBookmark, faCircle, faEllipsisVertical, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
function Repository() {
    return (
        <>
            <Row>
                <Col md={6}>
                    <div className='border   border-secondary px-3  rounded-2 pt-3 '>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <FontAwesomeIcon icon={faBookBookmark} className='text-warning' />
                                <a href="" className='px-2 text-decoration-none'>Porfolio</a>
                                <span className='border rounded-5 py-0 px-2 border-secondary text-warning' style={{ fontSize: "13px" }} >Public</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEllipsisVertical} className='fa-sm text-warning' style={{ marginRight: '1px' }} />
                                <FontAwesomeIcon icon={faEllipsisVertical} className='fa-sm text-warning' />
                            </div>
                        </div>
                        <div className='d-flex align-items-center text-warning ' style={{ fontSize: '13px' }}>
                            <FontAwesomeIcon icon={faCircle} className='fa-sm' style={{ color: "#e34c26" }} />
                            <p className='ms-2 mt-3 '>HTML</p>
                            <FontAwesomeIcon icon={faStar} className='ms-3  me-1 fa-lg' />1

                        </div>

                    </div>
                </Col>
                <Col md={6} className='mt-4 mt-sm-0'>
                    <div className='border   border-secondary px-3  rounded-2 pt-3 '>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <FontAwesomeIcon icon={faBookBookmark} className='text-warning' />
                                <a href="" className='px-2 text-decoration-none'>weather</a>
                                <span className='border rounded-5 py-0 px-2 border-secondary text-warning' style={{ fontSize: "13px" }} >Public</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEllipsisVertical} className='fa-sm text-warning' style={{ marginRight: '1px' }} />
                                <FontAwesomeIcon icon={faEllipsisVertical} className='fa-sm text-warning' />
                            </div>
                        </div>
                        <div className='d-flex align-items-center text-warning ' style={{ fontSize: '13px' }}>
                            <FontAwesomeIcon icon={faCircle} style={{ color: "#FFD43B", }} />
                            <p className='ms-2 mt-3 '>JavaScript</p>


                        </div>

                    </div>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col md={6} >
                    <div className='border   border-secondary px-3  rounded-2 pt-3 '>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <FontAwesomeIcon icon={faBookBookmark} className='text-warning' />
                                <a href="" className='px-2 text-decoration-none'>bmi</a>
                                <span className='border rounded-5 py-0 px-2 border-secondary text-warning' style={{ fontSize: "13px" }} >Public</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEllipsisVertical} className='fa-sm text-warning' style={{ marginRight: '1px' }} />
                                <FontAwesomeIcon icon={faEllipsisVertical} className='fa-sm text-warning' />
                            </div>
                        </div>
                        <div className='d-flex align-items-center text-warning ' style={{ fontSize: '13px' }}>
                            <FontAwesomeIcon icon={faCircle} style={{ color: "#FFD43B", }} />
                            <p className='ms-2 mt-3 '>JavaScript</p>
                            <FontAwesomeIcon icon={faStar} className='ms-3  me-1 fa-lg' />1


                        </div>

                    </div>

                </Col>
                <Col md={6} className='mt-4 mt-sm-0' >
                    <div className='border   border-secondary px-3  rounded-2 pt-3 '>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <FontAwesomeIcon icon={faBookBookmark} className='text-warning' />
                                <a href="" className='px-2 text-decoration-none'>travel</a>
                                <span className='border rounded-5 py-0 px-2 border-secondary text-warning' style={{ fontSize: "13px" }} >Public</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEllipsisVertical} className='fa-sm text-warning' style={{ marginRight: '1px' }} />
                                <FontAwesomeIcon icon={faEllipsisVertical} className='fa-sm text-warning' />
                            </div>
                        </div>
                        <div className='d-flex align-items-center text-warning ' style={{ fontSize: '13px' }}>
                            <FontAwesomeIcon icon={faCircle} className='fa-sm' style={{ color: "#e34c26" }} />
                            <p className='ms-2 mt-3 '>HTML</p>
                     

                        </div>

                    </div>
                </Col>
            </Row>

        </>
    )
}

export default Repository
