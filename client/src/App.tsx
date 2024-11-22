import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'; // Assuming Login is your login component
import PurchasedCourseDetails from './PurchasedCourseDetails'; // Assuming this is another component

const App: React.FC = () => {
  return (
    <Router> {/* Wrap the Routes inside Router */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} /> {/* Route for the login page */}
          <Route path="/purchased-course/:id" element={<PurchasedCourseDetails />} />
          {/* Add other routes as necessary */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
