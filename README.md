# 🐫 CamelQ Advanced - Service-Based Website MVP

A professional and modern service-based website MVP built using **Next.js**, **TailwindCSS**, **MongoDB**, and deployed via **Netlify**. This project is designed to be scalable, fast, SEO-friendly, and rich with interactive UI features.

---

## 🚀 Tech Stack

- ⚛️ **Next.js** (App Router + Pages Router)
- 🎨 **TailwindCSS** (Custom utility-first styling)
- 🧠 **TypeScript + JavaScript** mixed architecture
- 💾 **MongoDB** (with Mongoose for DB operations)
- 🧩 **Framer Motion** (animations)
- ☁️ **Netlify** (static deployment from Git)
- 🌗 **Dark Mode** support
- 🌍 Multilingual-ready (planned)

## 📁 Project Structure
CAMELQ-ADVANCED/ 
├── .next/ # Build output (auto-generated) 
├── app/ # Next.js App Router-based routes 
│ ├── about/ # About us page
│ ├── contact/ # Contact page 
│ ├── services/ # Services page 
│ ├── api/contact/route.ts # API route for contact form 
│ ├── layout.tsx # Root layout (App router)
│ └── page.tsx # Home page 
│ ├── components/ 
│ ├── animations/ # Motion effects, loaders, etc.
│ └── ui/ # UI components like Navbar, Footer, etc.
│ ├── Navbar.tsx 
│ ├── Footer.tsx
│ ├── ServiceCard.tsx 
│ └── ... 
│ ├── hooks/ # Custom React hooks 
│ ├── use-mobile.tsx 
│ └── use-toast.ts 
│ ├── lib/ # Shared utility functions 
│ └── utils.ts 
│ ├── public/ # Static files, images
│ ├── src/ 
│ ├── api/ # Frontend API layer 
│ ├── pages/ # Next.js Pages Router (fallback support)
│ │ ├── HomePage.jsx 
│ │ ├── ContactPage.jsx 
│ │ └── ... 
│ ├── server/ # Backend logic 
│
│ ├── api/ # API handlers (careers, clients, etc.)
│ │ └── db/ # MongoDB config 
│ └── components/ # Shared JSX components 
│ ├── styles/
│ └── globals.css # Global styles 
│ ├── .env.local # Add MongoDB URI here 
├── package.json 
├── tailwind.config.js
├── next.config.mjs 
├── tsconfig.json 
└── README.md
