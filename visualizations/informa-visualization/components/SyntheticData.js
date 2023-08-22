import React, {useState} from 'react'
import {  RenderFilterSyncData } from '../queryModule'
import { ShowDataModal } from './ShowDataModal'


const SyntheticData = ({syncData}) => {
  const [showData, setShowData] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [id, setID] = useState("");
  

  return (
    <>
    {/* <table>
            <tr>
                <th>Entity Guid</th>
                <th>Monitor Name</th>
                <th>Error</th>
                <th>Result</th>
            </tr>
            {syncData.map((item)=>(
                <tr>
                    <td style={{cursor:"pointer"}} onClick={async()=> {
                      let data = await RenderFilterSyncData(item)
                      setShowData(data)
                      showDyncData();
                    }}>{item}</td>
                    
                    <td>{item.facet[1]}</td>
                    <td>{item["latest.error"]}</td>
                    <td>{item["latest.result"]}</td>
                </tr>
            ))}
            
    </table> */}
    {/* {showModal && <div className='closeModal' onClick={closeModal}><ShowDataModal showData = {showData} /></div>} */}
    <div className="container">
    {syncData.map((item)=>(
                <div>
                <div className="collapsible" onClick={async()=> {
                  console.log("clicked")
                      let data = await RenderFilterSyncData(item)
                      setShowData(data)
                      setID(item)
                      setShowModal(!showModal)
                    }}>{item}</div>
                    {showModal && id===item && <ShowDataModal showData={showData} />}
                </div>
            ))}
    </div>
    </>
  )
}

export default SyntheticData