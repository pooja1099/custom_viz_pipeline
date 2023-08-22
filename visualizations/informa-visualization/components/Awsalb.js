import React, { useState, useEffect} from 'react'
import Modal from './Modal'

const Awsalb = () => {
    
    // const[opentrace, setOpentrace]=useState(false)
    // function OpenModal(){
    //     setOpentrace(!opentrace)

    // }
    // useEffect(() => {
    //   const handleOutsideClick = (event) => {
    //     if (opentrace && !event.target.closest('.modal_content')){
    //         setOpentrace(false);
    //     }
    //   };
  
    //   document.addEventListener('click', handleOutsideClick);
  
    //   return () => {
    //     document.removeEventListener('click', handleOutsideClick);
    //   };
    // }, [opentrace]);
  
  return (
        <div className='my_container'>
        <div className='header'>
            <p> AWS ALB </p>
            {/* <button className='modal_button' onClick={OpenModal}>open moddal</button>
            {opentrace && <Modal/>} */}
        </div>

        <div className='my_errors'>
            <div className='error_box'>
                <p className="main_heading" >ERROR INBOX</p>
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
                    <span>HTTP errors</span>
                    <span className='my_aws_started'>0</span>
                </div>
                <div className='my_details'>
                    <span>Connections</span>
                    <span>0</span>
                </div>
            </div>

            <div className='my_aws_counts'>
                <div className='my_details'>
                    <span>Authentication errors</span>
                    <span>0</span>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Awsalb