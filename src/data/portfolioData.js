export const personalDetails = {
  name: "Kishan Kumar",
  title: "AI/ML Engineer & Full-Stack Developer",
  location: "Lucknow, Uttar Pradesh, India",
  university: "Babu Banarasi Das University, Lucknow",
  degree: "B.Tech in Computer Science & Engineering",
  tagline: "I build production-ready RAG AI pipelines, machine learning predictors, and full-stack web platforms that drive real measurable impact.",
  email: "kishankumar13580@gmail.com",
  phone: "+91 92360 76711",
  whatsapp: "https://wa.me/919236076711?text=Hi%20Kishan!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.",
  github: "https://github.com/kishanyadav5436",
  linkedin: "https://linkedin.com/in/kishankumar21/",
  resumePath: "/Kishan_Kumar_Resume.pdf",
  mlResumePath: "/Kishan_KumarML.pdf",
};

export const heroStats = [
  { label: "Hackathon Project", value: "Participant", subtext: "Kalpathon 2026" },
  { label: "AI/ML & RAG Apps", value: "4+", subtext: "Deployed in Production" },
  { label: "Shipped Projects", value: "9+", subtext: "Full-Stack & Analytics" },
  { label: "Formal Certifications", value: "4+", subtext: "JPMC, Deloitte, Google" },
];

export const featuredProject = {
  id: "neighbourhood-marketplace",
  title: "Neighbourhood Service Marketplace",
  subtitle: "Kalpathon Hackathon 2026 Project",
  badge: "🚀 HACKATHON PROJECT",
  date: "Apr 2026",
  category: "fullstack",
  description: "A full-stack Hyperlocal Marketplace connecting homeowners with verified service providers.",
  problem: "Local service discovery and home repair booking suffer from fragmented communication, opaque pricing, and untrusted provider verification.",
  approach: "Architected a modular full-stack MERN application featuring JWT role-based security, real-time booking scheduling, interactive provider rating algorithms, and responsive glassmorphic UI.",
  outcome: "Shipped a complete MERN marketplace within Kalpathon 2026 hackathon constraints with <150ms API latency. Deployed live on Vercel.",
  metrics: [
    { label: "Event", value: "Kalpathon 2026" },
    { label: "Latency", value: "<150ms API response" },
    { label: "Coverage", value: "100% Full-Stack MERN" }
  ],
  tags: ["React", "TypeScript", "Node.js", "MongoDB", "Express.js", "JWT Auth", "Vercel"],
  liveUrl: "https://parth2-0-kishan-kumar.vercel.app/",
  githubUrl: "https://github.com/kishanyadav5436/Parth2.0_KishanKumar",
  image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&h=700&fit=crop&auto=format&q=80",
  imageAlt: "Neighbourhood Service Marketplace dashboard interface showing provider listings and service booking calendar"
};

