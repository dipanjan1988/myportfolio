import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  docker,
  carrent,
  jobit,
  threejs,
  spring,
  swift,
  java,
  mysql,
  goLang,
  CTSH,
  TCS,
  Kafka,
  Kotlin,
  omaelisa,
  omaelisaApp,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "technology",
    title: "Technology",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "feedbacks",
    title: "Achievements",
  },
  {
    id: "location",
    title: "Location",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Spring & Spring Boot",
    icon: spring,
    proficiency: "Expert",
  },
  {
    name: "Go Lang",
    icon: goLang,
    proficiency: "Expert",
  },
  {
    name: "Swift",
    icon: swift,
    proficiency: "Intermediate",
  },
  {
    name: "Java",
    icon: java,
    proficiency: "Expert",
  },
  {
    name: "Kafka",
    icon: Kafka,
    proficiency: "Intermediate",
  },
  {
    name: "Kotlin",
    icon: Kotlin,
    proficiency: "Intermediate",
  },
  {
    name: "JavaScript",
    icon: javascript,
    proficiency: "Expert",
  },
  {
    name: "TypeScript",
    icon: typescript,
    proficiency: "Expert",
  },
  {
    name: "React JS & React Native",
    icon: reactjs,
    proficiency: "Expert",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    proficiency: "Expert",
  },
  {
    name: "Node JS",
    icon: nodejs,
    proficiency: "Advanced",
  },
  {
    name: "Mysql",
    icon: mysql,
    proficiency: "Advanced",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    proficiency: "Advanced",
  },
  {
    name: "Three JS",
    icon: threejs,
    proficiency: "Intermediate",
  },
  {
    name: "docker",
    icon: docker,
    proficiency: "Expert",
  },
];

