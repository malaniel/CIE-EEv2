import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Executive Copilot Immersion",
  description:
    "Practical Microsoft 365 Copilot workflows for commercial banking leaders.",
  base: "/CIE-EEv2/",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/CIE-EEv2/CoworkIcon.png" }]],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Immersion materials",
        items: [
          { text: "Commercial Bank Lab", link: "/orientation/" },
          { text: "Executive Prompt Library", link: "/weekly-update/" },
          { text: "Chief of Staff Agent", link: "/make-it-your-own/" },
        ],
      },
      { text: "Resources", link: "/resources/" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Immersion materials",
        items: [
          { text: "Commercial Bank Lab", link: "/orientation/" },
          { text: "Executive Prompt Library", link: "/weekly-update/" },
          { text: "Chief of Staff Agent", link: "/make-it-your-own/" },
        ],
      },
      {
        text: "Take it with you",
        items: [
          { text: "Resources", link: "/resources/" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/malaniel/CIE-EEv2/",
      },
    ],
    footer: {
      copyright: "© 2025 Microsoft. All rights reserved.",
    },
  },
});
