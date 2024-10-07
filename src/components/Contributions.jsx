import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Contributions2 from './Contributions2';

function Contributions() {
    // Create an array of contributions (52 weeks, 7 days per week)
    const contributions = Array.from({ length: 52 }, () => Array.from({ length: 7 }, () => Math.floor(Math.random() * 6)));

    // Simple function to determine the color based on the contribution value
    const getColor = (contribution) => {
        if (contribution > 0) {
            return 'rgb(255 255 255 / 5%)'; // No contribution
        } else {
            return '#216e39'; // Max contribution
        }
    };

    // Basic arrays to store months and days of the week
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const daysOfWeek = ['Mon', 'Wed', 'Fri'];

    return (
        <div style={{ marginTop: '20px' }}>
            <Row>
                <Col md={10}>
                    <div className='d-flex justify-content-between mb-2'>
                        <p className='m-0'>53 contributions in the last year</p>
                        <p className='m-0 text-warning' style={{ fontSize: '13px' }}>
                            Contribution settings <FontAwesomeIcon icon={faAngleDown} className='fa-sm' />
                        </p>
                    </div>
                    <div className='border border-secondary rounded-3 px-sm-4 py-sm-3 px-3   py-2' >
                        <div>
                            {/* Display months on top */}
                            <div className='d-flex justify-content-between ms-4'>
                                {months.map((month, index) => (
                                    <div key={index} style={{ fontSize: '13px', width: '50px' }} className='text-center'>{month}</div>
                                ))}
                            </div>

                            {/* Scrollable container for the contribution grid */}
                            <div className="contribution-grid-container">
                                {/* Display days of the week (Mon, Wed, Fri) on the left */}
                                <div style={{ marginRight: '10px', display: 'flex', flexDirection: 'column' }}>
                                    {daysOfWeek.map((day, index) => (
                                        <div key={index} style={{ height: '20px', marginBottom: '10px', fontSize: '13px' }}>{day}</div>
                                    ))}
                                </div>

                                {/* Display contribution grid */}
                                <div className="contribution-grid" style={{ display: 'flex' }}>
                                    {contributions.map((week, weekIndex) => (
                                        <div key={weekIndex} className='d-flex flex-wrap' style={{ marginRight: '2px' }}>
                                            {week.map((contribution, dayIndex) => (
                                                <div
                                                    key={dayIndex}
                                                    style={{
                                                        width: '10px',
                                                        height: '10px',
                                                        backgroundColor: getColor(contribution),
                                                        marginBottom: '2px',
                                                        borderRadius: '2px',
                                                    }}
                                                ></div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Display contribution legend */}
                            <div className='d-flex justify-content-between align-items-center'>
                                <p style={{ fontSize: '12px' }} className='text-warning  '>
                                    Learn how we count 
                                </p>
                                <div className='d-flex '>
                                    <span style={{ fontSize: '12px', marginRight: '8px' }} className='text-warning'>Less</span>
                                    <div className='d-flex  '>
                                        <div style={{ width: '12px', height: '12px', backgroundColor: 'rgb(255 255 255 / 5%)', margin: '0 4px', borderRadius: '2px' }}></div>
                                        <div style={{ width: '12px', height: '12px', backgroundColor: '#9be9a8', margin: '0 4px', borderRadius: '2px' }}></div>
                                        <div style={{ width: '12px', height: '12px', backgroundColor: '#40c463', margin: '0 4px', borderRadius: '2px' }}></div>
                                        <div style={{ width: '12px', height: '12px', backgroundColor: '#30a14e', margin: '0 4px', borderRadius: '2px' }}></div>
                                        <div style={{ width: '12px', height: '12px', backgroundColor: '#216e39', margin: '0 4px', borderRadius: '2px' }}></div>
                                    </div>
                                    <span style={{ fontSize: '12px', marginLeft: '8px' }} className='text-warning'>More</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </Col>
                <Col md={2} className='d-none d-sm-inline'>
                    <div className='flex-wrap d-flex'>
                        <Button variant='primary' className='text-start w-100 ms-3' style={{ fontSize: '13px' }}>
                            2024
                        </Button>
                    </div>
                    <div className='flex-wrap d-flex mt-2'>
                        <Button className='text-start w-100 ms-3 border-0 text-warning' style={{ fontSize: '13px', backgroundColor: '#0d1117' }}>
                            2023
                        </Button>
                    </div>
                </Col>
                <Contributions2 />
            </Row>
        </div>
    );
}

export default Contributions;
