import React from 'react'

const Chat = () => {
    return (
        <div className="chat-container">
      <header className="chat-header">
        <h1><i className="fas fa-smile"></i> ChatCord</h1>
        <a id="leave-btn" className="btn">Leave Room</a>
      </header>
      <main className="chat-main">
        <div className="chat-sidebar">
          <h3><i className="fas fa-comments"></i> Room Name:</h3>
          <h2 id="room-name"></h2>
          <h3><i className="fas fa-users"></i> Users</h3>
          <ul id="users"></ul>
        </div>
        <div className="chat-messages"></div>
      </main>
      <div className="chat-form-container">
        <form id="chat-form">
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autoComplete="off"
          />
          <button className="btn"><i className="fas fa-paper-plane"></i> Send</button>
        </form>
      </div>
    </div>
    )
}

export default Chat
