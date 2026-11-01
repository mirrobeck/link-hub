# Personal Link Hub ⚡

A responsive, production-ready single-page personal link hub inspired by **Teletype.link** and **Linktree** design aesthetics. Built with clean semantic HTML5, modern Tailwind CSS, Lucide icons, and zero complex build requirements.

![Teletype Style Link Hub](https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=85)

---

## ✨ Features & Design Highlights

- **Visual Palette**: Deep petrol blue / dark cyan background (`#093339`) with ambient radial mesh gradients.
- **Card Aesthetics**:
  - Max-width: `460px` centered vertically and horizontally.
  - Solid crisp white card (`#FFFFFF`) with `rounded-[28px]` borders and deep layered drop shadows (`shadow-card`).
  - Mobile safe gutters with viewport notch support (`viewport-fit=cover`, `env(safe-area-inset-*)`).
- **Profile Header**:
  - High-resolution circular avatar with elegant gradient ring and verified badge.
  - Bold typography powered by Google Fonts (*Plus Jakarta Sans*).
  - Availability status badge ("*Available for Q1/Q2 Projects*").
- **Primary Featured CTA (Pill Button)**:
  - High-contrast dark pill with subtle metallic sheen hover animation.
  - Accent icon, prominent title, subtitle, and badge ("*HOT* / *NEW*").
  - Micro-interactions: lift on hover (`-translate-y-0.5`) with refined elevation shadow.
- **3x2 Quick-Action Social Grid**:
  - High-contrast circular buttons (`w-13 h-13` / `w-14 h-14`) with solid dark fill and crisp SVG icons.
  - Native communication links:
    - **Phone**: triggers `tel:` protocol.
    - **Email**: triggers `mailto:` protocol.
    - **Socials**: external links with `target="_blank"` and `rel="noopener noreferrer"`.
- **Secondary Action Stack**:
  - Stacked vertical interactive links with clean borders, emoji badges, category tags, and chevron indicators.
  - Hover elevation with subtle border darkening and background transition.
- **Interactive Share & Clipboard Toast**:
  - Web Share API integration (mobile native share sheet) with automatic clipboard fallback and animated toast notification.
- **Instant Customization**:
  - Everything is driven by a single `CONFIG` JavaScript object at the top of the `<script>` section in `index.html`.

---

## 🚀 Quick Start

### 1. View Locally
You can open `index.html` directly in any web browser:
- **Double click** `index.html`, or
- Run a lightweight HTTP server:
  ```bash
  # Python 3
  python -m http.server 3000
  ```
  Then navigate to `http://localhost:3000` in your browser.

---

## 🛠️ How to Customize

Open `index.html` and look for the `CONFIG` object inside the `<script>` tag:

```javascript
const CONFIG = {
  profile: {
    name: "Alex Rivera",
    handle: "@alexrivera.design",
    verified: true,
    title: "Senior Product Designer & Art Director",
    bio: "Crafting digital experiences, high-conversion design systems, and brand stories. Open for select advisory & design projects.",
    avatarUrl: "https://your-domain.com/avatar.jpg",
    status: {
      visible: true,
      text: "Available for Q1/Q2 Projects",
      dotColor: "bg-emerald-400",
    },
  },

  // 1. Primary Featured CTA
  primaryCta: {
    label: "Telegram Channel & Insights",
    subtitle: "Daily design thoughts, UI teardowns & freebies",
    badge: "HOT",
    icon: "send", // any Lucide icon name
    url: "https://t.me/yourtelegramchannel",
  },

  // 2. 3x2 Quick Action Icons
  quickActions: [
    { id: "behance", label: "Behance", icon: "palette", url: "https://behance.net", isExternal: true },
    { id: "phone", label: "Call", icon: "phone", url: "tel:+14155552671", isExternal: false },
    { id: "instagram", label: "Instagram", icon: "instagram", url: "https://instagram.com", isExternal: true },
    { id: "email", label: "Email", icon: "mail", url: "mailto:alex@example.com", isExternal: false },
    { id: "telegram", label: "Telegram", icon: "message-circle", url: "https://t.me/yourusername", isExternal: true },
    { id: "linkedin", label: "LinkedIn", icon: "linkedin", url: "https://linkedin.com", isExternal: true },
  ],

  // 3. Secondary Links
  secondaryLinks: [
    {
      id: "portfolio",
      title: "Selected Design Case Studies",
      subtitle: "Fintech, Web3 & SaaS product design portfolio",
      emoji: "⚡",
      icon: "sparkles",
      url: "https://example.com/case-studies",
      highlight: true,
      tag: "Featured",
    },
    // Add as many links as you want...
  ],

  // 4. Footer
  footer: {
    copyright: "© 2025 Alex Rivera. All rights reserved.",
    tagline: "Designed with modern Teletype.link aesthetics",
  },
};
```

### Available Icons
Icons are powered by **[Lucide Icons](https://lucide.dev/icons)**. You can replace any icon name (e.g. `send`, `phone`, `mail`, `instagram`, `linkedin`, `palette`, `sparkles`, `calendar`, `compass`, `book-open`, `layout-grid`) with any icon name from the Lucide catalog.

---

## 🌐 Free 1-Click Deployment

Because this project is a pure static single-page app (`index.html`), you can deploy it in seconds:

### GitHub Pages
1. Push this folder to a GitHub repository.
2. In the repository settings, go to **Pages**.
3. Under **Branch**, select `main` (root) and click **Save**.

### Vercel / Netlify
1. Drag and drop the project folder directly onto [Netlify Drop](https://app.netlify.com/drop) or import from GitHub on [Vercel](https://vercel.com).
2. No build command is required.

