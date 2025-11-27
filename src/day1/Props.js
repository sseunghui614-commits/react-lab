import "./props.css";
const Props = (props)=>{
    const user = props.user;
    console.log(user);
    return (
        <div className="card">
            <img 
                src="/images/img-01.png"
                alt="카드이미지01"
                />
            <h2>{user}</h2>
            <p>우리의 영웅</p>
        </div>
    );
    return (
        <div className="kakao">
            <img 
                src="/images/img-01.png"
                alt="카드이미지01"
                />
            <h2>{user}</h2>
            <p>우리의 영웅</p>
        </div>
    );
}
export default Props;