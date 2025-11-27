import { useState } from "react";

const Mode = ()=>{
    const [color,setColor]=useState('blue');
    const style = {
        width: '300px',
        height:'200px',
        padding: '1rem',
        backgroundColor: color  //왜 $을 안쓰는 가 ? blue 라는 값을 문자열로 만듦. color라는 글자도 문자열이니까 $쓸필요 없음.
    }
    const handleClick =()=>{
        // if(color === 'blue'){
        //     setColor('tomato');
        // }else{
        //     setColor('blue');
        // }
        setColor(color === 'blue'? 'tomato' : 'blue');  //-> 삼항 연산자 를 더 많이 쓰임
    }
    return(
        <div className="mode" style={style}>
            <p>현재 박스 색상 : {color} </p>
            <button onClick={handleClick}>색상변경</button>
        </div>
    );
}
export default Mode;