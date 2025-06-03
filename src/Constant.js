import {
  FaUsers,
  FaSearch,
  FaEdit,
  FaCode,
  FaCog,
  FaChartPie,
  FaCogs,
  FaTools,
  FaShieldAlt,
  FaCloudUploadAlt,
  FaServer,
  FaDatabase,
  FaLanguage,
  FaEye,
} from "react-icons/fa";
import {
  FaChartLine,
  FaRobot,
  FaMobileAlt,
  FaLaptopCode,
  FaGlobe,
  FaPalette,
  FaCloud,
  FaNetworkWired,
  FaBrain,
  FaVrCardboard,
  FaBitcoin,
  FaGamepad,
  FaCommentDots,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  FaShoppingCart,
  FaFileAlt,
  FaApple,
  FaAndroid,
  FaLayerGroup,
} from "react-icons/fa";

import { FaProjectDiagram, FaPaintBrush, FaCommentAlt } from "react-icons/fa";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import BayutImg from "./assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "./assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "./assets/web-development-portfolio/flatiorn.png";
import MavenImg from "./assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "./assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "./assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think reality.png";
// Import all images at the top (App Development)
import DubaiTravelGuideImg from "./assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "./assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "./assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "./assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "./assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "./assets/app-development-portfolio/namaz.png";
import PoteaImg from "./assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "./assets/app-development-portfolio/rentop bike and car.png";
//values icons
import innovation from "./assets/svgs/innovation.svg";
import quality from "./assets/svgs/quality.svg";
import integrity from "./assets/svgs/integrity.svg";
import collaboration from "./assets/svgs/collaboration.svg";
import agility from "./assets/svgs/agility.svg";
//industry image
import health from "./assets/industries/Healthcare.webp";
import ecommerce from "./assets/industries/E-commerce&Retail.webp";
import finance from "./assets/industries/Finance&Banking.webp";
import energy from "./assets/industries/Energy.webp";
import realestate from "./assets/industries/RealEstate.jpg";
import manufacturing from "./assets/industries/Manufacturing.webp";
import logistics from "./assets/industries/Logistics&SupplyChain.webp";
import education from "./assets/industries/Education.webp";
import telecom from "./assets/industries/Telecom.webp";
//work process icons
import discover from "./assets/svgs/discover.png";
import planning from "./assets/svgs/planning.svg";
import disign from "./assets/svgs/design.svg";

//services images
import aibanner from "./assets/image/services/aibanner.webp";
import aidp from "./assets/image/services/aidp.webp";
import appbanner from "./assets/image/services/appbanner.webp";
import appdp from "./assets/image/services/appdp.webp";
import webbanner from "./assets/image/services/webbanner.webp";
import webdp from "./assets/image/services/webdp.webp";
import databanner from "./assets/image/services/databanner.webp";
import datadp from "./assets/image/services/datadp.webp";
import mlbanner from "./assets/image/services/mlbanner.webp";
import mldp from "./assets/image/services/mldp.webp";
import uiuxbanner from "./assets/image/services/uiuxbanner.webp";
import uiuxdp from "./assets/image/services/uiuxdp.webp";
import custombanner from "./assets/image/services/custombanner.webp";
import customdp from "./assets/image/services/customdp.webp";
import iotbanner from "./assets/image/services/iotbanner.webp";
import iotdp from "./assets/image/services/iotdp.webp";
import rpabanner from "./assets/image/services/rpabanner.webp";
import rpadp from "./assets/image/services/rpadp.webp";
import blockbanner from "./assets/image/services/blockbanner.webp";
import blockdp from "./assets/image/services/blockdp.webp";
import chatbanner from "./assets/image/services/chatbanner.webp";
import chatdp from "./assets/image/services/chatdp.webp";
import devopsbanner from "./assets/image/services/devopsbanner.webp";
import devopsdp from "./assets/image/services/devopsdp.webp";
import cloudbanner from "./assets/image/services/cloudbanner.webp";
import clouddp from "./assets/image/services/clouddp.webp";
import visionbanner from "./assets/image/services/visionbanner.webp";
import visiondp from "./assets/image/services/visiondp.webp";
import nlpbanner from "./assets/image/services/nlpbanner.webp";
import nlpdp from "./assets/image/services/nlpdp.webp";
import sciencebanner from "./assets/image/services/datasciencebanner.webp";
import sciencedp from "./assets/image/services/datasciencedp.webp";
import bigdatabanner from "./assets/image/services/bigdatabanner.webp";
import bigdatadp from "./assets/image/services/bigdatadp.webp";
import migrationbanner from "./assets/image/services/migrationbanner.webp";
import migrationdp from "./assets/image/services/migrationdp.webp";
import arbanner from "./assets/image/services/arbanner.webp";
import ardp from "./assets/image/services/ardp.webp";
import cyberbanner from "./assets/image/services/cyberbanner.webp";
import cyberdp from "./assets/image/services/cyberdp.webp";
import itbanner from "./assets/image/services/itbanner.webp";
import itdp from "./assets/image/services/itdp.webp";
import gamebanner from "./assets/image/services/gamebanner.webp";
import gamedp from "./assets/image/services/gamedp.webp";
import callingbanner from "./assets/image/services/callingbanner.webp";
import callingdp from "./assets/image/services/callingdp.webp";

export const routes = [
  { path: "/", name: "HOME" },
  { path: "/about-us", name: "ABOUT US", landingpath: "aboutus" },
  { path: "/services", name: "SERVICES", landingpath: "services" },
];
export const clientDetails = {
  email: "support@chronocraftai.com",
  // emailid: (
  //   <p>
  //     chronocraftaisolutions
  //     <br />
  //     @gmail.com
  //   </p>
  // ),
  phone: "+91-99725 66559",
  address: "company address",
  facebook: "https://www.facebook.com/share/1BwJSUHoAt/",
  instagram:
    "https://www.instagram.com/chronocraftai?utm_source=qr&igsh=MXRoM2lpeXVqaGptdw==",
  whatsapplink:
    "https://api.whatsapp.com/send/?phone=919972566559&text&type=phone_number&app_absent=0",
  linkedin: "https://www.linkedin.com/company/107171799/admin/dashboard/",
  googlereview: "",
};
export const industries = [
  {
    title: "Healthcare",
    image: health,
    id: 1,
    description:
      "Leveraging AI and data analytics to improve diagnostics, patient care, and operational efficiency in the healthcare industry.",
    isHighlighted: false,
  },
  {
    title: "E-commerce & Retail",
    image: ecommerce,
    id: 2,
    description:
      "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
    isHighlighted: true,
  },
  {
    title: "Finance & Banking",
    image: finance,
    id: 3,
    description:
      "Utilizing AI, blockchain, and machine learning for fraud detection, risk management, and investment optimization.",
    isHighlighted: false,
  },
  {
    title: "Energy",
    image: energy,
    id: 4,
    description:
      "Optimizing energy distribution, predictive maintenance, and sustainability efforts through smart technology solutions.",
    isHighlighted: false,
  },
  {
    title: "Real Estate",
    image: realestate,
    id: 5,
    description:
      "Leveraging AI-driven insights for property valuation, smart building management, and enhanced customer engagement.",
    isHighlighted: false,
  },
  {
    title: "Manufacturing",
    image: manufacturing,
    id: 6,
    description:
      "Improving efficiency and quality control with AI-powered automation, predictive maintenance, and robotics.",
    isHighlighted: false,
  },
  {
    title: "Logistics & Supply Chain",
    image: logistics,
    id: 7,
    description:
      "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
    isHighlighted: false,
  },
  {
    title: "Education",
    image: education,
    id: 8,
    description:
      "Personalizing learning experiences, utilizing predictive analytics for student performance, and automating administrative tasks with AI and ML.",
    isHighlighted: false,
  },
  {
    title: "Telecom",
    image: telecom,
    id: 9,
    description:
      "Enhancing network efficiency, customer service, and fraud detection with AI-driven telecom solutions.",
    isHighlighted: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Peterson",
    img: require("./assets/image/testimonials/review-p1.png"),
    designation: "CEO of TechNext Solutions",
    review:
      "Partnering with Chronocraft AI Solution for our Data Analytics & Business Intelligence needs was one of the best decisions we've made. Their insights helped us identify key performance trends and make smarter decisions. The team’s ability to turn complex data into actionable insights is unmatched.",
  },
  {
    id: 2,
    name: "Samantha Green",
    img: require("./assets/image/testimonials/review-p2.png"),
    designation: "CTO of FinServ Global",
    review:
      "Chronocraft AI Solution’s Blockchain Development services completely revamped our transaction system. The solutions they built were secure, scalable, and transparent—exactly what we needed to boost client trust and streamline operations. Their expertise in decentralization really stood out.",
  },
  {
    id: 3,
    name: "Mark Davis",
    img: require("./assets/image/testimonials/review-p3.png"),
    designation: "COO of E-Commerce Hub",
    review:
      "The Web and Mobile App Development team at Chronocraft AI Solution exceeded our expectations. From sleek UI/UX to a fast, responsive backend, they delivered a platform that enhanced our customer journey and directly boosted our sales and retention metrics.",
  },
  {
    id: 4,
    name: "Lisa Wong",
    img: require("./assets/image/testimonials/review-p4.png"),
    designation: "IT Director at Global Enterprises",
    review:
      "Cybersecurity was a major concern for us until we worked with Chronocraft AI Solution. Their team implemented robust security frameworks and monitoring tools that have completely secured our infrastructure. We sleep better knowing our data is safe.",
  },
  {
    id: 5,
    name: "David Thompson",
    img: require("./assets/image/testimonials/review-p5.png"),
    designation: "HR Director at HealthCare Innovators",
    review:
      "We collaborated with Chronocraft AI Solution to develop a VR training program, and the results have been phenomenal. The simulations are immersive, engaging, and have significantly improved our employee learning curve. They truly redefined how we approach training.",
  },
];

