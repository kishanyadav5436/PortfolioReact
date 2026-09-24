/**
 * projects.js -- Fieldnotes data layer
 * Source of truth: Kishan Kumar's LinkedIn profile + latest resume.
 * Only verified projects and experience included.
 */

// ── Profile ──────────────────────────────────────────────────
export const PROFILE = {
  name: 'Kishan Kumar',
  location: 'Lucknow, Uttar Pradesh, India',
  education: 'B.Tech Computer Science — Babu Banarasi Das University (BBDU)',
  graduation: '2027 (expected)',
  cgpa: '8.6',
  positioning: 'Full-Stack Developer · Software Engineering',
  dsa: '50+ problems solved in Java',
  focus: 'Full-Stack System Design · MERN Architecture · ML/Data Analysis',
  portfolio: 'https://portfolio-kishan.vercel.app',
  linkedin: 'https://linkedin.com/in/kishankumar21/',
  github: 'https://github.com/kishanyadav5436',
  email: 'kishankumar13580@gmail.com',
};

// ── Tech Arsenal ─────────────────────────────────────────────
export const STACK = [
  { domain: 'Languages',     tech: 'Java, Python, C, JavaScript, HTML5, CSS3' },
  { domain: 'Frontend',      tech: 'React, TypeScript, Vite, Tailwind CSS' },
  { domain: 'Backend',       tech: 'Node.js, Express.js, REST APIs' },
  { domain: 'Database',      tech: 'MongoDB, NoSQL' },
  { domain: 'CS Core',       tech: 'DSA (50+ Java), OOP, DBMS, OS, Basic System Design' },
  { domain: 'Engineering',   tech: 'Git / GitHub, Debugging, SDLC, Agile / Scrum, Code Reviews' },
  { domain: 'ML & Data',     tech: 'NumPy, Pandas, Matplotlib, Seaborn, EDA, Statistical Analysis' },
];

// ── Experience ───────────────────────────────────────────────
export const EXPERIENCE = [
  {
    id: 'grastech-ml',
    company: 'GRAStech',
    role: 'Machine Learning Intern',
    period: 'June 2026 – August 2026',
    location: 'Lucknow, Onsite',
    type: 'internship',
    entries: [
      {
        week: 'Month 1 -- onboarding and data work',
        text: 'Joined the ML team working on practical data science problems. First few weeks were entirely EDA: understanding dataset shapes, identifying null patterns, checking for leakage. The 90-hour ML with Python training from GRAStech / BBD University was the prerequisite -- having that foundation meant I could contribute to real preprocessing pipelines from week one, not spend the first month catching up.',
      },
      {
        week: 'Month 2 -- model development',
        text: 'Worked on model selection and evaluation cycles. Train/validation/test splits, cross-validation, confusion matrix analysis, precision-recall tradeoffs. Learned to treat model evaluation as a conversation with the problem, not a report card. The metric that matters is the one whose failure mode is most expensive -- and that depends on the domain, not the textbook.',
      },
      {
        week: 'Month 3 -- delivery',
        text: 'Final month focused on documenting findings, visualizing results with Matplotlib and Seaborn, and presenting to the team. Learned that an analysis no one can interpret is not an analysis. Communication is part of the technical deliverable, not a separate afterthought.',
      },
    ],
    stack: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'EDA'],
  },
  {
    id: 'codealpha-fs',
    company: 'CodeAlpha',
    role: 'Full Stack Development Intern',
    period: 'May 2026 – June 2026',
    location: 'Remote',
    type: 'internship',
    entries: [
      {
        week: 'Week 1 -- hitting the ground',
        text: 'Remote internship. First task: understand an existing codebase, find the frontend-backend seam, and add a feature without breaking what is already there. The real test was reading code I did not write. Spent the first two days only reading -- no commits. Worth it.',
      },
      {
        week: 'Weeks 2-4 -- full stack ownership',
        text: 'End-to-end feature development: frontend component, REST API route, database model, and manual + edge-case testing. The debugging discipline from this period was the most durable takeaway -- read the error message fully before guessing, check network tab before assuming backend is broken, check schema before assuming query is wrong.',
      },
      {
        week: 'Week 5-6 -- shipping',
        text: 'Practical project delivery. Final review involved explaining every architectural decision I made. The questions I could not answer cleanly pointed directly to gaps in my understanding -- more useful than any feedback. Completed the internship with a full-stack feature ownership cycle under my belt.',
      },
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST APIs', 'Debugging'],
  },
];

