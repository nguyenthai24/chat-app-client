import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

import { loginRoute } from '../utils/API_router';
import 'react-toastify/dist/ReactToastify.css';

import Logo from '../assets/133.jpg';

function Login() {
    let navigate = useNavigate();

    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    useEffect(() => {
        if(localStorage.getItem('chat-app-user')) {
            navigate('/home')
        }
    },[])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            
            const { password, username } = values;
            const { data } = await axios.post(loginRoute, {
                username,
                password,
            });

            if (!data || data.status === false) {
                toast.error(data.msg, toastOption);
            }
            if (data && data.status === true) {
                localStorage.setItem('chat-app-user', JSON.stringify(data.user));
            }

            navigate('/home');
        }
    };

    const toastOption = {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored',
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleValidation = () => {
        const { password, username } = values;
        if (password.length === 0 || password === '') {
            toast.error('Password is requỉed', toastOption);
            return false;
        } else if (username.length === 0 || username === '') {
            toast.error('Username and email is required', toastOption);
            return false;
        }
        return true;
    };

    return (
        <>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <div className="brand">
                        <img src={Logo} alt="" />
                        <h1>Snappy</h1>
                    </div>
                    <input type="text" placeholder="User Name" name="username" onChange={handleChange} />
                    <input type="text" placeholder="Password" name="password" onChange={handleChange} />

                    <button type="submit">Login in</button>
                    <span>
                        Don't have an account ? <Link to="/register">Register</Link>
                    </span>
                </form>
            </FormContainer>
            <ToastContainer />
        </>
    );
}

const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: #131324;
    .brand {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        img {
            height: 50px;
            border-radius: 50%;
        }
        h1 {
            color: white;
            text-transform: uppercase;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        background-color: #00000076;
        padding: 100px 70px;
        border-radius: 20px;
        input {
            background-color: transparent;
            padding: 15px 10px;
            margin: 12px 0px;
            border: 1px solid #4e0eff;
            border-radius: 5px;
            color: white;
            width: 100%;
            font-size: 12px;
            &:focus {
                border: 1px solid #997af0;
                outline: none;
            }
        }
        button {
            margin: 12px 0px;
            background-color: #997af0;
            color: white;
            padding: 10px 20px;
            border: none;
            font-weight: 700;
            cursor: pointer;
            border-radius: 4px;
            font-size: 12px;
            text-transform: uppercase;
            transition: 0.5 ease-in-out;
            &:hover {
                background-color: #4e0eff;
            }
        }
        span {
            margin: 12px 0px;
            color: white;
            text-transform: uppercase;
            a {
                color: #4e0eff;
                text-decoration: none;
                font-size: bold;
            }
        }
    }
`;

export default Login;
