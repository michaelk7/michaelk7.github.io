# michaelkelnar.com

Personal site built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321, drafts visible
npm run build    # production build into dist/, drafts excluded
```

## Editing content

| What | Where |
| --- | --- |
| Name, role, links, email, certifications, skills | `src/consts.ts` |
| Projects | `src/content/projects/*.md` |
| Write-ups | `src/content/writeups/*.md` |
| Home lab page | `src/pages/lab.astro` |
| Resume | drop the PDF at `public/resume.pdf` (the Resume button appears automatically) |
| PGP key | `public/pgp.asc` |
| Social preview image | `node scripts/og-image.mjs` regenerates `public/og.png` |

Set `draft: true` in a post or project's frontmatter to keep it out of the live site. Drafts still show in `npm run dev` with a "draft" badge. Certifications marked `placeholder: true` work the same way.

`public/.well-known/security.txt` expires 2027-10-17. Bump the `Expires` date before then.
