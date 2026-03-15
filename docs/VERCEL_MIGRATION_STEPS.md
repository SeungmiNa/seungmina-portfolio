# Vercel migration steps

Exact steps to move this Next.js portfolio from GitHub Pages to Vercel.

**Chosen approach: Option B (full Vercel)** — static export removed so Vercel can run full Next.js and optimize images (WebP/AVIF, sizing, CDN). Config and scripts are already updated in this repo.

---

## 1. Create a new branch

```bash
git checkout -b vercel-migration
```

---

## 2. Done in repo

- **`next.config.mjs`** is the only config: no `output: 'export'`, `trailingSlash: true`, images optimized on Vercel. (**`next.config.ts`** was removed — Next 14.2 doesn’t support it.)
- **`package.json`** deploy script is now `"deploy": "next build"`.
- **GitHub Pages workflow** disabled: `.github/workflows/nextjs.yml` → `nextjs.yml.disabled`.

---

## 3. Environment variables

- In **Vercel**: Project → Settings → Environment Variables.
- Add any vars you use in production (e.g. `NEXT_PUBLIC_BASE_PATH=""` or leave unset for root).
- Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` if you use Google Analytics (same as in GitHub Actions secrets).

---

## 4. Connect and deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (e.g. with GitHub).
2. **Add New Project** → Import your `seungmina-portfolio` repo.
3. **Configure:**
   - Framework Preset: **Next.js** (auto-detected).
   - Root Directory: **`.`** (leave default unless monorepo).
   - Build Command: **`next build`** (default).
   - Output Directory: leave **default** (do not set `out` — we’re using full Next.js, not static export).
4. Add environment variables (see step 3).
5. Click **Deploy**. Vercel will build and give you a `*.vercel.app` URL.

---

## 5. (Optional) Custom domain

- In Vercel: Project → **Settings** → **Domains**.
- Add your domain and follow the DNS instructions (CNAME or A record).

---

## 6. Merge when ready

```bash
git add .
git commit -m "chore: prepare for Vercel deployment"
git push -u origin vercel-migration
```

Open a PR into `main`, review, then merge.  
Vercel will deploy from `main` (or your production branch) automatically after you connect the repo.

---

## Summary checklist

- [ ] Branch: `vercel-migration` created
- [x] Single Next config (`next.config.mjs`), `next.config.ts` removed
- [x] `package.json` deploy script simplified to `next build`
- [x] GitHub Actions workflow disabled (`nextjs.yml` → `nextjs.yml.disabled`)
- [ ] Env vars set in Vercel
- [ ] Repo imported and first deploy done on Vercel
- [ ] (Optional) Custom domain and DNS configured
