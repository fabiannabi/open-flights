# frozen_string_literal: true

# Will create an airline model that transfers name to slug
class Airline < ApplicationRecord
  has_many :reviews

  # this will run the method before its inserted in de DB
  before_create :slugify

  # this method will take the name before passing it to the data base and make it a slug
  def slugify
    # this is the correct way to  sets the value to the attribute
    # parameterize("Donald E. Knuth") # => "donald-e-knuth"
    self.slug = name.parameterize
  end

  def avg_score
    return 0 unless reviews.count.positive?

    reviews.average(:score).round(2).to_f
  end
end
