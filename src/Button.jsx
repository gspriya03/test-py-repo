function Button(props) {
    const styles = {
            backgroundColor:"hsl(200, 76%, 39%)",
            color: "white",
            padding: "10px 30px",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px"
    }
    const bstyle ={
            backgroundColor:"hsl(200, 39.40%, 49.80%)",
            color: "white",
            padding: "10px 30px",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px"
    }
    const handleClick = () => console.log("Oh My God!!");
    const handleClicks = (name) => console.log(`${name} stop clicking me`);
    return(
    <>
    <button style={styles}>Click me</button>
    <button style={bstyle} onClick={() => handleClicks("Priya")}>Now Move</button>
    </>
    );
}
export default Button;