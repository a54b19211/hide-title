import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "hide-topic-title",

  initialize() {
    withPluginApi("0.8.13", (api) => {
      api.modifyClass("component:topic-list-item", {
        pluginId: "hide-topic-title",
        didInsertElement() {
          this._super(...arguments); // 调用原始的 didInsertElement 方法
          console.log('topic-进入插件内部')
          const title = this.element.querySelector(".topic-title");

          if(/t-bot-\d{13,13}/.test(title.innerText)){
            console.log('topic-插件匹配通过')
            title.style.display = "none";
          }
        },
      });

      api.onPageChange(() => {
        console.log('topic-detail-进入插件内部')
        // 判断是否是主题详情页
        if (window.location.pathname.includes("/t/")) {
          const topicTitle = document.querySelector(".title-wrapper h1");
          if(/t-bot-\d{13,13}/.test(topicTitle.innerText)){
            console.log('topic-detail-插件匹配通过')
            topicTitle.style.display = "none"; // 隐藏标题
          }
        }
      })

    });
  },
};
