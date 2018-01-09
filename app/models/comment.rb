class Comment < ApplicationRecord
  after_commit ->{ CommentRelayJob.perform_later(self) }, on: :create
end
