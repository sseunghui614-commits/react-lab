const Card = (props)=>{
    const children = props.children
    const style ={
        display:'flex',
        justifyContent:'center',
        height:'30vh',
        padding:'1rem',
        border:'1px solid blue'
    }
    return (
        <div style={style}>{children}</div>
    )
}
const Children = () => {
    return (
        <>
        <Card>
            <p>card-1</p>
            <p>card-2</p>
        </Card>
        <Card>
            <h1>title-1</h1>
            <h1>title-1</h1>
            <h1>title-1</h1>
        </Card>
        <Card />
        </>
    )
}

export default Children
