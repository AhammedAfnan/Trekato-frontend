import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
// import Dashboard from '../pages/Dashboard';
import HelpCenter from '../pages/HelpCenter';

const AppRoutes : React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignupPage />}/>
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        <Route path='/help-center' element={<HelpCenter />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;