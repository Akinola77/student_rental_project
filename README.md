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

Contact, careers, partner, academy and event forms POST to **`/api/contact`** (Node.js runtime). Mail is sent with **Amazon SES v2 in `eu-west-1`** using the Amplify SSR compute IAM role (`CloudhightAmplifySSRComputeRole`) and the default AWS credential provider chain. There are no hardcoded AWS keys. `From` is always `info@cloudhight.com`; the visitor address is **Reply-To** on the internal copy only.

Public submissions **fail closed** until Turnstile and DynamoDB rate limiting are configured. In-memory rate limiting is not used.

**Branch environment variables** (never put secrets in `NEXT_PUBLIC_*`):

| Variable | Public? | Required | Purpose |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Yes | Canonical site URL |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Yes (widget site key) | Yes | Cloudflare Turnstile widget |
| `TURNSTILE_SECRET_KEY` | **No** | Yes | Server-side Turnstile verification |
| `CONTACT_RATE_LIMIT_TABLE` | **No** | Yes | DynamoDB table name for per-IP rate limits |

SES sender/recipient are fixed in code to `info@cloudhight.com` in `eu-west-1`. Amplify already injects `AWS_REGION` and the compute role credentials.

### Amazon SES + security (Amplify compute)

1. Confirm `cloudhight.com` is a verified SES identity in **eu-west-1** with DKIM and production access (already done).
2. Attach SES and DynamoDB permissions to **`CloudhightAmplifySSRComputeRole`** (do not paste access keys into Amplify):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "SendFromVerifiedIdentity",
      "Effect": "Allow",
      "Action": ["ses:SendEmail", "ses:SendRawEmail"],
      "Resource": [
        "arn:aws:ses:eu-west-1:<account-id>:identity/cloudhight.com",
        "arn:aws:ses:eu-west-1:<account-id>:identity/info@cloudhight.com"
      ]
    },
    {
      "Sid": "ContactRateLimit",
      "Effect": "Allow",
      "Action": ["dynamodb:UpdateItem"],
      "Resource": "arn:aws:dynamodb:eu-west-1:<account-id>:table/<CONTACT_RATE_LIMIT_TABLE>"
    }
  ]
}
```

3. Create the DynamoDB table in **eu-west-1** (on-demand billing is enough):
   - Partition key: `pk` (String)
   - TTL attribute: `ttl`
   - Example name: `cloudhight-contact-rate-limit`
4. Create a Cloudflare Turnstile widget for the test (and later production) hostname. Put the **site** key in `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and the **secret** in `TURNSTILE_SECRET_KEY`.
5. Redeploy the Amplify branch after saving variables and IAM.

Each successful enquiry sends two SES messages: an internal notification to `info@cloudhight.com`, then an acknowledgement to the visitor. If the acknowledgement fails, the API still returns success because the team already has the enquiry. Job applications attach the CV (PDF or Word, max 4 MB).

### Prove WEB_COMPUTE is executing route handlers

Amplify’s documented SSR range is Next.js 12–15; this app is **16.3.4**. A successful static build does **not** prove App Router handlers run. After a test deploy:

```bash
curl -sS https://<amplify-test-host>/api/health
```

Expect JSON with `"ok": true`, `"runtime": "nodejs"`, and a live `time`. If that URL 404s or returns HTML, Hosting is not running compute for this Next 16 app — do not enable public forms on that deployment.

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

Forms email `info@cloudhight.com` through SES once Turnstile, the rate-limit table, and the compute IAM policy are in place. Content Admin and MotivaLogic Academy routes are unpublished (404).

If the first Amplify build fails on Next.js **16**, Amplify’s documented SSR range is Next.js 12–15. Use the build logs, then we can pin Next.js 15 for Hosting if required.
