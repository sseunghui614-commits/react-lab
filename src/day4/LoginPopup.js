const LoginPopup = ({onClose,textID,textPW}) => {
    return (
        <div className="login-popup">
            <div>
                <h2>Popup</h2>
                <p>입력한 ID :{textID}</p>
                <p>입력한 PW :{textPW}</p>
                <button onClick={onClose}>×</button>
            </div>
        </div>
)
}

export default LoginPopup
