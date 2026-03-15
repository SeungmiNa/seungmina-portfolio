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

- `**next.config.mjs**` is the only config: no `output: 'export'`, `trailingSlash: true`, images optimized on Vercel. (`**next.config.ts**` was removed — Next 14.2 doesn’t support it.)
- `**package.json**` deploy script is now `"deploy": "next build"`.
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
  - Root Directory: `**.`** (leave default unless monorepo).
  - **Install Command:** leave **default** (empty). Vercel uses your lockfile and runs `npm install` / `yarn` / `pnpm install` automatically.
  - Build Command: `**next build`** (default).
  - Output Directory: leave **default** (do not set `out` — we’re using full Next.js, not static export).
4. Add environment variables (see step 3).
5. Click **Deploy**. Vercel will build and give you a `*.vercel.app` URL.

---

## 5. Point seungmina.com (GoDaddy) to Vercel

Do this **after** your first Vercel deploy is working. You’re moving the domain from GitHub Pages (GoDaddy DNS) to Vercel.

### 5.1 Add the domain in Vercel

1. In Vercel: open your project → **Settings** → **Domains**.
2. Add `**seungmina.com`** (apex/root).
3. Add `**www.seungmina.com**` if you use www (Vercel will redirect one to the other; you can choose which is primary).
4. Vercel will show the DNS records you need. Use the **exact** values shown (they can be project-specific):
   - **Apex (seungmina.com):** **A** record — Name `@`, Value the IP(s) Vercel lists (e.g. `216.198.79.1`; add all if multiple).
   - **www:** **CNAME** record — Name `www`, Value the hostname Vercel lists (e.g. `cc305b201ba68ad3.vercel-dns-017.com` or `cname.vercel-dns.com`).

Always copy from the Domains page; do not guess.

### 5.2 Update DNS in GoDaddy

1. Log in at [GoDaddy](https://www.godaddy.com) → **My Products** → **DNS** for **seungmina.com**.
2. **Remove or update** the records that currently point to GitHub Pages, for example:
  - Any **CNAME** pointing to `username.github.io` (or similar) → delete or replace.
  - Any **A** records pointing to GitHub’s IPs (e.g. `185.199.108.153`) → delete or replace.
3. **Add** the records Vercel gave you:
  - For **apex (seungmina.com):**  
    - If Vercel says **A records:** add 4 A records with Vercel’s IPs (e.g. `76.76.21.21` and others they list).  
    - If Vercel says **CNAME:** add a CNAME for `@` (or “apex”) to `cname.vercel-dns.com` (only if GoDaddy allows CNAME on apex).
  - For **www:** add the **CNAME** record Vercel lists (Name `www`, Value the hostname they show).
4. Save. DNS can take from a few minutes up to 48 hours to propagate.

### 5.3 Verify in Vercel

- In **Settings → Domains**, Vercel will show a checkmark when the domain is correctly pointing to Vercel.
- Visit **[https://seungmina.com](https://seungmina.com)** (and **[https://www.seungmina.com](https://www.seungmina.com)**) to confirm the site loads from Vercel.

### 5.4 (Optional) Remove domain from GitHub Pages

- In GitHub: repo → **Settings** → **Pages** → under “Custom domain”, remove **seungmina.com** so GitHub no longer claims it. Only do this after the site is live on Vercel.

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

- Branch: `vercel-migration` created
- Single Next config (`next.config.mjs`), `next.config.ts` removed
- `package.json` deploy script simplified to `next build`
- GitHub Actions workflow disabled (`nextjs.yml` → `nextjs.yml.disabled`)
- Env vars set in Vercel
- Repo imported and first deploy done on Vercel
- (Optional) Custom domain and DNS configured

