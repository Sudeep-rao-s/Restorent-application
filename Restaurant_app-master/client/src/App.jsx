// src/App.js
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';
import './App.css';
import PageNotFound from './pages/PageNotFound';
// import OnlineOrderForm from './pages/OnlineOrderForm';
import OnlineOrderForm from './components/OnlineOrderForm';
import ReviewForm from './components/ReviewForm';

const App = () => (
  
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/order"  element={<OnlineOrderForm />} />
        <Route path="/rate"  element={<ReviewForm />} />
        <Route path="/Review" element={<ReviewForm />} />
        <Route path="*" element={<PageNotFound />} />
     </Routes>
     {/* <ReviewForm /> */}
    </div>
  
);

export default App;
