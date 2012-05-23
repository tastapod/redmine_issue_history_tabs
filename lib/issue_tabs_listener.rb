require 'redmine'

class IssueTabsViewListener < Redmine::Hook::ViewListener

  # Adds javascript
  def view_layouts_base_html_head(context)
    javascript_include_tag('issue-history-tabs.js', :plugin => :redmine_issue_history_tabs)
    stylesheet_link_tag('issue_history_tabs.css', :plugin => :redmine_issue_history_tabs)
  end

end
