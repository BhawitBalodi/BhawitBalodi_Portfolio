export const personalInfo = {
  name: 'Bhawit Balodi',
  headline: 'Data Analyst • Machine Learning • AI & GenAI Professional',
  intro:
    'I build data-driven, AI-enabled solutions that translate business questions into measurable outcomes through analytics, ML, and GenAI systems.',
  location: 'India',
  email: 'TODO: Add email address',
  phone: 'TODO: Add phone number',
  linkedin: 'TODO: Add LinkedIn URL',
  github: 'TODO: Add GitHub URL',
  resume: '/resume/README.txt',
  availability: 'Open to data and AI opportunities',
};

export const aboutContent = {
  paragraphs: [
    'I design and build analytical solutions that combine business context, machine learning, and practical decision support. My work sits at the intersection of data, AI, and measurable impact.',
    'Across analytics, experimentation, and GenAI-focused problem solving, I focus on turning complex inputs into actionable systems that support product, operations, and strategic decisions.',
    'I enjoy working with data pipelines, model development, and business-facing insights to help teams move from raw information to confident action.',
  ],
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publication', href: '#publication' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const expertise = [
  'Data Analytics',
  'Machine Learning',
  'Generative AI',
  'LLMs',
  'NLP',
  'Computer Vision',
  'AWS',
  'Power BI',
  'Python',
  'SQL',
];

export const skills = [
  {
    category: 'Programming',
    items: ['Python', 'SQL', 'SAS', 'C++'],
  },
  {
    category: 'AI / Machine Learning',
    items: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'Generative AI', 'Computer Vision', 'Clustering', 'RAG'],
  },
  {
    category: 'Cloud & Data',
    items: ['AWS', 'AWS Bedrock', 'AWS SageMaker', 'AWS Athena', 'AWS EC2', 'AWS S3'],
  },
  {
    category: 'Analytics & Visualization',
    items: ['Power BI', 'Statistical Analysis', 'EDA', 'Data Storytelling'],
  },
  {
    category: 'Tools & Frameworks',
    items: ['Git', 'GitHub', 'Flask', 'Selenium', 'TensorFlow', 'Keras'],
  },
];

export const experience = [
  {
    company: 'Company Name',
    role: 'Data Analyst',
    period: '2024 — Present',
    location: 'Location',
    summary: 'Business analytics and AI-powered decision support for strategic, operational, and customer-facing initiatives.',
    bullets: [
      'Developed dashboards and analytical models to support key decision-making processes and operational reviews.',
      'Partnered with stakeholders to turn business questions into measurable metrics, data stories, and action plans.',
      'Used Python, SQL, and BI tooling to uncover trends, anomalies, and opportunities across large datasets.',
      'Built data workflows that improved visibility into performance, process efficiency, and team-level outcomes.',
    ],
    stack: ['Python', 'SQL', 'Power BI', 'Statistics', 'Data Analysis'],
  },
  {
    company: 'IIT Delhi',
    role: 'Machine Learning Intern',
    period: '2023 — 2024',
    location: 'New Delhi',
    summary: 'Worked on applied machine learning projects focused on prediction, evaluation, and research-driven experimentation.',
    bullets: [
      'Explored data patterns and model behavior using structured experimentation and performance analysis.',
      'Built and validated ML pipelines for prediction and pattern recognition tasks using real-world data.',
      'Assessed model metrics, feature quality, and iterative improvements to strengthen solution accuracy and reliability.',
      'Collaborated across research and technical teams to translate analytical findings into implementation-ready recommendations.',
    ],
    stack: ['Machine Learning', 'Python', 'Data Modeling', 'Evaluation'],
  },
  {
    company: 'CSIR-NPL',
    role: 'Machine Learning Intern',
    period: '2022 — 2023',
    location: 'New Delhi',
    summary: 'Applied analytical and ML techniques to research-oriented problems with a focus on practical model development.',
    bullets: [
      'Analyzed datasets and engineered relevant features to support classification and prediction objectives.',
      'Implemented ML models and evaluated performance against technical and project-specific requirements.',
      'Supported experimentation to improve model quality, reproducibility, and decision readiness.',
      'Documented insights and model findings to communicate value to technical stakeholders and collaborators.',
    ],
    stack: ['Machine Learning', 'Python', 'Research', 'Model Validation'],
  },
];

