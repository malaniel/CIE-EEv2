import { defineConfig } from "vitepress";

const siteTitle = "Copilot Immersion Experience for Banking Leaders";
const siteDescription =
  "Practical Microsoft 365 Copilot workflows for commercial banking leaders.";

export default defineConfig({
  title: siteTitle,
  description: siteDescription,
  base: "/CIE-EEv2/",
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "/CIE-EEv2/CoworkIcon.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: siteTitle }],
    ["meta", { property: "og:description", content: siteDescription }],
    [
      "meta",
      {
        property: "og:url",
        content: "https://malaniel.github.io/CIE-EEv2/",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["meta", { name: "twitter:title", content: siteTitle }],
    ["meta", { name: "twitter:description", content: siteDescription }],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Immersion materials",
        items: [
          { text: "Commercial Bank Lab", link: "/commercial-bank-lab/" },
          { text: "Executive Prompt Library", link: "/executive-prompt-library/" },
          { text: "Chief of Staff Agent", link: "/chief-of-staff-agent/" },
          { text: "Prompting Best Practices", link: "/prompting-best-practices/" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Immersion materials",
        items: [
          { text: "Commercial Bank Lab", link: "/commercial-bank-lab/" },
          { text: "Executive Prompt Library", link: "/executive-prompt-library/" },
          { text: "Chief of Staff Agent", link: "/chief-of-staff-agent/" },
          { text: "Prompting Best Practices", link: "/prompting-best-practices/" },
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
