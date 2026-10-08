# 🎯 RoleReady AI

<p align="center">
  <strong>From Job Description to Offer Letter — In Minutes.</strong><br>
  An intelligent career readiness engine that parses job requirements, performs granular skill gap analysis, creates targeted learning roadmaps, and conducts AI interview simulations.
</p>

<p align="center">
  <a href="https://roleready-ai-u3zw.onrender.com" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-13.5-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" />
</p>

---

## 🚀 Live Demo

Experience the live application deployed on Render:  
👉 **[https://roleready-ai-u3zw.onrender.com](https://roleready-ai-u3zw.onrender.com)**

---

## ⚡ The Problem & Solution

| The Challenge | How RoleReady AI Solves It |
|---|---|
| **Ambiguous Job Descriptions** — Unclear what tech stacks and depth a company truly prioritizes. | **Job DNA Extraction** — Breaks down JDs into core hard skills, architectural patterns, and soft competencies. |
| **Generic Resume Feedback** — Basic ATS checkers only give shallow keyword percentages. | **Skill X-Ray & Evidence Mapping** — Cross-references project code and experience against target requirements with evidence trails. |
| **Overwhelming Study Choices** — Candidates don't know what to learn first. | **Dynamic 4-Week Sprint** — Builds an ordered, high-ROI roadmap focused strictly on closing critical gaps. |
| **Interview Uncertainty** — Not knowing what technical depth will be evaluated. | **Role-Specific Interview Simulator** — Generates targeted system design & concurrency scenarios with rubrics. |

---

## 🌟 Key Features

### 1. 🔍 Job DNA & Candidate Profiling
- In-depth alignment between candidate resumes and specific role requirements.
- Pre-configured demo profile (**Arjun Mehta** evaluated against **Nexa Systems — Backend Software Engineer**).

### 2. 📊 Animated Role Readiness Score
- Real-time SVG circular gauge calculating composite readiness across programming, database scaling, system design, and cloud architecture.

### 3. 🧬 Skill X-Ray & Prioritized Gap Analysis
- **Verified Strengths**: Highlights matched competencies with direct citations to project portfolios.
- **Identified Gaps**: Categorizes missing skills into **Critical**, **High**, and **Medium** priority with estimated study effort and score impacts.

### 4. 📅 Interactive 4-Week Action Sprint
- Dynamic weekly milestone tracker with clickable task verification.
- Covers Docker containerization, Redis caching patterns, system design fundamentals, and mock interview practice.

### 5. 🎙️ AI Technical & Behavioral Interview Prep
- Reverse-engineered interview questions tailored to the company's tech stack.
- Complete evaluation rubrics and structured model answers using the STAR method.

### 6. 📄 ATS Keyword Analyzer
- Pinpoints critical terms missing from resume text to ensure candidates pass automated ATS screening filters.

### 7. 🔮 "What-If" Career Simulator
- Interactive competency toggles that dynamically simulate score boosts in real time (e.g., watch score jump from 68% to 96% by adding System Design and Kafka).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Design System**: Glassmorphic dark theme, custom responsive components, inline SVG icon system
- **Deployment & Hosting**: [Render](https://render.com/) (Web Service, auto-deploy enabled)
- **CI/CD**: GitHub webhooks integrated with Render automated build triggers

---

## 📁 Project Architecture

```
roleready-ai/
├── app/
│   ├── globals.css         # Glassmorphism utilities, Tailwind layers, font imports
│   ├── layout.tsx          # Root layout and metadata configuration
│   └── page.tsx            # Full interactive single-page dashboard
├── data/
│   └── demoCandidate.json  # Candidate baseline dataset (Arjun Mehta)
├── public/                 # Static assets
├── postcss.config.js       # PostCSS processor configuration
├── tailwind.config.ts      # Tailwind design tokens and extended theme
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies and npm scripts
└── render.yaml             # Infrastructure-as-code specification for Render
```

---

## 💻 Local Development Setup

### Prerequisites
- **Node.js** 18+ (Node 20+ recommended)
- **npm** or **yarn** / **pnpm**

### Quickstart

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Driven-Ansh/roleready-ai.git
   cd roleready-ai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

5. **Create a production build**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🚀 Deployment

The project includes continuous deployment on **Render**:
- Any commit pushed to the `main` branch automatically triggers a build and deploy cycle.
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm run start`

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Driven-Ansh">Driven-Ansh</a>
</p>
