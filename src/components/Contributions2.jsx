import { faCircle, faFileArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Contributions2() {
  return (
    <>
      <div className='mt-4'>
        <p>Contribution activity</p>
        <div className='d-flex justify-content-center align-items-center'>
          <p style={{fontSize:'13px'}} className='m-0 '>October <span className='text-warning'>2024</span></p>
          <hr className='ms-3 ' style={{ width: "87%" }} />
        </div>
        <div>
          <hr className='vertical_line mb-0 ' style={{height:'10px',marginLeft:"11px",width:'2px'}} />
         <div className='m-0  d-flex position-relative' >
         <FontAwesomeIcon icon={faCircle} className=' fa-xl text-secondary' />
           <FontAwesomeIcon icon={faFileArrowUp} className='text-warning m-0 position-absolute' style={{top:'50%',left:'12',transform:'translate(-50%,-50%)'}} />
           </div>
        </div>
      </div>
    </>
  )
}

export default Contributions2
