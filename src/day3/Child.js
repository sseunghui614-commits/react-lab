
const Child = ({count, onChange}) => {
    console.log(count);
  return (
    <div className="child">
        <div>Child : {count}</div>
        <button onClick={()=>{onChange(onChange+1)}}>자식에서 카운트 증가</button>
        </div>
  )
}

export default Child
