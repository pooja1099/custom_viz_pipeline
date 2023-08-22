import React from 'react'

const HandleQuery = ({cachehit}) => {
    
    return (
        <table>
            <tr>
                <th>Node Name</th>
                <th>CPU</th>
                <th>disk</th>
                <th>mem</th>
            </tr>
            
            {cachehit.map((item)=>(
                <tr>
                    <td>{item.nodeName}</td>
                    <td>{item.CPU}</td>
                    <td>{item.disk}</td>
                    <td>{item.mem}</td>
                </tr>
            ))}
            
        </table>
    )
}

export default HandleQuery