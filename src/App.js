import React ,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {

  const [ {user}, dispatch] = useStateValue();

 

  const checkIfLogin = () => {
    // setUser(true);
    console.log(user);
  }

  return (
    <div className="app">
      {!user ? (
        
        <Login />
      )
       :  
       (
        <div className='app__body'>
          <Router>
            <Sidebar />

            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
         </div>
       )
      }
      
    </div>
  );
}

export default App;
