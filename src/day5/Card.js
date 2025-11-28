import style from './Card.module.css'
import list from './list.module.css'
const Card = () => {
    console.log(style);
    return (
        <div className={list.p}>
            <h2>모듈카드</h2>
            <p>CSS Module 적용</p>
        </div>
    )
}

export default Card