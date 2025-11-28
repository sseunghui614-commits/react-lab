import { useEffect, useLayoutEffect, useState } from "react"

const LayoutEffect = () => {
    // useEffect(()=>{
    //     console.log("useEffect 실행: 화면 그려진 후")
    // },[]);
    // useLayoutEffect(()=>{
    //     console.log("useLayoutEffect 실행 : 화면 그려지기 전")
    // })
    const [text,setText] = useState("처음시작");
    const style = {
        fontSize:'3rem',
        padding: '3rem'
    };
    useLayoutEffect(()=>{
        setText("처리완료");
    },[])
    return (
        <div style={style}>
        {text}
        </div>
    )
}

export default LayoutEffect
