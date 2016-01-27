class CommentRelayJob < ApplicationJob
  queue_as :default

  def perform(comment)
    ActionCable.server.broadcast "CommentChannel", comment: comment.to_json
  end
end
