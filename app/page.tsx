'use client';

import React, { useState, useEffect } from 'react';

/* ─────────────── Icon Components (inline SVG to avoid dependency issues) ─────────────── */
function Icon({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      {children}
    </svg>
  );
}

const Icons = {
  Sparkles: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></Icon>
  ),
  Check: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><polyline points="20 6 9 17 4 12"/></Icon>
  ),
  CheckCircle: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></Icon>
  ),
  AlertTriangle: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></Icon>
  ),
  TrendingUp: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></Icon>
  ),
  Briefcase: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></Icon>
  ),
  Code: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></Icon>
  ),
  GraduationCap: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 10 3 12 0v-5"/></Icon>
  ),
  Calendar: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></Icon>
  ),
  ChevronRight: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><polyline points="9 18 15 12 9 6"/></Icon>
  ),
  Award: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></Icon>
  ),
  Zap: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></Icon>
  ),
  FileText: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></Icon>
  ),
  Clock: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></Icon>
  ),
  ExternalLink: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></Icon>
  ),
  Target: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></Icon>
  ),
  BarChart: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></Icon>
  ),
  Cpu: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></Icon>
  ),
  BookOpen: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></Icon>
  ),
  ArrowRight: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></Icon>
  ),
  Users: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></Icon>
  ),
  Shield: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></Icon>
  ),
  Layers: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></Icon>
  ),
  Github: ({ className = '' }: { className?: string }) => (
    <Icon className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></Icon>
  ),
};

/* ─────────────── Score Ring Component ─────────────── */
function ScoreRing({ score, size = 160, strokeWidth = 10 }: { score: number; size?: number; strokeWidth?: number }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOffset(circumference * (1 - score / 100));
    }, 300);
    return () => clearTimeout(timer);
  }, [score, circumference]);

  const getColor = (s: number) => {
    if (s >= 85) return { stroke: '#10b981', text: 'text-emerald-400', label: 'Strong Match' };
    if (s >= 70) return { stroke: '#3b82f6', text: 'text-blue-400', label: 'High Potential' };
    if (s >= 50) return { stroke: '#f59e0b', text: 'text-amber-400', label: 'Moderate' };
    return { stroke: '#ef4444', text: 'text-red-400', label: 'Needs Work' };
  };
  const color = getColor(score);

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={radius} strokeWidth={strokeWidth}
          fill="transparent" className="stroke-slate-800/60" />
        <circle cx={size / 2} cy={size / 2} r={radius} strokeWidth={strokeWidth}
          fill="transparent" stroke={color.stroke}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round" className="progress-ring-circle" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-extrabold text-white tabular-nums">{score}%</span>
        <span className={`text-[10px] uppercase font-bold tracking-wider ${color.text}`}>{color.label}</span>
      </div>
    </div>
  );
}

/* ─────────────── Data ─────────────── */
const matchedSkills = [
  { name: 'Python / Java', desc: 'Core programming languages with strong proficiency', evidence: '5+ GitHub repos, CampusConnect & Expense Tracker' },
  { name: 'PostgreSQL & SQL', desc: 'Schema design, complex queries, indexing strategies', evidence: 'Smart Expense Tracker production DB' },
  { name: 'RESTful API Design', desc: 'Clean endpoint architecture, HTTP semantics, versioning', evidence: 'CampusConnect API layer' },
  { name: 'Git & Version Control', desc: 'Feature branching, PRs, merge conflict resolution', evidence: '200+ GitHub contributions this year' },
  { name: 'Node.js & Express', desc: 'Async handlers, middleware chains, error handling', evidence: 'CampusConnect server backend' },
  { name: 'AWS Cloud Fundamentals', desc: 'EC2, S3, IAM basics, deployment patterns', evidence: 'AWS Cloud Practitioner certification' },
  { name: 'React & Frontend Basics', desc: 'Component architecture, state management, hooks', evidence: 'CampusConnect frontend UI' },
  { name: 'Testing Fundamentals', desc: 'Unit testing with Jest, basic test coverage', evidence: 'Smart Expense Tracker test suite' },
];