export const projects = [
  {
    id: "langchain-fee-chatbot",
    title: "LangChain AI Fee & Query Chatbot",
    category: "ai",
    date: "Jul 2026",
    badge: "🆕 RAG AI PIPELINE",
    description: "Retrieval-Augmented Generation (RAG) system processing complex student financial data.",
    problem: "Students faced manual delays navigating complex multi-tiered fee structures and unstructured policy documents.",
    approach: "Engineered an end-to-end RAG pipeline using LangChain, Hugging Face LLM embeddings, FAISS vector search, and Streamlit UI to query tabular Excel datasets.",
    outcome: "Reduced query response time to <1.5s with 100% data extraction precision against official fee sheets. Live on Streamlit Cloud.",
    tags: ["LangChain", "Hugging Face", "RAG Pipeline", "Streamlit", "Python"],
    liveUrl: "https://langchain-fee-chatbot-ay6qsacae.streamlit.app/",
    githubUrl: "https://github.com/kishanyadav5436/langchain-fee-chatbot",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "LangChain RAG AI chatbot interface executing natural language fee queries against structured financial documents"
  },
  {
    id: "student-stress-prediction",
    title: "Student Stress Level Prediction System",
    category: "ai",
    date: "Jul 2026",
    badge: "🤖 ML PREDICTOR",
    description: "Supervised ML health web application predicting student burnout stress levels.",
    problem: "University counseling teams lacked proactive quantitative metrics to identify early warning signs of student burnout.",
    approach: "Trained and cross-validated Random Forest & XGBoost classifiers in Scikit-Learn using 6 lifestyle health metrics (sleep hours, study load, exam pressure, social media usage). Deployed via Streamlit web app.",
    outcome: "Achieved 94%+ cross-validated classification accuracy and deployed live prediction API for early stress intervention.",
    tags: ["Machine Learning", "Scikit-Learn", "Python", "Streamlit", "Pandas", "NumPy"],
    liveUrl: "https://studentstresslevelprediction5436.streamlit.app/",
    githubUrl: "https://github.com/kishanyadav5436/Student_Stress_Level_Prediction_System",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Machine Learning stress predictor interface rendering multi-factor health metrics and burnout risk score"
  },
  {
    id: "ecommerce-sales-analytics",
    title: "E-Commerce Sales Data Analytics",
    category: "data",
    date: "Jul 2026",
    badge: "📊 DATA ANALYTICS",
    description: "Interactive retail intelligence dashboard uncovering revenue trends and sales performance.",
    problem: "E-commerce store managers suffered from static spreadsheet reports that obscured regional sales drops and top product drivers.",
    approach: "Built a dynamic Python analytics dashboard leveraging Pandas data aggregations, Matplotlib/Seaborn visual charts, and Streamlit interactive filtering.",
    outcome: "Processed 5,000+ transaction records into real-time visual business intelligence with sub-second drill-down filters.",
    tags: ["Python", "Streamlit", "Pandas", "Data Analytics", "Matplotlib"],
    liveUrl: "https://ecommercesalesdataanalytics-e7t5436.streamlit.app/",
    githubUrl: "https://github.com/kishanyadav5436/Ecommerce_Sales_Data_Analytics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "E-commerce sales data dashboard displaying revenue breakdown and transaction trend charts"
  },
  {
    id: "blogsphere-app",
    title: "BlogSphere — Full-Stack Blog Platform",
    category: "fullstack",
    date: "Jul 2026",
    badge: "🚀 FULL-STACK",
    description: "Full-stack publishing application supporting rich article creation, user auth, and comments.",
    problem: "Content creators needed a lightweight, secure publishing platform without heavy CMS bloat or slow page transitions.",
    approach: "Designed a clean MERN stack architecture with React Single-Page App routing, Express RESTful endpoints, JWT session tokens, and MongoDB database storage.",
    outcome: "Complete CRUD workflow with secure authentication and dark mode live on Vercel.",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
    liveUrl: "https://blogsphere-app-sigma.vercel.app",
    githubUrl: "https://github.com/kishanyadav5436/blogsphere-app",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "BlogSphere web application showing article creation screen and interactive comments feed"
  },
  {
    id: "ml-training-hub",
    title: "Machine Learning Experiments Hub",
    category: "ai",
    date: "Jul 2026",
    badge: "🔬 ML BENCHMARK",
    description: "Supervised and deep learning benchmark repository with model evaluations.",
    problem: "Standardizing model evaluation metrics across multiple supervised learning algorithms required reproducible benchmarking scripts.",
    approach: "Developed reusable Jupyter Notebook pipelines for Decision Trees, K-NN, Random Forest, Linear Regression, and Neural Networks with automated grid search hyperparameter tuning.",
    outcome: "Evaluated 10+ core algorithms on benchmark datasets, documenting accuracy, precision, recall, and loss curves.",
    tags: ["Jupyter", "Scikit-Learn", "TensorFlow", "Pandas", "NumPy"],
    githubUrl: "https://github.com/kishanyadav5436/ML_Training",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Machine Learning experiments repository displaying code notebooks and model validation curves"
  },
  {
    id: "inclusivity-ai-chatbot",
    title: "Inclusivity AI Chatbot",
    category: "ai",
    date: "2025",
    badge: "💬 NLP CHATBOT",
    description: "AI-driven dialogue system designed for multi-lingual inclusive support.",
    problem: "Organizations required an intuitive chatbot to deliver inclusive multi-lingual support without language barrier friction.",
    approach: "Integrated NLP intent classification, contextual matching algorithms, admin portal controls, and Tailwind CSS responsive interface in Node.js.",
    outcome: "Deployed live on Vercel with role-based access control and REST API integrations.",
    tags: ["MERN Stack", "NLP", "Tailwind CSS", "REST API", "JWT Auth"],
    liveUrl: "https://inclusionchatbot.vercel.app/",
    githubUrl: "https://github.com/kishanyadav5436/Chatbot",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Inclusivity AI Chatbot web interface presenting live NLP conversational view"
  },
  {
    id: "django-analytics-dashboard",
    title: "Django Analytics Dashboard",
    category: "data",
    date: "Apr 2026",
    badge: "⚡ PYTHON BI",
    description: "Enterprise analytics portal built with Django backend and Chart.js graphics.",
    problem: "Business teams required multi-tenant data visualization with strict user authentication controls.",
    approach: "Architected a Django MVC portal leveraging PostgreSQL relations, Django ORM filters, and Chart.js dynamic front-end graphs.",
    outcome: "Delivered secure multi-tenant analytical dashboard hosted live on Vercel.",
    tags: ["Python", "Django", "Charts.js", "Bootstrap", "PostgreSQL"],
    liveUrl: "https://dashboard-project-one-chi.vercel.app/accounts/login/?next=/dashboard/",
    githubUrl: "https://github.com/kishanyadav5436/Dashboard-Project",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Django analytics dashboard interface featuring interactive Chart.js line charts and data filters"
  },
  {
    id: "banking-system-java",
    title: "Core Java OOP Banking System",
    category: "fullstack",
    date: "Apr 2026",
    badge: "☕ JAVA & REACT",
    description: "Financial management engine demonstrating object-oriented design principles.",
    problem: "Translating legacy CLI-based object-oriented financial logic into a modern, web-enabled application.",
    approach: "Refactored Java OOP banking classes into RESTful API controllers and connected a React UI for account transfers and transaction ledger logging.",
    outcome: "Successfully modernized Core Java OOP logic into a responsive full-stack financial web app.",
    tags: ["Core Java", "OOP", "React", "Data Structures"],
    githubUrl: "https://github.com/kishanyadav5436/Banking-System-in-Core-Java-master",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Core Java OOP banking web interface showing account transaction ledger and fund transfer screen"
  }
];

