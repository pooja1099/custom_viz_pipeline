import React from 'react'

const Frontend = () => {
  return (
    <div className='my_container'>
        <div className='header'>
            <p> Browser </p>
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
                <div className=' my_details'>
                    <span>Error rate</span>
                    <span className='my_aws_started'>0</span>
                </div>
                <div className='my_details'>
                    <span>User time on the site</span>
                    <span>0</span>
                </div>
            </div>

            <div className='my_aws_counts'>
                <div className='my_details'>
                    <span>Page Views</span>
                    <span>0</span>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Frontend