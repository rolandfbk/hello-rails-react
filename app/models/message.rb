class Message < ApplicationRecord
  def as_json(_options = {})
    { text: text }
  end
end
