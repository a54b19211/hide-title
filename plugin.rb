# frozen_string_literal: true

# name: hide-title
# version: 1.0
# authors: bipu
# about: 隐藏topic标题

enabled_site_setting :hide_title_enabled

# after_initialize do
#   #在初始化后执行插件逻辑
#   module ::HideTitle
#     class Engine < ::Rails::Engine
#       engine_name 'hide_title'
#       isolate_namespace HideTitle
#     end
#   end
#
#   # 版船到主融显示渗辑
#   add_to_serializer(:topic_list_item, :show_title?) do
#     !SiteSetting.hide_title_enabled
#   end
#
#   # # 使用插件扩展页面
#   Discourse::Application.routes.append do
#     get "/hide-title" => "hide_title#index"
#   end
#
# end
