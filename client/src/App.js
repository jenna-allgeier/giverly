import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome';
import Navbar from './components/Navbar';
// import UserProfile from './pages/UserProfile';
import LoginRegister from './pages/LoginRegister';
import AppCalendar from './pages/AppCalendar';
import Cart from './pages/Cart'
import EventDetails from './components/EventDetails'
import UpdateEvent from './components/UpdateEvent';

function App() {
  return (
    <div className="App">
      
        <Navbar />
      <main>
        <div className='page-style'>
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
                <AppCalendar />
                }
            />
            <Route path={'cart'}
              element={
                <Cart />
              }    
            />
            <Route path={'event-details'}
              element={
                <EventDetails />
              }    
            />
            <Route path={'update-event'}
              element={
                <UpdateEvent />
              }    
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
