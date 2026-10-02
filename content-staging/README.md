# Content staging

Use this directory as a temporary workspace for source documents, images, and
other artifacts that may become site content.

Everything in this directory except this README and `.gitignore` is ignored by
Git. Staging files therefore cannot be deployed accidentally.

## Copy files into staging

From the repository root:

```powershell
.\scripts\Stage-Content.ps1 -Path "C:\path\to\source.md"
.\scripts\Stage-Content.ps1 -Path "C:\path\to\image.png"
```

You can stage several files in one call:

```powershell
.\scripts\Stage-Content.ps1 -Path @(
  "C:\path\to\outline.md",
  "C:\path\to\diagram.png"
)
```

The helper sorts files into:

- `sources/` for Markdown and text
- `images/` for common web image formats
- `other/` for all other file types

It refuses to overwrite an existing staged file. Rename or remove the existing
copy before staging another file with the same name.

## Promote finished content

Move a reviewed image into the target page's asset directory:

```powershell
Move-Item `
  -LiteralPath ".\content-staging\images\diagram.png" `
  -Destination ".\docs\<page-slug>\assets\diagram.png"
```

For Markdown, create or update `docs/<page-slug>/index.md` and incorporate the
reviewed source content. Add VitePress frontmatter and adjust headings, links,
callouts, and image paths to match the rest of the site.

Run the build before committing:

```powershell
npm run lint:md
npm run docs:build
```