const gaps = [
  {
    name: 'System Design & High Concurrency',
    priority: 'CRITICAL',
    colorClass: 'border-red-500/30 bg-red-500/5',
    badgeClass: 'badge-red',
    action: 'Master rate limiting patterns, message queue architectures (RabbitMQ/Kafka), horizontal scaling with load balancers, and circuit breaker patterns for distributed APIs.',
    effort: '12-15 Hours',
    impact: '+12% Score',
    resources: ['System Design Primer (GitHub)', 'Designing Data-Intensive Applications', 'ByteByteGo YouTube'],
  },
  {
    name: 'Docker & CI/CD Pipelines',
    priority: 'HIGH',
    colorClass: 'border-amber-500/30 bg-amber-500/5',
    badgeClass: 'badge-amber',
    action: 'Write multi-stage Dockerfiles, configure Docker Compose for local dev with PostgreSQL, set up GitHub Actions for automated testing and deployment workflows.',
    effort: '8-10 Hours',
    impact: '+8% Score',
    resources: ['Docker Official Getting Started', 'GitHub Actions Docs', 'Docker Mastery (Udemy)'],
  },
  {
    name: 'Distributed Caching (Redis)',
    priority: 'MEDIUM',
    colorClass: 'border-blue-500/30 bg-blue-500/5',
    badgeClass: 'badge-blue',
    action: 'Implement cache-aside, write-through, and write-behind patterns. Build session stores, leaderboards, and rate limiters using Redis data structures.',
    effort: '5-6 Hours',
    impact: '+5% Score',
    resources: ['Redis University (Free)', 'Redis in Action', 'Try Redis Online'],
  },
];

const roadmapWeeks = [
  {
    id: 1, week: 'Week 1', title: 'Docker & CI/CD Mastery', focus: 'DevOps & Deployment', icon: 'layers',
    tasks: [
      'Write multi-stage Dockerfile for a Node.js + Python microservice',
      'Set up Docker Compose with PostgreSQL, Redis, and application containers',
      'Configure GitHub Actions: lint → test → build → deploy pipeline',
      'Practice rollback strategies and blue-green deployment concepts',
    ],
  },
  {
    id: 2, week: 'Week 2', title: 'Redis & Database Optimization', focus: 'Performance Engineering', icon: 'zap',
    tasks: [
      'Benchmark unindexed vs indexed SQL queries on 100K+ rows',
      'Implement cache-aside pattern with Redis for hot API endpoints',
      'Build a distributed rate limiter using Redis sorted sets',
      'Handle cache invalidation strategies and thundering herd problem',
    ],
  },
  {
    id: 3, week: 'Week 3', title: 'System Design Deep Dive', focus: 'Architecture & Scalability', icon: 'target',
    tasks: [
      'Design a scalable URL shortener: QPS estimation, DB sharding, analytics',
      'Design a real-time notification system with WebSockets + message queues',
      'Practice capacity estimation: storage, bandwidth, and compute requirements',
      'Diagram database replication: leader-follower, multi-leader, consensus',
    ],
  },
  {
    id: 4, week: 'Week 4', title: 'Interview Battle Prep', focus: 'Mock Interviews & Behavioral', icon: 'award',
    tasks: [
      'Practice STAR responses for CampusConnect architecture decisions',
      'Solve 15 medium LeetCode problems focusing on arrays, graphs, and DP',
      'Conduct 2 timed 45-minute mock system design interviews',
      'Review concurrency edge-cases: race conditions, deadlocks, livelocks',
    ],
  },
];

