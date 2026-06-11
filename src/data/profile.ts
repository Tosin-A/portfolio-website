export const profile = {
  name: 'Tosin Adedokun',
  handle: 'Tosin-A',
  role: 'AI-focused full-stack builder',
  location: 'London, UK · open to internships and tech roles',
  tagline: 'I build AI products, platforms, and SaaS from zero to production.',
  heroStatement:
    '19-year old CS student shipping AI-native software. I turn rough ideas into production products, fast.',
  about: [
    "I'm Tosin, a 19-year old Computer Engineering student at the University of Birmingham. I build full-stack apps, AI products, and SaaS, and I'm increasingly fascinated by the hardware side of AI: GPUs, accelerators, inference systems, and the silicon that makes modern models possible.",
    "I've shipped a SaaS analytics platform, an AI coaching app on the App Store, and a stack of side projects, mostly solo, from first line to first user. I move fast in hackathons and I like small teams, hard problems, and shipping things people actually use.",
    'Long game: start a tech company at the intersection of AI and the hardware that powers it. Short game: keep building, keep shipping, and learn from the best engineers in the world.',
  ],
  skills: {
    Languages: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    'AI / ML': [
      'Anthropic Claude',
      'OpenAI API',
      'VADER',
      'Whisper',
      'RAG',
      'Prompt eng.',
    ],
    Frontend: [
      'React',
      'React Native',
      'Next.js',
      'Expo',
      'Tailwind',
      'Recharts',
    ],
    Backend: [
      'FastAPI',
      'Node.js',
      'Supabase',
      'PostgreSQL',
      'BullMQ',
      'Redis',
    ],
    'Security & Tooling': [
      'Google Cybersecurity Cert',
      'Splunk',
      'Chronicle SIEM',
      'Linux',
      'Docker',
      'Git',
    ],
  } as Record<string, string[]>,
  experience: [
    {
      title: 'PwC — Technology Work Experience',
      org: 'PwC UK',
      period: 'Jun 2024 - Jul 2024',
      points: [
        'Analysed structured test datasets in a simulated enterprise environment, tracing root causes of inconsistencies and anomalies that were degrading database accuracy and reporting reliability.',
        'Produced visual summaries — pie charts and categorised data views — to surface trends for non-technical stakeholders and make large datasets easier to interpret.',
        'Gained exposure to data governance and validation workflows, collaborating on problem-solving challenges around data integrity, business-rule enforcement, and consistency across interconnected tables.',
      ],
    },
    {
      title: 'Founder, Tutor',
      org: 'ADEX Tutors',
      period: 'Sep 2025 - Present',
      points: [
        'Founded and scaled an independent tutoring initiative delivering GCSE and A-Level support in Mathematics, Mechanics, and Computer Science — managing onboarding, scheduling, lesson planning, and progress tracking end-to-end.',
        'Designed exam-focused lesson frameworks tailored to each student’s weaknesses, breaking down topics like mechanics modelling, algorithms, and problem-solving strategies into clear, step-by-step methods.',
        'Built and retained a consistent student base through referrals, running structured assessments and regular parent updates, and adapting teaching to improve confidence, exam technique, and outcomes.',
      ],
    },
    {
      title: 'Youth Lead & Musician (Sound Engineer)',
      org: 'RCCG His Glory Arena',
      period: 'Sep 2018 - Present',
      points: [
        'Lead the youth sector, organising services and mentoring younger members on personal development and music.',
        '7+ years on keyboard and bass; engineer the weekly livestream signal chain (mixing console routing, gain staging, monitor sends, and stream encoding) to deliver consistent broadcast-quality audio across services.',
      ],
    },
  ],
  education: [
    {
      title: 'BSc Computer Engineering',
      org: 'University of Birmingham',
      period: '2026 - 2029',
      points: [
        'Core: data structures, systems, algorithms, discrete maths.',
        'Self-directed: applied ML, distributed systems, growth engineering.',
      ],
    },
    {
      title: 'A-Levels',
      org: 'Newstead Wood Grammar School',
      period: '2023 - 2025',
      points: ['Mathematics (A), Physics (A), Computer Science (B).'],
    },
    {
      title: 'GCSEs',
      org: 'Bullers Wood School for Boys',
      period: '2018 - 2023',
      points: [
        '11 GCSEs (grades 9 to 6), including Mathematics (9) and English Language & Literature (8).',
      ],
    },
    {
      title: 'Google Cybersecurity Professional Certificate',
      org: 'Google / Coursera',
      period: 'Completed',
      points: [
        '182-hour accredited programme: network security, threat analysis, incident response.',
        'Hands-on with SIEM tools (Splunk & Chronicle), Linux, SQL, and Python security automation.',
      ],
    },
  ],
  nowBuilding: [
    'Building CloutAI and experimenting with AI-driven growth loops.',
    'Scaling Coresense and shipping its next analytics features.',
    'Writing and sharing what I learn building in public.',
  ],
  email: 'adedokuntosin1@gmail.com',
  social: {
    github: 'https://github.com/Tosin-A',
    linkedin: 'https://www.linkedin.com/in/tosin-adedokun-17393a279/',
    twitter: 'https://x.com/yxng_tosin',
  },
  resumeUrl: '/resume.pdf',
};
