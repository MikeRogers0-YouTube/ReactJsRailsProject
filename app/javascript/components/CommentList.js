import React from "react"
import PropTypes from "prop-types"
import Comment from "./Comment"

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.socket = null;
    this.state = {comments: this.props.comments};
  }

  render () {
    return (
      <div>
        <ul className="row">
          {this.state.comments.map(function(comment) {
            return <Comment key={comment.id} {...comment} />
          })}
        </ul>
      </div>
    );
  }

  appendToCommentList(json_comment) {
    var comment = JSON.parse(json_comment);
    var comment_state = this.state.comments;
    comment_state.push(comment);
    this.setState({comments: comment_state});
  }

  componentDidMount() {
    this.socket = this.socket || this.subscribeToSocket();
  }


  subscribeToSocket () {
    var _this = this;
    return App.cable.subscriptions.create("CommentChannel", {
      received (data) {
        _this.appendToCommentList(data.comment);
      }
    });
  }
}

CommentList.propTypes = {
  comments: PropTypes.array
};

export default CommentList
