import React, { Component } from 'react';
import ChatHistory from './ChatHistory';
import AddMessage from './AddMessage';
import PropTypes from 'prop-types'

class ChatWindow extends Component{
  onAddMessage=(message)=>{
  	this.props.onAddMessage(message,this.props.user.username);
  }
  render(){
  	const {user,messages}=this.props;
  	return(
      	<div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>
      			<ChatHistory messages={messages} user={user}/>
      			<AddMessage  onAddMessage={this.onAddMessage}/>
      	 	</div>
  )
}
}
ChatWindow.propTypes = {
	onAddMessage:PropTypes.func.isRequired,
  	user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};
export default ChatWindow;