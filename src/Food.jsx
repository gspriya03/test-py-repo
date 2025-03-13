function Food(){
    const f1 = "Pizza";
    const f2 = "Burger";
    const f3 = "Coke";
    return(
        <ul>
            <h2>My favourite foods</h2>
            <li>Apple</li>
            <li>{f1}</li>
            <li>{f2}</li>
            <li>{f3.toUpperCase()}</li>
        </ul>
    );
}
export default Food