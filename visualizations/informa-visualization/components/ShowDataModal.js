import React from 'react'

export const ShowDataModal = ({showData}) => {
  console.log("fir se click huwa")
  console.log("showData", showData)
  return (
    <table>
            <tr>
                {/* <th>Entity Guid</th> */}
                <th>Monitor Name</th>
                <th>Error</th>
                <th>Result</th>
            </tr>
    {showData.map((item)=>(
          <tr className='content'>
            {/* <td>{item.facet[0]}</td> */}
            <td>{item.facet[1]}</td>
            <td>{item["latest.error"]}</td>
            <td>{item["latest.result"]}</td>
          </tr>
        ))}   
    </table>
  )
}
