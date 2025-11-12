export const projects = [
  {
    id: 1,
    title: "Benchmarking Datasets for Dravidian Sentiment Analysis",
    description: "Developed a large-scale Dravidian language datasets for sentiment analysis and collected annotations. Fine-tuned Transformer-based models (IndicBERT, XLM-R, MuRIL). Incorporated Explainable AI (XAI) techniques for bias mitigation and interpretability.",
    technologies: ["Deep Learning", "Machine Learning", "NLP", "XAI", "IndicBERT", "XLM-R", "MuRIL"],
    status: "Publishing",
    category: "Research",
    icon: "🔬"
  },
  {
    id: 2,
    title: "AI-Powered Facial Recognition Emotion Analytics System",
    description: "A real-time facial recognition using webcam feed and FaceNet to automate attendance logging. Scratch CNN-based emotion detection and tracks emotional states per interval and consensus for sessions. Store attendance-emotion metrics and automate summaries with aggregated emotion and timestamps.",
    technologies: ["CNN", "FaceNet", "OpenCV", "FER+2K", "Deep Learning"],
    status: "Completed",
    category: "AI/ML",
    icon: "😊"
  },
  {
    id: 3,
    title: "StatAnveshak - AI-driven Data Analytics Platform",
    description: "Built a web-based platform enabling users to perform and learn statistical analysis and ML. Integrated D3.js for dynamic and interactive data visualizations. Features Regression, Classification, Feature Projections, Advanced statistical tests, Data visualization and enhanced concept learning with dynamic quizzes and learning resources.",
    technologies: ["Machine Learning", "MERN Stack", "D3.js", "Data Visualization"],
    status: "Completed",
    category: "Full Stack",
    icon: "📊"
  },
  {
    id: 4,
    title: "EduFeed Sense - Faculty Feedback Sentiment Analysis",
    description: "Developed an interactive web application to analyze student feedback for faculty evaluation. Utilized NLP, (Scratch Built) and Fine-tuned naive models, Transformers for sentiment classification. Designed an interactive dashboard to present and download sentiment trends and insights.",
    technologies: ["Machine Learning", "Flask", "Transformers", "NLP", "Sentiment Analysis"],
    status: "Completed",
    category: "AI/ML",
    icon: "📝"
  },
  {
    id: 5,
    title: "Empathy Exchange - Crowdfunding Platform",
    description: "Engineered a full-stack web app for community-driven crowdfunding. Integrated a seamless donation system with real-time progress tracking. Service initiative for the community that has features to ask for help, make help by uploading their necessities.",
    technologies: ["MERN Stack", "Payment Integration", "Real-time Systems"],
    status: "Completed",
    category: "Full Stack",
    icon: "🤝"
  },
  {
    id: 6,
    title: "Hatespeech Dataset for Telugu Language",
    description: "Creating comprehensive dataset for hate speech detection in Telugu language with proper annotations and classifications for improving NLP models.",
    technologies: ["NLP", "Dataset Creation", "Machine Learning", "Telugu Language Processing"],
    status: "Ongoing",
    category: "Research",
    icon: "📚"
  }
];

export const projectCategories = ["All", "Research", "AI/ML", "Full Stack"];
