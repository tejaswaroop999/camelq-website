# 🐫 CamelQ Advanced - Next-Gen Service-Based Website MVP

A professional, fast, and scalable **service-based web application MVP** built with modern technologies like **Next.js**, **MongoDB**, and **TailwindCSS**. This project is built to support real-world businesses with features like AI chatbots, job applications, real-time interactions, dark mode, multilingual support, and more.

---

## 🔗 Live Demo

🚀 [Live Site](camelq1.netlify.app) 

---

## 📸 Screenshots

| Home Page | Services Page | Contact Page |
|----------|----------------|---------------|
| ![Home](./public/screenshots/home.png) | ![Services](./public/screenshots/services.png) | ![Contact](./public/screenshots/contact.png) |

---

## 🛠️ Tech Stack

| Layer        | Tech                            |
|--------------|----------------------------------|
| Frontend     | Next.js (App Router + Pages), TypeScript |
| Styling      | TailwindCSS, Framer Motion       |
| Backend      | Node.js, Express (optional), MongoDB |
| Database     | MongoDB with Mongoose            |
| Hosting      | Netlify / Vercel / Render        |
| APIs         | RESTful API Endpoints via App Router |
| Features     | Dark Mode, Animations, Contact & Job Forms, SEO, Responsive Design |

---

## ✨ Key Features

- 🔍 SEO-Optimized with server-side rendering
- 🎨 Smooth UI/UX with animations
- 🌙 Dark mode toggle
- 📬 Contact and job application forms connected to MongoDB
- 🌐 Multilingual-ready structure (i18n support planned)
- 🧠 AI Chatbot ready (future enhancement)
- 💬 Real-time chat UI (planned)
- 📱 Fully responsive layout
- 📁 Modular and scalable codebase

---

## 🧱 Project Architecture

Organized for clarity, scalability, and maintainability:
camelq-advanced/
│
├── app/               → Pages built with the new Next.js App Router (like /contact, /about)
│
├── src/
│   ├── pages/         → Old-style Next.js pages (still supported if used)
│   ├── server/        → Handles backend logic (e.g., MongoDB connections, APIs)
│   ├── components/    → Reusable UI components like buttons, cards, forms
│   ├── api/           → Frontend code to call backend APIs (e.g., for form submissions)
│
├── components/        → More shared or global UI components (animations, navbar, etc.)
│
├── hooks/             → Custom React Hooks (like useTheme, useForm, etc.)
│
├── public/            → Static files like images, icons, or uploaded resumes
│
├── styles/            → CSS or Tailwind styles (global.css, animations, etc.)
│
├── .env.local         → Your secret keys or config (like MongoDB URI)
│
└── README.md          → Project description, setup guide, and features list

---

## 🚀 Getting Started (Local Development)

```bash
# Clone the repo
git clone https://github.com/your-username/camelq-advanced.git
cd camelq-advanced

# Install dependencies
npm install

# Add MongoDB URI in .env.local
echo "MONGODB_URI=mongodb+srv://..." > .env.local

# Run the dev server
npm run dev
Visit: http://localhost:3000

🌐 Deployment
CamelQ Advanced supports Netlify, Vercel, and Render for CI/CD deployments.

Netlify Setup
Push code to GitHub.

Log in to Netlify, click "Import from Git".

Add environment variable: MONGODB_URI.

Set build command: next build

Set publish directory: .next (or out if exporting)

🔌 API Endpoints
Method	Endpoint	Description
POST	/api/contact	Submit contact form
POST	/api/careers	Submit job application
GET	/api/clients	Fetch client list
GET	/api/projects	Fetch portfolio items
GET	/api/team	Fetch team data

💡 SEO & Performance
✅ Uses SSR and SSG via Next.js

✅ TailwindCSS for minimal and fast CSS

✅ Lazy loading and code splitting

✅ Mobile-first responsive layout

✅ Accessible components (WAI-ARIA)

📣 Contributing
Contributions are welcome! To get started:
# Fork the repo
# Create a new branch
git checkout -b feature/YourFeature

# Make changes and commit
git commit -m "Add: YourFeature"

# Push and create a PR
git push origin feature/YourFeature

🛠️ Troubleshooting
>MongoDB errors: Ensure your .env.local has a valid MONGODB_URI.

>CSS not applying: Check Tailwind config paths in content field.

>Form not submitting: Check API route in app/api/contact/route.ts.

🧑‍💻 Developer
Gaurav
Full Stack & AI Developer

>💼 LinkedIn

>🌐 Portfolio: Coming soon

>✉️ Email: yourname@example.com

🙏 Acknowledgements

>Next.js

>TailwindCSS

>Framer Motion

>MongoDB



