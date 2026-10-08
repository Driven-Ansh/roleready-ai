'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Briefcase,
  Code2,
  GraduationCap,
  Calendar,
  ChevronRight,
  Award,
  Sparkles,
  Cpu,
  Layers,
  ExternalLink,
  FileText,
  Check,
  ArrowRight,
  Zap,
  BarChart3,
  Flame,
  Clock,
  BookOpen
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'xray' | 'roadmap' | 'interview' | 'ats' | 'whatif'>('xray');
  const [whatIfSkills, setWhatIfSkills] = useState<{ [key: string]: boolean }>({
    'System Design': false,
    'Docker & Kubernetes': false,
    'Redis Caching': false,
    'Apache Kafka': false,
  });

  const [roadmapCompleted, setRoadmapCompleted] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true,
  });

  // Calculate base score and boost
  const baseScore = 68;
  const scoreBoost = Object.values(whatIfSkills).filter(Boolean).length * 7;
  const currentScore = Math.min(98, baseScore + scoreBoost);

  const toggleWhatIf = (skill: string) => {
    setWhatIfSkills((prev) => ({ ...prev, [skill]: !prev[skill] }));
  };

  const toggleRoadmap = (id: number) => {
    setRoadmapCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Banner / Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                RoleReady AI
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs uppercase px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                Live Demo
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-xs text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Candidate: <strong className="text-slate-200">Arjun Mehta</strong></span>
            </div>
            <a
              href="https://github.com/Driven-Ansh/driven-ansh"
              target="_blank"
              rel="noreferrer"
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Hero / Candidate Card */}
        <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/60 border border-slate-800 p-6 md:p-8 overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            {/* Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" /> Job DNA Extraction Complete
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Backend Software Engineer <span className="text-blue-400 font-normal">at Nexa Systems</span>
              </h1>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                Real-time gap intelligence comparing Arjun’s profile with Nexa Systems’ production requirements:
                high-concurrency APIs, distributed systems, PostgreSQL scaling, and cloud architecture.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700">
                  <Briefcase className="w-4 h-4 text-blue-400" />
                  <span>Target: Mid-Level Backend</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <span>B.Tech Computer Science</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Estimated Prep: 3-4 Weeks</span>
                </div>
              </div>
            </div>

            {/* Score Ring Widget */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-inner">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Role Readiness Score</span>
              
              <div className="relative w-36 h-36 flex items-center justify-center my-2">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-slate-800"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-blue-500 transition-all duration-700 ease-out"
                    strokeWidth="8"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - currentScore / 100)}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-extrabold text-white tracking-tight">{currentScore}%</span>
                  <span className="text-[10px] uppercase font-bold text-blue-400">
                    {currentScore >= 85 ? 'Strong Match' : 'High Potential'}
                  </span>
                </div>
              </div>

              <div className="w-full mt-3 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-slate-900/90 py-1.5 px-2 rounded border border-slate-800/80">
                  <span className="text-slate-400 block text-[10px]">Verified Skills</span>
                  <span className="font-bold text-emerald-400">8 Matched</span>
                </div>
                <div className="bg-slate-900/90 py-1.5 px-2 rounded border border-slate-800/80">
                  <span className="text-slate-400 block text-[10px]">Critical Gaps</span>
                  <span className="font-bold text-amber-400">3 Priority</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 space-x-2 sm:space-x-4 overflow-x-auto pb-px">
          {[
            { id: 'xray', label: 'Skill X-Ray & Gaps', icon: Zap },
            { id: 'roadmap', label: 'Action Roadmap', icon: Calendar },
            { id: 'interview', label: 'AI Interview Simulator', icon: Award },
            { id: 'ats', label: 'ATS & Keyword Score', icon: FileText },
            { id: 'whatif', label: 'What-If Simulation', icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 transition whitespace-nowrap ${
                  isActive
                    ? 'border-blue-500 text-blue-400 bg-blue-500/5 rounded-t-lg'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* TAB 1: Skill X-Ray & Gaps */}
        {activeTab === 'xray' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Matched Skills */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white flex items-center gap-2 text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    Verified Strengths (Matched in Resume)
                  </h3>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-semibold">
                    100% Ready
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {[
                    { name: 'Python / Java', desc: 'Core programming language strength', evidence: 'GitHub & Project demos' },
                    { name: 'PostgreSQL & SQL', desc: 'Schema design & query optimization', evidence: 'Smart Expense Tracker' },
                    { name: 'RESTful API Design', desc: 'Clean endpoints & HTTP specifications', evidence: 'CampusConnect project' },
                    { name: 'Git & Version Control', desc: 'Branching, PRs, and collaborative flow', evidence: 'Active GitHub commits' },
                    { name: 'Node.js Basics', desc: 'Async handlers & Express routing', evidence: 'CampusConnect backend' },
                    { name: 'AWS Cloud Basics', desc: 'EC2, S3 fundamentals', evidence: 'AWS Cloud Practitioner cert' },
                  ].map((s, idx) => (
                    <div key={idx} className="p-3 bg-slate-950/60 rounded-lg border border-slate-800/80 space-y-1">
                      <div className="font-semibold text-slate-200 flex items-center justify-between">
                        <span>{s.name}</span>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <p className="text-slate-400 text-[11px]">{s.desc}</p>
                      <span className="text-[10px] text-slate-500 block">Source: {s.evidence}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gaps & Priority Fixes */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white flex items-center gap-2 text-base">
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                    Identified Gaps for Nexa Systems
                  </h3>
                  <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20 font-semibold">
                    Action Required
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  {[
                    {
                      name: 'System Design & High Concurrency',
                      priority: 'CRITICAL',
                      color: 'border-red-500/40 bg-red-500/5 text-red-300',
                      badge: 'bg-red-500/20 text-red-400',
                      action: 'Learn rate limiting, message queues, and load balancing patterns.',
                      effort: '10 Hours',
                    },
                    {
                      name: 'Docker Containerization & CI/CD',
                      priority: 'HIGH',
                      color: 'border-amber-500/40 bg-amber-500/5 text-amber-300',
                      badge: 'bg-amber-500/20 text-amber-400',
                      action: 'Containerize CampusConnect and write a GitHub Actions workflow.',
                      effort: '6 Hours',
                    },
                    {
                      name: 'Distributed Caching (Redis)',
                      priority: 'MEDIUM',
                      color: 'border-blue-500/40 bg-blue-500/5 text-blue-300',
                      badge: 'bg-blue-500/20 text-blue-400',
                      action: 'Implement write-through cache for user sessions and hot data queries.',
                      effort: '4 Hours',
                    },
                  ].map((gap, idx) => (
                    <div key={idx} className={`p-3.5 rounded-lg border ${gap.color} space-y-2`}>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-100">{gap.name}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${gap.badge}`}>
                          {gap.priority}
                        </span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">{gap.action}</p>
                      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
                        <span>Estimated Effort: <strong>{gap.effort}</strong></span>
                        <span className="text-blue-400 hover:underline cursor-pointer flex items-center gap-1">
                          View Module <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: Action Roadmap */}
        {activeTab === 'roadmap' && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-white text-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  Personalized 4-Week Prep Sprint
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  Step-by-step milestones curated directly from the Nexa Systems interview process.
                </p>
              </div>
              <div className="text-xs text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                Milestones completed: <strong className="text-blue-400">{Object.values(roadmapCompleted).filter(Boolean).length} / 4</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: 1,
                  week: 'Week 1',
                  title: 'Production Docker & CI/CD Pipelines',
                  focus: 'DevOps & Deployment',
                  tasks: [
                    'Write multi-stage Dockerfile for Node/Python apps',
                    'Set up Docker Compose with Postgres container',
                    'Configure GitHub Actions for automated lint and unit test run',
                  ],
                },
                {
                  id: 2,
                  week: 'Week 2',
                  title: 'Redis Caching & DB Optimization',
                  focus: 'Performance & Latency',
                  tasks: [
                    'Benchmark unindexed vs indexed SQL queries in Postgres',
                    'Implement cache-aside pattern with Redis',
                    'Handle cache invalidation on updates',
                  ],
                },
                {
                  id: 3,
                  week: 'Week 3',
                  title: 'System Design: Scalable URL Shortener / Feed',
                  focus: 'Architecture & Scalability',
                  tasks: [
                    'Design rate-limiter with token bucket algorithm',
                    'Estimate QPS, storage requirements, and bandwidth',
                    'Diagram database sharding and read-replicas',
                  ],
                },
                {
                  id: 4,
                  week: 'Week 4',
                  title: 'Mock Behavioral & Technical Interview Defense',
                  focus: 'Interview Simulation',
                  tasks: [
                    'Practice STAR technique for CampusConnect architecture decisions',
                    'Review concurrency edge-cases (race conditions, deadlocks)',
                    'Conduct timed 45-minute live coding simulation',
                  ],
                },
              ].map((step) => {
                const isDone = roadmapCompleted[step.id];
                return (
                  <div
                    key={step.id}
                    onClick={() => toggleRoadmap(step.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition ${
                      isDone
                        ? 'bg-blue-950/20 border-blue-500/40 text-slate-200'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${isDone ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-400'}`}>
                          {step.week}
                        </span>
                        <span className="text-xs font-semibold text-slate-300">{step.focus}</span>
                      </div>
                      <div className={`w-5 h-5 rounded flex items-center justify-center border ${isDone ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-700 bg-slate-900'}`}>
                        {isDone && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>

                    <h4 className="font-bold text-white text-sm mb-2">{step.title}</h4>

                    <ul className="space-y-1.5 text-xs">
                      {step.tasks.map((task, tidx) => (
                        <li key={tidx} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">•</span>
                          <span className={isDone ? 'text-slate-300' : 'text-slate-400'}>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: Interview Simulator */}
        {activeTab === 'interview' && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-6">
            <div>
              <h3 className="font-bold text-white text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                AI Interview Question Simulator
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                Extracted directly from interview patterns for Backend Engineers at Nexa Systems.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'How would you handle a sudden 10x traffic spike on the CampusConnect API?',
                  type: 'Architecture & Scaling',
                  rubric: 'Looking for: Caching layers (Redis), horizontal auto-scaling, asynchronous task queues (RabbitMQ/Kafka), and database read-replicas.',
                  sampleAnswer: 'Start by isolating read vs write traffic. Place a Redis cache in front of heavy read endpoints to absorb 80% of traffic. Put long-running tasks into a background worker queue, and scale application pods horizontally using Kubernetes HPA.',
                },
                {
                  q: 'Explain how you design a database schema for transaction isolation in an expense tracker.',
                  type: 'Database & Concurrency',
                  rubric: 'Looking for: ACID properties, isolation levels (READ COMMITTED vs SERIALIZABLE), optimistic locking, and indexing strategies.',
                  sampleAnswer: 'Use row-level locking or optimistic concurrency control via a version column to avoid double-charging. Wrap fund transfers inside explicit SQL transactions with appropriate rollback handlers.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-purple-400 uppercase tracking-wider text-[11px]">{item.type}</span>
                    <span className="text-slate-500">Question {idx + 1} of 2</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{item.q}</h4>
                  
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800/80 text-xs space-y-1">
                    <span className="text-slate-400 font-semibold block text-[11px]">Evaluation Rubric:</span>
                    <p className="text-slate-300 text-[11px] leading-relaxed">{item.rubric}</p>
                  </div>

                  <div className="bg-blue-950/20 p-3 rounded-lg border border-blue-500/20 text-xs space-y-1">
                    <span className="text-blue-400 font-semibold block text-[11px]">AI Recommended Response Structure:</span>
                    <p className="text-slate-300 text-[11px] leading-relaxed italic">{item.sampleAnswer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: ATS Score */}
        {activeTab === 'ats' && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-6">
            <div>
              <h3 className="font-bold text-white text-lg flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                Resume ATS Keyword Analyzer
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                Keyword density analysis comparing Arjun’s resume against Nexa Systems ATS filters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-center">
                <span className="text-xs text-slate-400">ATS Match Rating</span>
                <div className="text-3xl font-extrabold text-emerald-400 mt-2">82 / 100</div>
                <span className="text-[10px] text-slate-500 block mt-1">High Screening Pass Rate</span>
              </div>
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-center">
                <span className="text-xs text-slate-400">Keywords Detected</span>
                <div className="text-3xl font-extrabold text-blue-400 mt-2">14 / 18</div>
                <span className="text-[10px] text-slate-500 block mt-1">Target Terms Present</span>
              </div>
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-center">
                <span className="text-xs text-slate-400">Missing Critical Terms</span>
                <div className="text-3xl font-extrabold text-amber-400 mt-2">4 Terms</div>
                <span className="text-[10px] text-slate-500 block mt-1">Add to Boost to 95%</span>
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Quick-Fix Keyword Injections:</h4>
              <div className="flex flex-wrap gap-2">
                {['Docker & Containers', 'Kafka Streaming', 'Microservices', 'Redis Caching', 'CI/CD Pipelines'].map((term, i) => (
                  <span key={i} className="text-xs bg-slate-800/90 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <span className="text-blue-400 font-bold">+</span> {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: What-If Simulation */}
        {activeTab === 'whatif' && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-6">
            <div>
              <h3 className="font-bold text-white text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-400" />
                Interactive "What-If" Career Simulator
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                Toggle skills below to simulate how acquiring competencies changes your hiring readiness score in real time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(whatIfSkills).map((skill) => {
                const active = whatIfSkills[skill];
                return (
                  <div
                    key={skill}
                    onClick={() => toggleWhatIf(skill)}
                    className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                      active
                        ? 'bg-indigo-950/30 border-indigo-500/60 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-sm block">{skill}</span>
                      <span className="text-[11px] text-slate-400">
                        {active ? '+7% Score Boost applied' : 'Click to simulate acquiring this skill'}
                      </span>
                    </div>

                    <div className={`px-3 py-1 rounded text-xs font-bold transition ${active ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      {active ? 'Acquired (+7%)' : 'Add Skill'}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block">Projected Readiness with Selected Skills:</span>
                <span className="text-2xl font-extrabold text-blue-400">{currentScore}% Match</span>
              </div>
              <div className="text-xs text-slate-400">
                {currentScore >= 90
                  ? '🎉 Guaranteed top 5% candidate percentile for Nexa Systems.'
                  : 'Add more skills above to surpass the 90% top-tier threshold.'}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-6 mt-12 text-center text-xs text-slate-500">
        <p>RoleReady AI • Powered by Next.js & Tailwind CSS • Deployed on Render</p>
      </footer>
    </div>
  );
}