export const featuredWork = [
  {
    title: 'APWG Client Prioritization & Retention Dashboard',
    problem: 'Prioritize client retention and outreach with a clear view of risk, performance, and engagement signals.',
    solution: 'Designed a decision-support dashboard combining data exploration, segmentation logic, and KPI tracking for business action.',
    impact: 'Improved operational visibility and supported more targeted client engagement decisions.',
    tags: ['Analytics', 'Power BI', 'Decision Support', 'Business Intelligence'],
  },
  {
    title: 'Advice Insights Deletion Analysis using LLM',
    problem: 'Interpret large-scale text and recommendation data to identify patterns and more actionable decision signals.',
    solution: 'Combined LLM-driven qualitative analysis with structured evaluation to surface actionable insights from complex advisory content.',
    impact: 'Improved analysis efficiency and created a faster path from raw text to business insight.',
    tags: ['LLM', 'NLP', 'GenAI', 'Business Analytics'],
  },
  {
    title: 'Practice Segmentation',
    problem: 'Group similar client or practice patterns to improve targeting and strategic planning.',
    solution: 'Applied clustering and statistical analysis to segment data into meaningful groups for operational prioritization.',
    impact: 'Enabled clearer targeting and stronger strategic decision support.',
    tags: ['Clustering', 'Statistics', 'Segmentation', 'Analytics'],
  },
  {
    title: 'GenAI-driven Financial Plan Evaluator',
    problem: 'Make financial plan review more scalable and actionable for decision makers.',
    solution: 'Built a GenAI-based evaluator that interprets plan information and surfaces structured insights for business use.',
    impact: 'Reduced manual effort and improved evaluation speed for complex plan review workflows.',
    tags: ['Generative AI', 'LLM', 'AI Applications', 'Business Impact'],
  },
];

export const projects = [
  {
    title: 'Virtual Lawyer / RAG Legal Assistant',
    description: 'A retrieval-augmented conversational assistant designed to help users query legal information more naturally and efficiently.',
    problem: 'Legal information is often fragmented and difficult to search across multiple sources and documents.',
    solution: 'Developed a RAG-based assistant that retrieves relevant legal context and grounds responses in source material.',
    impact: 'Improved access to legal information and made retrieval-driven responses more useful in practice.',
    github: 'TODO: Add GitHub URL',
    demo: 'TODO: Add demo URL',
    tags: ['RAG', 'LLM', 'NLP', 'Python'],
  },
  {
    title: 'Solar Power Prediction',
    description: 'A predictive modeling project focused on forecasting solar power generation using historical and environmental data.',
    problem: 'Energy generation forecasting is sensitive to changing conditions and requires robust modeling.',
    solution: 'Used data preparation, feature analysis, and ML modeling to estimate output based on relevant signals and patterns.',
    impact: 'Improved forecasting support for planning and operational decision-making.',
    github: 'TODO: Add GitHub URL',
    demo: 'TODO: Add demo URL',
    tags: ['Machine Learning', 'Forecasting', 'Python', 'Data Analysis'],
  },
  {
    title: 'Customer Behavior Analytics',
    description: 'A portfolio-ready analytics project demonstrating segmentation, visual storytelling, and decision support.',
    problem: 'Organizations need a more actionable understanding of customer behavior and engagement patterns.',
    solution: 'Analyzed behavioral data, developed segmentation insights, and packaged findings into clear visual narratives.',
    impact: 'Strengthened understanding of patterns that matter for business strategy and targeting.',
    github: 'TODO: Add GitHub URL',
    demo: 'TODO: Add demo URL',
    tags: ['Analytics', 'Segmentation', 'Visualization', 'Power BI'],
  },
];

export const publication = {
  title: 'Automated Static Malware Analysis Using Machine Learning',
  authors: 'TODO: Add authors if available',
  conference: '10th International Conference on Signal Processing and Integrated Networks (SPIN)',
  description:
    'A research-focused project centered on applying machine learning for malware analysis using static features and automated classification techniques.',
  link: 'TODO: Add publication link or DOI',
};

export const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science Engineering',
    school: 'Inderprastha Engineering College',
    board: 'AKTU',
    period: '2020 — 2024',
  },
];

export const achievements = [
  'Gold Pass — Coding Ninjas Leadership Program',
  '1st Position — College Badminton Competition',
  'CBSE Inter-School Badminton Achievement',
  'Research and analytics project work in applied ML and AI',
];

export const contact = {
  email: 'TODO: Add email address',
  linkedin: 'TODO: Add LinkedIn URL',
  github: 'TODO: Add GitHub URL',
};
