import { Suspense, useEffect, useState } from 'react';
// import components
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
// import styles
import './App.css'
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contacts/operations';
import Navigation from './components/Navigation/Navigation';
// import { addContact } from './redux/contactsSlice';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Layout from './components/layout/layout';

const App = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
  );
};

export default App
