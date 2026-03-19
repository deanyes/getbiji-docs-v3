/** @type {import('@tomehq/core').TomeConfig} */
export default {
  basePath: "/getbiji-docs-v3",
  name: "Get笔记帮助中心",
  theme: {
    preset: "amber",
    mode: "light",
    accent: "#333333",
    fonts: {
      heading: "Inter",
      body: "Inter", 
      code: "JetBrains Mono"
    }
  },
  navigation: [
    {
      group: "开始使用",
      pages: [
        "getting-started/download",
        "getting-started/quickstart",
      ],
    },
    {
      group: "社区精选",
      pages: [
        "use-cases/index",
        "testimonials/index",
      ],
    },
    {
      group: "开口记",
      pages: [
        "recording/voice-memo",
        "recording/meeting",
        "recording/classroom",
        "recording/screen-record",
      ],
    },
    {
      group: "随手拍",
      pages: [
        "recording/photo",
        "recording/book-scan",
      ],
    },
    {
      group: "一键存",
      pages: [
        "recording/link",
        "recording/import-media",
      ],
    },
    {
      group: "录音增强",
      pages: [
        "recording/voiceprint",
        "recording/vocabulary",
        "recording/voice-command",
      ],
    },
    {
      group: "知识库",
      pages: [
        "knowledge-base/create",
        "knowledge-base/upload",
        "knowledge-base/subscribe-live",
        "knowledge-base/subscribe-creator",
        "knowledge-base/add-notes",
        "knowledge-base/share",
      ],
    },
    {
      group: "GetSeed 录音卡",
      pages: [
        "getseed/index",
        "getseed/quickstart",
        "getseed/device",
        "getseed/liubixiefu",
        "getseed/sprout",
        "getseed/faq",
      ],
    },
    {
      group: "快捷操作",
      pages: [
        "shortcuts/siri",
        "shortcuts/ios-shortcuts",
        "shortcuts/widget",
      ],
    },
    {
      group: "开发者",
      pages: [
        "developer/index",
        "developer/skill",
      ],
    },
    {
      group: "常见问题",
      pages: [
        "faq/index",
      ],
    },
    {
      group: "版本更新",
      pages: [
        "changelog/index",
        "changelog/ios",
        "changelog/android",
        "changelog/harmonyos",
      ],
    },
  ],
  vite: {
    base: "/getbiji-docs-v3/",
    server: {
      allowedHosts: true
    }
  }
};
