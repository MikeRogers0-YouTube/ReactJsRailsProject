class Comment extends React.Component {
  render () {
    return (
      <li>
        <div>Body: {this.props.body}</div>
        <div>Name: {this.props.name}</div>
      </li>
    );
  }
}

Comment.propTypes = {
  body: React.PropTypes.string,
  name: React.PropTypes.string
};
