import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class CommentBox extends Component {
	constructor(props) {
  		super(props);
  		this.state = { comment : '' };
  	}  	
  	onHandleChange(event) {
  		this.setState ({
  			comment: event.target.value
  		});
  	}
  	handleSumbit(event) {
  		event.preventDefault();
      this.props.saveComment(this.state.comment);
  		this.setState ({	comment: ''	});
  	}
  	render() {
  	
	    return (
	      <form className="comment-box" onSubmit= {this.handleSumbit.bind(this)}>
	      	<textarea onChange = {this.onHandleChange.bind(this)} value={this.state.comment}/>
			<button action ="submit">Submit</button>
	      </form>
	    );
  	}
}

export default connect(null,actions)(CommentBox)

