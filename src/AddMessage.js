import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component{
  state={
  	message: '',
  }
  isDisabled = () => {
    return this.state.message=== '';
  };
 
  handelInputChange=(event)=>{
  	const{ value }=event.target ;
    this.setState(()=>({message: value}));
  }
  handelAddSubmit=(event)=>{
  	event.preventDefault();
    this.props.onAddMessage(this.state.message);
    this.setState({message:''});
  }
  render(){
	return(
    	<div>
              <form className="input-group" onSubmit={this.handelAddSubmit}>
                <input type="text" 
      				  className="form-control" 
      				  placeholder="Enter your message..." 
      				  value={this.state.message}  
      				  onChange={this.handelInputChange}
                />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
    );
}
}
AddMessage.propTypes = {
  onAddMessage: PropTypes.func.isRequired,
};
export default AddMessage;