require 'redmine'
require 'issue_tabs_listener.rb'

Redmine::Plugin.register :redmine_issue_history_tabs do
  name 'Redmine Issue History Tabs plugin'
  author 'Daniel MunnKonstantin Zaitsev'
  description 'This plugin provide history of issue in tabs representation'
  version '0.0.3'
end
