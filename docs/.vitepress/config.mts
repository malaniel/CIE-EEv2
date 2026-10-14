import { defineConfig } from "vitepress";

const siteTitle = "Copilot Immersion Experience for Banking Leaders";
const siteDescription =
  "Practical Microsoft 365 Copilot workflows for commercial banking leaders.";
const frenchTitle =
  "Expérience immersive Copilot pour les dirigeants du secteur bancaire";
const frenchDescription =
  "Des scénarios Microsoft 365 Copilot concrets pour les dirigeants des services bancaires aux entreprises.";
const englishMaterials = [
  { text: "Commercial Bank Lab", link: "/commercial-bank-lab/" },
  { text: "Executive Prompt Library", link: "/executive-prompt-library/" },
  { text: "Chief of Staff Agent", link: "/chief-of-staff-agent/" },
  { text: "Prompting Best Practices", link: "/prompting-best-practices/" },
];
const frenchMaterials = [
  {
    text: "Atelier — Services bancaires aux entreprises",
    link: "/fr/commercial-bank-lab/",
  },
  {
    text: "Bibliothèque de requêtes pour la direction",
    link: "/fr/executive-prompt-library/",
  },
  { text: "Agent Chef de cabinet", link: "/fr/chief-of-staff-agent/" },
  { text: "Trucs & Astuces", link: "/fr/prompting-best-practices/" },
];

export default defineConfig({
  title: siteTitle,
  description: siteDescription,
  base: "/CIE-EEv2/",
  cleanUrls: true,
  locales: {
    root: { lang: "en-US", label: "English" },
    fr: {
      lang: "fr-CA",
      label: "Français",
      title: frenchTitle,
      description: frenchDescription,
      themeConfig: {
        siteTitle: "Expérience immersive Copilot",
        logoLink: "/CIE-EEv2/fr/",
        nav: [
          { text: "Accueil", link: "/fr/" },
          { text: "Ressources de l’expérience", items: frenchMaterials },
        ],
        sidebar: [
          { text: "Ressources de l’expérience", items: frenchMaterials },
        ],
        outline: { label: "Sur cette page", level: "deep" },
        returnToTopLabel: "Retour en haut",
        sidebarMenuLabel: "Menu",
        langMenuLabel: "Changer de langue",
        skipToContentLabel: "Aller au contenu",
        darkModeSwitchLabel: "Apparence",
        lightModeSwitchTitle: "Passer au thème clair",
        darkModeSwitchTitle: "Passer au thème sombre",
        docFooter: { prev: "Page précédente", next: "Page suivante" },
        footer: {
          copyright: "© 2025 Microsoft. Tous droits réservés.",
        },
      },
    },
  },
  head: [
    ["link", { rel: "icon", href: "/CIE-EEv2/CoworkIcon.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { name: "twitter:card", content: "summary" }],
  ],
  transformHead({ pageData, siteData }) {
    const path = pageData.relativePath
      .replace(/(^|\/)index\.md$/, "$1")
      .replace(/\.md$/, "");
    const title = pageData.title || siteData.title;
    const description = pageData.description || siteData.description;

    return [
      ["meta", { property: "og:title", content: title }],
      ["meta", { property: "og:description", content: description }],
      [
        "meta",
        {
          property: "og:url",
          content: `https://malaniel.github.io/CIE-EEv2/${path}`,
        },
      ],
      ["meta", { name: "twitter:title", content: title }],
      ["meta", { name: "twitter:description", content: description }],
    ];
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Immersion materials",
        items: englishMaterials,
      },
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          fr: {
            translations: {
              button: {
                buttonText: "Rechercher",
                buttonAriaLabel: "Rechercher dans le site",
              },
              modal: {
                displayDetails: "Afficher les détails",
                resetButtonTitle: "Effacer la recherche",
                backButtonTitle: "Fermer la recherche",
                noResultsText: "Aucun résultat pour",
                footer: {
                  selectText: "sélectionner",
                  selectKeyAriaLabel: "Entrée",
                  navigateText: "naviguer",
                  navigateUpKeyAriaLabel: "Flèche vers le haut",
                  navigateDownKeyAriaLabel: "Flèche vers le bas",
                  closeText: "fermer",
                  closeKeyAriaLabel: "Échap",
                },
              },
            },
          },
        },
      },
    },
    sidebar: [
      {
        text: "Immersion materials",
        items: englishMaterials,
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
