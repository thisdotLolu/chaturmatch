import './App.css';
import Header from './Header';
import {Route,Switch} from 'react-router-dom';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import InfoPage from './InfoPage';

function App() {
  return (
    <div className="App">
      {/* Header */}

     
      <Switch>
        <Route exact path='/'>
        <Header/>
          <TinderCards/>
          <SwipeButtons/>
        </Route>
        <Route path='/chats/:person'>
          <Header backButton='/chats'/>
          <ChatScreen/>
        </Route>
        <Route path='/chats'>
        <Header backButton='/'/>
          <Chats/>
        </Route>
        <Route path='/profile'>
        <Header backButton='/'/>
          <InfoPage/>
        </Route>
      </Switch>

      {/* Tinder Cards */}

      {/* Buttons */}

      {/* Chats Screen */}

      {/* Individual Chats Screen */}
    </div>
  );
}

export default App;
