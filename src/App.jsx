import { useEffect } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Layout from './components/layout/layout';
import { refreshThunk } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';

const App = () => {

  const dispatch = useDispatch();
  
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
  );
};

export default App
