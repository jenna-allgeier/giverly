import logo from './logo.png';
import './styles/App.css';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserInfo />
      </header>
    </div>
  );
}

export default App;
