class Comment < ApplicationRecord
  after_create { CommentRelayJob.perform_later(self) }
end
