import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import uuid from "react-uuid";

import MessageItem from "../MessageItem";

import "./index.css";

const userNames = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const Home = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const addMessages = (e) => {
    const currentUserName = userNames[Math.floor(Math.random() * 4)];
    setMessages((prev) => [
      ...prev,
      { message: text, user: currentUserName, id: uuid() },
    ]);
  };

  return (
    <div className="home-container">
      <h1 className="head">React Chat App</h1>
      <div className="messages-container">
        {messages.map((message) => (
          <MessageItem messageObject={message} id={message.id} />
        ))}
        <InputEmoji
          value={text}
          onChange={setText}
          onEnter={addMessages}
          cleanOnEnter
          placeholder="Type a message"
          keepOpened
          background="transparent"
          borderColor="black"
        />
      </div>
    </div>
  );
};

export default Home;
