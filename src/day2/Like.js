import { useState } from "react";
const Like = ()=>{
    const [likes, setLikes] = useState(0)
    // const handleClick=()=>{
    //     setLikes(likes+1);
    // }
    return (
        <div className="like">
            {/* <button onClick={handleClick}>👍좋아요</button> */}
            <button onClick={()=>{setLikes(likes+1);}}>👍좋아요</button> 
            <span>{likes}</span>
        </div>
    );
}
export default Like;

//*함수를 위에 이름있게 넣던가 가벼운거는 익명함수로 button onclick 중괄호 안에 함수를 넣어도 됨.
//*요소.onclick = ()=>{}