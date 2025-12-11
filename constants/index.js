import {
  backend,
  creator,
  firebase,
  flutter,
  freelance_icon,
  khojilogo,
  mobile,
  mongodb,
  naami_logo,
  nodejs,
  python,
  pytorch,
  quickfox,
  ragbot,
  reactjs,
  tensorflow,
  trekpal,
  typescript,
  web,
  whatsApp
} from "@/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ML Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: web,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "pyspark",
    icon: flutter,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  }
  // {
  //   name: "figma",
  //   icon: figma,
  // }
];

const experiences = [
  {
    title: "Machine Learning Engineer / Backend Engineer",
    company_name: "Khoji (Startup)",
    icon: khojilogo, // replace with your logo import
    iconBg: "#E6DEDD",
    date: "2022 – Present",
    points: [
      "Built the Khoji app with vendor portal, admin portal, and mobile app using Django REST Framework, Flutter, Google Cloud, and MongoDB.",
      "Developed an image recognition system to match user-uploaded photos with the best vendors in Nepal.",
      "Designed and implemented recommendation systems using neural networks to suggest fashion and product categories.",
      "Created an Explore page with dynamic AI-powered suggestions, blogs, and personalization for Kathmandu Valley tourism.",
      "Integrated gift cards, inventory management, and AI-enhanced product search using ElasticSearch and vector embeddings.",
    ],
  },

  {
    title: "Data Analyst / Project Manager",
    company_name: "Makaii",
    icon: quickfox,
    iconBg: "#F0F0F0",
    date: "2022 – 2023",
    points: [
      "Led data analytics initiatives for the Makaii Fantasy League (English League) and built a marketing strategy with Anshaj.",
      "Designed dashboards and insights to optimize user engagement and league performance.",
      "Managed project timelines, requirements, and analytics workflows across cross-functional teams.",
      "Built backend logic and pipelines for new features, including gift card systems and improved user engagement tools.",
    ],
  },

  {
    title: "Data Analyst",
    company_name: "Weploy, Melbourne",
    icon: naami_logo,
    iconBg: "#DFF6FF",
    date: "2020 – 2022",
    points: [
      "Analyzed large-scale operational datasets to identify trends, improve staffing accuracy, and support strategic decision-making.",
      "Built predictive models and data visualizations using Python, Pandas, and SQL.",
      "Collaborated with engineering teams to automate reporting pipelines and improve data workflows.",
    ],
  },

  {
    title: "Freelance / Contract Developer",
    company_name: "Self-Employed",
    icon: freelance_icon,
    iconBg: "#CCE7FF",
    date: "Open to Freelance Projects",
    points: [
      "Developed stock market analysis tools using clustering (KMeans) with MongoDB to identify broker trading patterns and collaborative behaviors.",
      "Built RAG-based multi-tool AI agents using LangChain, OpenAI, and Pinecone for document search, PDF QA, and HTS duty classification.",
      "Created end-to-end inventory and sales management systems with Django REST Framework, including credit logs, stock returns, vendor authentication, and profit/loss tracking.",
      "Built e-commerce and multi-vendor backend systems using Django, React, and ElasticSearch for AI-powered product similarity search.",
      "Developed AI-powered travel itinerary app using OpenAI API, weather/flight/hotel APIs, and geolocation suggestions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Samyak proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Samyak does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Samyak optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Stock market Chatbot (RAG)",
    description:
      "A context-aware medical chatbot using Retrieval-Augmented Generation (RAG) to answer questions with cited information from ingested PDFs using OpenAI, Open AI and Pinecone .",
    tags: [
      { name: "Python", color: "orange-text-gradient" },
      { name: "Chatbot", color: "green-text-gradient" },
      { name: "RAG", color: "blue-text-gradient" },
      { name: "Streamlit", color: "pink-text-gradient" },
    ],
    image: ragbot,
    source_code_link: "https://github.com/St-Luciferr/Q-A-Chatbot",
  },
  {
    name: "Inventory management System",
    description:
      "Hamro Inventory Management System in Django and React.",
    tags: [
      { name: "Django", color: "green-text-gradient" },
      
      { name: "React", color: "blue-text-gradient" },
    ],
    image: whatsApp,
    source_code_link: "https://github.com/St-Luciferr/Whatsapp-Agent",
  },
  {
    name: "House Price Prediction",
    description:
      "AI/ML house price prediction using linear Regression.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Skilearn", color: "green-text-gradient" },
      { name: "pySpark", color: "pink-text-gradient" },
    ],
    image: trekpal,
    source_code_link: "https://trekpalnepal.com",
    demo_url: true
  },
  
];


export { experiences, projects, services, technologies, testimonials };
