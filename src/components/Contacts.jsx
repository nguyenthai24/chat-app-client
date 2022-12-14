import { constants } from "buffer";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from '../assets/133.jpg';


function Contacts(contacts, currentUser) {

    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setcurrentSelected] = useState(undefined);
    useEffect(() => {
        if(currentUser) {
            setCurrentUserImage(currentUser.avatarImage);
            setCurrentUserName(currentUser.username)
        }
    },[currentUser]);

    const changCurrentChat = (index, contact) => {

    }
 

    return (
    <>
        {currentUserImage && currentUserName && (
            <Container>
                <h1 style={{color: 'red'}}>122223</h1>
                <div className="brand">
                     <img src="{Logo}" alt="logo" />
                     <h3>snappy</h3>
                </div>
                <div className="contacts">
                    {
                        contacts.map((contact, index) => {
                            return (
                                <div className={`contact ${index === currentSelected ? "selected" : "''"}`}
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
                            )
                        })
                    }
                </div>
                <div className="current-user">
                    <div className="avatar">
                        <img 
                            src={`data:image/svg+xml;base64,${setCurrentUserImage}`}
                            alt="avatar"
                        />
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

const Container = styled.div;

export default Contacts;