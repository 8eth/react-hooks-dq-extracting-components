import React from 'react';
import Message from "./Message";

function MessageList({ messages }) {
    return (
      <>
        <h2>Messages</h2>,
        <section className="messages">
          <ul>
            {messages.map((message) => {
              return (
                <Message
                  key={message.id}
                  letter={message.name[0]}
                  content={message.content}
                  type={message.type}
                />
              );
            })}
          </ul>
        </section>
      </>
    );
  }

export default MessageList;