import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatHistory extends Component{
  render(){
  const{messages,user}=this.props;	
  return(
    	<div>
      		<ul className="message-list">
             {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === user.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))} 
            </ul> 
	
      	</div>
    );
 }
}
ChatHistory.propTypes={
	messages:PropTypes.array.isRequired,
	user:PropTypes.object.isRequired
}
export default ChatHistory;