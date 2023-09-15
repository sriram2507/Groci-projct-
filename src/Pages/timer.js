import React, { useEffect , useState} from 'react';


const Time = () => {
    const[hours,sethours]=useState(4);
    const[seconds,setseconds]=useState(20);
    const[minutes,setminutes]=useState(19);

    var Timer;
    useEffect(()=>{
        Timer= setInterval(()=>{
            setseconds(seconds-1);
           
            if(seconds===0 ){
                
                setminutes(minutes-1);
                setseconds(59);   
            }
        },1000)
      return ()=> clearInterval(Timer);
    });
    return(
        <div  id="time">
            <h1>{"04"}:{minutes<10 ? "0"+minutes:minutes }:{seconds<10 ? "0"+seconds:seconds}</h1>
            </div>
    )
}
export default Time;