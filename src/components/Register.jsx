import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('123');
    };

    const handleChange = (e) => {
        e.preventDefault();
        alert(123);
    };

    return (
        <>
            <FormContainer>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="brand">
                        {/* <img src="" alt="" /> */}
                        <h1>Snappy</h1>
                    </div>
                    <input type="hidden"  id="123"/>
                    <input type="text" placeholder="User Name" name="username" onChange={(e) => handleChange(e)} />
                    <input type="text" placeholder="Email" name="email" onChange={(e) => handleChange(e)} />
                    <input type="text" placeholder="Password" name="password" onChange={(e) => handleChange(e)} />
                    <input
                        type="text"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={(e) => handleChange(e)}
                    />

                    <button type="submit">Create User</button>
                    <span>
                        Already have an account ? <Link to="/login">Login</Link>
                    </span>
                </form>
            </FormContainer>
        </>
    );
}

const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #131324;
    .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        img {
            height: 5rem;
        }
        h1 {
            color: white;
            text-transform: uppercase;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #00000076;
        border-radius: 2rem;
        padding: 3rem 6rem;
        input {
            background-color: transparent;
            padding: 1rem;
            border: 0.1rem solid #4e0eff;
            border-radius: 0.4rem;
            color: white;
            font-size: 1rem;
            &:focus {
                border: 0.1rem solid #997af0;
                outline: none;
            }
        }
        button {
            background-color: #997af0;
            color: white;
            padding: 1rem 2rem;
            border:  none;
            font-weight: bold;
            cursor: pointer;
            border-radius: 0.4rem;
            text-transform: uppercase;
            transition: 0.5 ease-in-out;
            &:hover {
                background-color: #4e0eff;
            }
        }
    }
`;

export default Register;
