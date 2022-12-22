import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {BiPowerOff} from 'react-icons/bi'
import Logout from './Logout';
import ChatInput from './ChatInput';
import Message from './Message';

function ChatContainer({ currentChat }) {

    const handSendMsg = async (msg) => {}

    return (
        <>
            {currentChat && (
                <Container>
                    <div className="chat-header">
                        <div className="user-details">
                            <div className="avatar">
                                <img src={`data:image/svg+xml;base64,${currentChat?.avatarImage}`} alt="avatar" />
                            </div>
                            <div className="username">
                                <h3>{currentChat?.username}</h3>
                            </div>
                        </div>
                        <Logout/>
                    </div>
                    <Message/>
                    <ChatInput handSendMsg={handSendMsg} />
                </Container>
            )}
        </>
    );
}

const Container = styled.div`
    padding-top: 1rem;
    .chat-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        .user-details {
            display: flex;
            align-items: center;
            gap: 1rem;
            .avatar {
                img {
                    height: 3rem;
                }
            }
            .username {
                h3 {
                    color: white
                }
            }
        }
    }
`;

export default ChatContainer;
