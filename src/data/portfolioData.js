export const personalInfo = {
  name: 'Bhawit Balodi',
  headline: 'Data Analyst • Machine Learning • AI & GenAI Professional',
  intro:
    'I build data-driven, AI-enabled solutions that translate business questions into measurable outcomes through analytics, ML, and GenAI systems.',
  location: 'India',
  email: 'bhawitbalodi@gmail.com',
  phone: '+91 9773686062',
  linkedin: 'https://www.linkedin.com/in/bhawit-balodi-106632208/',
  github: 'https://github.com/BhawitBalodi',
  resume: '/resume/Bhawit_resume_2_YOE.pdf',
  availability: 'Open to data and AI opportunities',
};

export const aboutContent = {
  paragraphs: [
    'I love turning data into business growth - building intelligent solutions that help companies increase revenue, improve efficiency, and make smarter, more profitable decisions.',
    'I design and build analytical solutions that combine business context, machine learning, and practical decision support. My work sits at the intersection of data, AI, and measurable impact.',
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
  'Story Telling'
];

export const skills = [
  {
    category: 'Programming',
    items: ['Python', 'SQL', 'SAS', 'C++'],
  },
  {
    category: 'AI / Machine Learning',
    items: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'RAG', 'Generative AI', 'Clustering',  'Computer Vision'],
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
    company: 'Ameriprise Financial',
    role: 'Senior Data Analyst',
    period: '2024 May — Present',
    location: 'Gurugram, Haryana, India',
    summary: 'Business analytics and AI-powered decision support for strategic, operational, and customer-facing initiatives.',
    bullets: [
      'Refer to above tiles for the detail projects and work done in Ameriprise Financial.',
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
    period: '2023 May — 2023 September',
    location: 'New Delhi',
    summary: 'Worked on applied machine learning projects focused on prediction, evaluation, and research-driven experimentation.',
    bullets: [
      'Worked with live solar power sensor data for the power output of a solar panel.',
      'Performed data cleaning, preprocessing, and EDA to identify patterns. Experiemented with multiple deep learning models including simple NN, RNNs, and LSTMs to evaulate performace.',
      'Deployed the final model using Flask.',
      ],
    stack: ['Machine Learning', 'Python', 'Data Modeling', 'Evaluation'],
  },
];

export const featuredWork = [
  {
    title: 'APWG Client Prioritization & Retention Dashboard',
    problem: 'Advisor attrition in Ameriprise led to loss of high-value clients and AUM, as departing advisors moved clients to competitor firms. The business APWG lacked a unified view of client profiles and actionable insights to enable timely reassignment and retention.',
    solution: 'Developed a interactive Power BI Dashboard providing a consolidated view of client linked to termed advisors. Integrated key metrics including AUM Segmentations, portfolio distribution, growth trends, product enrollment, deomographic details, and engagement activity. Enabled client prioritization and generated contextual "calling summaries" to support retention conversations & reassignment.',
    impact: 'Improved visiblity into high-value clients & accelerated reassignment process for APWG. Enabled data-driven prioritization, enhanced retention efforts and reduced potential AUM loss.',
    tags: ['Analytics', 'Power BI', 'Decision Support', 'Business Intelligence', 'Python'],
  },
  {
    title: 'Advice Insights Deletion Analysis using LLM',
    problem: 'In the Advice Insights tool, advisors frequently deleted client insight notifications and provided unstructured comments. The business lacked visibility into the reasons behind these deletions, making it difficult to improve the relevance and effectiveness of insights',
    solution: 'Designed an LLM-based framework using Claude to analyze advisor comments. Performed sentiment analysis to categorize reasons for insight deletions across different insight types, transforming unstructured feedback into actionable insights.',
    impact: 'Provided clear visibility into advisor behaviour and key drivers of insight deletions, enabling optimization of the Advice Insights tool. Automated a previously manual analysis process, saving 5+ hours per month and improving overall efficiency.',
    tags: ['LLM', 'NLP', 'GenAI', 'Business Analytics'],
  },
  {
    title: 'Practice Segmentation',
    problem: 'Business wants to segment practices (advisor’s team) based on performance, to improve overall advisor productivity',
    solution: 'Developed a clustering-based segmentation framework using K-Means, Agglomerative Clustering (with Gower distance), and K-Prototypes to handle mixed data types. Performed EDA to identify key features and optimized cluster formation using silhouette score for evaluation. Generated actionable segments to distinguish high- and low-performing advisors',
    impact: 'Enabled the business to design targeted events and pairing strategies for different segments',
    tags: ['Clustering', 'Statistics', 'Segmentation', 'Analytics'],
  },
  {
    title: 'GenAI-driven Financial Plan Evaluator',
    problem: 'Annual financial plans created by advisors were manually reviewed by supervision teams to ensure regulatory compliance, client-goal alignment, and fee justification—resulting in high operational cost, long turnaround times, and review inconsistency at scale.',
    solution: 'Built an automated compliance review system leveraging AWS Bedrock (Claude LLMs) to evaluate financial plans against regulatory, coverage, and quality criteria, including completeness of financial fundamentals, plan quality, and advisor fee justification. •	Implemented LLM-based semantic similarity and change-detection to identify near-duplicate plans across multiple years, addressing low-value plan refreshes and improving advisor accountability. •	Combined rule-based validations with LLM-powered reasoning to detect material changes across multi-year plans, improving precision while retaining explainability and audit defensibility.',
    impact: 'Reduced reliance on manual supervision and saved 100K+ hours annually, enabling scalable, consistent, and regulator-ready plan reviews.',
    tags: ['Generative AI', 'LLM', 'AI Applications', 'Business Impact'],
  },
];

export const projects = [
  {
    title: 'Virtual Lawyer - Legal Assistant',
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
];

export const publication = {
  title: 'Automated Static Malware Analysis Using Machine Learning',
  authors: 'Bhawit Balodi, Srijan Sharma, Anil Kumar Shukla, Bupendra Singh',
  conference: '10th International Conference on Signal Processing and Integrated Networks (SPIN)',
  description:
    'A research-focused project centered on applying machine learning for malware analysis using static features and automated classification techniques.',
  link: 'https://ieeexplore.ieee.org/document/10116580',
};

export const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science Engineering',
    school: 'Inderprastha Engineering College (Under AKTU), Ghaziabad, U.P.',
    period: '2020 — 2024',
  },
  {
    degree: 'Senior Secondary Education',
    field: 'Science Stream - PCM',
    school: 'St. Angles Senior Secondary School, Rohini, Delhi',
    period: '2018 — 2020',
  }
];

export const achievements = [
  'Gold Pass — Coding Ninjas Leadership Program',
  '1st Position — College Badminton Competition',
  'CBSE Inter-School Badminton Achievement',
  'Research and analytics project work in applied ML and AI',
];

export const contact = {
  email: 'bhawitbalodi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bhawit-balodi-106632208/',
  github: 'https://github.com/BhawitBalodi',
};

