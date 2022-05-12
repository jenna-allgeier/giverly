import logo from './logo.png';
import './styles/App.css';
import UserInfo from './components/UserInfo';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserInfo />
        <Register />
        <Login />
      </header>
    </div>
  );
}

export default App;
