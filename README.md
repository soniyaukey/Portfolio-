# Portfolio-
# 🚀 3D Personal Portfolio — Modern · Interactive · Futuristic

> A responsive, lightweight personal portfolio built with **React + Vite**, styled with **Tailwind CSS**, and powered by **React Three Fiber / Three.js** for immersive 3D effects. Smooth transitions are implemented with **Framer Motion**. Dark mode included.

## ✨ Project Overview

This portfolio is a visually rich, interactive single-page application that showcases skills, projects, achievements, and contact information using 3D scenes and animations. The goal is to present your work in an engaging, futuristic way while keeping performance, accessibility, and responsiveness top-of-mind.

Key features:

* Immersive 3D background and animated elements (floating shapes, particles, rotating cubes)
* Interactive 3D project gallery (clickable cards/cubes that expand to show details)
* About section with interactive 3D avatar or rotating info panel
* Contact section with 3D envelope animation and contact form
* Smooth section transitions with Framer Motion
* Dark / Light mode toggle
* Responsive and optimized for desktop and mobile

---

## 🧩 Tech Stack

* **Frontend:** React + Vite (TypeScript optional)
* **Styling:** Tailwind CSS
* **3D engine:** React Three Fiber (recommended) or Three.js
* **Animations:** Framer Motion
* **State / Routing:** React Router (optional) or single-page anchor navigation
* **Forms:** EmailJS / Netlify Functions / server endpoint
* **Deployment:** Vercel or Netlify

---

## 🎯 Design Goals / UX Principles

* Professional, futuristic aesthetic with subtle shadows, reflections, and depth cues.
* Smooth, non-intrusive animations that enhance rather than distract.
* Prioritize performance: LOD, lazy-loading, low-poly models, compressed textures.
* Accessibility: semantic HTML, keyboard navigation, sufficient color contrast, `aria-*` labels.

---

## 📂 Recommended Project Structure(SAMPLE)

```
project-root/
├── public/                      # static assets (glb/gltf models, favicons)
├── src/
│   ├── assets/                  # images / models / icons
│   ├── components/
│   │   ├── ThreeScene/          # R3F scene components (Particles, FloatingShapes)
│   │   ├── ProjectCard/         # 3D card wrapper + UI overlay
│   │   ├── Avatar/              # 3D avatar or model viewer
│   │   ├── Header.tsx           # name, role, nav, dark-mode toggle
│   │   ├── Footer.tsx
│   │   └── ContactForm.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── styles/                  # tailwind directives + custom styles
│   ├── utils/                   # helper functions, constants
│   ├── hooks/                   # useTheme, useCursor, useMedia
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json (optional)
├── package.json
└── README.md
```

---

## 🔧 Installation & Local Development

1. Clone the repo:

```bash
git clone <YOUR_REPO_URL>
cd <YOUR_PROJECT_FOLDER>
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Start the dev server:

```bash
npm run dev
```

4. Open `http://localhost:8080/`

---

