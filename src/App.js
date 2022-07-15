import './App.css';
import Header from './components/header/Header';
import SwipeButton from './components/swipebutton/SwipeButton';
import TinderCards from './components/tindercards/TinderCards'

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButton />
    </div>
  );
}

export default App;