export const values = [
  {
    icon: innovation,
    image: require("./assets/image/values/innovation.webp"),
    title: "Innovation",
    description:
      "We stay at the forefront of technology and continuously seek new, more effective ways to address challenges.",
  },
  {
    icon: quality,
    image: require("./assets/image/values/quality.webp"),
    title: "Quality",
    description:
      "We are committed to delivering the highest quality solutions that not only meet but exceed expectations.",
  },
  {
    icon: integrity,
    image: require("./assets/image/values/integrity.webp"),
    title: "Integrity",
    description:
      "We conduct our business with honesty, respect, and transparency, building long-term relationships based on trust.",
  },
  {
    icon: collaboration,
    image: require("./assets/image/values/collaboration.webp"),
    title: "Collaboration",
    description:
      "We believe in working as a team with both our clients and our internal teams to deliver the best possible results.",
  },
  {
    icon: agility,
    image: require("./assets/image/values/agility.webp"),
    title: "Agility",
    description:
      "In a rapidly changing world, we are flexible and adaptable, ensuring that our solutions remain relevant and impactful.",
  },
];

export const workProcess = [
  {
    icon: <FaSearch className="w-8 h-8" />,
    image: discover,
    title: "Discovery & Consultation",
    description:
      "We start by gaining a deep understanding of your business, challenges, and goals, ensuring we provide the most effective solution.",
  },
  {
    icon: <FaEdit className="w-8 h-8" />,
    image: planning,
    title: "Planning & Strategy",
    description:
      "After understanding your needs, we develop a detailed strategy, including timelines, budgets, and deliverables.",
  },
  {
    icon: <FaCode className="w-8 h-8" />,
    image: disign,
    title: "Design & Development",
    description:
      "We get to work on crafting a solution that meets your requirements, with regular feedback loops to ensure alignment with your vision.",
  },
  {
    icon: <FaCog className="w-8 h-8" />,
    image: discover,
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing ensures your solution performs flawlessly across all scenarios.",
  },
  {
    icon: <FaCog className="w-12 h-12" />,
    image: false,
    title: "Deployment & Support",
    description:
      "We carefully launch your solution, ensuring a smooth transition with minimal disruption, followed by ongoing support and maintenance to keep it running optimally.",
  },
];

