class CommentList extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.comments.map(function(comment) {
            return <Comment key={comment.id} {...comment} />
          })}
        </ul>
      </div>
    );
  }
}

CommentList.propTypes = {
  comments: React.PropTypes.array
};
