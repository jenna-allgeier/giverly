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
import Logout from './components/Logout';

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
            <Route path={'update-event/:eventId'}
              element={
                <UpdateEvent />
              }    
            />
            <Route path={'logout'}
              element={
                <Logout />
              }    
            />
          </Routes>
        </div>
      </main>
      <div className='footer'>
        <h3 className='footer-text'>Want to see more? Checkout <a href="https://jenna-allgeier.surge.sh/" target="blank" className='my-portfolio'>My Portfolio</a></h3>
      </div>
    </div>
  );
}

export default App;
