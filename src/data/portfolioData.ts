export interface Project {
  id: string;
  title: string;
  category: 'all' | 'ai-ml' | 'fullstack' | 'product';
  badge: string;
  tagline: string;
  description: string;
  stack: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  huggingfaceUrl?: string;
  image?: string;
  featured: boolean;
  type: 'Featured Project' | 'Production Application' | 'Prototype' | 'Concept' | 'Research';
  caseStudy: {
    problem: string;
    approach: string;
    technicalDetails: string[];
    results: string;
    realWorldImpact: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean; level?: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  domain: string;
  summary: string;
  deliverables: string[];
  technologies: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  level: string;
  verified: boolean;
  skills: string[];
  link?: string;
}

export const PERSONAL_INFO = {
  name: "Arjit Jaiswal",
  monogram: "AJ",
  institution: "IIT Madras",
  program: "Data Science and Artificial Intelligence",
  roles: [
    "AI Engineer",
    "Machine Learning Developer",
    "Full-Stack Developer",
    "AI Product Builder"
  ],
  headline: "I build intelligent systems that solve real-world problems.",
  heroLabel: "DATA SCIENCE & AI @ IIT MADRAS",
  subheadline:
    "I’m Arjit Jaiswal — an AI-focused developer working across machine learning, generative AI, and full-stack engineering. I turn ideas into practical products, train models on real-world data, and build applications that connect intelligence with usability.",
  status: "Open to AI/ML internships, research & product collaborations",
  email: "arjitjaiswal.ai@gmail.com",
  github: "https://github.com/Arjit077",
  linkedin: "https://www.linkedin.com/in/j-arjit/",
  huggingface: "https://huggingface.co/spaces/arjitja/AST_Audio_Classification",
  resumeDriveUrl: "https://drive.google.com/file/d/1e9QKKRh2lA8vrb1XHChOBR_2B2wXKTLR/view?usp=drive_link",
  resumeLocalPath: "/resume.pdf",
  location: "Chennai / India",
  primaryLanguages: "Python & JavaScript",
  focus: "AI Engineering & Applied Machine Learning",
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "ast-audio",
    title: "AST Audio Classification",
    category: "ai-ml",
    badge: "Audio Transformer Deep Dive",
    tagline: "Transformer-based audio event recognition leveraging Audio Spectrogram Transformer (AST)",
    description:
      "An advanced audio classification system built using the Audio Spectrogram Transformer (AST) architecture to recognize complex acoustic events from raw sound recordings, significantly outperforming classical CNN and BiLSTM baselines.",
    stack: ["Python", "PyTorch", "Hugging Face Transformers", "Torchaudio", "Librosa", "Audio Spectrograms"],
    metrics: [
      { label: "Macro F1 Score", value: "0.84172" },
      { label: "Sampling Rate", value: "16 kHz" },
      { label: "Architecture", value: "AST ViT Patch" },
      { label: "Pretrained Base", value: "AudioSet 10-10" },
    ],
    huggingfaceUrl: "https://huggingface.co/spaces/arjitja/AST_Audio_Classification",
    githubUrl: "https://github.com/Arjit077",
    liveUrl: "https://huggingface.co/spaces/arjitja/AST_Audio_Classification",
    featured: true,
    type: "Featured Project",
    caseStudy: {
      problem:
        "Environmental audio event classification requires capturing both short-duration transient acoustic bursts and long-range harmonic dependencies across frequencies. Traditional 2D CNNs suffer from restricted receptive fields, while recurrent models (BiLSTM) struggle with long spectrogram sequences.",
      approach:
        "Employed the Audio Spectrogram Transformer (MIT/ast-finetuned-audioset-10-10-0.4593). Audio was standardized and resampled to 16 kHz, converted into log-mel filterbank spectrograms (128 mel bins), and split into 16x16 time-frequency patches projected via 2D convolution embeddings before self-attention processing.",
      technicalDetails: [
        "Audio preprocessing: 16 kHz uniform resampling, silent interval trimming, log-mel spectrogram computation.",
        "Model Backbone: Vision Transformer (ViT) adapted for audio spectrogram patches with positional embeddings.",
        "Ablation comparison: Built and benchmarked 2D CNN (F1 ~0.76) and BiLSTM (F1 ~0.71) against the AST pipeline.",
        "Evaluation Metric: Macro F1 optimization to handle class imbalance across heterogeneous acoustic events.",
        "Deployment: Interactive Hugging Face Space application for real-time sound file inference.",
      ],
      results:
        "Achieved a verified Macro F1 score of 0.84172, delivering superior generalization across noisy acoustic recordings compared to convolution-only baselines.",
      realWorldImpact:
        "Applicable to smart acoustic monitoring, industrial machinery fault diagnosis via vibration/audio, bioacoustic biodiversity tracking, and intelligent security surveillance.",
    },
  },
  {
    id: "nyayamitra",
    title: "NyayaMitra (न्यायमित्र)",
    category: "ai-ml",
    badge: "Live Deployed AI App",
    tagline: "AI Legal Assistant for Indian Law compliant with Bharatiya Nyaya Sanhita (BNS 2023) & IPC",
    description:
      "A conversational AI legal intelligence application empowering Indian citizens to describe legal problems in simple words. Features instant legal risk analysis, step-by-step action roadmaps, formal FIR drafting, cyber fraud SOS, evidence locker, case strength analysis, and contract scanning.",
    stack: ["React", "Generative AI", "BNS 2023 & IPC", "Legal NLP", "Tailwind CSS", "Vercel"],
    metrics: [
      { label: "Legal Framework", value: "BNS 2023 & IPC" },
      { label: "Workspaces", value: "6 Workspaces" },
      { label: "Deployment", value: "Live on Vercel" },
      { label: "Assistance", value: "FIR & Cyber SOS" },
    ],
    liveUrl: "https://nyayamitra-liard.vercel.app",
    githubUrl: "https://github.com/Arjit077",
    image: "/projects/nyayamitra.png",
    featured: true,
    type: "Production Application",
    caseStudy: {
      problem:
        "Navigating Indian legal frameworks (the new BNS 2023 and IPC) is daunting for common citizens. People facing cyber fraud, extortion, or property disputes lack affordable, instant legal guidance and struggle to draft police complaints or preserve digital evidence.",
      approach:
        "Engineered an interactive conversational legal assistant powered by structured prompt engineering, statutory grounding (BNS & IPC), multi-lingual understanding, and dedicated workflows for FIR drafting, scam radars, and evidence preservation.",
      technicalDetails: [
        "Natural language legal problem intake with high-risk urgency classification.",
        "Structured FIR complaint generator with jurisdictional formatting and IPC/BNS section cross-referencing.",
        "Cyber Fraud SOS emergency workspace with step-by-step reporting instructions.",
        "Evidence locker and case viability estimator to assess dispute strength.",
        "Deployed as a blazing fast web application on Vercel.",
      ],
      results:
        "Successfully deployed and accessible to users at nyayamitra-liard.vercel.app, translating dense legal codes into plain-language actionable steps.",
      realWorldImpact:
        "Democratizes legal access across India, protects victims of digital financial fraud, and saves crucial hours when filing first information reports.",
    },
  },
  {
    id: "agri-ai",
    title: "AgriAI — Intelligence System",
    category: "ai-ml",
    badge: "Live Deployed AI App",
    tagline: "End-to-End AI Agriculture Advisory & Decision Platform for Indian Farmers",
    description:
      "A complete smart agriculture system that automates the decision journey: auto-fetching live micro-climate via OpenWeatherMap, live APMC Mandi commodity prices via Agmarknet, plant symptom & disease diagnosis, and OpenAI GPT-4o powered farming guidance with Kisan Vaani (किसान वाणी) voice.",
    stack: ["OpenAI GPT-4o", "Computer Vision", "Agmarknet API", "OpenWeatherMap", "React", "Vercel"],
    metrics: [
      { label: "Decision Engine", value: "OpenAI GPT-4o" },
      { label: "Live Mandi", value: "Agmarknet APMC" },
      { label: "Voice Support", value: "Kisan Vaani" },
      { label: "Deployment", value: "Live on Vercel" },
    ],
    liveUrl: "https://agri-intelligence-system.vercel.app",
    githubUrl: "https://github.com/Arjit077",
    image: "/projects/agri-ai.png",
    featured: true,
    type: "Production Application",
    caseStudy: {
      problem:
        "Indian smallholder farmers face severe crop losses and unfair market prices due to fragmented information across weather hazards, plant diseases, and daily local APMC Mandi price fluctuations.",
      approach:
        "Built a unified, automated 5-step agricultural intelligence pipeline connecting real-time weather APIs, official Agmarknet wholesale market feeds, visual plant pathology diagnostics, and multi-lingual voice guidance.",
      technicalDetails: [
        "End-to-end smart decision flow: Crop + GPS Location + Plant Photo -> Integrated Action Plan.",
        "Automated live APMC Mandi wholesale price extraction and commodity trend calculation.",
        "Plant leaf disease detection module analyzing visual pathology and pathogen indicators.",
        "Kisan Vaani (किसान वाणी) voice accessibility module designed for vernacular language accessibility.",
        "High-performance cloud deployment on Vercel with responsive mobile-first UI.",
      ],
      results:
        "Fully deployed and functional at agri-intelligence-system.vercel.app, delivering instantaneous agronomic recommendations and live market intelligence.",
      realWorldImpact:
        "Protects farm yields, optimizes fertilizer expenditures, and empowers farmers with transparency to sell at peak market rates.",
    },
  },
  {
    id: "finsaathi",
    title: "FinSaathi — AI Financial Coach",
    category: "fullstack",
    badge: "Live Deployed AI App",
    tagline: "AI-Powered Personal Financial Coach and 50-30-20 Budget Planner for Indian Families",
    description:
      "An intuitive personal finance application tailored for Indian households. Users input income, recurring expenses, and aspirations to instantly receive comprehensive financial health scores, tailored 50-30-20 budget advice, and actionable savings plans in Indian Rupees (₹).",
    stack: ["React", "AI Financial Insights", "50-30-20 Rule", "Interactive Analytics", "Tailwind CSS", "Vercel"],
    metrics: [
      { label: "Health Score", value: "0 - 100 Meter" },
      { label: "Target Audience", value: "Indian Families" },
      { label: "Currency", value: "INR (₹)" },
      { label: "Deployment", value: "Live on Vercel" },
    ],
    liveUrl: "https://finsaathi-ten.vercel.app",
    githubUrl: "https://github.com/Arjit077",
    image: "/projects/finsaathi.png",
    featured: true,
    type: "Production Application",
    caseStudy: {
      problem:
        "Most personal budgeting tools are overly complex, priced in foreign currencies, and fail to reflect Indian financial realities such as joint family expenses, emergency funds, and festive seasonal savings.",
      approach:
        "Architected FinSaathi with a clean dark-mode interface, instantaneous financial health diagnostic scoring, dynamic savings projections, and localized 50-30-20 financial breakdowns.",
      technicalDetails: [
        "Interactive income-to-expense ratio analyzer with visual health meter scoring.",
        "Algorithmic savings target tracker estimating timeline to major family milestones.",
        "Actionable AI-generated monthly budget recommendations categorized by essentials, wants, and savings.",
        "Clean, responsive UI with smooth transitions and zero latency on Vercel.",
      ],
      results:
        "Active deployment at finsaathi-ten.vercel.app delivering seamless financial health assessments in under 60 seconds.",
      realWorldImpact:
        "Promotes disciplined savings habits, clarifies recurring expense leakages, and builds financial security for Indian families.",
    },
  },
  {
    id: "healthcare",
    title: "HealthCARE — Clinical Intelligence",
    category: "fullstack",
    badge: "Live Deployed Web App",
    tagline: "Next-Gen Clinical Excellence, Specialist Finder & Patient Care Portal",
    description:
      "A modern digital health application combining clinical specialist directories with AI-predicted health trend analytics. Features specialist consultation bookings, empathetic care pathways, diagnostic precision overviews, and mobile clinical telemedicine workflows.",
    stack: ["React", "Clinical AI Insights", "Specialist Directory", "Responsive UI", "Tailwind CSS", "Vercel"],
    metrics: [
      { label: "Satisfaction", value: "94% Patient Trend" },
      { label: "Services", value: "Clinical Network" },
      { label: "Deployment", value: "Live on Vercel" },
      { label: "Design", value: "Clean Healthcare UI" },
    ],
    liveUrl: "https://healthcare-finder.vercel.app",
    githubUrl: "https://github.com/Arjit077",
    image: "/projects/healthcare.png",
    featured: true,
    type: "Production Application",
    caseStudy: {
      problem:
        "Patients struggle to find verified clinical specialists matched to their symptoms and navigate complex appointment workflows with clear insight into care expectations.",
      approach:
        "Designed a high-trust, responsive clinical care portal with smart specialty filtering, AI-assisted health trend summaries, and streamlined consultation booking.",
      technicalDetails: [
        "Specialist discovery engine filtering by medical discipline and availability.",
        "Smart clinical insights card summarizing predicted patient recovery and diagnostic metrics.",
        "Accessible, high-contrast healthcare UI optimized for both elderly and mobile users.",
        "Live deployment on Vercel with smooth navigation and instant search.",
      ],
      results:
        "Live and accessible at healthcare-finder.vercel.app, demonstrating clean healthcare system design and intuitive appointment booking.",
      realWorldImpact:
        "Reduces friction in scheduling specialist medical appointments and fosters patient peace of mind through empathetic digital design.",
    },
  },
  {
    id: "vedic-astrology",
    title: "Vedic Astrology AI Engine (वैदिकज्योतिषं)",
    category: "ai-ml",
    badge: "Live Deployed AI App",
    tagline: "Advanced Multi-Sign Astronomical Vedic Astrology & Voice AI Engine",
    description:
      "An intelligent synthesis system executing complex astronomical ephemeris computations to analyze Lagna (Ascendant), Surya Rashi (Sun Sign), and Chandra Rashi (Moon Sign). Features natural language query analysis, Voice AI Assistant, and multi-lingual astrological interpretations in Sanskrit, Hindi, Tamil, Telugu, and English.",
    stack: ["Algorithmic Astronomical Models", "Voice AI", "Multilingual NLP", "Vedic Mathematics", "React", "Vercel"],
    metrics: [
      { label: "Synthesis", value: "3-Sign AI Engine" },
      { label: "Languages", value: "Sanskrit, Hindi, EN" },
      { label: "Features", value: "Voice AI Assistant" },
      { label: "Deployment", value: "Live on Vercel" },
    ],
    liveUrl: "https://vedic-astrology-rashi-fal.vercel.app",
    githubUrl: "https://github.com/Arjit077",
    image: "/projects/vedic-astrology.png",
    featured: true,
    type: "Production Application",
    caseStudy: {
      problem:
        "Traditional Vedic astrology systems rely solely on simplistic single sun-sign horoscopes or require complex manual ephemeris table lookups that ordinary users cannot interpret or query naturally.",
      approach:
        "Engineered an Advanced 3-Sign Synthesis Engine (Lagna, Surya Rashi, Chandra Rashi) paired with natural language understanding and voice input to deliver contextual astrological analysis in classical Sanskrit and modern regional languages.",
      technicalDetails: [
        "Planetary ephemeris translation into twelve astrological houses and lunar mansions (Nakshatras).",
        "Natural language query analyzer routing user life questions (career, health, relationships) to astrological planetary transit models.",
        "Integrated Voice AI Assistant for spoken audio queries.",
        "Multilingual localization supporting Sanskrit (संस्कृतम्), Hindi, Tamil, Telugu, and English.",
      ],
      results:
        "Live and operational at vedic-astrology-rashi-fal.vercel.app with interactive sign selectors and real-time horoscope generation.",
      realWorldImpact:
        "Bridges ancient Indian astronomical sciences with modern AI natural language processing and voice interaction.",
    },
  },
  {
    id: "placement-portal",
    title: "Campus Placement Portal",
    category: "fullstack",
    badge: "Full-Stack Enterprise Platform",
    tagline: "Multi-role recruitment platform streamlining campus hiring between Admins, Companies, and Students",
    description:
      "A complete enterprise web application designed to eliminate recruitment bottlenecks by managing job drives, student candidacies, approval lifecycles, and resume applications with strict role-based access control.",
    stack: ["Flask", "Python", "Vue.js", "JavaScript", "SQLAlchemy", "SQLite", "JWT Auth", "Bootstrap 5", "HTML5"],
    metrics: [
      { label: "Architecture", value: "REST API + SPA" },
      { label: "Access Roles", value: "Admin, Co., Student" },
      { label: "Security", value: "JWT Tokens & Bcrypt" },
      { label: "Database", value: "Relational ORM" },
    ],
    githubUrl: "https://github.com/Arjit077",
    featured: true,
    type: "Production Application",
    caseStudy: {
      problem:
        "University placement drives involve disjointed manual coordination between administrators verifying company credentials, companies posting job drives with eligibility criteria, and hundreds of students tracking application stages.",
      approach:
        "Engineered a full-stack platform featuring granular Role-Based Access Control (RBAC), declarative ORM relationships, automated validation rules, and intuitive reactive dashboards for each user archetype.",
      technicalDetails: [
        "Role-Based Authentication: Secure JWT-backed authentication with refresh flows and role permission middleware.",
        "Company Approval Lifecycle: Admin dashboard for reviewing company registrations, approving/rejecting drive postings.",
        "Drive Eligibility Engine: Dynamic filtering matching student GPA/branch criteria against job prerequisites.",
        "Application State Machine: Transparent progression (Applied -> Shortlisted -> Interviewed -> Selected).",
        "Resume Management: Secure resume PDF uploads, server validation, and candidate profile view.",
      ],
      results:
        "Delivered an intuitive, responsive end-to-end recruitment management portal handling the complete placement cycle.",
      realWorldImpact:
        "Eliminates administrative overhead, prevents duplicate filings, and provides students and recruiters with live status transparency.",
    },
  },
  {
    id: "kaggle-ml",
    title: "Machine Learning Competition Pipelines",
    category: "ai-ml",
    badge: "Kaggle Competitive ML",
    tagline: "End-to-end competitive predictive modeling, advanced feature engineering, and ensemble systems",
    description:
      "A suite of structured machine learning competition workflows focusing on rigorous exploratory data analysis, leak-free feature engineering, cross-validation architectures, and gradient boosted tree ensembles.",
    stack: ["Python", "Scikit-Learn", "LightGBM", "XGBoost", "CatBoost", "Pandas", "NumPy", "TF-IDF"],
    metrics: [
      { label: "Validation Strategy", value: "Stratified K-Fold" },
      { label: "Optimization Metric", value: "Macro F1 / RMSE" },
      { label: "Feature Pipeline", value: "Automated & TF-IDF" },
      { label: "Model Type", value: "GBDT Ensembles" },
    ],
    githubUrl: "https://github.com/Arjit077",
    featured: true,
    type: "Featured Project",
    caseStudy: {
      problem:
        "Real-world structured datasets present high-cardinality categorical features, severe class imbalances, skewed distributions, missing data, and unstructured text columns requiring cohesive feature pipelines without data leakage.",
      approach:
        "Constructed end-to-end pipelines combining domain-specific feature engineering, frequency/target encodings, TF-IDF text representations, and iterative validation using Stratified 5-Fold schemes.",
      technicalDetails: [
        "Missing-value imputation strategies tailored to feature semantics (median/mode and KNN).",
        "Feature interactions: Polynomial combinations, group aggregations (mean, std, min, max across categorical pivots).",
        "NLP Feature Extraction: TF-IDF vectorization with n-gram extraction and truncated SVD dimensionality reduction.",
        "Model Diversity: LightGBM, XGBoost, CatBoost, and regularized Logistic Regression.",
        "Ensembling: Out-of-fold probability blending with Nelder-Mead metric weight optimization.",
      ],
      results:
        "Consistent validation performance gains over baseline models through rigorous out-of-fold calibration and leak-free transformations.",
      realWorldImpact:
        "Directly translates to real-world business tabular data: customer churn prediction, credit risk scoring, fraud detection, and demand forecasting.",
    },
  },
  {
    id: "klyro-ai",
    title: "Klyro AI — Personal AI Assistant",
    category: "product",
    badge: "AI Product Architecture",
    tagline: "Intelligent personal assistant engineered for natural conversational task execution and daily productivity",
    description:
      "An AI assistant project focused on natural human-computer interaction, context-aware memory retention, and tool orchestration to assist users with daily research and task automation.",
    stack: ["Python", "FastAPI", "LLM APIs", "Prompt Engineering", "Vector Storage", "React UI"],
    metrics: [
      { label: "Interaction", value: "Conversational NLP" },
      { label: "Context Window", value: "Buffer + Semantic" },
      { label: "Integration", value: "Tool Calling" },
      { label: "Stage", value: "Active Prototype" },
    ],
    githubUrl: "https://github.com/Arjit077",
    featured: true,
    type: "Prototype",
    caseStudy: {
      problem:
        "Standard conversational AI interfaces lack contextual continuity across tasks and fail to provide transparent reasoning steps when aiding users in multi-step workflows.",
      approach:
        "Designing an assistant architecture with structured prompt pipelines, conversational memory management, and modular tool integrations for specific utilities.",
      technicalDetails: [
        "Context Management: Sliding window memory combined with semantic vector retrieval for historical context.",
        "Prompt Design: Few-shot structured system prompts with strict output formatting (JSON/Markdown).",
        "Function Calling Pipeline: Dispatcher routing user queries to local utility tools.",
        "Interface: Clean, distraction-free conversational UI with markdown rendering and code highlighting.",
      ],
      results:
        "Working prototype demonstrating natural conversation, task context retention, and multi-turn problem solving.",
      realWorldImpact:
        "Accelerates knowledge lookup, synthesizes complex notes, and provides personal workflow acceleration.",
    },
  },
  {
    id: "unica-ai",
    title: "Unica AI — Product Initiative",
    category: "product",
    badge: "AI Product R&D",
    tagline: "Applied AI research and product development initiative for domain-specific automation",
    description:
      "An independent AI product-building initiative dedicated to exploring practical, user-centric AI solutions that bridge academic machine learning research with scalable software products.",
    stack: ["Python", "LLMs", "RAG Pipelines", "FastAPI", "Full-Stack Web", "Product Strategy"],
    metrics: [
      { label: "Focus", value: "Applied AI Products" },
      { label: "R&D Domains", value: "RAG & Workflows" },
      { label: "Status", value: "Active Exploration" },
      { label: "Philosophy", value: "Product First" },
    ],
    githubUrl: "https://github.com/Arjit077",
    featured: false,
    type: "Prototype",
    caseStudy: {
      problem:
        "Many emerging AI breakthroughs remain trapped in research papers or complex command-line scripts without intuitive user experiences that solve real-world problems.",
      approach:
        "Unica AI serves as my structured innovation sandbox for formulating problem statements, prototyping domain-specific AI workflows, and evaluating technical feasibility.",
      technicalDetails: [
        "Product Exploration: Evaluating RAG workflows for specific technical documentation and legal/regulatory texts.",
        "Agentic Architectures: Prototyping autonomous chains for multi-step data verification.",
        "UX Design: Translating non-deterministic AI outputs into reliable, structured interface feedback.",
      ],
      results:
        "Continuous prototyping and architectural evaluation of practical AI tools.",
      realWorldImpact:
        "Developing intuitive, production-grade intelligence tools that empower non-technical users to leverage AI capabilities.",
    },
  },
  {
    id: "cyber-scam-detection",
    title: "Cybersecurity & Scam Detection Engine",
    category: "ai-ml",
    badge: "NLP & Security",
    tagline: "Heuristic and NLP-based detection of phishing messages, social engineering, and fraudulent URLs",
    description:
      "An intelligent scam detection prototype that analyzes message semantics, suspicious lexical patterns, and domain reputations to flag fraudulent communications.",
    stack: ["Python", "NLP", "Scikit-Learn", "Feature Engineering", "Regular Expressions"],
    featured: false,
    type: "Concept",
    caseStudy: {
      problem: "Social engineering and financial phishing attacks increasingly deceive conventional keyword filters.",
      approach: "Combined lexical URL features with TF-IDF semantic embeddings to classify high-risk messages.",
      technicalDetails: ["Entropy analysis of URL domains", "Sentiment and urgency polarity extraction", "Lightweight classifier for edge deployment"],
      results: "High-precision prototype capable of identifying urgency-driven phishing hooks.",
      realWorldImpact: "Protects digital banking users from financial fraud and identity theft."
    }
  },
  {
    id: "parking-trekking-suite",
    title: "Vehicle Parking & Trekking Management Applications",
    category: "fullstack",
    badge: "Full-Stack Suite",
    tagline: "Real-time parking slot allocation systems and outdoor trekking expedition coordination",
    description:
      "Two practical operational management systems: an automated smart parking slot allocation platform and a comprehensive trekking management portal for managing expeditions, participants, and gear logs.",
    stack: ["Python", "Flask", "Vue.js / JavaScript", "SQLAlchemy", "REST APIs"],
    featured: false,
    type: "Prototype",
    caseStudy: {
      problem: "Real-time logistics management for vehicle parking and outdoor adventure expeditions require distinct state management and reservation tracking.",
      approach: "Engineered scalable state machines for slot reservations, live occupancy telemetry, trail risk ratings, and participant roster tracking.",
      technicalDetails: ["Concurrent slot reservation handling", "Trail status and weather advisory feeds", "Equipment checkout tracking"],
      results: "Robust prototypes delivering seamless operational workflows for both use cases.",
      realWorldImpact: "Streamlines municipal parking efficiency and outdoor adventure safety."
    }
  },
  {
    id: "rural-shop-pos",
    title: "Rural Shop Management & Digital Bookkeeping",
    category: "fullstack",
    badge: "Full-Stack Prototype",
    tagline: "Lightweight, offline-friendly inventory tracking and ledger management for micro-retailers",
    description:
      "A pragmatic digital bookkeeping solution tailored for small rural shopkeepers, providing credit ledger (Khata) tracking, inventory alerts, and simple sales logging.",
    stack: ["Python", "Flask", "SQLite", "JavaScript", "HTML5", "Responsive CSS"],
    featured: false,
    type: "Prototype",
    caseStudy: {
      problem: "Small neighborhood retailers often rely on manual paper notebooks, leading to uncollected credits and untracked inventory spoilage.",
      approach: "Built an ultra-fast, minimal digital ledger with high-contrast UI and WhatsApp receipt generation.",
      technicalDetails: ["Optimized relational schemas", "Credit balance tracking with automatic reminders", "Low-bandwidth responsive design"],
      results: "Reliable, intuitive bookkeeping interface tested for rapid checkout flows.",
      realWorldImpact: "Brings modern digital accounting to grassroots micro-enterprises."
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used across machine learning models and web backends",
    skills: [
      { name: "Python", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "SQL", highlight: true },
      { name: "Java (Basics)", highlight: false },
      { name: "C# (Basics)", highlight: false },
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Model architectures, training pipelines, and evaluation methodologies",
    skills: [
      { name: "Machine Learning", highlight: true },
      { name: "Deep Learning", highlight: true },
      { name: "Audio Classification (AST)", highlight: true },
      { name: "Natural Language Processing (NLP)", highlight: true },
      { name: "Large Language Models (LLMs)", highlight: true },
      { name: "Generative AI & Prompt Engineering", highlight: true },
      { name: "RAG Concepts", highlight: true },
      { name: "Feature Engineering & Imputation", highlight: true },
      { name: "Model Evaluation (F1/AUC/RMSE)", highlight: true },
      { name: "Ensemble Learning (Blending/Voting)", highlight: true },
    ],
  },
  {
    title: "ML Libraries & Tools",
    description: "Frameworks for scientific computing, neural networks, and tabular modeling",
    skills: [
      { name: "PyTorch", highlight: true },
      { name: "Hugging Face Transformers", highlight: true },
      { name: "Scikit-Learn", highlight: true },
      { name: "LightGBM", highlight: true },
      { name: "XGBoost", highlight: true },
      { name: "Pandas", highlight: true },
      { name: "NumPy", highlight: true },
      { name: "Torchaudio & Librosa", highlight: true },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Robust server-side architectures, REST design, and database interaction",
    skills: [
      { name: "Flask", highlight: true },
      { name: "REST APIs", highlight: true },
      { name: "SQLAlchemy ORM", highlight: true },
      { name: "JWT Authentication", highlight: true },
      { name: "Jinja2", highlight: false },
      { name: "FastAPI Basics", highlight: false },
    ],
  },
  {
    title: "Frontend & UI",
    description: "Modern component-driven web interfaces with rich responsiveness",
    skills: [
      { name: "React", highlight: true },
      { name: "Vue.js", highlight: true },
      { name: "HTML5 & Semantic Web", highlight: true },
      { name: "CSS3 & Modern Layouts", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Bootstrap 5", highlight: false },
    ],
  },
  {
    title: "Databases & Infrastructure",
    description: "Data persistence, asynchronous task workers, and version control",
    skills: [
      { name: "SQLite", highlight: true },
      { name: "Redis Caching Basics", highlight: false },
      { name: "Celery Workers Basics", highlight: false },
      { name: "Git & Version Control", highlight: true },
      { name: "GitHub Collaboration", highlight: true },
    ],
  },
  {
    title: "Deployment & Platforms",
    description: "Cloud hosting environments and interactive model spaces",
    skills: [
      { name: "Vercel", highlight: true },
      { name: "Hugging Face Spaces", highlight: true },
      { name: "Render", highlight: true },
      { name: "Kaggle Notebooks", highlight: true },
    ],
  },
];

export const EXPERIENCE_MILESTONES: ExperienceItem[] = [
  {
    period: "Ongoing",
    role: "Audio AI & Transformer Research",
    domain: "Deep Learning & Transformer Fine-Tuning",
    summary:
      "Engineered an Audio Spectrogram Transformer (AST) pipeline for environmental audio recognition, establishing empirical benchmarks against CNN and BiLSTM baselines.",
    deliverables: [
      "Standardized 16 kHz audio processing and log-mel spectrogram extraction.",
      "Fine-tuned MIT/ast-finetuned-audioset-10-10-0.4593 on specialized audio events.",
      "Achieved a verified Macro F1 score of 0.84172.",
      "Deployed an interactive model demonstration on Hugging Face Spaces.",
    ],
    technologies: ["PyTorch", "Hugging Face", "Librosa", "Torchaudio", "Python"],
  },
  {
    period: "2024 - Present",
    role: "Applied AI Full-Stack Production Deployments",
    domain: "Generative AI, Web Systems & Domain Applications",
    summary:
      "Engineered and deployed production AI applications on Vercel across legal intelligence (NyayaMitra), precision agriculture (AgriAI), family financial coaching (FinSaathi), clinical telemedicine (HealthCARE), and multi-sign Vedic astrology.",
    deliverables: [
      "Built NyayaMitra (BNS 2023 & IPC compliant AI legal advisor) with FIR generator and cyber fraud radar.",
      "Developed AgriAI integrating real-time Agmarknet mandi prices, OpenWeatherMap telemetry, and OpenAI GPT-4o decisioning.",
      "Created FinSaathi for 50-30-20 rule budget coaching and savings forecasting in INR.",
      "Engineered Vedic Astrology AI engine with multi-sign ephemeris synthesis and Voice AI.",
    ],
    technologies: ["React", "OpenAI GPT-4o", "Vercel", "Tailwind CSS", "REST APIs", "Python"],
  },
  {
    period: "2024 - Present",
    role: "Competitive ML & Tabular Predictive Modeling",
    domain: "Machine Learning & Kaggle Competitions",
    summary:
      "Developed robust predictive pipelines across complex structured datasets, prioritizing leak-free feature engineering and out-of-fold cross-validation.",
    deliverables: [
      "Designed domain feature interactions, frequency encodings, and missing value imputation.",
      "Extracted text features with TF-IDF vectorization and truncated SVD.",
      "Trained and tuned LightGBM, XGBoost, and CatBoost gradient boosted trees.",
      "Implemented weighted soft-voting and out-of-fold metric ensembling.",
    ],
    technologies: ["LightGBM", "XGBoost", "Scikit-Learn", "Pandas", "NumPy"],
  },
  {
    period: "2024",
    role: "Campus Placement Platform Engineering",
    domain: "Full-Stack Web Development & Role-Based Workflows",
    summary:
      "Architected a multi-role campus recruitment platform serving Administrators, Companies, and Students with role-based access control and full drive management.",
    deliverables: [
      "Designed normalized relational database schema with SQLAlchemy and SQLite.",
      "Built RESTful Flask API endpoints secured with JWT tokens.",
      "Constructed reactive Vue.js frontends for company job postings and student applications.",
      "Implemented resume upload handling, validation, and candidate status tracking.",
    ],
    technologies: ["Flask", "Vue.js", "Python", "SQLAlchemy", "JWT", "Bootstrap 5"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Python (Basic)",
    issuer: "HackerRank",
    level: "Basic",
    verified: true,
    skills: ["Data Structures", "OOP", "Functional Helpers"],
  },
  {
    name: "SQL (Advanced)",
    issuer: "HackerRank",
    level: "Advanced",
    verified: true,
    skills: ["Complex Joins", "Subqueries", "Aggregations", "Window Functions"],
  },
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    level: "Basic",
    verified: true,
    skills: ["Queries", "Filtering", "Sorting", "Basic Joins"],
  },
  {
    name: "React (Basic)",
    issuer: "HackerRank",
    level: "Basic",
    verified: true,
    skills: ["Components", "Props & State", "Hooks", "Rendering"],
  },
  {
    name: "REST API (Intermediate)",
    issuer: "HackerRank",
    level: "Intermediate",
    verified: true,
    skills: ["HTTP Methods", "Payload Parsing", "Pagination", "Status Codes"],
  },
  {
    name: "JavaScript (Basic)",
    issuer: "HackerRank",
    level: "Basic",
    verified: true,
    skills: ["ES6+", "Async/Await", "Array Methods", "DOM"],
  },
  {
    name: "Java (Basic)",
    issuer: "HackerRank",
    level: "Basic",
    verified: true,
    skills: ["OOP Principles", "Collections", "Syntax Basics"],
  },
  {
    name: "C# (Basic)",
    issuer: "HackerRank",
    level: "Basic",
    verified: true,
    skills: ["C# Fundamentals", "Control Flow", "Object-Oriented Design"],
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: "01",
    title: "Build to Learn",
    subtitle: "Understanding through implementation",
    description:
      "Theory solidifies when you build from first principles. I deepen my understanding by training models, experimenting with architectures, and solving practical engineering hurdles in real code.",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    title: "Measure What Matters",
    subtitle: "Data-driven, leak-free validation",
    description:
      "Hype doesn't replace empirical evidence. I rely on disciplined cross-validation, confusion matrices, Macro F1, and objective metrics to ensure that a system actually performs in the real world.",
    accent: "from-violet-500 to-indigo-400",
  },
  {
    number: "03",
    title: "Turn Ideas into Products",
    subtitle: "Connecting intelligence with usability",
    description:
      "A machine learning model locked in a notebook creates zero user value. I connect mathematical models with robust backends and clean user interfaces to create software people can truly rely on.",
    accent: "from-cyan-400 to-emerald-400",
  },
];
