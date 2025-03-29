import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import UserListPage from '../pages/UserListPage';
import EditUserPage from '../pages/EditUserPage';
import { getToken } from '../utils/auth';

const AppRoutes = () => {
  const PrivateRoute = ({ children }) => {
    return getToken() ? children : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UserListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditUserPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
