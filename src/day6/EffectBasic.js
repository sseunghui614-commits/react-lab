import { useEffect, useState } from "react"
const EffectBasic = () => {
    //언제 실행할지 조건 : 의존성 배열
    const [count,setCount] = useState(0);
    useEffect(()=>{
        alert("렌더링 후 항상 실행");
        //clean
        if( count >= 5){
            return ()=>{
                alert("effect 종료")
            };
        }
    },[count]); //count 값이 바뀔때마다 실행
    //[] : 처음시작되자마자 한번만 이라는 뜻
    return (
        <div>
            <p>count:{count}</p>
            <button onClick={()=>{setCount(count+1)}}>+1</button>
        </div>
    )
}

export default EffectBasic
