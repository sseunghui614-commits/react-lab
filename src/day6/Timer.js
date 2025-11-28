import { useEffect, useState } from "react";
import styled from "./Timer.module.css";
const Timer = () => {
    const [time,setTime] = useState(0);
    const [isRunning, SetIsRunning] = useState(false);
    const handleStartStop = ()=>{
        SetIsRunning(!isRunning)
    }
    useEffect(()=>{
        let intervalID;
        if ( isRunning ){
            intervalID = setInterval(()=>{
                setTime((prev)=>{return prev+1})
            },1000)
        }
        return ()=>{
            clearInterval(intervalID);
        }
        },[isRunning]);
    const handleReset = ()=>{
        setTime(0);
        SetIsRunning(false);
    }
    const minutes = Math.floor(time/60); ///나누기값 버리기
    const seconds = time%60;
    const format = (num)=>{
        return String(num).padStart(2,"0"); //두자리 숫자로 나타내기(타이머)
    }
    return (
        <div className={styled.timer}>
            <p>{format(minutes)}:{format(seconds)}</p>
            <div>
                <button onClick={handleStartStop}>
                    {isRunning ? "STOP":"START"}
                </button>
                <button onClick={handleReset}>RESET</button>
            </div>
        </div>
    )
}

export default Timer
