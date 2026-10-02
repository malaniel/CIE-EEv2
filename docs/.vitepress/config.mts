import { defineConfig } from "vitepress";

export default defineConfig({
  title: "AI Skill Building with Cowork",
  description:
    "Hands-on flights for building real AI skills with Microsoft 365 Copilot Cowork.",
  base: "/how-to-use-cowork/",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/how-to-use-cowork/CoworkIcon.png" }]],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Flights",
        items: [
          { text: "Flight 01 · Orientation Through Discovery", link: "/orientation/" },
          { text: "Flight 02 · Your Weekly Manager Update", link: "/weekly-update/" },
          { text: "Flight 03 · Make It Your Own", link: "/make-it-your-own/" },
        ],
      },
      { text: "Learn Cowork with Cowork", link: "/learn-cowork-with-cowork/" },
      { text: "Resources", link: "/resources/" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Flights",
        items: [
          { text: "Flight 01 · Orientation Through Discovery", link: "/orientation/" },
          { text: "Flight 02 · Your Weekly Manager Update", link: "/weekly-update/" },
          { text: "Flight 03 · Make It Your Own", link: "/make-it-your-own/" },
        ],
      },
      {
        text: "Take it with you",
        items: [
          { text: "Learn Cowork with Cowork", link: "/learn-cowork-with-cowork/" },
          { text: "Resources", link: "/resources/" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/malaniel/how-to-use-cowork/",
      },
    ],
    footer: {
      copyright: "© 2025 Microsoft. All rights reserved.",
    },
  },
});
