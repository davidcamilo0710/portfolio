/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "David M.G.",
  logo_name: "< david.mg() />",
  full_name: "David Muñoz G",
  subTitle:
    "Data Scientist, Back-End Developer, Open Source Enthusiast, and Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1G35vr0A7eVH7pC2s4tvUbbYq1OVyuYxO/view?usp=sharing",
  mail: "mailto:im.davidcamilo0710@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/davidcamilo0710",
  linkedin: "https://www.linkedin.com/in/davidcamilo0710/",
  gmail: "im.davidcamilo0710@gmail.com",
  twitter: "https://twitter.com/DavidCamilo_M",
  discord: "http://discordapp.com/users/611348105652207623",
};

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Turning dirty and unstructured data from different source into ready to use data for analytics and data science",
        "⚡ Extract insights and automate intelligent decision-making from business data, and other available sources",
        "⚡ Creating dashboards and visualizations to present data in a clear and understandable way",
        "⚡ Building Machine Learning and Deep Learning models for different use cases",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
        //{
        //  skillName: "PyTorch",
        //  fontAwesomeClassname: "logos-pytorch",
        //  style: {
        //    backgroundColor: "transparent",
        //  },
        //},
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos:r-lang",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "cib:apache-spark",
          style: {
            color: "#e35a16",
          },
        },
        {
          skillName: "Matlab",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            color: "#trasparent",
          },
        },
        {
          skillName: "TableaU",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            color: "#trasparent",
          },
        },
      ],
    },

    {
      title: "Back-End Development",
      fileName: "FullStackImg",
      skills: [
        // "⚡ Develop highly interactive User Interfaces and Backend for web applications",
        "⚡ Creating application backend in Spring Boot and Django",
        "⚡ Integration of third party services such as AWS and GCP",
        "⚡ Building basic responsive website front-end using ReactJS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        {
          skillName: "Spring",
          fontAwesomeClassname: "logos:spring",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6db33f",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#0c4b33",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        //{
        //  skillName: "Angular",
        //  fontAwesomeClassname: "logos:angular-icon",
        //  style: {
        //    color: "transparent",
        //  },
        //},
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universidad del Cauca",
      title_url: "https://www.unicauca.edu.co/",
      subtitle: "Bachelors in Electronics and Telecommunications Engineering",
      logo_path: "Unicauca_logo.png",
      alt_name: "SSEC",
      duration: "2016 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Networking, Operating Systems, DBMS, Security, Data Structures and Algorithms, AI, etc.",
        "⚡ Apart from this, I have done courses on Machine Learning, Data Science, Cloud Computing and Back-end Development.",
        "⚡ I received honorable mention for the high impact research project in the field of Telecommunications and Machine Learning.",
      ],
      website_link: "https://drive.google.com/file/d/1gdh4a_zAxBLw1iFQLjgpc2vQoPDseUD6/view?usp=sharing",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Microsoft Azure Data Engineering Associate",
      subtitle: "- Betty Vandenbosch",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://coursera.org/verify/professional-cert/B32PZKEMTN77",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },    
    {
      title: "Microsoft Azure Data Scientist Associate",
      subtitle: "- Betty Vandenbosch",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://coursera.org/verify/professional-cert/45PZZE98VVYB",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Business Analytics",
      subtitle: "- Eric Bradlow",
      logo_path: "wharton_logo.png",
      certificate_link:
        "https://coursera.org/verify/specialization/WQ8F5L8Q5246",
      alt_name: "University of Pennsylvania ",
      color_code: "#dbdce0",
    },
    {
      title: "DeepLearning.AI TensorFlow Developer",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/verify/professional-cert/WMERHJ2FY3EA",
      alt_name: "deeplearning.ai",
      color_code: "#fdb4bf",
    },
    {
      title: "Data Science Professional Certificate",
      subtitle: "- Rav Ahuja",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/49616552-7d86-4b84-9b46-a114adcff838",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Data Visualization with Tableau",
      subtitle: "- Govind Acharya",
      logo_path: "davies_logo.png",
      certificate_link:
        "https://coursera.org/verify/specialization/F5QADYZBSHKH",
      alt_name: "UC Davis",
      color_code: "#2A73CC",
    },
    {
      title: "Excel Skills for Business",
      subtitle: "- Yvonne Breyer",
      logo_path: "mac_logo.png",
      certificate_link:
        "https://coursera.org/verify/specialization/KYVP3CDUHY3Y",
      alt_name: "Macquarie University",
      color_code: "#789aa3",
    },
    {
      title: "Statistics and R",
      subtitle: "- Rafael Irizarry",
      logo_path: "harvard_logo.png",
      certificate_link:
        "https://courses.edx.org/certificates/2ee363c332774b4b84b611fcb0d2dff2",
      alt_name: "HarvardX",
      color_code: "#8C151599",
    },
    {
      title: "SQL applied in data science",
      subtitle: "- Rav Ahuja",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://courses.edx.org/certificates/564800b033ed4b429d07b8b0e7715b70",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Scrum Fundamentals Certified",
      subtitle: "- SCRUMstudy",
      logo_path: "scrum_logo.png",
      certificate_link:
        "https://www.scrumstudy.com/certification/verify?type=SFC&number=902897",
      alt_name: "SCRUMstudy",
      color_code: "#dbdce0",
    },
    {
      title: "M320: Data Modeling",
      subtitle: "- Mark Porter",
      logo_path: "mongo_logo.png",
      certificate_link:
        "https://university.mongodb.com/course_completion/dca1c357-d34d-44a8-92e9-f8021adc0fec",
      alt_name: "MongoDB University",
      color_code: "#66c29b",
    },
    {
      title: "M103: Basic Cluster Administration",
      subtitle: "- Mark Porter",
      logo_path: "mongo_logo.png",
      certificate_link:
        "https://university.mongodb.com/course_completion/5cdd8a7d-24c6-494c-8fca-a977a45dc503",
      alt_name: "MongoDB University",
      color_code: "#66c29b",
    },
    {
      title: "M220P: MongoDB for Python Davelopers",
      subtitle: "- Mark Porter",
      logo_path: "mongo_logo.png",
      certificate_link:
        "https://university.mongodb.com/course_completion/4c715948-8819-4d29-b51f-ad685946b2e7",
      alt_name: "MongoDB University",
      color_code: "#66c29b",
    },
    {
      title: "Building Modern Python Applications on AWS",
      subtitle: "- Morgan Willis",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://coursera.org/verify/AGEM9QKD3CKD",
      alt_name: "AWS",
      color_code: "#dbdce0",
    },
    {
      title: "Machine Learning with Python from Linear Models to Deep Learning",
      subtitle: "- Regina Barzilay",
      logo_path: "mitx_logo.png",
      certificate_link:
        "https://courses.edx.org/certificates/c60b48a05a87439a80c9c2592e19695c",
      alt_name: "MITx",
      color_code: "#8C151599",
    },


    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Research and Volunteership",
  description:
    " I have worked with companies and a research group as Data Scientist. I have also worked as a volunteer to improve my skills and help others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Data scientist and web developer",
          company: "IPS Cambio Semillero de Vida S.A.S.",
          company_url: "https://ipscambio.com",
          logo_path: "ipscambio.png",
          duration: "Feb 2022 - Aug 2022",
          location: "Popayán-Cauca, Colombia",
          description: "Redesign and develop a website to offer the commercial services of IPS Cambio and build a strong online presence. Cleanse, visualize and analyze accounting, operations and customer data to provide recommendations that improve company profits. Create an application based on JAVA and PostgreSQL to manage (i.e., register, view, export) all company data (accounting, operations and customers) and perform accounting calculations.",
          color: "#0071C5",
        },
        {
          title: "Data scientist",
          company: "Ingetel ingenieria en telecomunicaciones S.A.S.",
          company_url: "https://www.linkedin.com/company/ingetel/",
          logo_path: "ingetel.png",
          duration: "Jul 2020 - Nov 2021",
          location: "Cali- Valle del Cauca, Colombia",
          description: "Design and develop different Back‐end modules of the company website using Spring Boot, AWS and MongoDB. Use Python and TableaU to analyze and visualize accounting data. Also, analyze the factors that increase the mobile antenna installation price in the different departments of Colombia. Create a supervised learning model to predict the cost of installing mobile antennas in the different departments of Colombia.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Research",
      experiences: [
        {
          title: "Machine learning developer",
          company: "IEEE ComSoc Unicauca",
          company_url: "http://portal.unicauca.edu.co/portaleningles/news/comsocauca-research-seedbed-consolidated-dissemination-advances-telecommunications",
          logo_path: "comsoc.png",
          duration: "Oct 2021 - Jul 2022",
          location: "Popayán-Cauca, Colombia",
          description:
            "Wrote Python scripts to create datasets from real Internet traffic measurements. Then perform an exploratory analysis of the datasets. Create an application based on Random Forest (RF) to classify Internet traffic, and employ feature engineering, Machine Learning modelling and tuning techniques. Use the P4 language to deploy the RF‐based application in the data plane of an SDN network. Also, I generated, synthesized and documented knowledge related to the new P4 programming language for the research line in advanced telecommunications services.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Data Scientist: Support to Help Advance Ethical Fashion",  
          company: "Ashoka",
          company_url: "https://www.ashoka.org/about-ashoka",
          logo_path: "ashoka.png",
          duration: "Aug 2022 - PRESENT",
          location: "Work From Home",
          description:
            "I'm actively supporting the development of a technological platform for the education of different targets such as cooperatives, MSMEs and Designers, economists, and other professionals. I'm currently organizing and centralizing research information about LATAM by creating databases and building scripts.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a wide variety of the latest technology tools. My best experience is creating Data Science projects and deploying web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};
const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "P4Tree: a RF classifier for SDN",
      url: "https://github.com/davidcamilo0710/P4Tree",
      description:
        "Network traffic classifier built from data manipulation and analysis, feature engineering, ML, and tuning techniques.",
      languages: [
        {
          name: "P4",
          iconifyClass: "file-icons:p4",
          style: {
            color: "#8cc43e",
          },
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Scikit-Learn",
          iconifyClass: "simple-icons:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
      ],
    },
    {
      id: "1",
      name: "World Cup QATAR 2022 Prediction",
      url: "https://github.com/davidcamilo0710/QATAR_2022_Prediction",
      description:
        "QATAR 2022 World Cup prediction from the international matches played since the 90s, the statistics, and the potential of the teams",
      languages: [
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Scikit-Learn",
          iconifyClass: "simple-icons:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          name: "Seaborn",
          iconifyClass: "logos:seaborn-icon",
        },
      ],
    },
    {
      id: "2",
      name: "NBA - Fourth Quarter Analysis",
      url: "https://github.com/davidcamilo0710/NBA_Fourth_Quarter_Analysis",
      description:
        "Statistical analysis of the last quarter of an NBA game (2021-22 regular season) using scraping, cleaning and clustering techniques.",
      languages: [
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Scikit-Learn",
          iconifyClass: "simple-icons:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
        {
          name: "Seaborn",
          iconifyClass: "logos:seaborn-icon",
        },
        {
          name: "Selenium",
          iconifyClass: "logos:selenium",
        },
      ],
    },
    {
      id: "3",
      name: "EDA on ResetStore-Mercadolibre Sales",
      url: "https://github.com/davidcamilo0710/Mercadolibre_Sales_EDA",
      description:
        "Sales and profit analysis of a company's products using statistics, visualization, and forecasting techniques.",
      languages: [
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "TableaU",
          iconifyClass: "logos:tableau-icon",
        },
      ],
    },
    {
      id: "4",
      name: "Google Playstore Apps",
      url: "https://public.tableau.com/app/profile/david.camilo.mu.oz.garcia/viz/GooglePlaystoreStoryboardingandStorytelling/GooglePlaystoreApps",
      description: "Storyboarding and Storytelling in TableaU that provides intelligent recommendations for developing successful apps.",
      languages: [
        {
          name: "TableaU",
          iconifyClass: "logos:tableau-icon",
        },
      ],
    },
    {
      id: "5",
      name: "LoL -- High Elo Match EDA",
      url: "https://github.com/davidcamilo0710/LeagueOfLegendsAnalysis",
      description:
        "Exploratory analysis that answers interesting questions about the popular League of Legends game using the Seaborn library.",
      languages: [
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Seaborn",
          iconifyClass: "logos:seaborn-icon",
        },
      ],
    },
    {
      id: "6",
      name: "Routing elephants with RL",
      url: "https://github.com/davidcamilo0710/Routing_Reinforcement_Learning",
      description:
        "Reinforcement Learning (RL)-based routing algorithm for SDN networks created from scratch using Python.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Portfolio Website",
      url: "https://github.com/davidcamilo0710/Portfolio",
      description: "The complete portfolio website hosted using github pages (gh-pages). You are stalking it right now 😉...",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "8",
      name: "Responsive Data Viz Dashboard",
      url: "https://public.tableau.com/app/profile/david.camilo.mu.oz.garcia/viz/CreatingaDashboardSuperStore/KPIDashboard",
      description:
        "A beautiful and minimalist dashboard in Tableau, which allows to modify parameters to analyze the profit in sales data.",
      languages: [
        {
          name: "TableaU",
          iconifyClass: "logos:tableau-icon",
        },
      ],
    },
    {
      id: "9",
      name: "IBM -- Winning space race",
      url: "https://github.com/davidcamilo0710/Applied_Data_Science_Capstone",
      description:
        "Data science project that includes data collection (web-scrapping), EDA, visualization, and ML. Also, SQL and Folium library.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Seaborn",
          iconifyClass: "logos:seaborn-icon",
        },
        {
          name: "Folium",
          iconifyClass: "simple-icons:folium",
          style: {
            color: "#08fe00",
          },
        },
        {
          name: "Scikit-Learn",
          iconifyClass: "simple-icons:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
  projects,
};
