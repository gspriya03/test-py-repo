import React,{useState} from 'react'
function Mycomponent(){
    const[name,setName] = useState("Guest");
    const [age,setAge] = useState(1);
    const[isStudent,setStudent] = useState(false);
    const updateName = () =>{
        setName("Shanmugappriya");
        //console.log(name);
    }
    const incrementAge = () =>{
        setAge(age+1);
    }
    const Student = () => {
        setStudent(!isStudent);
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>Student: {isStudent ? "Yes" : "NO"}</p>
            <button onClick={Student}>Yes or No</button>
        </div>);
}
export default Mycomponent