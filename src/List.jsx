
function List(props){
    const itemList = props.items;
    itemList.sort((a, b) => a.name.localeCompare(b.name));
    //fruits.sort((a,b)=> a.name.localeCompare(b.name));//ALPHABETICAL ORDER
    //fruits.sort((a,b)=> b.name.localeCompare(a.name));//REVERSE ALPHABETICAL ORDER  
    //fruits.sort((a,b)=> a.name-b.calories);//ASCENDING ORDER
    //fruits.sort((a,b)=> b.name-a.calories);//DESCENDING ORDER
    //const lowCalFruits = fruits.filter((fruit)=> fruit.calories<60);
    
    const listItems = itemList.map(item => (
        <li key={item.id}>
            {item.name}: <b>{item.calories}</b> calories
        </li>
    ));
    return(
        <>
        <h2 className="listcategory">{props.category}</h2>
        <ol className="listitems">{listItems}</ol>
        </>
    );
    //return(fruits);
}
export default List;