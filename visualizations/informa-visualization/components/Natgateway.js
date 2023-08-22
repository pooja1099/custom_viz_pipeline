import React from 'react'

const Natgateway = () => {
  return (
        <div className='my_container'>
        <div className='header'>
            <p> VPC NAT Gateway </p>
        </div>
        <div className='my_errors'>
            <div className='error_box'>
                <p className="main_heading" >EROR PORT ALLOCATION</p>
            <span>0</span>
                
            </div>
            <div className='sli_box'>
                <p>ACTIVE CONNECTION</p>
                <span>0</span>
            </div>
            <div className='disruption_box'>
                <p className="main_heading">DISRUPTIONS</p>
                <span id='disruption'>0</span>
            </div>
        </div>
        <div className='content_in_one_line'>
            <div className='my_aws_counts'>
                <div className=' my_details'>
                    <span>Nat count</span>
                    <span className='my_aws_started'>0</span>
                </div>
                <div className='my_details'>
                    <span>IdleTimeout</span>
                    <span>0</span>
                </div>
                <div className='my_details'>
                    <span>Connection Established</span>
                    <span>0</span>
                </div>
            </div>

            {/* <div className='my_aws_counts'>
                <div className='my_details'>
                    <span>Authentication errors</span>
                    <span>0</span>
                </div>
            </div> */}

        </div>

    </div>
  )
}

export default Natgateway