export const services = [
  {
    title: "Full-Stack Web Development",
    icon: "Code2",
    description: "Architecting scalable MERN applications from schema design to polished user interface. Specializing in React, Node.js, Express, and MongoDB with secure JWT auth pipelines.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "TypeScript"]
  },
  {
    title: "AI & Chatbot Integration",
    icon: "Bot",
    description: "Integrating Large Language Models into web workflows using RAG pipelines, Hugging Face, Gemini API, and LangChain to turn unstructured enterprise data into instant answers.",
    tech: ["LangChain", "Hugging Face", "Python", "RAG", "Streamlit"]
  },
  {
    title: "Frontend & UI Engineering",
    icon: "Layout",
    description: "Crafting modern, high-performance UIs with React, Tailwind CSS, Framer Motion, and Canvas effects. Focused on pixel-perfection, accessibility (ARIA), and smooth micro-animations.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Canvas"]
  },
  {
    title: "API & Backend Architecture",
    icon: "Server",
    description: "Designing RESTful APIs and microservices with Express and FastAPI. Optimizing MongoDB aggregation pipelines, authentication middleware, and cross-origin resource security.",
    tech: ["REST API", "FastAPI", "Node.js", "JWT Auth", "PostgreSQL"]
  }
];

export const experience = [
  {
    title: "Full Stack Development Intern",
    company: "CodeAlpha",
    period: "May 2026 – Jun 2026",
    location: "Virtual Internship",
    description: "Engineered responsive full-stack web applications, constructed REST API endpoints, connected MongoDB database models, and optimized client-side React state management.",
    highlights: ["Built & deployed multi-page web applications", "Applied clean OOP and component modularity"]
  },
  {
    title: "Kalpathon Hackathon — Participant",
    company: "Kalpathon 2026",
    period: "Apr 2026",
    location: "Hackathon Event",
    description: "Spearheaded the development of Neighbourhood Service Marketplace under high time constraints, delivering full-stack engineering excellence and UI presentation.",
    highlights: ["Participated in Kalpathon 2026 hackathon", "Shipped complete MERN marketplace in hackathon timeline"]
  },
  {
    title: "Advanced Software Engineering Virtual Experience",
    company: "JPMorgan Chase & Co. (Forage)",
    period: "Mar 2026",
    location: "Virtual Experience",
    description: "Completed practical tasks in financial data visualization, web worker threads, and interface streaming for trader dashboards using TypeScript and React.",
    highlights: ["Configured Perspective data grid streaming", "Patched server API feed integration bugs"]
  },
  {
    title: "GenAI Prompt Engineering Certificate Participant",
    company: "Edunet Foundation & IBM",
    period: "2025",
    location: "Skill Track",
    description: "Mastered prompt engineering techniques, zero-shot and few-shot prompt formulation, LLM context windows, and practical Generative AI application development.",
    highlights: ["Formulated structured prompts for domain tasks", "Implemented LLM API chains"]
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Babu Banarasi Das University, Lucknow",
    year: "Pursuing (Graduation 2026)",
    score: "Active Student"
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "H R I C Khalilabad",
    year: "2022",
    score: "74%"
  },
  {
    degree: "High School (Class X)",
    institution: "Kisan Inter College",
    year: "2020",
    score: "80%"
  }
];