const experiences = [
  {
    title: "Junior Fullstack Developer",
    company_name: "Cognizant Technology Solutions, Kolkata, India",
    icon: CTSH,
    iconBg: "#383E56",
    date: "January 2012 - March 2016",
    points: [
      "Developed front-end features in tandem with senior developers, resulting in a 20% deployment time reduction and a 15% increase in user satisfaction.",
      "Contributed to the development of backend Java services, which increased system scalability and performance by 25%.",
      "Worked together with the design team to create aesthetically pleasing web interfaces that increased user engagement metrics by 30%.",
      "Conducted extensive testing, debugging, and defect resolution; this led to a 20% drop in user-reported software faults.",
      "Take part in code optimisation to reduce page load times by 30% and improve application performance by 25%.",
      "Facilitated the migration of legacy systems, increasing scalability by 40% and cutting maintenance expenses by 15%.",
      "Reduced the amount of time new developers need to spend onboarding by 20% by creating thorough documentation for the code, APIs, and functionality.",
      "Contributed to the creation and upkeep of development environments, which led to a 25% decrease in downtime and a 30% improvement in workflow efficiency.",
    ],
  },
  {
    title: "Senior Software Consultant (Fullstack Mobile And Web)",
    company_name: "TATA Consultancy Services Ltd, Helsinki, Finland",
    icon: TCS,
    iconBg: "#383E56",
    date: "March 2016 - Present",
    points: [
      "Increased project completion efficiency by 15% as a result of working together across teams to analyse project needs and contribute to a variety of online apps.",
      "Designed and implemented responsive interfaces using frameworks like React, Next Js and Angular, enhancing user satisfaction by 20%.",
      "Created effective backend APIs using Go, Java, SpringBoot Scala, and Node.js, improving server-side operations and data flow by 30%.",
      "Integrated third-party APIs (Google Map etc), enhancing application functionality and user experience by 25%",
      "Using MongoDB and MySQL, database models were implemented, increasing the effectiveness of data management by 20%.",
      "Code quality maintenance and smooth cooperation were ensured by using Git for version management, which led to a 25% decrease in integration conflicts.",
      "Assisted in deployment and maintenance on Private Cloud like Kubernetes using Github Actions, reducing deployment time by 20%.",
      "Actively participated in Agile processes, leading to a 15% increase in sprint completion rates.",
      "Resolved critical bugs promptly, ensuring uninterrupted application functionality, resulting in a 40% decrease in user-reported issues.",
      "Gained proficiency in Kotlin and Swift, broadening expertise in Native Mobile development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "LOMA 280 specifically focuses on insurance company operations and administration. It covers topics such as underwriting, marketing, distribution, and claims processing. The certification is beneficial for individuals working in insurance companies, as it equips them with the knowledge and skills necessary to excel in their roles.",
    name: "LOMA 280 (Insurance) Certification",
    time: "March 2014",
    designation: "CFO",
    company: "LOMA (Life Office Management Association)",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "The Oracle Certified Professional, Java Programmer (OCJP) 6 certification is an accreditation provided by Oracle for individuals who demonstrate proficiency in Java programming using the Java SE 6 platform. This certification validates skills and knowledge related to Java programming fundamentals, object-oriented concepts, and core Java APIs.",
    name: "OCJP 6 (Oracle Certified Java 6 Professional) ",
    time: "May 2018",
    designation: "COO",
    company: "Oracle Corporation",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Offered by Scrum.org, the PSM certification assesses a person's understanding of Scrum theory, practices, and principles. It consists of different levels, including PSM I, PSM II, and PSM III, each catering to different levels of expertise.",
    name: "Professional Scrum Master",
    time: "August 2018",
    designation: "CTO",
    company: " Scrum.org",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "Google Cloud offers the Professional Cloud Developer certification for individuals who demonstrate proficiency in designing, building, and deploying scalable and reliable applications on Google Cloud Platform (GCP). ",
    name: "Google Certified Professional Cloud Developer",
    time: "August 2022",
    designation: "CTO",
    company: " Google",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Long Term Care",
    description:
      "John Hancock is a well-known insurance company that offers various types of insurance products, including long-term care insurance. Long-term care insurance helps cover the costs of services that aren't typically covered by health insurance, Medicare, or Medicaid. These services may include assistance with activities of daily living, such as bathing, dressing, and eating, either at home or in a facility like a nursing home or assisted living facility.",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "jQuery",
        color: "blue-text-gradient",
      },
      {
        name: "mySql",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    clientName: "John Hancock",
  },
  {
    name: "Wholesale",
    description:
      "TDC Wholesale is the leading provider of international telecommunications in Denmark and the number one challenger in Sweden, Norway and Finland.TDC Wholesale offers international operators and service providers reliable, cost-effective customized services in the northern region.",
    tags: [
      {
        name: "Angular 4",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring",
        color: "blue-text-gradient",
      },
      {
        name: "MY Sql",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    clientName: "Tele Denmark Corporation",
  },
  {
    name: "Omaelisa",
    description:
      "Omaelisa is a digital service provided by Elisa, a Finnish telecommunications company. It allows Elisa's customers to manage their accounts, subscriptions, and services online. Through Omaelisa, users can view and pay bills, manage mobile and broadband subscriptions, monitor data usage, purchase additional services, and access customer support. The platform aims to provide convenience and accessibility to customers, empowering them to control their telecommunications services efficiently from their devices.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mobx",
        color: "blue-text-gradient",
      },
      {
        name: "scala",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "kafka",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "kubernates",
        color: "green-text-gradient",
      },
      {
        name: "less",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
    ],
    image: omaelisa,
    clientName: "Elisa",
  },
  {
    name: "OmaElisa App",
    description:
      "The Omaelisa app, provided by Elisa, empowers customers to conveniently manage their telecommunications services from their mobile devices. Users can view and pay bills, manage subscriptions, monitor usage, purchase additional services, and access customer support, all through the app. This platform enhances customer experience by offering a user-friendly and efficient way to control their accounts and services on the go.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "Mobx State Tree",
        color: "blue-text-gradient",
      },
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Scala",
        color: "green-text-gradient",
      },
      {
        name: "Spring",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: omaelisaApp,
    clientName: "Elisa",
  },
];

export const Bio = {
  name: "Rishav Chanda",
  roles: [
    "Full Stack Developer",
    "React Native Developer",
    "Mobile Developer",
    "Backend Developer",
    "IOS Developer",
    "Android Developer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/rishavchanda",
  resume:
    "https://drive.google.com/file/d/1hcr51_E8LC5F0Anr5gMM27S87mSicZkK/view?usp=drive_link",
  // "https://drive.google.com/file/d/1txFKZD3LNIXMc329jD9c995AU8LItOXK/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
  twitter: "https://twitter.com/RishavChanda",
  insta: "https://www.instagram.com/rishav_chanda/",
  facebook: "https://www.facebook.com/rishav.chanda.165/",
};

export { services, technologies, experiences, testimonials, projects };
