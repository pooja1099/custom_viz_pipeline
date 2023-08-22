import React, {useState, useEffect} from 'react'
import NetworkIMG from "../Assets/Networkellipse.svg"
import Awsalb from './Awsalb'
import Natgateway from './Natgateway'
import Frontend from './Frontend'
import Lambda from './Lambda'
import ApiGateway from './ApiGateway'
import HandleQuery from './HandleQuery'
import SyntheticData from './SyntheticData'
import blue from "../Assets/bluecircle.svg"
import middleware from "../Assets/middleware.svg"
import { FetchDataFromQuery, RenderFilterSyncData, cloudfrontend } from '../queryModule'


const Render = () => {
  const [cachehit, setcachehit] = useState([])
  const [syncData, setSyncData] = useState([])
//   const [finalData, setFinalData] = useState([])

  useEffect(async () => {
    let cloudfrontendresult = await cloudfrontend();
    setcachehit(cloudfrontendresult)
  }, []);
// console.log("cachehit",cachehit)

  useEffect(async ()=>{
      const newSyncData = await FetchDataFromQuery();
      let filterData = []
      for(let item of newSyncData){
          if(item.facet[2] === "SYNTH"){
              // console.log("type",typeof item.facet[0])
              filterData = [item.facet[0], ...filterData]
          }
      }
      setSyncData(filterData)

      
  }, [])

//   useEffect(async ()=>{
//       for(let item of syncData){
//           const newFinalData = await RenderFilterSyncData(item);
//           setFinalData(...finalData, newFinalData)
//       }
//   }, [syncData])
//   console.log("finaldata", finalData)
  // finalData.map((item)=>(console.log("my_item",item)))
  
  return (
    <div>
        <div className="container_heading" style={{backgroundColor:"#b2f8ff"}}>
        <h5> <img src={blue} alt="img" /> Front-end </h5>
        </div>
        <div className="container_content_next">
            <Frontend />
        </div>
        <div className="container_heading" style={{backgroundColor:"rgb(255 251 178)"}}>
        <h5> <img src={middleware} alt="img" /> Middleware </h5>
        </div>
        <div className="container_content">
            <Lambda />
            <ApiGateway/>
        </div>
        <div className="container_heading" style={{backgroundColor:"#c7c7ed"}}>
        <h5> <img src={NetworkIMG} alt="img" /> Network Layer </h5>
        </div>
        <div className="container_content">
            <Natgateway/>
            <Awsalb />
        </div>
        <HandleQuery cachehit = {cachehit} />
        <SyntheticData syncData = {syncData} />
    </div>
  )
}

export default Render