/*we can change the name of the function to anything we want
we would use props to access the values passed to the component
we can access the values using the name of the property
for example, to access the value of the name property, we would use props.name*/


/*propTypes are used to specify the type of the value that is passed to the component
example, if we want to pass a string to the component, we would use PropTypes.string*/

//defaultProps are used to specify the default value of a property
import PropTypes from 'prop-types'
function Student(props){ 
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Date of Birth: {props.dateOfBirth}</p>
            <p>Is Student: {props.isStudent ? "Yes":"No"}</p>
        </div>
    )
}
// This will not stop the code from running, but it will give a warning in the console 
// if the value passed to the component is not of the specified type
Student.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    DateOfBirth: PropTypes.string,
    isStudent: PropTypes.bool,

}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    dateOfBirth: "N/A",
    isStudent: false,
};

export default Student;