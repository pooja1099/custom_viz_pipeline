import React from 'react'
import { useState, useEffect } from 'react'
import Modal from './Modal'

const Lambda = () => {
    const[openDTrace, setopenDTrace]=useState(false)
    function OpenTraceModal(){
        setopenDTrace(!openDTrace)

    }
    useEffect(() => {
      const handleOutsideTClick = (event) => {
        if (openDTrace && !event.target.closest('.modal_content')){
            setopenDTrace(false);
        }
      };
  
      document.addEventListener('click', handleOutsideTClick);
  
      return () => {
        document.removeEventListener('click', handleOutsideTClick);
      };
    }, [openDTrace]);
  
  return (
        <div className='my_container'>
        <div className='header'>
            <p> Lambda </p>
            <button className='modal_button' onClick={OpenTraceModal}>DISTRIBUTED TRACING</button>
            {openDTrace && <Modal/>}
        </div>

        <div className='my_errors'>
            <div className='error_box'>
                <p className="main_heading" >SLO/SLI</p>
            <span>0</span>
                
            </div>
            <div className='sli_box'>
                <p>TOTAL REQUESTS</p>
                <span>0</span>
            </div>
            <div className='disruption_box'>
                <p className="main_heading">DISRUPTIONS</p>
                <span id='disruption'>0</span>
            </div>
        </div>
        <div className='my_mainaws_container'>
            <div className='my_aws_counts'>
                <div className=' my_details'>
                    <span>Deadletters Error</span>
                    <span className='my_aws_started'>0</span>
                </div>
                <div className='my_details'>
                    <span>Invocations Failed</span>
                    <span>0</span>
                </div>
                <div className='my_details'>
                    <span>Durations</span>
                    <span>0</span>
                </div>
            </div>

            <div className='my_aws_counts'>
                <div className='my_details'>
                    <span>Invocations Success</span>
                    <span>0</span>
                </div>
                <div className='my_details'>
                    <span>Throttles</span>
                    <span>0</span>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Lambda