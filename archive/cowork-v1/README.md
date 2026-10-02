# Cowork v1 archive

This directory preserves reusable material from the original Copilot Cowork
site without publishing it through VitePress.

## Contents

<!-- markdownlint-disable MD013 -->

| Path | Original purpose |
| --- | --- |
| `orientation/` | Orientation lab page, screenshots, and project tracker |
| `weekly-update/` | Weekly update lab page, screenshots, and sound-like-me skill |
| `make-it-your-own/` | Custom skill exercise page and screenshots |
| `learn-cowork-with-cowork/` | Take-home Cowork course page and skill |
| `resources/` | Original Cowork resources page |
| `public-downloads/` | Files that were previously copied directly to the public site |
| `theme/` | Custom `PathChooser` component previously registered by the VitePress theme |

<!-- markdownlint-enable MD013 -->

The page Markdown was restored from repository commit
`d1072665755f74f7152c8d7d0e5ded0bd057edc1`. The assets were moved from their
later route locations when the current site was cleaned up.

## Reusing an artifact

Do not link directly to this directory from a live page. Copy the relevant
files into the repository staging workspace first:

```powershell
.\scripts\Stage-Content.ps1 `
  -Path ".\archive\cowork-v1\orientation\assets\project-tracker.csv"
```

Adapt the staged copy, then move the finished artifact under the appropriate
`docs/<page>/` directory.

The full original site also remains available through Git history.
