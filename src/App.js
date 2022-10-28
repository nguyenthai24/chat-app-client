import React from 'react';
import{Routes, Route} from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
    return (
        <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Chat />} />
        </Routes>
    ) 
}