const interviewQuestions = [
  {
    q: 'Design the CampusConnect API to handle 10x its current traffic within 48 hours. Walk me through your approach.',
    type: 'System Design & Architecture',
    difficulty: 'Hard',
    rubric: [
      'Identifies read vs write traffic split and caching opportunities',
      'Proposes horizontal scaling with stateless app servers behind a load balancer',
      'Suggests async processing for non-critical writes (email notifications, analytics)',
      'Mentions monitoring, alerting, and graceful degradation strategies',
    ],
    sampleAnswer: 'First, I would profile current bottlenecks using APM tools. Read-heavy endpoints (user profiles, course lists) get a Redis cache layer with TTLs. I would containerize the app and deploy behind an ALB with auto-scaling groups targeting CPU < 70%. Background jobs (notification emails, search indexing) move to a SQS queue processed by dedicated workers. Database gets read replicas for reporting queries. Finally, I would add CloudWatch alarms for p99 latency and error rates.',
  },
  {
    q: 'How would you ensure data consistency when transferring funds between two accounts in your Expense Tracker?',
    type: 'Database Engineering & Concurrency',
    difficulty: 'Medium',
    rubric: [
      'Uses database transactions with appropriate isolation level',
      'Implements optimistic or pessimistic locking to prevent double-spending',
      'Handles edge cases: insufficient funds, network failures, partial commits',
      'Considers idempotency for retry safety',
    ],
    sampleAnswer: 'I would wrap the debit and credit operations in a single PostgreSQL transaction with SERIALIZABLE isolation. Using SELECT FOR UPDATE on both account rows prevents concurrent modifications. The API endpoint accepts an idempotency key to safely handle retries. If any step fails, the entire transaction rolls back. For audit trail, I log every attempt (success or failure) to a separate append-only ledger table.',
  },
  {
    q: 'Tell me about a time you had to make a difficult technical decision with incomplete information.',
    type: 'Behavioral — Decision Making',
    difficulty: 'Medium',
    rubric: [
      'Uses STAR format (Situation, Task, Action, Result)',
      'Shows analytical thinking under uncertainty',
      'Demonstrates willingness to iterate and learn from outcomes',
      'Quantifies impact where possible',
    ],
    sampleAnswer: 'When building CampusConnect, I had to choose between a monolithic Next.js app and a microservices architecture. With a 4-week deadline, I chose the monolith for faster iteration speed, but architected the code with clear module boundaries (auth, courses, notifications) so we could extract services later. This let us ship on time, and the clean boundaries made it straightforward to extract the notification module into a separate service when we scaled to 500+ users.',
  },
];

const atsKeywords = {
  matched: [
    'Python', 'Java', 'PostgreSQL', 'SQL', 'REST API', 'Git', 'Node.js',
    'Express', 'React', 'AWS', 'Agile', 'Unit Testing', 'CI', 'JSON',
  ],
  missing: [
    'Docker', 'Kubernetes', 'Redis', 'Kafka', 'Microservices',
    'System Design', 'CI/CD', 'Terraform',
  ],
};

