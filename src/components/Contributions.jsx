import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'

function Contributions() {
    const contributions = Array.from({ length: 52 }, () => Array.from({ length: 7 }, () => Math.floor(Math.random() * 5)));

    const getColor = (contribution) => {
        switch (contribution) {
            case 0: return 'rgb(255 255 255 / 5%)'; // No contribution
            case 1: return 'rgb(255 255 255 / 5%)';
            case 2: return 'rgb(255 255 255 / 5%)';
            case 3: return 'rgb(255 255 255 / 5%)';
            case 4: return '#216e39'; // Maximum contribution
            default: return '#ebedf0';
        }
    };

    return (
        <>
            <Row className='mt-5'>
                <Col md={10}>
                    <div className='d-flex justify-content-between'>
                        <p>53 contributions in the last year</p>
                        <p className='text-warning' style={{ fontSize: "12px" }}>contributions settings <FontAwesomeIcon icon={faAngleDown} /></p>
                    </div>
                    <div className='rounded-3 border border-secondary'>
                        <div className="contribution-grid  p-5  flex-wrap">
                            {contributions.map((week, weekIndex) => (
                                <div key={weekIndex} className="week">
                                    {week.map((contribution, dayIndex) => (
                                        <div
                                            key={dayIndex}
                                            className="day"
                                            style={{ backgroundColor: getColor(contribution) }}
                                        ></div>
                                    ))}
                                </div>
                            ))}
                        </div>

                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>

        </>
    )
}

export default Contributions
