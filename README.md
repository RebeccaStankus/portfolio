# Portfolio

Rebecca Stankus - Software Engineer Portfolio

TypeScript full-stack portfolio app showcasing professional work and personal projects.

**Client:** SvelteKit UI with dark indigo-purple theme and sky blue accents
**API:** Express server (optional for future features)

---

## 📋 Structure

- **Home** - Bio, skills, and introduction
- **High Fidelity** - VR projects, web apps, and infrastructure work
- **Linden Lab** - Casino games, tutorials, and platform tools
- **Personal Projects** - Cluckingham Guard, Audio XR, Land of Merriment
- **About** - Detailed background, skills, and experience
- **Contact** - Contact information and message form

---

## ✅ Prerequisites

- Node 18+

---

## ⚙️ Setup

Install dependencies (from root):

```bash
npm install
```

This will install dependencies for both client and server workspaces.

---

## 🚀 Development

**Quick Start:**

```bash
npm run dev:client
```

Client runs at http://localhost:5173

**Optional - Run both client and server:**

Terminal 1:
```bash
npm run dev:server
```

Terminal 2:
```bash
npm run dev:client
```

---

## 🧪 Scripts

- `npm run dev:client` - Start client dev server
- `npm run dev:server` - Start API server
- `npm run build:client` - Production build (client)
- `npm run build:server` - Production build (server)
- `npm run lint` - Lint client code

---

## 🎨 Customization

Update content in:
- `client/src/routes/+page.svelte` - Home page bio
- `client/src/routes/high-fidelity/+page.svelte` - HiFi projects
- `client/src/routes/linden-lab/+page.svelte` - Linden projects
- `client/src/routes/projects/+page.svelte` - Personal projects
- `client/src/routes/about/+page.svelte` - About page
- `client/src/routes/contact/+page.svelte` - Contact info

Color scheme in `client/src/routes/global.css`

---

## 📝 License

See LICENSE.txt