/* ─────────────── Main Page Component ─────────────── */
export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('xray');
  const [whatIfSkills, setWhatIfSkills] = useState<Record<string, boolean>>({
    'System Design': false,
    'Docker & Kubernetes': false,
    'Redis Caching': false,
    'Apache Kafka': false,
    'CI/CD Pipelines': false,
  });
  const [roadmapCompleted, setRoadmapCompleted] = useState<Record<number, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const baseScore = 68;
  const scoreBoost = Object.values(whatIfSkills).filter(Boolean).length * 6;
  const currentScore = Math.min(96, baseScore + scoreBoost);

  const toggleWhatIf = (skill: string) =>
    setWhatIfSkills((prev) => ({ ...prev, [skill]: !prev[skill] }));

  const toggleRoadmap = (id: number) =>
    setRoadmapCompleted((prev) => ({ ...prev, [id]: !prev[id] }));

  const tabs = [
    { id: 'xray', label: 'Skill X-Ray', icon: Icons.Zap },
    { id: 'roadmap', label: 'Action Roadmap', icon: Icons.Calendar },
    { id: 'interview', label: 'Interview Prep', icon: Icons.Award },
    { id: 'ats', label: 'ATS Optimizer', icon: Icons.FileText },
    { id: 'whatif', label: 'What-If Sim', icon: Icons.TrendingUp },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col">
      {/* ═══════════ HEADER ═══════════ */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <Icons.Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold gradient-text tracking-tight">RoleReady AI</span>
            <span className="hidden sm:inline-flex badge-purple text-[10px]">LIVE DEMO</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
              <span>Analyzing: <strong className="text-slate-200">Arjun Mehta</strong></span>
            </div>
            <a href="https://github.com/Driven-Ansh/roleready-ai" target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-xs bg-slate-900 hover:bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors">
              <Icons.Github className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>
        </div>
      </header>

      {/* ═══════════ MAIN ═══════════ */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* ──── Hero / Profile Card ──── */}
        <section className="relative glass-card p-6 md:p-8 overflow-hidden animate-fade-in">
          {/* Background blobs */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge-purple text-[10px] uppercase tracking-widest font-bold">
                  <Icons.Cpu className="w-3 h-3" /> Job DNA Extracted
                </span>
                <span className="badge-green text-[10px] uppercase tracking-widest font-bold">
                  <Icons.Shield className="w-3 h-3" /> Resume Verified
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Backend Software Engineer
                <span className="block text-xl sm:text-2xl font-normal text-blue-400 mt-1">at Nexa Systems</span>
              </h1>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                Real-time gap intelligence comparing <strong className="text-white">Arjun Mehta&apos;s</strong> profile against Nexa Systems&apos; production requirements —
                high-concurrency APIs, distributed systems, PostgreSQL scaling, and cloud-native architecture.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                {[
                  { icon: Icons.Briefcase, text: 'Mid-Level Backend', color: 'text-blue-400' },
                  { icon: Icons.GraduationCap, text: 'B.Tech Computer Science', color: 'text-purple-400' },
                  { icon: Icons.Clock, text: '3-4 Week Prep Sprint', color: 'text-emerald-400' },
                  { icon: Icons.Target, text: '8 Skills Matched', color: 'text-amber-400' },
                ].map((tag, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800/60">
                    <tag.icon className={`w-3.5 h-3.5 ${tag.color}`} />
                    <span className="text-slate-300">{tag.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Score Widget */}
            <div className="bg-slate-950/60 border border-slate-800/60 rounded-2xl p-6 flex flex-col items-center text-center shadow-inner">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Role Readiness</span>
              <ScoreRing score={currentScore} />
              <div className="w-full mt-4 grid grid-cols-2 gap-2">
                <div className="bg-slate-900/70 py-2 px-3 rounded-lg border border-slate-800/50">
                  <div className="text-[10px] text-slate-500">Strengths</div>
                  <div className="text-sm font-bold text-emerald-400">8 Verified</div>
                </div>
                <div className="bg-slate-900/70 py-2 px-3 rounded-lg border border-slate-800/50">
                  <div className="text-[10px] text-slate-500">Gaps</div>
                  <div className="text-sm font-bold text-amber-400">3 Priority</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──── Tab Navigation ──── */}
        <nav className="flex gap-1 border-b border-slate-800/60 overflow-x-auto pb-px scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 transition-all whitespace-nowrap rounded-t-lg ${
                  isActive
                    ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
                    : 'border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-900/40'
                }`}>
                <tab.icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-600'}`} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* ═══════════ TAB: Skill X-Ray & Gaps ═══════════ */}
        {activeTab === 'xray' && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Matched Skills */}
              <div className="glass-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="section-title"><Icons.CheckCircle className="w-5 h-5 text-emerald-400" /> Verified Strengths</h3>
                  <span className="badge-green text-[10px] font-bold">8 / 8 MATCHED</span>
                </div>
                <div className="grid gap-3">
                  {matchedSkills.map((s, i) => (
                    <div key={i} className="group flex items-start gap-3 p-3 rounded-xl bg-slate-950/50 border border-slate-800/40 hover:border-emerald-500/20 transition-colors">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                        <Icons.Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-slate-200">{s.name}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{s.desc}</div>
                        <div className="text-[10px] text-slate-600 mt-1">Evidence: {s.evidence}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gaps */}
              <div className="glass-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="section-title"><Icons.AlertTriangle className="w-5 h-5 text-amber-400" /> Identified Gaps</h3>
                  <span className="badge-amber text-[10px] font-bold">ACTION REQUIRED</span>
                </div>
                <div className="space-y-4">
                  {gaps.map((gap, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${gap.colorClass} space-y-3`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">{gap.name}</span>
                        <span className={`${gap.badgeClass} text-[10px] font-bold`}>{gap.priority}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{gap.action}</p>
                      <div className="flex flex-wrap gap-2">
                        {gap.resources.map((r, ri) => (
                          <span key={ri} className="text-[10px] bg-slate-900/80 text-slate-400 px-2 py-0.5 rounded border border-slate-800/50">
                            <Icons.BookOpen className="w-2.5 h-2.5 inline mr-1" />{r}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/40 text-[11px]">
                        <span className="text-slate-500">Est. Effort: <strong className="text-slate-300">{gap.effort}</strong></span>
                        <span className="text-indigo-400 font-semibold">{gap.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════ TAB: Action Roadmap ═══════════ */}
        {activeTab === 'roadmap' && (
          <div className="glass-card p-6 space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="section-title"><Icons.Calendar className="w-5 h-5 text-indigo-400" /> 4-Week Preparation Sprint</h3>
                <p className="text-xs text-slate-500 mt-1">Milestones curated from Nexa Systems&apos; interview loop and engineering values.</p>
              </div>
              <div className="badge-blue text-[10px] font-bold">
                {Object.values(roadmapCompleted).filter(Boolean).length} / {roadmapWeeks.length} Completed
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roadmapWeeks.map((step) => {
                const done = !!roadmapCompleted[step.id];
                return (
                  <div key={step.id} onClick={() => toggleRoadmap(step.id)}
                    className={`p-5 rounded-xl border cursor-pointer transition-all group ${
                      done
                        ? 'bg-indigo-950/20 border-indigo-500/30 shadow-lg shadow-indigo-500/5'
                        : 'bg-slate-950/40 border-slate-800/60 hover:border-slate-700'
                    }`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                          done ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-400'
                        }`}>{step.week}</span>
                        <span className="text-[11px] font-medium text-slate-500">{step.focus}</span>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                        done ? 'bg-indigo-600 border-indigo-600' : 'border-slate-700 bg-slate-900 group-hover:border-slate-600'
                      }`}>
                        {done && <Icons.Check className="w-3 h-3 text-white" />}
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-sm mb-3">{step.title}</h4>
                    <ul className="space-y-2">
                      {step.tasks.map((task, ti) => (
                        <li key={ti} className="flex items-start gap-2 text-xs">
                          <span className={`mt-1 w-1 h-1 rounded-full flex-shrink-0 ${done ? 'bg-indigo-400' : 'bg-slate-600'}`} />
                          <span className={done ? 'text-slate-300' : 'text-slate-500'}>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ═══════════ TAB: Interview Prep ═══════════ */}
        {activeTab === 'interview' && (
          <div className="space-y-5 animate-fade-in">
            <div className="glass-card p-6">
              <h3 className="section-title mb-1"><Icons.Award className="w-5 h-5 text-purple-400" /> AI Interview Simulator</h3>
              <p className="text-xs text-slate-500">Questions reverse-engineered from Backend Engineer interviews at Nexa Systems and similar companies.</p>
            </div>

            {interviewQuestions.map((item, idx) => (
              <div key={idx} className="glass-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="badge-purple text-[10px] font-bold">{item.type}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    item.difficulty === 'Hard' ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>{item.difficulty}</span>
                </div>
                <h4 className="text-base font-bold text-white leading-snug">{item.q}</h4>
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/50 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Evaluation Criteria</span>
                  <ul className="space-y-1.5">
                    {item.rubric.map((r, ri) => (
                      <li key={ri} className="flex items-start gap-2 text-xs text-slate-400">
                        <Icons.Check className="w-3 h-3 text-indigo-400 flex-shrink-0 mt-0.5" />{r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-indigo-950/15 p-4 rounded-xl border border-indigo-500/15 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">Model Answer</span>
                  <p className="text-xs text-slate-300 leading-relaxed italic">{item.sampleAnswer}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ═══════════ TAB: ATS Optimizer ═══════════ */}
        {activeTab === 'ats' && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="stat-card">
                <div className="text-[11px] text-slate-500 font-medium">ATS Match Score</div>
                <div className="text-3xl font-extrabold text-emerald-400 mt-1">82<span className="text-lg text-slate-500">/100</span></div>
                <div className="text-[10px] text-emerald-500/70">High pass probability</div>
              </div>
              <div className="stat-card">
                <div className="text-[11px] text-slate-500 font-medium">Keywords Detected</div>
                <div className="text-3xl font-extrabold text-blue-400 mt-1">14<span className="text-lg text-slate-500">/22</span></div>
                <div className="text-[10px] text-blue-500/70">Industry-standard terms</div>
              </div>
              <div className="stat-card">
                <div className="text-[11px] text-slate-500 font-medium">Missing Critical</div>
                <div className="text-3xl font-extrabold text-amber-400 mt-1">8<span className="text-lg text-slate-500"> terms</span></div>
                <div className="text-[10px] text-amber-500/70">Add for 95%+ score</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="glass-card p-6 space-y-4">
                <h3 className="section-title text-base"><Icons.CheckCircle className="w-5 h-5 text-emerald-400" /> Keywords Found in Resume</h3>
                <div className="flex flex-wrap gap-2">
                  {atsKeywords.matched.map((kw, i) => (
                    <span key={i} className="text-xs bg-emerald-500/8 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-lg font-medium">
                      ✓ {kw}
                    </span>
                  ))}
                </div>
              </div>
              <div className="glass-card p-6 space-y-4">
                <h3 className="section-title text-base"><Icons.AlertTriangle className="w-5 h-5 text-amber-400" /> Missing — Add These to Your Resume</h3>
                <div className="flex flex-wrap gap-2">
                  {atsKeywords.missing.map((kw, i) => (
                    <span key={i} className="text-xs bg-amber-500/8 text-amber-300 border border-amber-500/20 px-3 py-1.5 rounded-lg font-medium">
                      + {kw}
                    </span>
                  ))}
                </div>
                <div className="mt-2 p-3 rounded-lg bg-slate-950/60 border border-slate-800/40">
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    <strong className="text-slate-300">Pro Tip:</strong> Naturally weave these terms into your project descriptions and skills section.
                    For example: &quot;Containerized the CampusConnect application using <strong className="text-amber-400">Docker</strong> and
                    orchestrated deployments with <strong className="text-amber-400">CI/CD</strong> pipelines via GitHub Actions.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════ TAB: What-If Simulation ═══════════ */}
        {activeTab === 'whatif' && (
          <div className="space-y-6 animate-fade-in">
            <div className="glass-card p-6">
              <h3 className="section-title mb-1"><Icons.TrendingUp className="w-5 h-5 text-indigo-400" /> What-If Career Simulator</h3>
              <p className="text-xs text-slate-500">
                Toggle skills below to simulate how acquiring each competency changes your readiness score in real-time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(whatIfSkills).map(([skill, active]) => (
                <button key={skill} onClick={() => toggleWhatIf(skill)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    active
                      ? 'bg-indigo-950/25 border-indigo-500/40 shadow-lg shadow-indigo-500/5'
                      : 'bg-slate-950/40 border-slate-800/60 hover:border-slate-700'
                  }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white">{skill}</span>
                    <div className={`w-10 h-5 rounded-full flex items-center transition-colors p-0.5 ${
                      active ? 'bg-indigo-600 justify-end' : 'bg-slate-700 justify-start'
                    }`}>
                      <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                    </div>
                  </div>
                  <span className={`text-[11px] ${active ? 'text-indigo-400 font-medium' : 'text-slate-500'}`}>
                    {active ? '✓ Skill acquired — +6% boost applied' : 'Click to simulate acquisition'}
                  </span>
                </button>
              ))}
            </div>

            <div className="glass-card p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <ScoreRing score={currentScore} size={100} strokeWidth={8} />
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Projected Readiness</div>
                    <div className="text-2xl font-extrabold text-white mt-0.5">{currentScore}% Match</div>
                    <div className="text-xs text-slate-500 mt-1">
                      {scoreBoost > 0 && <span className="text-indigo-400 font-semibold">+{scoreBoost}% </span>}
                      from {Object.values(whatIfSkills).filter(Boolean).length} selected skill(s)
                    </div>
                  </div>
                </div>
                <div className="text-sm text-right">
                  {currentScore >= 90 ? (
                    <span className="text-emerald-400 font-semibold">🎉 Top 5% candidate for Nexa Systems</span>
                  ) : currentScore >= 80 ? (
                    <span className="text-blue-400">Strong candidate — add more skills to reach top tier</span>
                  ) : (
                    <span className="text-slate-400">Toggle more skills to see your projected improvement</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="border-t border-slate-800/40 bg-slate-950 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Icons.Sparkles className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-semibold text-slate-400">RoleReady AI</span>
            </div>
            <p className="text-xs text-slate-600 text-center">
              Built with Next.js, TypeScript & Tailwind CSS • Deployed on Render
            </p>
            <a href="https://github.com/Driven-Ansh/roleready-ai" target="_blank" rel="noreferrer"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1">
              <Icons.Github className="w-3.5 h-3.5" /> View Source
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