export const updatedServicessss = [
  {
    title: "Artificial Intelligence Development",
    path: "artificial-intelligence-development",
    icon: <FaRobot className="text-white text-3xl" />,
    description:
      "Empower your business with custom-built AI solutions tailored to solve complex challenges and automate workflows.",
    detailedDescription: `Our AI development services are designed to integrate intelligent automation and deep learning into your business processes. From concept to deployment, we craft AI solutions that are scalable, efficient, and aligned with your goals.`,
    services: [
      "AI Solution Architecture: Designing scalable and efficient AI architectures to support your use cases.",
      "Computer Vision & Image Recognition: Automating visual tasks such as identification, tracking, and quality control.",
      "NLP & Language Models: Enabling smart interactions with chatbots, voice assistants, and language processing systems.",
      "AI Model Training & Deployment: Building and training ML/AI models for production-ready deployment.",
    ],
    outcome:
      "Our AI solutions help businesses improve efficiency, reduce manual effort, and stay ahead of market trends through intelligent automation.",
  },
  {
    title: "Mobile App Development (iOS & Android)",
    path: "mobile-app-development-ios-android",
    icon: <FaMobileAlt className="text-white text-3xl" />,
    description:
      "Design and develop high-performing mobile apps for iOS and Android, tailored to engage users and drive growth.",
    detailedDescription: `We create user-centric mobile applications that combine performance, design, and functionality. Whether you're targeting iOS, Android, or both through cross-platform frameworks, we ensure a seamless and engaging experience for your users.`,
    services: [
      "Native App Development: Building platform-specific apps using Swift, Kotlin, or Java.",
      "Cross-Platform Apps: Using Flutter or React Native to create apps that work flawlessly across devices.",
      "Mobile API Integration: Connecting your app to back-end services, third-party APIs, and cloud infrastructure.",
      "App Store Optimization & Support: Guiding your app through deployment and ongoing optimization.",
    ],
    outcome:
      "We help you reach your mobile-first audience with apps that are intuitive, scalable, and designed to achieve your business goals.",
  },
  {
    title: "Web Development (Full Stack)",
    path: "web-development-full-stack",
    icon: <FaGlobe className="text-white text-3xl" />,
    description:
      "Deliver modern, full-stack web applications with secure, scalable, and engaging user experiences.",
    detailedDescription: `We specialize in creating custom web applications that support business operations, e-commerce, portals, dashboards, and more. From front-end design to back-end logic, our solutions are designed for performance and scalability.`,
    services: [
      "Responsive Front-End Design: Building clean, accessible interfaces using modern frameworks.",
      "Robust Back-End Logic: Developing server-side logic, database design, and APIs with Node.js, Python, or PHP.",
      "CMS & E-commerce Development: Tailoring WordPress, Shopify, or custom e-commerce platforms to fit your business.",
      "Maintenance & Scaling: Providing long-term support, performance tuning, and scalability enhancements.",
    ],
    outcome:
      "We craft future-ready web solutions that are optimized for performance, security, and business growth.",
  },
  {
    title: "ML Solutions",
    path: "ml-solutions",
    icon: <FaBrain className="text-white text-3xl" />,
    description:
      "Develop machine learning solutions to gain actionable insights, predict outcomes, and optimize decision-making.",
    detailedDescription: `We create ML models and pipelines that solve your specific challenges—be it customer segmentation, fraud detection, or process automation. We work with supervised, unsupervised, and reinforcement learning models customized to your data.`,
    services: [
      "Custom ML Model Development: Designing algorithms to suit your business problems.",
      "Data Preprocessing & Feature Engineering: Transforming raw data into usable input for ML pipelines.",
      "Model Training & Validation: Fine-tuning and evaluating models for maximum accuracy and performance.",
      "ML Operations (MLOps): Automating deployment and lifecycle management of ML models in production.",
    ],
    outcome:
      "Our ML solutions allow businesses to transform raw data into valuable predictions, insights, and efficiencies.",
  },
  {
    title: "UI/UX Design",
    path: "ui-ux-design",
    icon: <FaPalette className="text-white text-3xl" />,
    description:
      "Design user interfaces and experiences that drive engagement and reflect your brand identity.",
    detailedDescription: `We focus on understanding your users and business objectives to create interfaces that are both visually stunning and intuitively functional. We use industry best practices to ensure usability, accessibility, and a seamless experience.`,
    services: [
      "User Research & Journey Mapping: Identifying user pain points and needs to guide design.",
      "Wireframing & Prototyping: Building interactive prototypes to visualize flow and layout.",
      "UI Visual Design: Crafting pixel-perfect designs that align with brand and product identity.",
      "UX Testing & Iteration: Gathering feedback through usability tests to refine and enhance designs.",
    ],
    outcome:
      "We help create intuitive products that users love to engage with, enhancing satisfaction and business outcomes.",
  },
  {
    title: "Custom Software Development",
    path: "custom-software-development",
    icon: <FaLaptopCode className="text-white text-3xl" />,
    description:
      "Develop tailor-made software solutions that align with your unique business workflows and goals.",
    detailedDescription: `Our team designs, develops, and supports customized software that streamlines processes and enhances productivity. We work closely with you to ensure the end product addresses real-world business needs, no matter the industry.`,
    services: [
      "Business Process Automation: Digitizing and automating internal workflows to boost efficiency.",
      "Custom ERP/CRM Solutions: Building tools to manage your operations, sales, and customer relationships.",
      "Desktop & Cross-Platform Apps: Developing software for Windows, macOS, Linux, and cloud platforms.",
      "Legacy System Modernization: Rebuilding outdated systems into modern, scalable applications.",
    ],
    outcome:
      "We create high-performance, scalable, and secure software solutions tailored to your operational needs and growth plans.",
  },
  {
    title: "Data Analytics",
    path: "data-analytics",
    icon: <FaChartPie className="text-white text-3xl" />,
    description:
      "Unlock the power of your data to gain actionable insights and make smarter business decisions.",
    detailedDescription: `Our data analytics solutions help you collect, process, and analyze massive amounts of data to identify trends, optimize operations, and support informed decision-making. We use statistical analysis, data mining, and visualization techniques to turn raw data into business intelligence.`,
    services: [
      "Descriptive Analytics: Understanding past performance through data summaries and dashboards.",
      "Predictive Analytics: Forecasting future trends and customer behaviors using statistical models.",
      "Prescriptive Analytics: Recommending actions using advanced algorithms to achieve desired outcomes.",
      "Data Visualization: Making data intuitive and understandable through clear, interactive visuals.",
    ],
    outcome:
      "Our analytics services turn your data into a strategic asset that drives innovation, efficiency, and growth.",
  },
  {
    title: "Robotic Process Automation (RPA)",
    path: "robotic-process-automation-rpa",
    icon: <FaCogs className="text-white text-3xl" />,
    description:
      "Automate repetitive business processes with intelligent RPA bots for efficiency and accuracy.",
    detailedDescription: `We implement RPA solutions that mimic human interactions with digital systems to perform repetitive tasks—reducing human error, saving time, and cutting costs. Our bots can handle data entry, invoice processing, reporting, and more.`,
    services: [
      "Process Assessment: Identifying tasks and workflows suitable for automation.",
      "Bot Development & Deployment: Creating bots that integrate with your systems to automate tasks.",
      "Intelligent Automation: Combining AI and RPA to handle complex, rule-based decision-making.",
      "RPA Maintenance & Monitoring: Ongoing support to ensure bots run smoothly and efficiently.",
    ],
    outcome:
      "With RPA, businesses can free up resources, increase productivity, and focus on high-value tasks.",
  },
  {
    title: "DevOps",
    path: "devops",
    icon: <FaTools className="text-white text-3xl" />,
    description:
      "Accelerate development cycles and improve product quality through automated DevOps pipelines.",
    detailedDescription: `Our DevOps services bridge the gap between development and operations, enabling faster, more reliable software releases. We implement CI/CD pipelines, automate infrastructure, and foster a culture of collaboration to support agile delivery.`,
    services: [
      "CI/CD Pipeline Setup: Automating build, test, and deployment processes.",
      "Infrastructure as Code (IaC): Managing infrastructure using code for repeatable, reliable deployments.",
      "Monitoring & Logging: Implementing observability tools to ensure performance and reliability.",
      "Cloud & Containerization: Utilizing Docker, Kubernetes, and cloud platforms to enhance scalability.",
    ],
    outcome:
      "DevOps enables continuous improvement, faster innovation, and consistent software delivery at scale.",
  },
  {
    title: "Blockchain Development",
    path: "blockchain-development",
    icon: <FaBitcoin className="text-white text-3xl" />,
    description:
      "Build decentralized, tamper-proof systems using blockchain technology for transparency and trust.",
    detailedDescription: `We specialize in developing scalable blockchain ecosystems that enable secure transactions, transparent record-keeping, and automated smart contracts. Our solutions are tailored for industries like finance, healthcare, supply chain, and beyond.`,
    services: [
      "Private & Public Blockchain Solutions: Designing networks based on business-specific transparency and privacy needs.",
      "Smart Contract Engineering: Creating automated agreements that execute seamlessly without intermediaries.",
      "Token Development: Launching custom tokens for digital assets, rewards, or blockchain-based business models.",
      "Blockchain Audits & Consulting: Identifying vulnerabilities and optimizing existing blockchain infrastructure.",
    ],
    outcome:
      "Our blockchain solutions enable trustless systems, eliminate intermediaries, and offer data security with immutable records.",
  },
  {
    title: "Chatbot Development",
    path: "chatbot-development",
    icon: <FaCommentDots className="text-white text-3xl" />,
    description:
      "Enhance engagement and automate communication with intelligent, AI-powered chatbots.",
    detailedDescription: `We create dynamic chatbots that can hold human-like conversations, handle customer inquiries, and support your business round-the-clock. From rule-based bots to AI-driven assistants, we tailor solutions that match your customer service, sales, or operational needs.`,
    services: [
      "Conversational AI Bots: Building chatbots that understand natural language and improve with each interaction.",
      "Multichannel Support: Deploying bots across websites, messaging apps, and social media platforms.",
      "E-commerce Bots: Assisting with product discovery, orders, and upselling through smart conversations.",
      "Custom CRM Integrations: Ensuring seamless bot integration with your existing business tools and workflows.",
    ],
    outcome:
      "Our chatbots streamline communication, reduce response times, and offer 24/7 customer support that scales with your business.",
  },
  {
    title: "Cloud Computing Services",
    path: "cloud-computing-services",
    icon: <FaCloud className="text-white text-3xl" />,
    description:
      "Transform your IT infrastructure with scalable, secure, and cost-effective cloud solutions.",
    detailedDescription: `Our cloud services help businesses move faster, collaborate more efficiently, and reduce IT overhead. Whether you're migrating legacy systems or building cloud-native applications, we deliver architecture that's future-ready.`,
    services: [
      "Cloud Infrastructure Design: Building reliable, scalable cloud environments using AWS, Azure, or Google Cloud.",
      "Cloud Native App Development: Designing applications optimized for elasticity, resilience, and performance in the cloud.",
      "Cloud Migration: Moving workloads and databases to the cloud with minimal disruption and maximum efficiency.",
      "Backup, Security & Disaster Recovery: Ensuring business continuity with automated backups and cloud-native security practices.",
    ],
    outcome:
      "With our cloud expertise, your business becomes more agile, scalable, and resilient—ready for whatever’s next.",
  },
  {
    title: "Computer Vision Solutions",
    path: "computer-vision-solutions",
    icon: <FaEye className="text-white text-3xl" />,
    description:
      "Enable machines to understand and interpret visual data with cutting-edge computer vision.",
    detailedDescription: `We build custom computer vision systems that automate image and video analysis for industries like retail, healthcare, manufacturing, and security. From facial recognition to object tracking, our solutions are tailored to solve real-world challenges.`,
    services: [
      "Image Recognition & Classification",
      "Video Analytics & Surveillance",
      "Facial Recognition Systems",
      "Object Detection & Tracking",
    ],
    outcome:
      "Empowering businesses to process visual data efficiently and make intelligent, automated decisions.",
  },
  {
    title: "Natural Language Processing",
    path: "natural-language-processing",
    icon: <FaLanguage className="text-white text-3xl" />,
    description:
      "Bridge the gap between human language and technology using advanced NLP techniques.",
    detailedDescription: `Our Natural Language Processing (NLP) services enable machines to understand, interpret, and generate human language. From sentiment analysis to conversational AI, we build systems that enhance communication and user interaction.`,
    services: [
      "Text Analysis & Sentiment Detection",
      "Speech Recognition & Text-to-Speech",
      "Language Translation Engines",
      "Chatbot & Virtual Assistant Integration",
    ],
    outcome:
      "Boost user engagement, automate communication, and gain insights from text and speech data.",
  },
  {
    title: "Data Science Services",
    path: "data-science-services",
    icon: <FaDatabase className="text-white text-3xl" />,
    description:
      "Unlock the power of your data to discover patterns, optimize processes, and fuel innovation.",
    detailedDescription: `Our data science solutions combine statistical analysis, machine learning, and domain expertise to extract valuable insights. We help you make informed, data-driven decisions that propel business growth.`,
    services: [
      "Exploratory Data Analysis (EDA)",
      "Predictive Modeling & Forecasting",
      "Customer Segmentation",
      "Anomaly Detection & Trend Analysis",
    ],
    outcome:
      "Make smarter decisions and stay ahead of the curve by transforming raw data into actionable intelligence.",
  },
  {
    title: "Big Data Solutions",
    path: "big-data-solutions",
    icon: <FaServer className="text-white text-3xl" />,
    description:
      "Manage and process large volumes of data efficiently with our end-to-end big data services.",
    detailedDescription: `We build scalable big data ecosystems that allow real-time processing, analysis, and storage. Using technologies like Hadoop, Spark, and Kafka, we help businesses derive insights from complex data pipelines.`,
    services: [
      "Big Data Architecture & Engineering",
      "Real-Time Data Processing",
      "Data Lake Development",
      "ETL & Data Pipeline Optimization",
    ],
    outcome:
      "Scale your data operations and turn massive datasets into competitive business insights.",
  },
  {
    title: "Cloud Migration Services",
    path: "cloud-migration-services",
    icon: <FaCloudUploadAlt className="text-white text-3xl" />,
    description:
      "Migrate your infrastructure to the cloud seamlessly and securely with minimal disruption.",
    detailedDescription: `We help businesses transition from on-premise systems to scalable cloud environments, ensuring cost efficiency, data integrity, and operational continuity throughout the process.`,
    services: [
      "Cloud Readiness Assessment",
      "Application & Data Migration",
      "Hybrid & Multi-Cloud Strategy",
      "Post-Migration Optimization & Support",
    ],
    outcome:
      "Achieve greater agility, resilience, and cost savings through strategic cloud migration.",
  },
  {
    title: "AR & VR Development",
    path: "ar-vr-development",
    icon: <FaVrCardboard className="text-white text-3xl" />,
    description:
      "Create immersive, interactive AR/VR experiences that captivate and educate users.",
    detailedDescription: `We design custom AR and VR applications for industries such as education, gaming, real estate, and healthcare. Whether enhancing virtual training or delivering engaging product experiences, we blend creativity with technology.`,
    services: [
      "Augmented Reality App Development",
      "Virtual Reality Environments",
      "3D Modeling & Animation",
      "Immersive Product Demos & Training Simulations",
    ],
    outcome:
      "Enhance engagement and learning through unforgettable AR and VR experiences tailored to your audience.",
  },
  {
    title: "Cybersecurity Services",
    path: "cybersecurity-services",
    icon: <FaShieldAlt className="text-white text-3xl" />,
    description:
      "Safeguard your digital assets with comprehensive, proactive cybersecurity strategies.",
    detailedDescription: `We provide end-to-end cybersecurity solutions, from vulnerability assessments to real-time threat monitoring. Our goal is to secure your systems, data, and operations against evolving cyber threats.`,
    services: [
      "Risk Assessment & Penetration Testing",
      "Network Security & Monitoring",
      "Endpoint Protection & Malware Defense",
      "Compliance & Incident Response",
    ],
    outcome:
      "Ensure business continuity and build trust by fortifying your infrastructure against cyber risks.",
  },
  {
    title: "IT Infrastructure Management",
    path: "it-infrastructure-management",
    icon: <FaNetworkWired className="text-white text-3xl" />,
    description:
      "Optimize your IT environment for performance, security, and reliability.",
    detailedDescription: `From on-premise to cloud-native environments, we design, deploy, and manage IT infrastructure that supports your business goals. Our services ensure high availability, scalability, and minimal downtime.`,
    services: [
      "Network Design & Implementation",
      "Infrastructure Monitoring & Support",
      "Disaster Recovery Planning",
      "IT Asset & Patch Management",
    ],
    outcome:
      "Keep your technology running smoothly with scalable and secure IT infrastructure solutions.",
  },
  {
    title: "Gaming Application Development",
    path: "gaming-application-development",
    icon: <FaGamepad className="text-white text-3xl" />,
    description:
      "We create interactive and high-performance games for all major platforms.",
    detailedDescription: `Whether it's a casual mobile game or a complex console title, our game development team delivers engaging, visually striking games powered by advanced engines and innovative design.`,
    services: [
      "Mobile, PC & Console Game Development",
      "2D/3D Game Design & Animation",
      "Multiplayer & Real-Time Gaming Features",
      "AR/VR Game Integration",
    ],
    outcome:
      "Deliver captivating gaming experiences that keep players coming back for more.",
  },
  {
    title: "AI Calling Agency Solutions",
    path: "ai-calling-agency-solutions",
    icon: <FaPhoneAlt className="text-white text-3xl" />,
    description:
      "Automate outbound and inbound calls with intelligent voice-based AI agents.",
    detailedDescription: `We develop AI calling systems that can handle customer service, telemarketing, and lead qualification using natural-sounding voice bots. These solutions are scalable, consistent, and cost-effective.`,
    services: [
      "Voice Bot Development",
      "CRM & Dialer Integrations",
      "Speech Recognition & TTS",
      "Call Analytics & Reporting Dashboards",
    ],
    outcome:
      "Automate call processes while delivering a human-like, efficient calling experience at scale.",
  },
  {
    title: "Machine Learning Solutions",
    path: "machine-learning-solutions",
    icon: <FaBrain className="text-white text-3xl" />,
    description:
      "Leverage advanced ML algorithms to make smarter decisions and automate processes.",
    detailedDescription: `Our machine learning solutions are tailored to your specific use cases—be it fraud detection, customer prediction, or workflow automation. We handle model design, training, and deployment end-to-end.`,
    services: [
      "Supervised & Unsupervised Learning Models",
      "Predictive Analytics & Forecasting",
      "Model Optimization & Tuning",
      "ML Ops & Deployment",
    ],
    outcome:
      "Drive growth and innovation through intelligent systems that learn and evolve with your data.",
  },
];

