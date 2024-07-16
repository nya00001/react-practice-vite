import Header from 'c:/Users/admin/Documents/imd/level4/webapp/react/my-react-app/src/header.jsx'

import Footer from 'c:/Users/admin/Documents/imd/level4/webapp/react/my-react-app/src/Footer.jsx'

import Food from 'c:/Users/admin/Documents/imd/level4/webapp/react/my-react-app/src/Food.jsx'

import Card from 'c:/Users/admin/Documents/imd/level4/webapp/react/my-react-app/src/Card.jsx'

import Button from './button/Button.jsx'

import Student from 'c:/Users/admin/Documents/imd/level4/webapp/react/my-react-app/src/Student.jsx'

import UserGreeting from 'c:/Users/admin/Documents/imd/level4/webapp/react/my-react-app/src/UserGreeting.jsx'

import List from 'c:/Users/admin/Documents/imd/level4/webapp/react/my-react-app/src/List.jsx'

import ProfilePicture from 'c:/Users/admin/Documents/imd/level4/webapp/react/my-react-app/src/ProfilePicture.jsx'

import MyComponent from 'c:/Users/admin/Documents/imd/level4/webapp/react/my-react-app/src/MyComponent.jsx'

import Counter from './Counter.jsx'

import MyForm from './MyForm.jsx'

import ColorPicker from './ColorPicker.jsx'

import MyComponent2 from './MyComponent2.jsx'

import MyComponent3 from './MyComponent3.jsx'

import MyComponent4 from './MyComponent4.jsx'

import ToDoList from './ToDoList.jsx'

import UseEffect from './UseEffect.jsx'

import UseEffect2 from './UseEffect2.jsx'


function App() {

  const fruits = [{id : 1, name:"pear", calories: 95}, 
                  {id : 2, name:"orange", calories: 45}, 
                  {id : 3, name:"banana", calories: 105}, 
                  {id : 4, name:"coconut", calories: 159}, 
                  {id : 5, name:"pineapple", calories: 37}, 
                  {id : 6, name:"watermelon", calories: 30}];
  
  const vegetables = [{id : 7, name:"carrot", calories: 50},
                      {id : 8, name:"onion", calories: 80},
                      {id : 9, name:"pepper", calories: 47},
                      {id : 10, name:"broccoli", calories: 10},
                      {id : 11, name:"celery", calories: 25},];
  return (
    <>    
    <Header/> 
    <UseEffect/>
    <UseEffect2/>
    <ToDoList/>
    <Counter/>
    <MyForm/>
    <ColorPicker/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Student name="Mohamed" age={25} isStudent={true}/>
    <Student name="Patrick" age={22} isStudent={false}/>
    <Student name="Sarah" age={20} isStudent={true}/>
    <Student name="Alex" age={18} isStudent={false}/>
    <Student />
    <UserGreeting isLoggedIn={true} username="mohamed"/>
    {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    <Food/>
    <Button/>
    <ProfilePicture/>
    <MyComponent/>
    <MyComponent2/>
    <MyComponent3/>
    <MyComponent4/>
    <Footer/>
    </>
  );
}

export default App
