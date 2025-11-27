import { useState } from "react";

const IsLike = ()=>{
    const [isLke,setIsLike]=useState(false);
    return(
        <div className="is-like">
            <p>현재 좋아요 : {isLke?"on":"off"} </p>
            {isLke && <p>❤</p>}
            <button onClick={()=>{setIsLike(!isLke)}}>좋아요 토글</button>
        </div>
    )
    
}
export default IsLike;