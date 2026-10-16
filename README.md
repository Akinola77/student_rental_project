# CloudHight Consulting

Marketing site for CloudHight Consulting — an AWS Advanced Consulting Partner based in Dublin.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion + Lucide icons

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Amplify Hosting (test and production)

This is a Next.js App Router app. Host it on **Amplify Hosting compute** (`WEB_COMPUTE`), not as a static `WEB` app.

Use two Git branches and two Amplify branches on the **same Amplify app**:

| Environment | Git branch | Amplify branch | Public URL |
| --- | --- | --- | --- |
| Test | `staging` | `staging` | `https://test.cloudhight.com` (or the Amplify `staging` URL until DNS is ready) |
| Production | `main` | `main` | `https://cloudhight.com` |

Workflow: merge work into `staging` to test, then merge `staging` into `main` to go live.

### 1. Create the Amplify app (test first)

1. Sign in to the [Amplify console](https://console.aws.amazon.com/amplify/).
2. **Create new app** → connect **GitHub** and authorise the repository that holds this site.
3. Select the **`staging`** branch first (create that branch in GitHub from the code you want to test if it does not exist yet).
4. Allow Amplify to **create a new service role**.
5. Confirm the app is detected as **Next.js** / SSR. Do not switch it to a static hosting type.
6. **Save and deploy**.

Build settings live in `amplify.yml` (`baseDirectory: .next`). Node `20` is pinned in `.nvmrc`.

### 2. Branch environment variables

**Hosting → Environment variables** (branch-specific):

- **`staging`:** `NEXT_PUBLIC_SITE_URL` = `https://test.cloudhight.com`  
  (use the Amplify branch URL until the test domain is attached)
- **`main`:** `NEXT_PUBLIC_SITE_URL` = `https://cloudhight.com`

Redeploy the branch after changing variables.

### 3. Add production

1. In the Amplify app, **Add branch** → `main`.
2. Set the production `NEXT_PUBLIC_SITE_URL` as above.
3. Optionally enable **branch auto-detection** only if you want every Git branch to get a preview URL. Keep production deploys limited to `main`.

### 4. Custom domains

**Hosting → Custom domains**:

- `test.cloudhight.com` → Amplify branch **`staging`**
- `cloudhight.com` and `www.cloudhight.com` → Amplify branch **`main`**

Add the DNS records Amplify shows in the domain registrar (or Route 53). Keep WordPress on `cloudhight.com` until you are ready to point production DNS at Amplify.

Password-protect **test** under **Hosting → Access control** so the staging site is not public.

### 5. After go-live

Contact, careers and partner forms still need a mailbox or form backend. Content Admin is a placeholder.

If the first Amplify build fails on Next.js **16**, Amplify’s documented SSR range is Next.js 12–15. Use the build logs, then we can pin Next.js 15 for Hosting if required.