export const skillCategories = [
  {
    name: "AI / ML & LLMs",
    skills: ["LangChain", "Scikit-Learn", "Hugging Face", "RAG Pipelines", "TensorFlow", "Pandas", "NumPy", "OpenCV"]
  },
  {
    name: "Full-Stack & Languages",
    skills: ["Python", "JavaScript (ES6+)", "TypeScript", "Core Java", "C++", "HTML5/CSS3", "SQL"]
  },
  {
    name: "Frontend Development",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Streamlit", "Bootstrap"]
  },
  {
    name: "Backend & Databases",
    skills: ["Node.js", "Express.js", "FastAPI", "Django", "MongoDB", "Mongoose", "PostgreSQL", "REST APIs"]
  },
  {
    name: "DevOps & Tools",
    skills: ["Git & GitHub", "Vercel", "Render", "Postman", "VS Code", "Jupyter Notebook"]
  }
];

export const certsFormal = [
  {
    title: "Advanced Software Engineering Virtual Experience",
    issuer: "JPMorgan Chase & Co. (Forage)",
    date: "Mar 2026",
    verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5StructuredCompletionCertificate_March2026.pdf",
    badge: "Verified"
  },
  {
    title: "Cloud Technology & Analytics Simulation",
    issuer: "Deloitte",
    date: "2026",
    badge: "Verified"
  },
  {
    title: "MongoDB Node.js Developer & Aggregation Certification",
    issuer: "MongoDB University",
    date: "2025",
    badge: "Certified"
  },
  {
    title: "Google Cloud Vertex AI & Prompt Engineering",
    issuer: "Google Cloud / Edunet Foundation",
    date: "2025",
    badge: "Certified"
  }
];

export const certsWorkshops = [
  {
    title: "CodeAlpha Full Stack Internship Completion Certificate",
    issuer: "CodeAlpha",
    date: "Jun 2026"
  },
  {
    title: "Kalpathon 2026 Hackathon Participation Certificate",
    issuer: "Kalpathon Organizers",
    date: "Apr 2026"
  },
  {
    title: "GenAI & LLM Prompting Workshop",
    issuer: "Edunet Foundation",
    date: "2025"
  },
  {
    title: "Machine Learning Workshop & Hackathon Finalist",
    issuer: "BBD University",
    date: "2025"
  }
];

export const softSkills = [
  "Problem Solving",
  "Team Leadership",
  "Rapid Prototyping",
  "Technical Writing",
  "Adaptability",
  "Cross-functional Collaboration"
];

export const interests = [
  "Generative AI & LLM Research",
  "RAG Systems",
  "Full-Stack Architecture",
  "Competitive Hackathons",
  "Anime",
  "Tech Novels"
];
