import React from 'react'

const ApiGateway = () => {
    return (
        <div className='my_container'>
        <div className='header'>
            <p> API Gateway </p>
        </div>
        <div className='my_errors'>
            <div className='error_box'>
                <p className="main_heading" >ERROR INBOX</p>
            <span>0</span>
                
            </div>
            <div className='sli_box'>
                <p>SLI/SLO</p>
                <span>0</span>
            </div>
            <div className='disruption_box'>
                <p className="main_heading">DISRUPTIONS</p>
                <span id='disruption'>0</span>
            </div>
        </div>
        <div className='my_mainaws_container'>
            <div className='my_aws_counts'>
                <div className='my_details'>
                    <span>4xx error count</span>
                    <span className='my_aws_started'>0</span>
                </div>
                <div className=' my_details'>
                    <span>Latency</span>
                    <span >0</span>
                </div>
            </div>

            <div className='my_aws_counts'>
                <div className='my_details'>
                    <span>5xx error count</span>
                    <span className='my_aws_started'>0</span>
                </div>
                <div className='my_details'>
                    <span>Total Requests</span>
                    <span className='my_aws_started'>0</span>
                </div>
            </div>

        </div>

    </div>
  )
}

export default ApiGateway