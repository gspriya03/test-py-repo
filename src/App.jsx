import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
function App() {

  const fruits = [{id:1,name:'apple',calories:95},
                  {id:2,name:'banana',calories:105}, 
                  {id:3,name:'grape',calories:62}, 
                  {id:4,name:'watermelon',calories:46}, 
                  {id:5,name:'strawberry',calories:32}];
  const vegitables = [{id:6,name:'Carrot',calories:103},
                      {id:7,name:'Potato',calories:135}, 
                      {id:8,name:'Tomato',calories:22}, 
                      {id:9,name:'Cucumber',calories:126}, 
                      {id:10,name:'Bringal',calories:112}];
  return (
    <>
      <Header />
      <Food />
      <Footer />
      <Card />
      <Button />
      <Student name="Priya" age = {21} DateOfBirth = "17/12/2003" isStudent ={true}/>  
      {/*we can not print boolean values directly in JSX, so we use ternary operator*/}
      <Student name="Riya" age = {22} DateOfBirth = "17/12/2002" isStudent ={false}/>
      <Student name="Sandy"/>
      <UserGreeting isLoggedInt={true} username="Gspriya"/>
      <UserGreeting isLoggedInt={false} />
      <List items={fruits} category="Fruits" />
      <List items={vegitables} category="Vegitables" />
      </>
  );
}

export default App
