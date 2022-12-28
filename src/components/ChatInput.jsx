import styled from 'styled-components';
import Picker, { EmojiStyle, Theme } from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io';
import { IoMSend } from 'react-icons/bs';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { useState } from 'react';

function ChatInput({ handleSendMsg }) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState('');
    const handEmojiPickerHideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const handleEmojiClick = (emojiData, event) => {
        let message = msg;
        message += emojiData.emoji;
        setMsg(message);
    };

    const sendChat = (event) => {
        event.preventDefault();
        if (msg.length > 0) {
            handleSendMsg(msg);
            setMsg('');
        }
    };

    return (
        <Container>
            <div className="button-container">
                <div className="emoji">
                    <BsEmojiSmileFill onClick={handEmojiPickerHideShow} />
                    {showEmojiPicker && (
                        <Picker emojiStyle={EmojiStyle.APPLE} onEmojiClick={handleEmojiClick} theme={Theme.AUTO} />
                    )}
                </div>
            </div>
            <form action="" className="input-container" onSubmit={(event) => sendChat(event)}>
                <input
                    type="text"
                    placeholder="Type your message here"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                />
                <button className="submit">
                    <IoMdSend />
                </button>
            </form>
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 5% 95%;
    align-items: center;
    background-color: #180718;
    padding: 0.2rem;
    padding-bottom: 0.3rem;
    .button-container {
        display: flex;
        align-items: center;
        color: white;
        gap: 1rem;
        .emoji {
            position: relative;
            svg {
                font-size: 1.5rem;
                color: #ffff00c8;
                cursor: pointer;
            }
            .EmojiPickerReact {
                position: absolute;
                top: -462px;
                .epr-body::-webkit-scrollbar {
                    background-color: #080420;
                    width: 5px;
                    &-thumb {
                        background-color: #9186f3;
                    }
                }
            }
        }
    }
    .input-container {
        width: 100%;
        border-radius: 2rem;
        display: flex;
        align-content: center;
        gap: 2rem;
        background-color: #ffffff34;
        input {
            width: 90%;
            background-color: transparent;
            color: white;
            border: none;
            padding-left: 1rem;
            font-size: 1.2rem;
            &::selection {
                background-color: #9186f3;
            }
            &:focus {
                outline: none;
            }
        }
        button {
            padding: 0.3rem 2rem;
            border-radius: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #9a86f3;
            border: none;
            svg {
                color: white;
                font-size: 2rem;
            }
        }
    }
`;

export default ChatInput;
