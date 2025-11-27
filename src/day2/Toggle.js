import { useState } from "react";

const Toggle = ()=>{
    const [isShow,setisShow] = useState(true);
    return(
        <div className="toggle">
            <button onClick={()=>{setisShow(!isShow)}}>{isShow? "내용숨기기":"내용보이기"}</button>
            {isShow && <p>오늘도 무사히</p>}
        </div>
    )
}
export default Toggle;