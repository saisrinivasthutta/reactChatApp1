import "./index.css";

const MessageItem = (props) => {
  const { messageObject } = props;
  console.log(messageObject);
  const { user, message } = messageObject;

  return (
    <div className="message-item-container">
      <div className="user-container">
        <div className="profile-container">
          <h1 className="p-icon">{user[0]}</h1>
        </div>
        <h1 className="user-head">{user}</h1>
      </div>

      <div className="message-container">{message}</div>
    </div>
  );
};

export default MessageItem;