export const updatedServices = [
  {
    id: 1,
    banner: aibanner,
    dp: aidp,
    title: "Artificial Intelligence Development",
    path: "artificial-intelligence-development",
    icon: <FaRobot className="text-white text-3xl" />,
    description:
      "Empower your business with custom-built AI solutions tailored to solve complex challenges and automate workflows.",
    detailedDescription: `Our AI development services are designed to integrate intelligent automation and deep learning into your business processes. From concept to deployment, we craft AI solutions that are scalable, efficient, and aligned with your strategic objectives. We leverage cutting-edge frameworks and algorithms to create systems that learn and adapt to your business needs.`,
    services: [
      "AI Solution Architecture: Designing scalable and efficient AI architectures to support complex business use cases.",
      "Computer Vision & Image Recognition: Automating visual tasks such as identification, tracking, and quality control with pixel-perfect precision.",
      "NLP & Language Models: Developing sophisticated language understanding systems for chatbots, voice assistants, and document processing.",
      "AI Model Training & Deployment: Building, training, and optimizing ML/AI models for enterprise-grade deployment.",
      "Predictive Analytics: Implementing AI-driven forecasting models for sales, demand, and risk assessment.",
      "AI Integration: Seamlessly connecting AI capabilities with your existing enterprise systems and workflows.",
    ],
    outcome:
      "Our comprehensive AI solutions help businesses achieve transformative results, including 40-60% improvements in operational efficiency, significant reduction in manual effort, and the ability to uncover hidden insights from data. We empower organizations to stay ahead of market trends through intelligent automation and data-driven decision making.",
  },
  {
    id: 2,
    banner: appbanner,
    dp: appdp,
    title: "Mobile App Development (iOS & Android)",
    path: "mobile-app-development",
    icon: <FaMobileAlt className="text-white text-3xl" />,
    description:
      "Build high-performance, user-friendly mobile applications that engage customers and drive business growth.",
    detailedDescription: `We create custom mobile applications that deliver exceptional user experiences across iOS and Android platforms. Our full-cycle development process combines innovative design with robust engineering to build apps that perform flawlessly and scale effortlessly. Whether you need a consumer-facing app or enterprise mobility solution, we've got you covered.`,
    services: [
      "Native iOS/Android Development: Building high-performance apps using Swift, Kotlin, and modern frameworks.",
      "Cross-Platform Development: Creating unified experiences with Flutter or React Native for cost-effective solutions.",
      "UI/UX Optimization: Crafting intuitive interfaces that maximize user engagement and retention.",
      "App Testing & QA: Comprehensive testing across devices and OS versions for flawless performance.",
      "App Store Optimization: Strategic publishing and optimization for maximum visibility and downloads.",
      "Enterprise Mobility: Secure business apps with offline capabilities and backend integration.",
      "IoT Mobile Integration: Connecting mobile apps with IoT devices and smart technologies.",
    ],
    outcome:
      "Our mobile apps help businesses increase customer engagement by up to 70%, improve operational efficiency, and create new revenue streams. We've delivered apps with 4.8+ average ratings that acquire millions of users while maintaining 99.9% uptime and robust security.",
  },
  {
    id: 3,
    banner: webbanner,
    dp: webdp,
    title: "Web Development (Full Stack)",
    path: "web-development",
    icon: <FaCode className="text-white text-3xl" />,
    description:
      "Comprehensive web solutions from front-end interfaces to powerful back-end systems for businesses of all sizes.",
    detailedDescription: `We deliver end-to-end web development services that combine aesthetic design with powerful functionality. Our full stack expertise enables us to build everything from marketing websites to complex web applications with custom workflows, API integrations, and real-time features. We follow agile methodologies to ensure timely delivery without compromising quality.`,
    services: [
      "Frontend Development: Modern React, Angular, or Vue.js applications with responsive design.",
      "Backend Systems: Scalable Node.js, Python, or .NET architectures with optimized databases.",
      "Progressive Web Apps: Offline-capable, app-like web experiences with push notifications.",
      "E-commerce Solutions: Custom storefronts with payment gateways and inventory management.",
      "CMS Development: WordPress, Drupal, or custom content management systems.",
      "API Development & Integration: RESTful and GraphQL APIs for seamless system connectivity.",
      "Web Security: Comprehensive protection against OWASP top 10 vulnerabilities.",
      "Performance Optimization: Lighthouse score optimization for faster loading and better SEO.",
    ],
    outcome:
      "Our web solutions help businesses achieve 3-5x faster page loads, 40% higher conversion rates, and seamless scalability during traffic spikes. We build platforms that support business growth with 99.99% availability and enterprise-grade security measures.",
  },
  {
    id: 4,
    banner: databanner,
    dp: datadp,
    title: "Data Analytics & Business Intelligence",
    path: "data-analytics",
    icon: <FaChartLine className="text-white text-3xl" />,
    description:
      "Transform raw data into actionable insights with advanced analytics and visualization solutions.",
    detailedDescription: `Our data analytics services turn your information into a strategic asset. We implement cutting-edge BI tools and custom analytics solutions that reveal patterns, predict trends, and guide decision-making. From data warehousing to real-time dashboards, we help you see and understand what matters most to your business.`,
    services: [
      "Advanced Analytics: Predictive modeling, statistical analysis, and machine learning for insights.",
      "BI Dashboarding: Interactive Power BI, Tableau, or custom dashboards with KPIs.",
      "Data Warehousing: Designing optimized data storage and ETL pipelines.",
      "Customer Analytics: Segmentation, lifetime value prediction, and behavior analysis.",
      "Operational Analytics: Process mining and performance metrics visualization.",
      "Real-time Analytics: Streaming data processing and instant insights.",
      "Data Governance: Implementing quality controls and master data management.",
      "Big Data Solutions: Hadoop, Spark, and NoSQL implementations for large datasets.",
    ],
    outcome:
      "Our analytics implementations typically deliver 25-40% improvements in decision speed, 15-30% cost reductions through process optimization, and 20-50% increases in customer satisfaction. Clients gain real-time visibility into operations and predictive capabilities that drive proactive strategy.",
  },
  {
    id: 5,
    banner: mlbanner,
    dp: mldp,
    title: "Machine Learning Solutions",
    path: "machine-learning",
    icon: <FaProjectDiagram className="text-white text-3xl" />,
    description:
      "Implement intelligent systems that learn from data to automate decisions and uncover valuable insights.",
    detailedDescription: `We design and deploy machine learning models that solve specific business problems across industries. Our ML solutions range from recommendation engines to predictive maintenance systems, all built with a focus on accuracy, explainability, and ROI. We handle everything from data preparation to model deployment and monitoring.`,
    services: [
      "Predictive Modeling: Forecasting sales, demand, churn, and other key metrics.",
      "Recommendation Systems: Personalized content and product suggestions.",
      "Anomaly Detection: Identifying fraud, defects, or unusual patterns in data.",
      "Computer Vision: Image classification, object detection, and OCR solutions.",
      "Natural Language Processing: Sentiment analysis, text classification, and generation.",
      "Time Series Analysis: Forecasting and pattern recognition in temporal data.",
      "ML Operations: End-to-end pipeline development and model lifecycle management.",
      "Explainable AI: Making complex models interpretable for business users.",
    ],
    outcome:
      "Our ML implementations have helped clients achieve 90%+ accuracy in predictions, 40-70% reductions in manual review processes, and 20-35% increases in revenue through personalization. We build models that continuously improve while maintaining transparency and compliance.",
  },
  {
    id: 6,
    banner: uiuxbanner,
    dp: uiuxdp,
    title: "UI/UX Design",
    path: "ui-ux-design",
    icon: <FaPaintBrush className="text-white text-3xl" />,
    description:
      "Create intuitive, visually stunning interfaces that delight users and drive engagement.",
    detailedDescription: `Our human-centered design process creates digital experiences that users love and remember. We combine aesthetic excellence with usability principles to build interfaces that are beautiful, functional, and aligned with your brand identity. From wireframes to interactive prototypes, we craft every detail for maximum impact.`,
    services: [
      "User Research: Persona development, journey mapping, and usability testing.",
      "Information Architecture: Logical content organization and navigation design.",
      "Wireframing & Prototyping: Low to high-fidelity interactive prototypes.",
      "Visual Design: Brand-aligned interfaces with attention to detail.",
      "Design Systems: Scalable component libraries and style guides.",
      "Accessibility Compliance: WCAG 2.1 AA/AAA standards implementation.",
      "Microinteractions: Enhancing usability with thoughtful motion design.",
      "UX Writing: Crafting clear, concise interface copy and microcopy.",
    ],
    outcome:
      "Our designs typically achieve 30-50% improvements in task completion rates, 20-40% increases in user satisfaction scores, and 15-25% higher conversion rates. We create experiences that reduce cognitive load while strengthening brand perception and loyalty.",
  },
  {
    id: 7,
    banner: custombanner,
    dp: customdp,
    title: "Custom Software Development",
    path: "custom-software",
    icon: <FaLaptopCode className="text-white text-3xl" />,
    description:
      "Tailor-made software solutions designed to address your unique business challenges and workflows.",
    detailedDescription: `We engineer bespoke software systems that fit your operations like a glove. Unlike off-the-shelf solutions, our custom applications are built specifically for your requirements, integrating seamlessly with your existing tools and scaling with your growth. We handle complex business logic, regulatory compliance, and performance optimization.`,
    services: [
      "Enterprise Software: Custom CRM, ERP, and workflow automation systems.",
      "SaaS Development: Cloud-based multi-tenant applications with subscription models.",
      "Legacy Modernization: Upgrading outdated systems with modern architectures.",
      "Integration Services: Connecting disparate systems via APIs and middleware.",
      "Business Process Automation: Streamlining operations with custom tools.",
      "Reporting Modules: Advanced analytics and document generation features.",
      "Document Management: Secure storage, retrieval, and collaboration systems.",
      "Regulatory Compliance: HIPAA, GDPR, SOC2-ready application development.",
    ],
    outcome:
      "Our custom software delivers 50-80% improvements in process efficiency, 40-60% reductions in operational costs, and complete alignment with business needs. Clients gain competitive advantages through unique features and workflows unavailable in commercial products.",
  },
  {
    id: 8,
    banner: iotbanner,
    dp: iotdp,
    title: "Internet of Things (IoT) Development",
    path: "iot-development",
    icon: <FaNetworkWired className="text-white text-3xl" />,
    description:
      "Connect physical devices to digital systems with smart IoT solutions that collect and analyze real-world data.",
    detailedDescription: `We build end-to-end IoT ecosystems that bridge the physical and digital worlds. Our solutions include sensor networks, edge computing, cloud platforms, and analytics dashboards - all working together to provide actionable insights from connected devices. We ensure security, reliability, and scalability at every layer of the IoT stack.`,
    services: [
      "IoT Hardware Integration: Connecting sensors, actuators, and industrial equipment.",
      "Edge Computing: On-device data processing and analytics for low-latency responses.",
      "IoT Cloud Platforms: AWS IoT, Azure IoT, or custom middleware development.",
      "Fleet Management: Tracking and optimizing mobile assets in real-time.",
      "Predictive Maintenance: Monitoring equipment health to prevent failures.",
      "Smart Environments: Building automation for homes, offices, and factories.",
      "IoT Security: End-to-end encryption and device authentication frameworks.",
      "Data Visualization: Real-time dashboards for monitoring IoT ecosystems.",
    ],
    outcome:
      "Our IoT implementations have helped clients achieve 30-50% reductions in equipment downtime, 20-40% improvements in energy efficiency, and millions in cost savings through predictive maintenance. We create reliable systems that process billions of data points with sub-second latency.",
  },
  {
    id: 9,
    banner: rpabanner,
    dp: rpadp,
    title: "RPA (Robotic Process Automation)",
    path: "rpa",
    icon: <FaCogs className="text-white text-3xl" />,
    description:
      "Automate repetitive tasks and workflows with software robots that work 24/7 without errors.",
    detailedDescription: `We implement RPA solutions that mimic human interactions with digital systems to execute rule-based processes with perfect accuracy. Our automation engineers identify high-ROI opportunities and build bots that integrate with your existing applications without costly system changes. We focus on processes that deliver quick wins and significant savings.`,
    services: [
      "Process Assessment: Identifying automation opportunities and calculating ROI.",
      "Bot Development: UiPath, Automation Anywhere, or Blue Prism implementations.",
      "Attended Automation: Desktop robots that work alongside human employees.",
      "Unattended Automation: Back-office processes that run 24/7 without supervision.",
      "Cognitive RPA: Combining traditional RPA with AI for decision-making tasks.",
      "RPA Orchestration: Centralized management of bot workflows and scheduling.",
      "Exception Handling: Designing robust error recovery and notification systems.",
      "RPA Integration: Connecting bots with APIs, databases, and legacy systems.",
    ],
    outcome:
      "Our RPA solutions typically automate 60-80% of repetitive tasks, reduce processing time by 70-90%, and deliver full ROI within 6-12 months. Clients achieve 99.9% accuracy in automated processes while freeing employees for higher-value work.",
  },
  {
    id: 10,
    banner: blockbanner,
    dp: blockdp,
    title: "Blockchain Development",
    path: "blockchain",
    icon: <FaBitcoin className="text-white text-3xl" />,
    description:
      "Build decentralized applications and smart contracts on secure, transparent blockchain networks.",
    detailedDescription: `We develop blockchain solutions that leverage distributed ledger technology for trustless transactions, provable fairness, and tamper-proof record keeping. Our expertise spans public, private, and hybrid blockchain implementations across industries including finance, supply chain, healthcare, and identity management.`,
    services: [
      "Smart Contract Development: Ethereum, Solana, or Hyperledger smart contracts.",
      "DApps: Decentralized applications with web3 frontends and blockchain backends.",
      "Tokenization: Creating utility and security tokens with compliant frameworks.",
      "NFT Marketplaces: Platforms for minting, selling, and trading digital assets.",
      "DeFi Solutions: Lending protocols, DEXs, and yield farming platforms.",
      "Blockchain Integration: Connecting existing systems with blockchain networks.",
      "Consensus Mechanisms: Implementing PoW, PoS, or custom algorithms.",
      "Crypto Wallets: Secure digital asset storage and management solutions.",
    ],
    outcome:
      "Our blockchain implementations provide immutable audit trails, reduce intermediary costs by 30-60%, and enable new business models through tokenization. Clients gain transparency, security, and efficiency in transactions while maintaining compliance with evolving regulations.",
  },
  {
    id: 11,
    banner: chatbanner,
    dp: chatdp,
    title: "Chatbot Development",
    path: "chatbot",
    icon: <FaCommentAlt className="text-white text-3xl" />,
    description:
      "Intelligent conversational agents that provide 24/7 customer support and automate interactions.",
    detailedDescription: `We build AI-powered chatbots and virtual assistants that understand natural language, maintain context, and handle complex dialogues. Our solutions integrate with messaging platforms, websites, and internal systems to provide instant, accurate responses while continuously learning from interactions.`,
    services: [
      "NLP Chatbots: Intent recognition and entity extraction for natural conversations.",
      "Voice Bots: Speech-enabled assistants for phone and smart speaker platforms.",
      "Omnichannel Deployment: Consistent experiences across web, mobile, and social media.",
      "Sentiment Analysis: Emotion detection for appropriate response tailoring.",
      "Knowledge Graph Integration: Connecting to FAQs, documents, and databases.",
      "Human Handoff: Seamless transition to live agents when needed.",
      "Chatbot Analytics: Measuring performance and conversation quality.",
      "CRM Integration: Syncing chat history and customer data with business systems.",
    ],
    outcome:
      "Our chatbots handle 70-90% of routine inquiries, reduce customer service costs by 30-50%, and provide 24/7 availability with consistent response quality. Clients see 40-60% improvements in first-contact resolution and 20-30% increases in customer satisfaction scores.",
  },
  {
    id: 12,
    banner: devopsbanner,
    dp: devopsdp,
    title: "DevOps Services",
    path: "devops",
    icon: <FaCogs className="text-white text-3xl" />,
    description:
      "Accelerate software delivery while improving reliability through automation and best practices.",
    detailedDescription: `We implement DevOps methodologies and tools that bridge development and operations for faster, more reliable releases. Our CI/CD pipelines, infrastructure as code, and monitoring solutions enable teams to deploy frequently with confidence while maintaining production stability and security.`,
    services: [
      "CI/CD Pipelines: Automated build, test, and deployment workflows.",
      "Infrastructure as Code: Terraform, Ansible, or CloudFormation implementations.",
      "Containerization: Docker and Kubernetes for portable, scalable deployments.",
      "Cloud Migration: Moving workloads to AWS, Azure, or GCP with zero downtime.",
      "Monitoring & Logging: Centralized observability with Prometheus, ELK, etc.",
      "Performance Optimization: Load testing and bottleneck identification.",
      "DevSecOps: Integrating security throughout the development lifecycle.",
      "Site Reliability Engineering: Implementing SRE practices for high availability.",
    ],
    outcome:
      "Our DevOps transformations typically achieve 5-10x faster release cycles, 50-70% reduction in deployment failures, and 60-80% faster mean time to recovery. Clients benefit from more stable environments, better resource utilization, and improved team collaboration.",
  },
  {
    id: 13,
    banner: cloudbanner,
    dp: clouddp,
    title: "Cloud Computing Services",
    path: "cloud-computing",
    icon: <FaCloud className="text-white text-3xl" />,
    description:
      "Leverage the power of cloud infrastructure for scalability, flexibility, and cost efficiency.",
    detailedDescription: `We design, migrate, and optimize cloud environments that align with your technical and business requirements. Whether you need a lift-and-shift migration or a cloud-native transformation, our certified architects build secure, high-performance solutions on AWS, Azure, or Google Cloud platforms.`,
    services: [
      "Cloud Strategy: Assessment, planning, and roadmap development.",
      "Migration Services: Moving workloads with minimal disruption.",
      "Cloud Architecture: Designing scalable, resilient infrastructure.",
      "Serverless Solutions: Event-driven architectures with Lambda/Functions.",
      "Cost Optimization: Right-sizing resources and implementing savings plans.",
      "Disaster Recovery: Designing failover systems and backup strategies.",
      "Multi-cloud/Hybrid: Managing workloads across cloud and on-premises.",
      "Managed Cloud Services: 24/7 monitoring and administration.",
    ],
    outcome:
      "Our cloud solutions deliver 30-50% infrastructure cost savings, 99.99% availability, and the ability to scale instantly with demand. Clients gain operational flexibility, improved security posture, and access to cutting-edge cloud services without heavy upfront investment.",
  },
  {
    id: 14,
    banner: visionbanner,
    dp: visiondp,
    title: "Computer Vision Solutions",
    path: "computer-vision",
    icon: <FaRobot className="text-white text-3xl" />,
    description:
      "Extract insights from visual data using AI-powered image and video analysis technologies.",
    detailedDescription: `We develop custom computer vision systems that interpret and understand visual content at scale. Our solutions range from simple object detection to complex scene understanding, enabling automation of visual tasks that previously required human intervention. We optimize models for accuracy, speed, and resource efficiency.`,
    services: [
      "Object Detection & Recognition: Identifying and classifying items in images/video.",
      "Facial Recognition: Face detection, verification, and attribute analysis.",
      "Optical Character Recognition: Extracting text from images and documents.",
      "Video Analytics: Real-time processing of live video streams.",
      "Quality Inspection: Automated defect detection in manufacturing.",
      "Augmented Reality: Markerless tracking and scene understanding.",
      "Edge CV: Optimized models running on mobile and IoT devices.",
      "Custom Dataset Creation: Curating and annotating training data.",
    ],
    outcome:
      "Our computer vision implementations achieve 95%+ accuracy in visual tasks, reduce inspection costs by 60-80%, and enable new capabilities like touchless interfaces. Clients benefit from 24/7 visual monitoring, instant quality control, and data-driven insights from imagery.",
  },
  {
    id: 15,
    banner: nlpbanner,
    dp: nlpdp,
    title: "Natural Language Processing",
    path: "natural-language",
    icon: <FaCommentAlt className="text-white text-3xl" />,
    description:
      "Process and understand human language at scale with advanced NLP and text analytics.",
    detailedDescription: `We build natural language processing systems that extract meaning from unstructured text, enable human-like conversations, and automate document processing. Our solutions leverage transformer models, semantic analysis, and custom linguistics rules to handle domain-specific language challenges.`,
    services: [
      "Text Classification: Categorizing documents by topic, sentiment, or intent.",
      "Named Entity Recognition: Extracting people, organizations, and locations.",
      "Document Summarization: Automatic abstraction of key information.",
      "Language Translation: Custom machine translation engines.",
      "Speech Recognition: Converting speech to text with high accuracy.",
      "Text Generation: Creating human-like content from structured data.",
      "Semantic Search: Understanding query intent beyond keywords.",
      "Knowledge Extraction: Building structured databases from text corpora.",
    ],
    outcome:
      "Our NLP solutions process millions of documents with 90%+ accuracy, reduce manual review time by 70-90%, and uncover insights hidden in unstructured data. Clients achieve faster information retrieval, automated content processing, and deeper understanding of customer feedback.",
  },
  {
    id: 16,
    banner: sciencebanner,
    dp: sciencedp,
    title: "Data Science Services",
    path: "data-science",
    icon: <FaChartLine className="text-white text-3xl" />,
    description:
      "Extract actionable insights from complex datasets using statistical analysis and advanced algorithms.",
    detailedDescription: `Our data scientists apply rigorous analytical methods to solve business problems and uncover opportunities. We handle everything from exploratory analysis to production-grade model deployment, ensuring your data delivers measurable value. Our approach combines mathematical rigor with business acumen for practical, impactful results.`,
    services: [
      "Exploratory Data Analysis: Uncovering patterns and relationships in raw data.",
      "Statistical Modeling: Hypothesis testing, regression, and experimental design.",
      "Feature Engineering: Creating predictive variables from raw data.",
      "Model Development: Building and validating machine learning algorithms.",
      "A/B Testing Framework: Designing experiments to measure impact.",
      "Data Storytelling: Communicating insights through visualization.",
      "MLOps: Productionizing models with monitoring and retraining.",
      "Root Cause Analysis: Identifying drivers behind key metrics.",
    ],
    outcome:
      "Our data science projects typically identify 15-30% efficiency gains, predict outcomes with 85-95% accuracy, and uncover new revenue opportunities worth millions. Clients gain evidence-based decision-making capabilities and competitive advantages from their data assets.",
  },
  {
    id: 17,
    banner: bigdatabanner,
    dp: bigdatadp,
    title: "Big Data Solutions",
    path: "big-data",
    icon: <FaDatabase className="text-white text-3xl" />,
    description:
      "Store, process, and analyze massive datasets that exceed traditional database capabilities.",
    detailedDescription: `We design and implement big data architectures that handle volume, velocity, and variety of modern data sources. Our solutions enable real-time processing, advanced analytics, and cost-effective storage at petabyte scale. We select technologies based on your specific use cases and existing infrastructure.`,
    services: [
      "Data Lake Implementation: Centralized repositories for raw and processed data.",
      "Stream Processing: Real-time analytics on high-velocity data streams.",
      "Distributed Computing: Spark, Hadoop, and other processing frameworks.",
      "NoSQL Databases: MongoDB, Cassandra, or other schema-flexible stores.",
      "Data Pipeline Engineering: Reliable ETL/ELT workflows at scale.",
      "Data Governance: Quality, security, and metadata management.",
      "Cost Optimization: Right-sizing storage and compute resources.",
      "Performance Tuning: Optimizing queries and processing jobs.",
    ],
    outcome:
      "Our big data solutions process terabytes daily with sub-second latency, reduce storage costs by 40-60%, and enable analytics on previously unusable data. Clients gain comprehensive data visibility, real-time decision capabilities, and future-proof architectures.",
  },
  {
    id: 18,
    bammer: migrationbanner,
    dp: migrationdp,
    title: "Cloud Migration Services",
    path: "cloud-migration",
    icon: <FaCloud className="text-white text-3xl" />,
    description:
      "Seamlessly transition your applications and infrastructure to the cloud with minimal disruption.",
    detailedDescription: `We execute cloud migrations that balance speed, cost, and risk to deliver business value quickly. Our proven methodology assesses technical and financial factors to create a tailored migration plan, then implements it with careful change management to ensure user adoption and operational continuity.`,
    services: [
      "Cloud Readiness Assessment: Evaluating applications for migration suitability.",
      "Migration Planning: Phased approach with business priority alignment.",
      "Rehosting (Lift & Shift): Moving applications with minimal changes.",
      "Replatforming: Optimizing for cloud with limited refactoring.",
      "Refactoring: Re-architecting for cloud-native capabilities.",
      "Database Migration: Moving relational and NoSQL data stores.",
      "Application Modernization: Updating legacy systems during migration.",
      "Post-Migration Optimization: Right-sizing and performance tuning.",
    ],
    outcome:
      "Our cloud migrations typically achieve 30-50% infrastructure cost savings, 99.99% availability, and enable 2-5x faster feature development. Clients benefit from improved scalability, disaster recovery, and access to innovative cloud services.",
  },
  {
    id: 19,
    banner: arbanner,
    dp: ardp,
    title: "AR/VR Development",
    path: "ar-vr",
    icon: <FaGamepad className="text-white text-3xl" />,
    description:
      "Create immersive augmented and virtual reality experiences that engage users and solve real problems.",
    detailedDescription: `We develop AR/VR applications that blend digital content with the physical world or create entirely virtual environments. Our solutions range from marketing experiences to enterprise training systems, all built with attention to user comfort, performance, and measurable business outcomes.`,
    services: [
      "Mobile AR: Markerless experiences using ARKit and ARCore.",
      "VR Applications: Immersive environments for Oculus, Vive, and other headsets.",
      "WebXR: Browser-based AR/VR that requires no app install.",
      "3D Modeling & Animation: Creating realistic or stylized virtual assets.",
      "Enterprise Training: Simulating dangerous or expensive real-world scenarios.",
      "Product Visualization: Virtual showrooms and 3D configurators.",
      "Location-Based AR: Geo-anchored experiences tied to physical places.",
      "Multi-user VR: Collaborative virtual spaces for teams.",
    ],
    outcome:
      "Our AR/VR solutions increase customer engagement by 3-5x, improve training retention by 40-70%, and reduce physical prototyping costs by 50-80%. Clients create memorable brand experiences while solving practical business challenges through immersive tech.",
  },
  {
    id: 20,
    banner: cyberbanner,
    dp: cyberdp,
    title: "Cybersecurity Services",
    path: "cybersecurity",
    icon: <FaShieldAlt className="text-white text-3xl" />,
    description:
      "Protect your systems, data, and reputation with comprehensive security solutions and best practices.",
    detailedDescription: `We provide end-to-end cybersecurity services that identify vulnerabilities, protect against threats, and respond to incidents. Our approach combines technology implementation with policy development and employee training to create defense-in-depth security postures tailored to your risk profile.`,
    services: [
      "Security Assessments: Penetration testing and vulnerability scanning.",
      "Threat Detection: SIEM implementation and 24/7 monitoring.",
      "Identity & Access Management: Multi-factor auth and least privilege controls.",
      "Endpoint Protection: Advanced threat prevention for devices.",
      "Cloud Security: Configuration reviews and CSPM implementation.",
      "Compliance Management: Meeting ISO, NIST, or industry standards.",
      "Incident Response: Preparation, detection, and recovery services.",
      "Security Awareness Training: Phishing simulations and employee education.",
    ],
    outcome:
      "Our cybersecurity services typically reduce breach risk by 70-90%, accelerate compliance achievement by 50%, and decrease incident response time from days to hours. Clients gain peace of mind with enterprise-grade protection regardless of their internal resources.",
  },
  {
    id: 21,
    banner: itbanner,
    dp: itdp,
    title: "IT Infrastructure Services",
    path: "it-infrastructure",
    icon: <FaServer className="text-white text-3xl" />,
    description:
      "Design, implement, and manage reliable, high-performance technology foundations for your business.",
    detailedDescription: `We build and optimize the core technology systems that power modern enterprises. Our infrastructure solutions balance performance, cost, and future-readiness while ensuring 24/7 availability. We support both on-premises and cloud-based environments with equal expertise.`,
    services: [
      "Network Design: Secure, high-bandwidth wired and wireless architectures.",
      "Data Center Solutions: On-premises and colocation facility planning.",
      "Virtualization: Server, desktop, and application virtualization.",
      "Storage Solutions: SAN, NAS, and hyperconverged infrastructure.",
      "Disaster Recovery: Replication, backup, and failover systems.",
      "Unified Communications: VoIP, video conferencing, and collaboration tools.",
      "Infrastructure Monitoring: Proactive performance and capacity management.",
      "IT Automation: Scripting and orchestration for operational efficiency.",
    ],
    outcome:
      "Our infrastructure implementations deliver 99.99% uptime, 30-50% cost reductions through optimization, and scalability to support 5-10x growth. Clients benefit from reliable, high-performance foundations that adapt to changing business needs.",
  },
  {
    id: 22,
    banner: gamebanner,
    dp: gamedp,
    title: "Gaming Application Development",
    path: "gaming",
    icon: <FaGamepad className="text-white text-3xl" />,
    description:
      "Create captivating gaming experiences across platforms with stunning graphics and engaging gameplay.",
    detailedDescription: `We develop high-quality games for mobile, desktop, console, and web platforms. Our full-cycle development covers concept art, gameplay programming, 3D modeling, physics simulation, multiplayer networking, and monetization integration. We build both entertainment games and serious games for training/education.`,
    services: [
      "Mobile Game Development: iOS and Android games with Unity or native code.",
      "PC/Console Games: High-fidelity experiences with Unreal or custom engines.",
      "Web Games: Browser-based instant play experiences.",
      "AR/VR Games: Immersive reality gaming applications.",
      "Game Design: Mechanics, level design, and progression systems.",
      "3D Art & Animation: Characters, environments, and visual effects.",
      "Multiplayer Networking: Real-time and turn-based online play.",
      "Game Analytics: Player behavior tracking and monetization optimization.",
    ],
    outcome:
      "Our games achieve 4.5+ average ratings, strong retention metrics (30-50% D7), and successful monetization through IAP and ads. We've developed titles with millions of downloads that maintain active player bases for years.",
  },
  {
    id: 23,
    banner: callingbanner,
    dp: callingdp,
    title: "AI Calling Agency Solutions",
    path: "ai-calling",
    icon: <FaPhoneAlt className="text-white text-3xl" />,
    description:
      "Automate and enhance call center operations with AI-powered voice agents and analytics.",
    detailedDescription: `We implement AI calling solutions that handle customer conversations with human-like responsiveness. Our voice agents understand context, detect sentiment, and access knowledge bases to resolve inquiries while seamlessly transferring complex issues to human operators. We also provide analytics to optimize call center performance.`,
    services: [
      "AI Voice Agents: Natural-sounding conversational interfaces.",
      "Call Routing & IVR: Intelligent call distribution and self-service menus.",
      "Real-time Transcription: Converting calls to text with speaker diarization.",
      "Sentiment Analysis: Detecting customer emotion during conversations.",
      "Call Analytics: Measuring performance and extracting insights.",
      "CRM Integration: Syncing call data with customer records.",
      "Compliance Monitoring: Ensuring regulatory adherence in calls.",
      "Agent Assist: Real-time suggestions for human operators.",
    ],
    outcome:
      "Our AI calling solutions handle 50-70% of routine inquiries automatically, reduce call handling time by 30-50%, and improve customer satisfaction by 20-40%. Clients achieve significant cost savings while maintaining quality service availability 24/7.",
  },
];

export const hassaWebServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: <FaShoppingCart className="text-6xl text-white" />,
    description:
      "Empowering your online business with tailored e-commerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: <FaUsers className="text-6xl text-white" />,
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: <FaFileAlt className="text-6xl text-white" />,
    description:
      "Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: <FaCode className="text-6xl text-white" />,
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

export const hassaAppServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: <FaApple className="text-6xl text-primary" />,
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: <FaAndroid className="text-6xl text-primary" />,
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals. Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: <FaMobileAlt className="text-6xl text-primary" />,
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: <FaLayerGroup className="text-6xl text-primary" />,
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
