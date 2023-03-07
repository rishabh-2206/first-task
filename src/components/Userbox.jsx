import { useState } from "react";
const Userbox = ({data}) => {
    // console.log("getting data",data);
    
    const [curr,setCurr]=useState(0);

 function toggleShow(i)
 {
    if(curr===i)
    {
        return setCurr(null);
    }
    setCurr(i);
 }
    return ( 
    <div>
     {data.map((d,i)=>(
        <div className="user-box" key={d.id}>
        <div className="row-one">
            <h4 className="left-name" onClick={()=>{toggleShow(i)}} >{d.name}</h4>
            <h4 className="right-email" onClick={()=>{toggleShow(i)}}>{d.email}</h4>
        </div>
       {curr ?  <div className="row-two" >
           {d.body}
        </div>:'' }
    </div>
     ))}
     </div>
    
     );
}
 
export default Userbox;