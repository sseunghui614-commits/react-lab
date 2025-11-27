import { useState } from "react";
import InputData from "./InputData"
import "./LoginPage.css";
import LoginPopup from "./LoginPopup";

const LoginPage = () => {
    const [isShow, setIsShow] = useState(false);
    const [strID,setStrID] = useState('');
    const [strPW,setStrPW] = useState('');
    const[strEmail, setStrEmail] = useState('');
    const [isError,setIsError] = useState(false);
    const handleSubmit = (e)=>{
        //원래 가진 기능이 사용되지 않도록 방지
        e.preventDefault();
        //이멩리 주소를 검사한 다음, 제대로 된 이메일주소면 popup오픈
        if( strEmail.includes('@') ){
            //popup
            setIsShow(true);
            setIsError(false);
        }else{
            //@가없음. 올바른 이메일 주소가 아님
            setIsError(true);
        }
        
    };
    const handleEmailBlur = ()=>{
        if( !strEmail.includes('@') ){
            setIsError(false);
        }else{
            setIsError(true);
        }
    }
    const handleClose = ()=>{
        setIsShow(false);
        setStrID('');
        setStrPW('');
        setStrEmail('');
        setIsError(false);
    };
    return (
        <>
            <form className="login-page" onSubmit={handleSubmit} noValidate>
                <InputData 
                    title="아이디 또는 전화번호"
                    type="text"
                    value={strID}
                    onChange={(e)=>{setStrID(e.target.value)}}
                /> 
                <InputData 
                    title="비밀번호"
                    type="password"
                    value={strPW}
                    onChange={(e)=>{setStrPW(e.target.value)}} 
                />
                <InputData
                    title="이메일주소"
                    type="email"
                    value={strEmail}
                    onChange={(e)=>{setStrEmail(e.target.value)}}
                    onBlur={handleEmailBlur}
                />
                {
                    isError && <p>올바른 이메일 주소가 아닙니다</p>
                }
                <div className="checkbox">
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check">로그인 상태 유지</label>
                </div>
                <button type="submit">로그인</button>
            </form>
            {
                isShow && 
                <LoginPopup 
                onClose={handleClose}
                textID={strID}
                textPW={strPW} 
                />
            }
        </>
    )
}

export default LoginPage
