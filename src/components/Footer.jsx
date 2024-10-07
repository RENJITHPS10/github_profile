import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center text-warning py-5 bg flex-wrap' style={{fontSize:"12px"}}>
              <div className='align-items-center d-none d-sm-flex'>  <FontAwesomeIcon icon={faGithub} className='fa-2x text-warning me-2 '  />  © 2024 GitHub, Inc.</div>
              
                <a href="" className='text-decoration-none text-warning ms-3'>
                    Terms
                </a>
                <a href="" className='text-decoration-none text-warning ms-3'>
                  Privacy
                    
                </a>
                <a href="" className='text-decoration-none text-warning ms-3'>
                Security
                </a>
                <a href="" className='text-decoration-none text-warning ms-3'>
                  Status
                </a>
                <a href="" className='text-decoration-none text-warning ms-3'>
                   Docs
                </a>
                <a href="" className='text-decoration-none text-warning ms-3'>
                  Contact
                </a>
                <a href=""  className='text-decoration-none text-warning ms-3'>
                 Manage cookies
                </a>
                <a href="" className='text-decoration-none text-warning ms-3'>
                Do not share my personal information
                </a>
                <div className='align-items-center d-flex d-sm-none mt-2'>  <FontAwesomeIcon icon={faGithub} className='fa-2x text-warning me-2 '  />  © 2024 GitHub, Inc.</div>
               
            </div>

        </>
    )
}

export default Footer