## 📦 Example `package.json` (scripts)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint --ext .ts,.tsx,.js,.jsx src",
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,json,md}\""
  }
}
```

---

## 🛠 Implementation Notes & Tips

### 3D (React Three Fiber)

* Keep scenes simple. Use low-poly geometry for background elements (spheres, cubes, torus).
* Use `drei` ([@react-three/drei](https://github.com/pmndrs/drei)) utilities: `OrbitControls` (for development only), `Float`, `Text`, `Html` (for overlays), `useGLTF`.
* Use `Suspense` + `useProgress` for loading states.
* Batch many small particles with instancing (`Instances` from `drei`) or `points` for performance.
* Use baked environment maps or `Environment` from `drei` for subtle reflections.

### Animations

* Use Framer Motion for UI transitions (page enter/exit, modals, hover effects).
* For 3D transitions, animate object positions/rotations via R3F's `useFrame` or `react-spring/three`.

### Projects 3D Gallery

* Represent each project as a 3D card/cube (a flat plane or low-poly box).
* On hover, lift and add soft shadow + outline. On click, expand into a fullscreen modal using a combination of R3F (to animate the 3D object) and HTML overlay (for text, buttons).
* Include buttons for `Live Demo`, `GitHub`, and tags with tech stack.

### About / Avatar

* Use a stylized 3D avatar (glTF) or a rotating info panel with layered cards.
* Provide fallback static avatar for low-power devices.

### Contact

* Add an interactive 3D envelope that opens on click to reveal a contact form.
* Use an HTML form (with accessible labels) placed using `Html` from `drei` so it remains indexable and keyboard accessible.
* Send emails using EmailJS, a serverless endpoint, or Netlify Functions.

### Dark Mode

* Implement a theme context (`useTheme`) that toggles Tailwind classes or a `data-theme` attribute on `<html>`.
* Adjust 3D lighting and background tone on theme change (cool-blue in dark mode, warm in light mode).

### Performance

* Avoid heavy textures and high-poly models.
* Lazy-load models and defer non-essential particles.
* Use `memo`, `useCallback`, and limit re-renders.
* Use `r3f`'s `invalidateFrameloop` / adaptive frame-loop (if necessary) to reduce CPU/GPU when idle.

---

## 📱 Responsive & Accessibility

* Provide mobile-friendly designs: reduce particle count, simplify backgrounds, and use static image fallbacks.
* Ensure keyboard navigation between sections; allow skipping 3D scene with a "Reduce motion" toggle.
* Use semantic tags and `aria-*` attributes for modals and interactive controls.

---

## ✅ Projects to Include (Example Data)

Add each project inside a projects array (e.g. `src/data/projects.ts`) with fields used to render 3D cards.

Example projects (copy into data file):

```ts
export const projects = [
  {
    id: 'ondaro',
    title: 'OnDaro — E‑commerce',
    short: 'Full Stack e‑commerce (React + Node.js + MySQL)',
    demo: 'https://ondaro.example.com',
    github: 'https://github.com/yourname/ondaro',
    tags: ['React', 'Node.js', 'MySQL']
  },
  {
    id: 'ai-recipe',
    title: 'AI Recipe Finder',
    short: 'AI-powered recipe finder (Flask + React)',
    demo: 'https://ai-recipe.example.com',
    github: 'https://github.com/yourname/ai-recipe',
    tags: ['Flask', 'React', 'AI']
  },
  {
    id: 'voice-assistant',
    title: 'AI Voice Assistant',
    short: 'Voice assistant using Gradio, Hugging Face and Speech Recognition',
    demo: 'https://voice-assistant.example.com',
    github: 'https://github.com/yourname/voice-assistant',
    tags: ['Python', 'Gradio', 'NLP']
  }
]
```

## 🧪 Accessibility Helpers & Progressive Enhancement

* Provide a "Reduce Motion" toggle that disables non-essential animations and reduces particle counts.
* Provide non-3D fallback UI for devices that cannot run WebGL.
* Ensure forms degrade gracefully if JS is disabled.

---

## ✅ Checklist Before Publishing

* [ ] Test desktop and mobile responsiveness
* [ ] Test keyboard navigation and screen-reader flow
* [ ] Verify builds with `npm run build`
* [ ] Optimize large assets and compress models
* [ ] Confirm environment variables and secrets are set on the host

---

## ✍️ How to Customize (short guide)

1. Replace name / role in `Header` component.
2. Replace or edit `projects.ts` data, then update `ProjectCard` visuals.
3. Swap the 3D avatar model in `public/models/avatar.glb`.
4. Pick a color palette in `tailwind.config.js` and update theme tokens.
5. Tweak particle density in `ThreeScene/Particles.tsx`.

---

## ❤️ Credits & Resources

* React Three Fiber (pmndrs)
* @react-three/drei utilities
* Framer Motion for UI transitions
* Tailwind CSS for utilities

---

*Made with care — enjoy building your futuristic portfolio!*



