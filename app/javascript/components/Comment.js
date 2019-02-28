import React from "react"
import PropTypes from "prop-types"

class Comment extends React.Component {
  render () {
    return (
      <li className="col-4">
        <div>Name: {this.props.name}</div>
        <div>Message: {this.props.message}</div>
      </li>
    );
  }
}

Comment.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string
};
export default Comment