// ── Achievements / Certifications ────────────────────────────
// Source: LinkedIn profile — verified credentials only
export const ACHIEVEMENTS = [
  {
    id: 'jpmc-sim',
    title: 'JPMorgan Chase Software Engineering Job Simulation',
    issuer: 'Forage',
    issued: 'Feb 2026',
    credentialId: '7etNfoCi2uPC35NnY',
    credentialUrl: 'https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_68b19913457ff98b46094a2e_1770399425088_completion_certificate.pdf',
    type: 'simulation',
    skills: ['Java', 'Spring MVC', 'Software Engineering Workflows'],
    note: 'Completed JPMorganChase SE job simulation on Forage -- real engineering tasks covering Java backend development, software processes, and workflows used at JPMC.',
  },
  {
    id: 'deloitte-sim',
    title: 'Deloitte Australia Data Analytics Job Simulation',
    issuer: 'Forage',
    issued: 'Feb 2026',
    credentialId: 'KESZ8qsA9jQrgSwt3',
    credentialUrl: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_68b19913457ff98b46094a2e_1769933283064_completion_certificate.pdf',
    type: 'simulation',
    skills: ['Data Analysis', 'Microsoft Excel', 'Data Analytics', 'Dashboard Design'],
    note: 'Completed Deloitte Australia Data Analytics simulation on Forage -- applied analytics and Excel-based workflows to real consulting-style data problems.',
  },
  {
    id: 'claude-101',
    title: 'Claude 101 -- Introduction to AI Assistants',
    issuer: 'Anthropic',
    issued: 'Apr 2026',
    credentialId: '4ocuzqegnzui',
    credentialUrl: 'https://verify.skilljar.com/c/4ocuzqegnzui',
    type: 'certification',
    skills: ['Prompt Engineering', 'AI Tools', 'Problem Solving with AI', 'Content Generation', 'Ethical AI Usage'],
    note: 'Anthropic-certified Claude 101. Covers AI assistant fundamentals, prompt engineering, real-world AI application patterns, and ethical usage principles.',
  },
  {
    id: 'mongodb-model',
    title: 'From Relational Model (SQL) to MongoDB Document Model',
    issuer: 'MongoDB',
    issued: 'Jan 2026',
    credentialId: null,
    credentialUrl: 'https://www.credly.com/badges/3677966d-b270-4b99-8c9b-a05526288a98/linked_in_profile',
    type: 'certification',
    skills: ['MongoDB', 'NoSQL', 'Document Modeling', 'SQL to NoSQL Migration'],
    note: 'Official MongoDB certification covering relational-to-document model migration, schema design patterns, and NoSQL data modeling.',
  },
  {
    id: 'vertex-ai',
    title: 'Prompt Design in Vertex AI Skill Badge',
    issuer: 'Google',
    issued: 'Aug 2025',
    credentialId: null,
    credentialUrl: 'https://www.credly.com/badges/ef9d9e33-4e8f-401c-bf32-0a6b673e86fa/linked_in_profile',
    type: 'certification',
    skills: ['Prompt Engineering', 'Vertex AI', 'Generative AI', 'LLM Design'],
    note: 'Google skill badge for Vertex AI prompt design -- LLM prompting strategies, few-shot prompting, and production generative AI workflow design.',
  },
  {
    id: 'ml-training',
    title: '90-Hour Machine Learning with Python Training',
    issuer: 'GRAStech / BBD University',
    issued: '2026',
    credentialId: null,
    credentialUrl: null,
    type: 'training',
    skills: ['Python', 'Scikit-Learn', 'Data Preprocessing', 'EDA', 'Model Evaluation'],
    note: '90-hour structured ML training covering supervised learning, data preprocessing pipelines, EDA, and model evaluation techniques with real datasets.',
  },
  {
    id: 'codealpha-cert',
    title: 'Full Stack Development Internship Completion',
    issuer: 'CodeAlpha',
    issued: 'Jun 2026',
    credentialId: null,
    credentialUrl: null,
    type: 'internship',
    skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Debugging'],
    note: 'Completed CodeAlpha full-stack development internship -- end-to-end feature development, application logic, database integration, and debugging in a remote team.',
  },
  {
    id: 'adobe-hack',
    title: 'Adobe University Hackathon',
    issuer: 'Adobe',
    issued: '2025',
    credentialId: null,
    credentialUrl: null,
    type: 'hackathon',
    skills: ['Problem Solving', 'Rapid Prototyping', 'Creative Coding'],
    note: 'Participated in the Adobe University Hackathon.',
  },
  {
    id: 'kalpathon',
    title: 'Kalpathon 2.0 Coding Hackathon',
    issuer: 'Kalpathon',
    issued: '2025',
    credentialId: null,
    credentialUrl: null,
    type: 'hackathon',
    skills: ['Competitive Programming', 'Full-Stack Development', 'Team Collaboration'],
    note: 'Participated in the Kalpathon 2.0 competitive coding hackathon.',
  },
  {
    id: 'learnovate',
    title: 'Soft Skills Development Program',
    issuer: 'Learnovate Enterprises',
    issued: '2025',
    credentialId: null,
    credentialUrl: null,
    type: 'program',
    skills: ['Professional Communication', 'Team Collaboration', 'Presentation'],
    note: 'Completed structured professional communication and soft-skills development program.',
  },
];

