import './App.css';

import Page from './components/Page';
import NavBar from './components/NavBar';
import Login from "./components/Login";
import SignUp from './components/SignUp'
import Features from './components/Features'
import UserForm from './components/UserForm'
import { BrowserRouter as Router,
         Switch, 
         Route,
         Link } from 'react-router-dom';



function App() {
  
  return (

    
    <div className="App">
      
      <Router>
      <Page />
      <NavBar />
      

      <Switch>
          <Route path="/features" component={Features}>
              <Features />
          </Route>
          <Route path="/UserForm" component={UserForm}>
            <UserForm />
          </Route>
          <Route path="/Login" component={Login}>
            <Login />
          </Route>
          <Route path="/Signup" component={SignUp}>
            <SignUp />
          <Login />  
          </Route>
        </Switch>
        
      </Router>   
    </div>
    
  );
};

export default App;
