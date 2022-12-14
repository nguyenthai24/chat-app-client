import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Buffer } from 'buffer';

import { setAvatarRoute } from '../utils/API_router';
import 'react-toastify/dist/ReactToastify.css';

import loader from '../assets/loader.gif';

import { buttonGlobal } from './style';

function SetAvatar() {
    const api = 'https://api.multiavatar.com/123123';
    const navigate = useNavigate();
    const [avatars, setAvatars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAvatar, setSelectedAvatar] = useState(undefined);
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

    function randomNumberInRange(int) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * int + 1);
    }
    useEffect(() => {
        if(!localStorage.getItem('chat-app-user')) {
            navigate('/login')
        }
    },[])

    const setProfilePicture = async () => {
        if (selectedAvatar === undefined) {
            toast.error('Please selecet an avatar', toastOption);
        } else {
            
            const user = await JSON.parse(localStorage.getItem('chat-app-user'));
            const  {data}  = await axios.post(`${setAvatarRoute}/${user._id}`, {
                image: avatars[selectedAvatar],
            })
            console.log(data)
            if(data.isSet) {
                user.isAvatarImageSet = true;
                user.avatarImage = data.image;
                localStorage.setItem('chat-app-user', JSON.stringify(user));
                navigate('/home');
            } else {
                toast.error('Error setting avatar. Please try again', toastOption);
            }
        }
    };
    useEffect(() => {
        (async () => {
            const data = [];
            for (let i = 0; i < 4; i++) {
                const image = await axios.get(`${api}/${randomNumberInRange(1000)}`);
                const buffer = new Buffer(image.data);
                data.push(buffer.toString('base64'));
            }
            setAvatars(data);
            setIsLoading(false);
        })();
    }, []);

    const loading = (
        <Container>
            <img src={loader} alt="loader" className="loader" />
        </Container>
    );
    const avatar = (
        <>
        <Container>
            <div className="title-container">
                <h1>Pick an avatar as your profile picture</h1>
            </div>
            <div className="avatars">
                {avatars.map((avatar, index) => {
                    return (
                        <div key={index} className={`avatar ${selectedAvatar === index ? 'selected' : ''}`}>
                            <img
                                src={`data:image/svg+xml;base64,${avatar}`}
                                alt="avatar"
                                onClick={() => setSelectedAvatar(index)}
                            />
                        </div>
                    );
                })}
            </div>
            <button className="submit-btn" onClick={setProfilePicture}>
                Set as profile picture
            </button>
        </Container>
        <ToastContainer/>
        </>
        
        
    );

    return <>{isLoading ? loading : avatar}</>;
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    background-color: #131324;
    height: 100vh;
    width: 100vw;
    .loader {
        max-inline-size: 100%;
    }
    .title-container {
        h1 {
            color: white;
        }
    }
    .avatars {
        display: flex;
        gap: 2rem;
        .avatar {
            border: 0.4rem solid transparent;
            padding: 0.4rem;
            border-radius: 4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.5s ease-in-out;
            img {
                height: 6rem;
            }
        }
        .selected {
            border: 0.4rem solid #4e0eff;
        }
    }
    button {
        ${buttonGlobal}
    }
`;

export default SetAvatar;
