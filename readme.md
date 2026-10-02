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

## Deployment

Every push to `main` runs the
[Deploy VitePress site to Pages](./.github/workflows/deploy-vitepress.yml)
workflow. The workflow installs dependencies, builds `docs/`, uploads the
generated artifact, and deploys it to GitHub Pages.
