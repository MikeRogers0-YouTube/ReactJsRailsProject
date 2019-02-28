require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ReactJsRailsProject
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Don't make most the unit tests in scaffolding.
    config.generators do |g|
      g.system_tests = false
      g.helper false
      g.assets false
      g.helper false
      g.view_specs false
      g.decorator false
      g.jbuilder false
    end

    config.active_job.queue_adapter = :async
    
    if ENV['REDIS_URL'].present?
      config.redis = { url: ENV['REDIS_URL'], network_timeout: 5 }
      config.cache_store = :redis_store, { url: ENV['REDIS_URL'], network_timeout: 5 }

      # If we have a REDIS_URL, lets assume we want sidekiq also.
      config.active_job.queue_adapter = :sidekiq
    end
  end
end
