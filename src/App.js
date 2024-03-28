// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import Header from './MyComponents/Header';
import Home from './MyComponents/Home';
import SignUp from './MyComponents/SignUp';
import SignIn from './MyComponents/SignIn';
import TodoManager from './MyComponents/TodoManager';

function App() {
  return (

    <Router>
      <Header/>
    <Routes>
      <Route exact path='/' element = {<Home/>}/>
      <Route exact path='/todos' element = {<TodoManager/>}/>
      <Route exact path='/sign-up' element= {<SignUp/>} />
      <Route exact path='/sign-in' element= {<SignIn/>}/>
    </Routes>

    </Router>


  );
}

export default App;