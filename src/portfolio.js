/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "G-QT2L09TF97",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "David M.G.",
  logo_name: "david.mg()",
  full_name: "David Muñoz G",
  subTitle:
    "AI Engineer and Data Scientist. I build RAG systems and autonomous agents that automate real business processes.",
  resumeLink:
    "https://drive.google.com/file/d/14iGGqHvBIQ69BwNXMru8aDDBFkNTi8OM/view?usp=sharing",
  mail: "mailto:davidcamilo0710@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/davidcamilo0710",
  linkedin: "https://www.linkedin.com/in/davidcamilo0710/",
  gmail: "davidcamilo0710@gmail.com",
  //twitter: "https://twitter.com/DavidCamilo_M",
  discord: "http://discordapp.com/users/611348105652207623",
};

const skills = {
  data: [
    {
      title: "Generative AI, Agents & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building RAG systems over a company's own documents and data, so answers are precise and traceable",
        "⚡ Designing autonomous and multi-agent workflows that execute real business decisions, not just chat",
        "⚡ Training and deploying machine learning models to production with MLOps practices",
        "⚡ Turning raw and unstructured data into dashboards, reports and insights with Power BI, Looker Studio and Tableau",
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
          fontAwesomeClassname: "devicon:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
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
          skillName: "Apache Kafka",
          fontAwesomeClassname: "skill-icons:kafka",
          style: {
            color: "#231F20", // Color representativo de Kafka
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
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
        {
          skillName: "Looker Studio",
          fontAwesomeClassname: "logos:looker-icon",
          style: {
            color: "#trasparent",
          },
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "fluent-emoji-flat:snowflake",
          style: {
            color: "#56B3FF", // Color representativo de Snowflake
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "devicon:opencv",
          style: {
            color: "#5C3EE8", // Color representativo de OpenCV
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "devicon:figma",
          style: {
            color: "#F24E1E", // Color representativo de Figma
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "devicon:canva",
          style: {
            color: "#00C4CC", // Color representativo de Canva
          },
        },
      ],
    },
    {
      title: "Data Engineering & Back-end",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing ETL/ELT pipelines and cloud data architectures that keep data reliable and available",
        "⚡ Building APIs and back-end services with FastAPI and Spring Boot to expose models and data",
        "⚡ Designing and optimising database schemas for scalability, including vector stores with pgvector",
        "⚡ Integrating third-party services and APIs across AWS and Azure",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "devicon:fastapi",
          style: {
            color: "transparent",
          },
        },
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
          skillName: "Postman",
          fontAwesomeClassname: "devicon:postman",
          style: {
            color: "#FF6C37", // Color representativo de Postman
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos:linux-tux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#4479A1",
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
          skillName: "Microsoft SQL Server",
          fontAwesomeClassname: "devicon:microsoftsqlserver",
          style: {
            color: "#CC2927", // Color representativo de SQL Server
          },
        },
        {
          skillName: "Oracle Database",
          fontAwesomeClassname: "lineicons:oracle",
          style: {
            color: "#F80000", // Color representativo de Oracle
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
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "fa:github",
          style: {
            color: "#ffffff", // Color representativo de GitHub
          },
        },
      ],
    },
    {
      title: "Cloud, MLOps & Automation",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying AI workloads on Azure OpenAI, Azure AI Foundry, Amazon Bedrock and SageMaker",
        "⚡ Automating business processes end to end with n8n, with LLMs at the core of the decision",
        "⚡ Containerising and orchestrating services with Docker, Kubernetes and Terraform",
        "⚡ Setting up CI/CD so models and services ship continuously and reliably",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "devicon:azure",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "devicon:docker-wordmark",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "devicon:terraform",
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "devicon:jenkins",
        },
        {
          skillName: "Gitlab",
          fontAwesomeClassname: "logos:gitlab",
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "devicon:githubactions",
          style: {
            color: "#2088FF", // Color representativo de GitHub Actions
          },
        },
        {
          skillName: "Apache Airflow",
          fontAwesomeClassname: "logos:airflow-icon",
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
      title: "Universidad Internacional de La Rioja (UNIR)",
      title_url:
        "https://estudiar.unir.net/co/co-esp-ma-ing-maestria-inteligencia-artificial/",
      subtitle: "Master's in Artificial Intelligence",
      logo_path: "Unir_logo.png",
      alt_name: "UNIR",
      duration: "Feb. 2025 - Abr. 2026",
      descriptions: [
        "⚡ Focused on advanced topics in Artificial Intelligence, including Machine Learning, Deep Learning, and Natural Language Processing.",
        "⚡ Courses cover AI applications in real-world scenarios, Big Data integration, and ethical considerations in AI development.",
        "⚡ Developed skills in MLOps and cloud-based AI model deployment on platforms like Azure and AWS.",
      ],
      website_link:
        "https://estudiar.unir.net/co/co-esp-ma-ing-maestria-inteligencia-artificial/?utm_source=GOOGLE-BUSQ&utm_medium=Search&utm_campaign=UNIREU_LT_CO_FIG_IG_MO_TECNOLOG_X_MAR_X_LWEB_GLOB_CO_AREA-VERT_AO_GOOGLE-BUS_BUS_ESP_X_X&utm_content=CO_CO_FIG_IG_MO_TECNOLOG_X_MAR_BUSQ_Marca-InteligenciaArtificial_TXT_CPM_GOOGLE-BUS_MIX_X_X_X&bi_campaignid=21932033896&bi_adgroupid=173672160231&gad_source=1&gad_campaignid=21932033896&gbraid=0AAAAADvi6Q-7xA-sSp8JVKzRKYft2urPu&gclid=Cj0KCQiA1czLBhDhARIsAIEc7ujpFIdxEgJrahdvw5RdlHZ_MQ1o3mQ3lcYhGvcj1sasSksao66eLz8aAjorEALw_wcB",
    },
    {
      title: "Universidad del Cauca",
      title_url: "https://www.unicauca.edu.co/",
      subtitle: "Bachelors in Electronics and Telecommunications Engineering",
      logo_path: "Unicauca_logo.png",
      alt_name: "SSEC",
      duration: "2016 - 2022",
      descriptions: [
        "⚡ Studied core subjects of software engineering, including Networking, Operating Systems, Databases, Security, Data Structures, Algorithms, and Artificial Intelligence.",
        "⚡ Completed specialized courses on Machine Learning, Data Science, Business Intelligence, Cloud Computing, and Back-end Development.",
        "⚡ Earned an honorable mention for a high-impact research project in Telecommunications and Machine Learning, showcasing innovation and practical application.",
      ],
      website_link:
        "https://drive.google.com/file/d/1gdh4a_zAxBLw1iFQLjgpc2vQoPDseUD6/view?usp=sharing",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "- Certificate - 2026",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/e6321767-5b17-41f1-8a55-7be0e0cc0bab/linked_in_profile",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Continuing Education in Leadership",
      subtitle: "- Certificate - 2025",
      logo_path: "miu_logo.png",
      certificate_link:
        "https://verisignature.miuniversity.edu/csv/?csv=fa4e7043-0bee-4cb6-a232-f87db1f5198d&hash=UUczTHgvSDBmcEMxdW9BbWFzWE03OTZ3SzlINjA5NDRxdmVTcmZJSjZ4dWorb1h4RjJ0OUl0b25jN3E2R1RMTHhIVzUwUTlHc1Jvc2NueVI3QUtXOUE9PQ==",
      alt_name: "MIU City University Miami",
      color_code: "#dbdce0",
    },
    {
      title: "Advanced Artificial Intelligence Bootcamp",
      subtitle: "- Learning Path - 2024",
      logo_path: "utp_logo.png",
      certificate_link:
        "https://www.acreditta.com/credential/e9f783ba-911a-47bc-95ad-92b4d2c97c65?utm_source=linkedin_profile&resource_type=badge&resource=e9f783ba-911a-47bc-95ad-92b4d2c97c65",
      alt_name: "AZ - UTP",
      color_code: "#f5a623",
    },
    {
      title: "Data Protection: Habeas Data",
      subtitle: "- Course - 2024",
      logo_path: "javeriana_logo.png",
      certificate_link: "https://wallet.xertify.co/certificates/CC9B1657A001",
      alt_name: "P.U. Javeriana",
      color_code: "#dbdce0",
    },
    {
      title: "DevOps Bootcamp",
      subtitle: "- Learning Path - 2023",
      logo_path: "platzi_logo.png",
      certificate_link:
        "https://platzi.com/p/davidcamilo0710/ruta/8353-cloud-devops/diploma/detalle/",
      alt_name: "Platzi",
      color_code: "#85f5c5",
    },
    {
      title: "Google Kubernetes Engine",
      subtitle: "- Course - 2023",
      logo_path: "platzi_logo.png",
      certificate_link:
        "https://platzi.com/p/davidcamilo0710/curso/1365-kubernetes-xertica/diploma/detalle/",
      alt_name: "Xertica",
      color_code: "#85f5c5",
    },
    {
      title: "DevOps with GitLab",
      subtitle: "- Course - 2023",
      logo_path: "platzi_logo.png",
      certificate_link:
        "https://platzi.com/p/davidcamilo0710/curso/1526-gitlab/diploma/detalle/",
      alt_name: "Platzi",
      color_code: "#85f5c5",
    },
    {
      title: "Microsoft Azure Data Engineering Associate",
      subtitle: "- Professional Certificate - 2022",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://coursera.org/verify/professional-cert/B32PZKEMTN77",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Microsoft Azure Data Scientist Associate",
      subtitle: "- Professional Certificate - 2022",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://coursera.org/verify/professional-cert/45PZZE98VVYB",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Business Analytics",
      subtitle: "- Course - 2022",
      logo_path: "wharton_logo.png",
      certificate_link:
        "https://coursera.org/verify/specialization/WQ8F5L8Q5246",
      alt_name: "University of Pennsylvania ",
      color_code: "#dbdce0",
    },
    {
      title: "DeepLearning.AI TensorFlow Developer",
      subtitle: "- Professional Certificate - 2022",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/verify/professional-cert/WMERHJ2FY3EA",
      alt_name: "deeplearning.ai",
      color_code: "#fdb4bf",
    },
    {
      title: "Data Science Professional Certificate",
      subtitle: "- Professional Certificate - 2022",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/49616552-7d86-4b84-9b46-a114adcff838",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Data Visualization with Tableau",
      subtitle: "- Course - 2022",
      logo_path: "davies_logo.png",
      certificate_link:
        "https://coursera.org/verify/specialization/F5QADYZBSHKH",
      alt_name: "UC Davis",
      color_code: "#2A73CC",
    },
    {
      title: "Excel Skills for Business",
      subtitle: "- Course - 2022",
      logo_path: "mac_logo.png",
      certificate_link:
        "https://coursera.org/verify/specialization/KYVP3CDUHY3Y",
      alt_name: "Macquarie University",
      color_code: "#789aa3",
    },
    {
      title: "Statistics and R",
      subtitle: "- Course - 2022",
      logo_path: "harvard_logo.png",
      certificate_link:
        "https://courses.edx.org/certificates/2ee363c332774b4b84b611fcb0d2dff2",
      alt_name: "HarvardX",
      color_code: "#8C151599",
    },
    {
      title: "SQL applied in data science",
      subtitle: "- Course - 2022",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://courses.edx.org/certificates/564800b033ed4b429d07b8b0e7715b70",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Scrum Fundamentals Certified",
      subtitle: "- Course - 2022",
      logo_path: "scrum_logo.png",
      certificate_link:
        "https://www.scrumstudy.com/certification/verify?type=SFC&number=902897",
      alt_name: "SCRUMstudy",
      color_code: "#dbdce0",
    },
    {
      title: "M320: Data Modeling",
      subtitle: "- Course - 2022",
      logo_path: "mongo_logo.png",
      certificate_link:
        "https://university.mongodb.com/course_completion/dca1c357-d34d-44a8-92e9-f8021adc0fec",
      alt_name: "MongoDB University",
      color_code: "#66c29b",
    },
    {
      title: "M103: Basic Cluster Administration",
      subtitle: "- Course - 2022",
      logo_path: "mongo_logo.png",
      certificate_link:
        "https://university.mongodb.com/course_completion/5cdd8a7d-24c6-494c-8fca-a977a45dc503",
      alt_name: "MongoDB University",
      color_code: "#66c29b",
    },
    {
      title: "M220P: MongoDB for Python Davelopers",
      subtitle: "- Course - 2022",
      logo_path: "mongo_logo.png",
      certificate_link:
        "https://university.mongodb.com/course_completion/4c715948-8819-4d29-b51f-ad685946b2e7",
      alt_name: "MongoDB University",
      color_code: "#66c29b",
    },
    {
      title: "Building Modern Python Applications on AWS",
      subtitle: "- Course - 2021",
      logo_path: "aws_logo.png",
      certificate_link: "https://coursera.org/verify/AGEM9QKD3CKD",
      alt_name: "AWS",
      color_code: "#dbdce0",
    },
    {
      title: "Machine Learning with Python from Linear Models to Deep Learning",
      subtitle: "- Course - 2020",
      logo_path: "mitx_logo.png",
      certificate_link:
        "https://courses.edx.org/certificates/c60b48a05a87439a80c9c2592e19695c",
      alt_name: "MITx",
      color_code: "#8C151599",
    },
    {
      title: "Google Data Studio",
      subtitle: "- Course - 2023",
      logo_path: "platzi_logo.png",
      certificate_link:
        "https://platzi.com/p/davidcamilo0710/curso/1838-data-studio/diploma/detalle/",
      alt_name: "Platzi",
      color_code: "#85f5c5",
    },
    {
      title: "Infrastructure as Code with Terraform",
      subtitle: "- Course - 2023",
      logo_path: "platzi_logo.png",
      certificate_link:
        "https://platzi.com/p/davidcamilo0710/curso/1712-devops-terraform/diploma/detalle/",
      alt_name: "Platzi",
      color_code: "#85f5c5",
    },
    {
      title: "Docker",
      subtitle: "- Course - 2023",
      logo_path: "platzi_logo.png",
      certificate_link:
        "https://platzi.com/p/davidcamilo0710/curso/2066-docker/diploma/detalle/",
      alt_name: "Platzi",
      color_code: "#85f5c5",
    },
    {
      title: "Git and GitHub",
      subtitle: "- Course - 2023",
      logo_path: "platzi_logo.png",
      certificate_link:
        "https://platzi.com/p/davidcamilo0710/curso/1557-git-github/diploma/detalle/",
      alt_name: "Platzi",
      color_code: "#85f5c5",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Research and Volunteership",
  description:
    "AI Engineer and Data Scientist. I design and ship production systems built on large language models: RAG architectures, autonomous agents, and multi-agent workflows that automate business processes end to end. A background in analytics, business intelligence, and data engineering brings those systems close to how each company actually operates, while MLOps practices on AWS and Azure keep them running in production.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Data Analyst",
          company: "Servagro LTDA",
          company_url: "https://seguridadsvg.com/",
          logo_path: "Servagro_logo.png",
          duration: "Feb 2023 - Present",
          location: "Popayán, Cauca, Colombia",
          description:
            "Design and lead the implementation of a proprietary platform that brings together per-area and per-process automations, RAG agents over internal documentation, decision-making agents, and a customer service and sales bot on the WhatsApp API, powering company-wide operations by saving hours of manual work and reducing errors. Led R&D projects across cybersecurity, workflow automation (n8n), and IT, forecasting models for key metrics and inventory, and custom developments on the Odoo ERP, improving company productivity and efficiency. Used SQL, Big Query, and Looker Studio to create dashboards, reports, and tools for all company departments, enabling effective KPI tracking and transforming Servagro into a data-driven organization.",
          color: "#4285F4",
        },
        {
          title: "Data Scientist",
          company: "Skalo Tek",
          company_url: "https://www.skalotek.com/",
          logo_path: "skalotek_logo.png",
          duration: "Apr 2024 - Oct 2025",
          location: "Bogotá D.C., Colombia",
          description:
            "Led a multidisciplinary team of analysts and engineers on data and artificial intelligence projects for large corporations across the legal, insurance, financial, construction, manufacturing, and education sectors, spanning cloud architecture, process automation, advanced analytics, dashboards, and predictive modeling. Developed generative AI solutions for corporate clients: RAG assistants that deliver precise information right when it is needed (case law for lawyers in hearings, policy terms for insurance sales teams, building codes and design parameters for a construction firm), plus conversational agents and LLM-based automations. Built predictive models for ICFES scores, judicial rulings, prices, and sales, plus customer segmentations that underpinned retention, risk management, and conversion strategies.",
          color: "#4285F4",
        },
        {
          title: "Data Analyst",
          company: "IPS Cambio Semillero de Vida SAS",
          company_url: "https://ipscambio.com",
          logo_path: "ipscambio_logo.png",
          duration: "Feb 2022 - Oct 2022",
          location: "Popayán, Cauca, Colombia",
          description:
            "Used SQL and Google Cloud Platform data services (BigQuery, Looker Studio) to visualize and analyze accounting, operational, and customer data, providing key indicators, metrics, and strategic recommendations that optimized the company’s processes and profits. Coordinated and executed the migration and centralization of corporate data into SAP, covering data extraction, cleaning, and loading, and contributing to the system's configuration and launch. Also designed and built the website through which the company presented its commercial services.",
          color: "#4285F4",
        },
        {
          title: "Data Scientist",
          company: "Ingetel Ingeniería en Telecomunicaciones SAS",
          company_url: "https://www.linkedin.com/company/ingetel/",
          logo_path: "ingetel_logo.png",
          duration: "Jul 2020 - Nov 2021",
          location: "Cali, Valle del Cauca, Colombia",
          description:
            "Developed a supervised learning model to predict mobile antenna installation costs by department, exposed it as a REST API using Amazon SageMaker, and integrated it with the company's software. Analyzed and visualized accounting data with Python and Power BI, and identified the factors driving mobile antenna installation costs across Colombian departments. Designed and developed various back-end modules for the company's website using Spring Boot and AWS.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Research",
      experiences: [
        {
          title: "Machine Learning Developer (Intern)",
          company: "IEEE ComSoc UniCauca",
          company_url:
            "http://portal.unicauca.edu.co/portaleningles/news/comsocauca-research-seedbed-consolidated-dissemination-advances-telecommunications",
          logo_path: "comsoc_logo.png",
          duration: "Oct 2021 - Jul 2022",
          location: "Popayán, Cauca, Colombia",
          description:
            "Developed a Python, P4, and Machine Learning-based application to classify and route Internet traffic in real time on the data plane of a telecommunications network, significantly improving its performance. Documented and shared the knowledge generated on P4, telecommunications, and artificial intelligence, work that led to an indexed publication in the journal Computer Networks (Elsevier).",
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
};

const projects = {
  data: [
    {
      id: "0",
      name: "World Cup 2026 Prediction",
      url: "https://github.com/davidcamilo0710/world_cup_2026",
      description:
        "Prediction of the 2026 World Cup from historical international matches, team statistics, and squad potential, using feature engineering and machine learning models.",
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
          name: "Scikit-Learn",
          iconifyClass: "devicon:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
      ],
    },
    {
      id: "1",
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
          iconifyClass: "devicon:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
      ],
    },
    {
      id: "2",
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
          iconifyClass: "devicon:scikitlearn",
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
      id: "3",
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
      id: "4",
      name: "Deforest Amazonia",
      url: "https://github.com/davidcamilo0710/deforest_amazonia",
      description:
        "Analysis of deforestation in the Jamanxim National Forest (2000-2019) through a computer vision pipeline that segments and quantifies affected areas from satellite imagery.",
      languages: [
        { name: "Jupyter Notebook", iconifyClass: "logos-jupyter" },
        { name: "OpenCV", iconifyClass: "devicon:opencv" },
        { name: "Python", iconifyClass: "logos-python" },
      ],
    },
    {
      id: "5",
      name: "Contact Probability Predictor",
      url: "https://github.com/davidcamilo0710/contact_predictor",
      description:
        "A comparative study of 25 ML models to predict effective contact in debt collection calls. The optimized model reduces the calls needed to reach 80% of customers by 56.1% compared to traditional strategies.",
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "Jupyter Notebook", iconifyClass: "logos-jupyter" },
        { name: "Scikit-learn", iconifyClass: "devicon:scikitlearn" },
        { name: "Pandas", iconifyClass: "logos-pandas" },
      ],
    },
    {
      id: "6",
      name: "Low Light Enhancer",
      url: "https://github.com/davidcamilo0710/low_light_enhancer",
      description:
        "A comparison of classical image processing vs. the Zero-DCE++ deep learning model for unsupervised low-light image enhancement using PyTorch.",
      languages: [
        { name: "Jupyter Notebook", iconifyClass: "logos-jupyter" },
        { name: "PyTorch", iconifyClass: "logos-pytorch" },
        { name: "Python", iconifyClass: "logos-python" },
      ],
    },
    {
      id: "7",
      name: "Text Classification Comparison",
      url: "https://github.com/davidcamilo0710/text_classification_comparison",
      description:
        "A comparison of a classic neural network and a Transformer-based model for text classification on the 20 Newsgroups dataset using TensorFlow/Keras.",
      languages: [
        { name: "Jupyter Notebook", iconifyClass: "logos-jupyter" },
        { name: "TensorFlow", iconifyClass: "logos-tensorflow" },
        { name: "Keras", iconifyClass: "devicon:keras" },
        { name: "Python", iconifyClass: "logos-python" },
      ],
    },
    {
      id: "8",
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
          iconifyClass: "devicon:scikitlearn",
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
          iconifyClass: "skill-icons:selenium",
        },
      ],
    },
    {
      id: "9",
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
      id: "10",
      name: "Google Playstore Apps",
      url: "https://public.tableau.com/app/profile/david.camilo.mu.oz.garcia/viz/GooglePlaystoreStoryboardingandStorytelling/GooglePlaystoreApps",
      description:
        "Storyboarding and Storytelling in TableaU that provides intelligent recommendations for developing successful apps.",
      languages: [
        {
          name: "TableaU",
          iconifyClass: "logos:tableau-icon",
        },
      ],
    },
    {
      id: "11",
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
      id: "12",
      name: "Portfolio Website",
      url: "https://github.com/davidcamilo0710/Portfolio",
      description:
        "The complete portfolio website hosted using github pages (gh-pages). You are stalking it right now 😉...",
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
      id: "13",
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
      id: "14",
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
          iconifyClass: "devicon:scikitlearn",
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
