import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Buffer } from 'buffer';
import Logo from '../assets/133.jpg';

function Contacts({ contacts, currentUser }) {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setcurrentSelected] = useState(undefined);

    useEffect(() => {
        if (currentUser) {
            setCurrentUserImage(currentUser.avatarImage);
            setCurrentUserName(currentUser.username);
        }
    }, [currentUser]);
    console.log(contacts);
    const changCurrentChat = (index, contact) => {};

    return (
        <>
            {currentUserImage && currentUserName && (
                <Container>
                    <div className="brand">
                        <img src={Logo} alt="logo" />
                        <h3>snappy</h3>
                    </div>
                    <div className="contacts">
                        {contacts.map((contact, index) => {
                            return (
                                <>
                                    <div
                                        className={`contact ${index === currentSelected ? 'selected' : "''"}`}
                                        key={index}
                                    >
                                        <div className="avatar">
                                            <img
                                                src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                                                alt="avatar"
                                            />
                                        </div>
                                        <div className="username">
                                            <h3>{contact.username}</h3>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    <div className="current-user">
                        <div className="avatar">
                            <img src={`data:image/svg+xml;base64,${currentUserImage}`} alt="avatar" />
                        </div>
                        <div className="username">
                            <h3>{setCurrentUserName}</h3>
                        </div>
                    </div>
                </Container>
            )}
        </>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 10% 75% 15%;
    overflow: hidden;
    background-color: #080420;
    .brand {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        img {
            height: 2rem;
        }
        h3 {
            color: white;
            text-transform: uppercase;
        }
    }
    .cantacts {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        gap: 0.8rem;
        .contact {
            background-color: #ffffff39;
        }
    }
`;

export default Contacts;
