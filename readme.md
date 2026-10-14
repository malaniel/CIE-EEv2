# Copilot Immersion Experience for Banking Leaders

Source for the
[Copilot Immersion Experience for Banking Leaders](https://malaniel.github.io/CIE-EEv2/)
GitHub Pages site.

The site presents practical Microsoft 365 Copilot materials for commercial
banking leaders:

- Commercial Bank Lab
- Executive Prompt Library
- Chief of Staff Agent
- Prompting Best Practices

## Repository structure

<!-- markdownlint-disable MD013 -->

| Path | Purpose |
| --- | --- |
| `docs/` | Public VitePress site source. Content here can become part of the deployed site. |
| `docs/public/` | Files copied directly to the site root. Keep only intentional public downloads and site assets here. |
| `archive/cowork-v1/` | Reusable Cowork-era pages and assets retained outside the published site. |
| `content-staging/` | Local, git-ignored workspace for incoming Markdown, images, and other source artifacts. |
| `scripts/Stage-Content.ps1` | Copies incoming files into the appropriate staging subfolder. |
| `.github/workflows/deploy-vitepress.yml` | Builds and deploys the site to GitHub Pages after a push to `main`. |

<!-- markdownlint-enable MD013 -->

## Local development

Install dependencies:

```powershell
npm ci
```

Start the development server:

```powershell
npm run docs:dev
```

Build the production site:

```powershell
npm run docs:build
```

Lint published Markdown:

```powershell
npm run lint:md
```

## Stage content for a future update

Do not place drafts or unreviewed assets directly under `docs/`. Markdown below
`docs/` can become a public route, while files in `docs/public/` are copied
directly into the deployment.

Use the staging helper instead:

```powershell
.\scripts\Stage-Content.ps1 -Path "C:\path\to\outline.md"
.\scripts\Stage-Content.ps1 -Path "C:\path\to\diagram.png"
```

The helper copies:

- Images to `content-staging/images/`
- Markdown and text sources to `content-staging/sources/`
- Other formats to `content-staging/other/`

Staged files are intentionally ignored by Git. Edit and review them there, then
move only final material into the appropriate page:

```powershell
Move-Item `
  -LiteralPath ".\content-staging\images\diagram.png" `
  -Destination ".\docs\prompting-best-practices\assets\diagram.png"
```

Reference page assets with a relative Markdown path:

```markdown
![Description](./assets/diagram.png)
```

For a new page, create `docs/<page-slug>/index.md`, add any images under that
page's `assets/` directory, and add the route to
`docs/.vitepress/config.mts`.

See [content-staging/README.md](./content-staging/README.md) for the complete
workflow.

## Reuse archived material

The [Cowork v1 archive](./archive/cowork-v1/) contains the earlier learning
pages, screenshots, sample data, downloadable skills, and the custom path
chooser component.

Archive content is not published or included in site search. Copy only the
artifact you want to reuse into `content-staging/`, adapt it, and then move the
finished version into `docs/`.

## English and Canadian French

English remains at the existing URLs. The complete Canadian French experience
starts at [`/fr/`](https://malaniel.github.io/CIE-EEv2/fr/), with matching
home, lab, prompt library, agent guide, and prompting best practices pages.
Use the language menu in the header (or the mobile navigation menu) to switch
between **English** and **Français** on the corresponding page.

French source lives under `docs/fr/`. Keep matching page slugs and explicit
heading IDs so language switching preserves the page and section. French
navigation and content links must remain under `/fr/`.

Use professional Canadian French, address readers with **vous**, and translate
prompts as **requêtes (prompts)** on first mention, then **requêtes**.
The French prompting best practices page is titled **Trucs & Astuces**.
The localized agent is named **Chef de cabinet**; its instructions default
to Canadian French while allowing the user to request another language.

The sample workbook remains English; preserve its sheet and column names.
The home-page Top Tips graphic also remains English, with a French text
equivalent and an explicit label. The meeting-preparation illustration in the
French prompting guide is already localized. Replace remaining graphics with
approved French assets when available.

Update both language versions together when changing content, and review
copy-ready examples and governance safeguards in both languages. Keep drafts
and unreviewed replacement images in `content-staging/`, then promote approved
content into `docs/fr/`. Before deployment, run `npm run lint:md` and
`npm run docs:build`, and check desktop/mobile language switching, French
search, and page links.

## Deployment

Every push to `main` runs the
[Deploy VitePress site to Pages](./.github/workflows/deploy-vitepress.yml)
workflow. The workflow installs dependencies, builds `docs/`, uploads the
generated artifact, and deploys it to GitHub Pages.
