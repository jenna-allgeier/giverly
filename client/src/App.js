import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome';
import Navbar from './components/Navbar';
// import UserProfile from './pages/UserProfile';
import LoginRegister from './pages/LoginRegister';
import Login from './components/Login';
import Register from './components/Register';
import Calendar from './pages/Calendar';
import Cart from './pages/Cart'

function App() {
  return (
    <div className="App">
      
        <Navbar />
      <main>
        <div>
          <Routes>
            <Route index 
              element={
                <Welcome />
                } 
            />
            <Route path={'login-register'} 
              element={
                <LoginRegister />
                } 
            />
            {/* <Route path={`user-profile/${userId}`}
              element={
                <UserProfile />} 
                /> */}
            <Route path={'calendar'}
              element={
                <Calendar />
                }
            />
            <Route path={'cart'}
              element={
                <Cart />
              }    
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
