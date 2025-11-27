/**
 * 
 * 버튼을 눌렀을 때 카운트 되는 상태
 * 1씩 증가
 * useState : 변수 값을 사용할 때
 * const [state,setState]=useState(initValue);
 * state: 현재 상태 값
 * setState: 상태를 바꾸는 함수
 * initaValue:초기값
 * 비동기식, 배치처리
 */
import { useState } from "react";

const StateBase = ()=>{
    // let count = 0;
    // const add = ()=>{
    //     count ++; //count++ 로 쓰면 인됨.
    //     console.log(count);
    // }
    const [count, setCount] = useState(0);
    const add = ()=>{
        setCount((prev)=>{return prev+1}); 
        setCount((prev)=>{return prev+1}); 
        setCount(prev=> prev+1);  //-> 같은 값 다른표현 3씩 증가
        // setCount(count+1); //1  
        // setCount(count+1); //2  
        // setCount(count+1); //3  
    }
    return(
        <div className="state-base">
            <p>{count}</p>
            <button onClick={add}>클릭</button>
        </div>
    );
}
export default StateBase;