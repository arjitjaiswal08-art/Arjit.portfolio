# Arjit Jaiswal — Personal Portfolio Website

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> A modern, responsive personal portfolio website for **Arjit Jaiswal**, a Data Science and Artificial Intelligence student at **IIT Madras**, aspiring AI Engineer, Machine Learning Developer, and Full-Stack Developer.

---

## 🌟 Highlights & Features

- **Futuristic AI Aesthetic**: Sleek dark mode by default with an optional light theme toggle, cyber grid backdrop, subtle gradient glow, and minimal editorial typography.
- **Interactive Neural Network Canvas**: Custom HTML5 particle & synapse node graph in the hero section reacting dynamically to cursor movement.
- **Interactive AI Architecture Terminal**: Live simulation panel exploring the Audio Spectrogram Transformer (AST) pipeline, log-mel filterbanks, and verified metrics.
- **Featured Case Studies**:
  - **AST Audio Classification**: Transformer audio event recognition (`MIT/ast-finetuned-audioset-10-10`), 16 kHz preprocessing, **Macro F1: 0.84172**, and live [Hugging Face Space](https://huggingface.co/spaces/arjitja/AST_Audio_Classification).
  - **Machine Learning Competition Pipelines**: Kaggle competitive modeling, feature engineering, and GBDT ensembles (LightGBM/XGBoost).
  - **Campus Placement Portal**: Multi-role enterprise portal (Flask + Vue.js + SQLite + JWT).
  - **Klyro AI & Unica AI**: AI product prototypes & applied R&D initiatives.
- **Interactive Case Study Modal**: Deep dive into problem statements, architectural approaches, engineering details, and verified results.
- **Categorized Skills**: Clean, honest breakdown across Programming, AI/ML, ML Libraries, Backend, Frontend, and Deployment without fabricated percentage bars.
- **Project Experience Timeline**: "What I've Built & Learned" detailing milestone-based practical deliverables.
- **Verified Certifications**: HackerRank badges across Python, SQL (Advanced/Basic), React, REST API, JavaScript, Java, and C#.
- **Curated GitHub Repositories**: Real links to [@Arjit077](https://github.com/Arjit077) projects.
- **Core Engineering Philosophy**: 3 principles — *Build to Learn*, *Measure What Matters*, *Turn Ideas into Products*.
- **Contact & Resume Integration**: Interactive form with validation, mailto fallback, clipboard copy with instant toast, confetti celebration, and direct Google Drive resume links.

---

## 🛠️ Technology Stack

- **Framework**: React 19 with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism and animations
- **Icons**: Lucide React & custom vector SVGs
- **Interactive FX**: HTML5 Canvas, `canvas-confetti`

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or newer) and **npm** installed:

```bash
node -v
npm -v
```

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Arjit077/portfolio.git
cd portfolio
npm install
```

### Running Locally (Development Mode)

Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

### Building for Production

Compile TypeScript and build the optimized production bundle:

```bash
npm run build
```

The compiled assets will be located in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

### Option 1: Deploy with Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Option 2: Deploy via Vercel Web Dashboard

1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/Arjit077/portfolio.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect **Vite** and configure the build settings.
4. Click **Deploy**.

---

## ⚙️ Configuration & Customization

All personal details, project entries, metrics, links, and skills are centralized in:

📂 `src/data/portfolioData.ts`

- **Resume Link**: Update `PERSONAL_INFO.resumeDriveUrl` or place a file at `public/resume.pdf`.
- **Email**: Update `PERSONAL_INFO.email`.
- **Social Profiles**: Update `PERSONAL_INFO.github` and `PERSONAL_INFO.linkedin`.
- **New Projects**: Add objects to the `FEATURED_PROJECTS` array.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