// ── Projects ─────────────────────────────────────────────────
export const projects = [
  {
    id: 'servicehub',
    title: 'ServiceHub',
    category: 'Full-Stack · Hackathon',
    roleTag: 'Full-Stack Developer (4-member team)',
    weekLabel: 'React + TypeScript · MERN',
    date: '2026-04-15',
    summary:
      'Neighborhood service marketplace connecting local households with verified service professionals. Booking management, role-based dashboards, reviews. Built as a 4-member hackathon project.',
    repo: 'https://github.com/kishanyadav5436/Servify',
    live: null,
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Tailwind CSS'],
    entries: [
      {
        week: 'Day 1 -- scoping as a team',
        text: 'Four people, one problem: finding reliable local service professionals is genuinely painful. No-shows, no price transparency, no skill verification. We split into two pairs immediately -- one on the data model and auth layer, one on UI flow and user journey mapping. First architecture decision: three roles (homeowner, service provider, admin), enforced at the middleware layer with JWT claims, not just UI conditionals.',
      },
      {
        week: 'Day 2-3 -- booking state machine',
        text: 'The booking lifecycle was the core engineering challenge: REQUESTED → ACCEPTED → IN_PROGRESS → COMPLETED | CANCELLED. We added transition guards in Mongoose middleware so invalid state changes return a 400, not a silent data corruption. TypeScript on the frontend meant our booking type had a Status union -- if you forget a case in a switch, the compiler tells you before the user does.',
      },
      {
        week: 'Day 4 -- role-based dashboards',
        text: 'Three separate dashboard views, single codebase. Homeowners see booking history and a service search. Providers see incoming requests and their availability calendar. Admins see verification queue and platform metrics. React Router with role-gated layouts kept the code clean -- the role context lives in one place, not scattered across 30 conditional renders.',
      },
      {
        week: 'Final push -- reviews and submission',
        text: 'Reviews required a completed booking to submit -- no anonymous bombing. Rating aggregation computed in a MongoDB aggregation pipeline on the provider document. Submitted with a working end-to-end demo: browse, book, confirm, complete, review. Four people, four days, one coherent product. The part I am most proud of: the state machine. It was the right abstraction.',
      },
    ],
    images: [
      { src: null, caption: 'Architecture whiteboard, day 1', badge: 'sketch' },
      { src: null, caption: 'Booking state machine diagram', badge: 'diagram' },
      { src: null, caption: 'Role dashboard layout, wire', badge: 'wire' },
      { src: null, caption: 'Final submission UI', badge: 'final' },
    ],
  },
  {
    id: 'blogsphere',
    title: 'BlogSphere',
    category: 'Full-Stack · MERN',
    roleTag: 'Full-Stack Developer',
    weekLabel: 'MERN · Rich Content Platform',
    date: '2026-03-01',
    summary:
      'Full-featured content platform: rich-text editor, JWT auth, likes / bookmarks / comments, tag filtering, real-time search, and a dark glassmorphism UI.',
    repo: 'https://github.com/kishanyadav5436/BlogSphere',
    live: null,
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Rich-text Editor'],
    entries: [
      {
        week: 'Week 1 -- the content model',
        text: 'A blog platform sounds simple. It is not. The content model is where it gets complicated: posts have tags (many-to-many with posts), comments have replies (recursive), and likes need to be idempotent (you cannot like twice, unliking removes the document). Getting this schema right early saved significant refactoring time. Used MongoDB references for users, embedded arrays for tags, and a compound index on (post_id, user_id) for likes to enforce uniqueness at the database layer.',
      },
      {
        week: 'Week 2 -- rich text and real-time search',
        text: 'Integrated a rich-text editor with serialization to/from MongoDB-safe HTML. The trickiest part: sanitizing user-generated HTML on save to prevent XSS without stripping legitimate formatting. Real-time search used a debounced input + MongoDB text index -- not Elasticsearch, not a separate service. Fast enough for the scale, and no new infrastructure dependency.',
      },
      {
        week: 'Week 3 -- UI and dark glass aesthetic',
        text: 'Dark glassmorphism: backdrop-filter blur, semi-transparent card surfaces, careful contrast ratios to stay WCAG-compliant even in dark mode. Bookmarks persist across sessions via a user document subdocument -- not localStorage, not a separate bookmarks collection. The aggregation pipeline for the feed (filter by tag + sort by engagement + paginate) was the hardest single query to get right, but it ships as one database round-trip.',
      },
    ],
    images: [
      { src: null, caption: 'Content model schema diagram', badge: 'diagram' },
      { src: null, caption: 'Rich-text editor integration', badge: 'wire' },
      { src: null, caption: 'Tag filter + search feed', badge: 'wire' },
      { src: null, caption: 'Final dark glass UI', badge: 'final' },
    ],
  },
  {
    id: 'ecommerce-store',
    title: 'E-commerce Store',
    category: 'Full-Stack · REST API',
    roleTag: 'Backend + Frontend Developer',
    weekLabel: 'Node.js · Express · MongoDB',
    date: '2025-12-10',
    summary:
      'Full-stack e-commerce storefront with product catalog, filtering, persistent cart, checkout flow, and order management. REST API backend with MongoDB.',
    repo: 'https://github.com/kishanyadav5436/ecommerce-store',
    live: null,
    stack: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'JavaScript', 'HTML5', 'CSS3'],
    entries: [
      {
        week: 'Week 1 -- API design first',
        text: 'Designed the REST API contract before writing any frontend. Resource-based routes: /products, /cart, /orders, /users. Cart as a first-class resource, not localStorage state -- means it persists across devices and sessions. Product filtering as query parameters with MongoDB query builder: category, price range, in-stock status, sort order. All composable, all server-side.',
      },
      {
        week: 'Week 2 -- cart and checkout',
        text: 'Persistent cart stored as a MongoDB document keyed to user ID. Add, remove, update quantity -- all REST endpoints with atomic MongoDB operations ($inc, $pull, $set on array elements). Checkout was the complex part: validate cart items are still in stock, calculate totals server-side (not client-side -- clients cannot be trusted for price calculation), create order document, decrement stock atomically using $inc with a negative value.',
      },
      {
        week: 'Week 3 -- order workflow and polish',
        text: 'Order lifecycle: PENDING → CONFIRMED → SHIPPED → DELIVERED | CANCELLED. Admin endpoint to update order status. User-facing order history with status tracking. Product filtering UI on the frontend: multi-select categories, price slider, sort dropdown -- all state lifted to URL params so filters survive page refresh and can be shared as links. Small detail, big UX improvement.',
      },
    ],
    images: [
      { src: null, caption: 'API route design doc', badge: 'sketch' },
      { src: null, caption: 'Cart + checkout flow', badge: 'diagram' },
      { src: null, caption: 'Order state machine', badge: 'diagram' },
      { src: null, caption: 'Storefront UI, final', badge: 'final' },
    ],
  },
  {
    id: 'ml-analysis',
    title: 'ML & Data Analysis',
    category: 'Machine Learning · Python',
    roleTag: 'ML Practitioner / Data Analyst',
    weekLabel: 'Python · EDA · Scikit-Learn',
    date: '2026-07-01',
    summary:
      'Applied ML and statistical data analysis work: EDA pipelines, data preprocessing, model development and evaluation using Python\'s scientific stack.',
    repo: 'https://github.com/kishanyadav5436/CarPricePrediction',
    live: null,
    stack: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'EDA', 'Statistical Analysis'],
    entries: [
      {
        week: 'The discipline -- EDA before everything',
        text: 'Every ML project I have worked on has the same first step: understand the data before touching a model. Null pattern analysis, distribution checks, correlation heatmaps, outlier detection. Not a checklist -- a conversation with the dataset. The questions EDA raises are more valuable than the answers any model gives, because they tell you what you are actually dealing with.',
      },
      {
        week: 'Preprocessing -- where models actually win or lose',
        text: 'Feature engineering consistently outperforms algorithm selection. Derived features (ratios, time deltas, interaction terms), encoding strategies (target encoding for high-cardinality categoricals, one-hot for low), scaling (StandardScaler vs MinMax -- the choice depends on the algorithm, not habit). Worked through these tradeoffs on real datasets during the GRAStech internship and personal projects including a car price regression model.',
      },
      {
        week: 'Model evaluation -- the metric is a design decision',
        text: 'Accuracy is almost never the right metric. For regression: MAE vs RMSE depends on whether outlier errors matter more. For classification: precision vs recall depends on which error is more expensive. The 90-hour GRAStech/BBDU ML program drilled this into me with real case studies. I now treat metric selection as a product decision, not a technical one -- it requires understanding what failure costs.',
      },
    ],
    images: [
      { src: null, caption: 'EDA correlation heatmap', badge: 'data' },
      { src: null, caption: 'Feature importance chart', badge: 'chart' },
      { src: null, caption: 'Model comparison table', badge: 'chart' },
      { src: null, caption: 'Residuals plot, final model', badge: 'final' },
    ],
  },
];
