export interface ProjectDetails {
  overview: string;
  highlights: string[];
  techStack?: Record<string, string[]>;
}

export type ProjectCategory = 'AI' | 'SaaS' | 'Mobile' | 'Tools';

export interface Project {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  impact: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category: ProjectCategory;
  details?: ProjectDetails;
}

export const projects: Project[] = [
  {
    title: 'Coresense',
    tagline: 'AI coaching & wellness platform',
    description:
      'Comprehensive AI coaching platform combining a React Native wellness app with a FastAPI backend for personalized, conversational coaching.',
    stack: ['React Native', 'FastAPI', 'OpenAI', 'Supabase', 'Docker'],
    impact: 'Real-time message processing with health-data-aware AI responses.',
    liveUrl: 'https://coresense.online/',
    githubUrl: 'https://github.com/Tosin-A',
    featured: true,
    category: 'Mobile',
    details: {
      overview:
        'CoreSense is a comprehensive AI coaching platform that combines mobile wellness tracking with intelligent conversation. A React Native app surfaces health insights while a Python FastAPI backend (OpenAI-powered) drives personalized coaching conversations.',
      highlights: [
        'React Native mobile app for health tracking and wellness insights',
        'AI coaching through natural conversation (OpenAI GPT)',
        'Real-time message processing and response generation',
        'Health data analysis and pattern recognition',
        'Scalable FastAPI backend with modular service-oriented architecture',
        'Supabase auth + Postgres, JWT-based security and rate limiting',
        'Dockerized multi-service deployment with docker-compose',
      ],
      techStack: {
        Mobile: ['React Native', 'Expo', 'TypeScript'],
        Backend: ['FastAPI', 'Python', 'Pydantic'],
        AI: ['OpenAI GPT'],
        Data: ['Supabase', 'PostgreSQL'],
        Infra: ['Docker', 'docker-compose'],
      },
    },
  },
  {
    title: 'CloutAI',
    tagline: 'Data-driven content analysis engine',
    description:
      'Analysis engine for creators and agencies. Connects to TikTok, Instagram, YouTube, and Facebook, runs a multi-stage AI pipeline, and outputs metric-backed growth recommendations.',
    stack: [
      'Next.js 15',
      'TypeScript',
      'Claude',
      'FastAPI',
      'Supabase',
      'Stripe',
    ],
    impact: 'Every insight = a specific metric + a concrete action. No fluff.',
    liveUrl: 'https://www.cloutai.co.uk/',
    githubUrl: 'https://github.com/Tosin-A',
    featured: true,
    category: 'SaaS',
    details: {
      overview:
        'CloutAI (SocialOptimizer) is a data-driven content analysis platform for creators and agencies. It ingests post-level data from TikTok (primary), Instagram, YouTube, and Facebook, then runs a multi-stage AI pipeline to produce a structured AnalysisReport. Not a scheduler or dashboard, an analysis engine.',
      highlights: [
        'Structured AnalysisReport: growth scores, raw metrics, ROI-ranked fix list',
        'Posting-time grid analysis and competitor gap analysis',
        'Claude-powered AI coaching, grounded in real metrics',
        'Async job pipeline (returns job_id, 202) that never blocks the API',
        'OAuth ingestion → Supabase → Python microservice (VADER, Whisper, scraping) → Claude synthesis',
        'Stripe-powered tiers (Free, Starter $19, Pro $49, Agency $199) with feature gating',
        'Security-first: encrypted OAuth tokens, RLS everywhere, Zod-validated routes',
      ],
      techStack: {
        Frontend: [
          'Next.js 15',
          'TypeScript',
          'Tailwind',
          'shadcn/ui',
          'Recharts',
        ],
        Backend: ['Next.js API', 'BullMQ', 'Redis', 'Supabase'],
        AI: ['Claude Opus'],
        Python: ['FastAPI', 'VADER', 'Whisper', 'httpx'],
        Payments: ['Stripe'],
        Deploy: ['Vercel', 'Railway', 'Supabase', 'Upstash'],
      },
    },
  },
  {
    title: 'Calitrack',
    tagline: 'AI fitness app with motion tracking',
    description:
      'Python/Kivy fitness app that uses MediaPipe and machine learning for real-time motion tracking, rep counting, and adaptive workout plans.',
    stack: ['Python', 'Kivy', 'MediaPipe', 'SQL', 'Machine Learning'],
    impact: 'Counts reps and corrects form from the camera feed in real time.',
    liveUrl:
      'https://www.linkedin.com/in/tosin-adedokun-inspire/overlay/Project/1595449161/treasury/?profileId=ACoAAEPys2cBI94Uij3VBtGoBkGKho_FRtdffok',
    githubUrl: 'https://github.com/Tosin-A/Workout-app',
    featured: true,
    category: 'AI',
    details: {
      overview:
        'Calitrack is an AI fitness app built in Python and Kivy that uses MediaPipe and machine learning to track body motion from the camera, count reps, and adapt workout plans to user performance. Shipped as a working prototype across 7 two-week sprint cycles.',
      highlights: [
        'Real-time motion tracking with MediaPipe pose estimation',
        'ML-driven rep counting and form analysis from the camera feed',
        'Adaptive workout plans generated from logged performance data',
        'Gamified UX with skill tracking, workout logging, and a milestone point system',
        '12+ screens organised on an 8px spacing grid with a 3-tier typography hierarchy',
        'Iterative user testing with 5 stakeholders per sprint, feeding every revision',
        'SQL-backed local persistence for sessions, history, and progress',
      ],
      techStack: {
        App: ['Python', 'Kivy'],
        AI: ['MediaPipe', 'Machine Learning'],
        Data: ['SQL'],
      },
    },
  },
  {
    title: 'RAG Hybrid',
    tagline: 'Local hybrid retrieval-augmented generation pipeline',
    description:
      'Fully local RAG pipeline that indexes a text corpus with both dense (Chroma + sentence-transformers) and sparse (BM25) retrievers, fuses results via Reciprocal Rank Fusion, and answers questions through a local Ollama/Mistral model.',
    stack: ['Python', 'Chroma', 'BM25', 'sentence-transformers', 'Ollama', 'Mistral'],
    impact: 'Zero cloud dependency — embeddings, retrieval, and generation run entirely on-device.',
    githubUrl: 'https://github.com/Tosin-A/rag-hybrid',
    category: 'AI',
    details: {
      overview:
        'RAG Hybrid is a local Retrieval-Augmented Generation pipeline with no cloud or API dependencies. A text corpus is chunked with overlap and indexed twice: semantically via Chroma + sentence-transformers (all-MiniLM-L6-v2) for meaning-based recall, and lexically via BM25 for exact/rare-term recall. The two ranked lists are merged with Reciprocal Rank Fusion (RRF), and the top passages are fed as context to a local Ollama Mistral model that answers using only retrieved content.',
      highlights: [
        'Dual-index architecture: dense (Chroma cosine embeddings) + sparse (BM25) run in parallel on every query',
        'Reciprocal Rank Fusion merges both ranked lists without manual weight tuning (∑ 1/(k + rank))',
        'Overlapping chunker preserves continuity across segment boundaries (~400 char chunks, ~80 overlap)',
        'Fully offline after first embed-model download — no OpenAI, no external APIs',
        'Modular CLI: ingest.py builds indexes, search.py debugs retrieval alone, app.py runs the full REPL',
        'Typed Hit objects with per-list ranks and fused scores for introspection and debugging',
        'Persistent indexes on disk (.index/) — re-ingest only when corpus changes',
      ],
      techStack: {
        Retrieval: ['Chroma', 'BM25', 'sentence-transformers'],
        Generation: ['Ollama', 'Mistral'],
        Core: ['Python 3'],
      },
    },
  },
  {
    title: 'Tradingalgz',
    tagline: 'ICT/SMC + ML futures trading system',
    description:
      'Algorithmic futures trading system for NQ/ES, combining an ICT/SMC rule-based strategy with ML-driven signal filtering. Includes a backtesting engine, live execution via Alpaca, and a FastAPI web dashboard.',
    stack: ['Python', 'PyTorch', 'XGBoost', 'FastAPI', 'Alpaca API', 'pandas'],
    impact: 'Rule-based ICT/SMC signals filtered by ML, executed live on Alpaca.',
    githubUrl: 'https://github.com/Tosin-A/Tradingalgz',
    category: 'AI',
    details: {
      overview:
        'Algorithmic futures trading system for NQ/ES, combining an ICT/SMC (Inner Circle Trader / Smart Money Concepts) rule-based strategy with ML-driven signal filtering. Includes a backtesting engine, live execution via Alpaca, and a FastAPI web dashboard.',
      highlights: [
        'ICT/SMC engine: market structure, order blocks, fair value gaps, liquidity sweeps, HTF bias, killzone sessions',
        'ML signal filter using PyTorch and XGBoost models for trade classification',
        'Historical OHLCV backtests with trade logging and risk management',
        'Real-time live execution engine integrated with the Alpaca brokerage API',
        'FastAPI + static frontend dashboard for running and visualizing backtests',
        'Position sizing and risk controls with modular execution layer',
      ],
      techStack: {
        Core: ['Python', 'pandas', 'scikit-learn'],
        ML: ['PyTorch', 'XGBoost'],
        Web: ['FastAPI'],
        Broker: ['Alpaca API'],
      },
    },
  },
];
