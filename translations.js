/**
 * Elisey Yordanov — Personal Portfolio
 * Translation Data: English & Bulgarian
 */

/* ── Public speaking events (shared, language-independent data) ── */
const TALKS = [
    {
        conference: "BEST 2025",
        organizer: "Shumen Institute of Technology",
        year: "2025",
        color: "pink",
        conferenceUrl: "https://best.shumen-it.com/",
        talk: "AI in Software Development",
        talkUrl: "https://www.youtube.com/watch?v=ytLgXsJgrx0",
        presentationUrl: "https://docs.google.com/presentation/d/1BKYDSYQZYDgXTb3oK0Olc3fNfKDjaeIN0P_T7RoJtYw/edit?usp=sharing",
        lightningTalkUrl: null
    },
    {
        conference: "Ruse Conf 2025",
        organizer: "IT Tour",
        year: "2025",
        color: "purple",
        conferenceUrl: "https://ruseconf.com/#schedule",
        talk: "Vector Searches & RAG",
        talkUrl: "https://www.youtube.com/live/YFcMXBzhrjA?si=ye3RwXjoxGm7GRk8&t=9160",
        presentationUrl: "https://docs.google.com/presentation/d/10HZfvUX7zK_puIvFjXTG4zf2y3r2Axy_dU3Eq-gvm4U/edit?usp=sharing",
        lightningTalkUrl: "https://www.youtube.com/live/YFcMXBzhrjA?si=oSCMAI_a8gBlMVnw&t=25086"
    },
    {
        conference: "Plovdiv Conf 2024",
        organizer: "IT Tour",
        year: "2024",
        color: "indigo",
        conferenceUrl: "https://plovdivconf.com/archive/2024#schedule",
        talk: "Generative AI Agents",
        talkUrl: "https://www.youtube.com/live/UgPT6Sd4fEg?si=gqBMAiRvTBVrxaii&t=23766",
        presentationUrl: "https://docs.google.com/presentation/d/1WilA3_45kHjhxzE8o_S2e61PS1yxLd42lfm9itggc1g/edit?usp=sharing",
        lightningTalkUrl: null
    },
    {
        conference: "Ruse Conf 2024",
        organizer: "IT Tour",
        year: "2024",
        color: "amber",
        conferenceUrl: "",
        talk: null,
        talkUrl: null,
        presentationUrl: null,
        lightningTalkUrl: "https://www.youtube.com/live/Tmnv8gVyh0M?si=EkWDDbLnQkeqMnKc&t=24894"
    }
];

const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            timeline: "Timeline",
            projects: "Projects",
            certs: "Certs",
            talks: "Talks",
            contact: "Contact",
            cv: "CV"
        },
        hero: {
            greeting: "Hi, I'm",
            name: "Elisey Yordanov",
            typed: ["Data Engineer", "Software Developer", "Cloud Architect", "AI Enthusiast"],
            subtitle: "Building intelligent data systems, AI solutions, and cloud infrastructure.",
            cta1: "View My Work",
            cta2: "Get In Touch",
            ctaCV: "View CV",
            stat1Value: "5+",
            stat1Label: "Years Experience",
            stat2Value: "20+",
            stat2Label: "Key Projects",
            stat3Value: "3",
            stat3Label: "Professional Certs"
        },
        about: {
            sectionTitle: "About Me",
            sectionSubtitle: "A bit about who I am and what drives me",
            p1: "I'm a 23-year-old Data Engineer and Software Developer from Ruse, Bulgaria. At 17, I started my IT career at Econt Express — Bulgaria's largest courier company — where I progressed from intern to Information Security Specialist in just two years.",
            p2: "In 2023, I joined IT Partner Ltd — the company that built and maintains Econt's entire technology ecosystem. There I work on some of Bulgaria's most complex data engineering, AI/ML, and infrastructure projects at scale.",
            p3: "I'm passionate about building systems that solve real business problems. I hold three Google Cloud Professional certifications and I'm always looking for the next challenge.",
            educationTitle: "Education & Training",
            edu: [
                {
                    period: "2019 – 2021",
                    degree: "IT Career — National Program",
                    major: "Backend Developer Pathway · SoftUni-based curriculum",
                    note: "Diploma with Honors (5.50/6.00) · Awarded by the Minister of Education as top graduate of the cohort"
                },
                {
                    period: "2016 – 2021",
                    degree: "SU Hristo Botev, Ruse",
                    major: "Technical Track — Information Technology",
                    note: "John Atanasov Award — best technical student at graduation (3rd overall by GPA)"
                }
            ],
            awardsTitle: "Awards & Recognition",
            awards: [
                "John Atanasov Award — Best Technical Student (High School, 2021)",
                "Ministry of Education Award — Top Graduate, IT Career National Program (2021)",
                "3× Google Cloud Professional Certified (+ 2 Advanced Skill Badges)"
            ]
        },
        skills: {
            sectionTitle: "Skills & Tech Stack",
            sectionSubtitle: "Technologies I work with on a daily basis",
            categories: [
                {
                    name: "Data Engineering",
                    icon: "fas fa-database",
                    color: "purple",
                    items: ["BigQuery", "MySQL", "MSSQL", "Cloud SQL", "PostgreSQL", "SSIS", "SSRS", "SSAS", "ETL / CDC", "PowerBI", "Data Warehousing", "Looker"]
                },
                {
                    name: "Cloud & Infrastructure",
                    icon: "fas fa-cloud",
                    color: "indigo",
                    items: ["Google Cloud Platform", "Cloud Build", "Cloud Run", "Cloud Storage (GCS)", "Pub/Sub", "Cloud Monitoring", "Kubernetes", "VMware", "Docker", "CI/CD", "Terraform", "Linux", "Windows Server"]
                },
                {
                    name: "AI & Machine Learning",
                    icon: "fas fa-brain",
                    color: "pink",
                    items: ["PyTorch", "OpenCV", "CUDA", "YOLOv8", "Deepstream", "NVIDIA GPU", "Vertex AI", "LLM / NLP", "Computer Vision", "Generative AI", "RAG", "ML Training Pipelines"]
                },
                {
                    name: "Programming",
                    icon: "fas fa-code",
                    color: "cyan",
                    items: ["Python", "PHP", "JavaScript", "C#", "Java", "HTML / CSS", "SQL", "Bash / Shell"]
                },
                {
                    name: "Security & Monitoring",
                    icon: "fas fa-shield-alt",
                    color: "amber",
                    items: ["F5 WAF", "AppDynamics", "Splunk", "SIEM", "Penetration Testing", "DKIM / SPF / DMARC", "DDoS Mitigation", "Blacklist / Whitelist"]
                },
                {
                    name: "DevOps & Tools",
                    icon: "fas fa-tools",
                    color: "green",
                    items: ["Git", "GitHub", "CI/CD Pipelines", "NGINX", "Firewall Management", "Interbase", "JIRA"]
                }
            ]
        },
        timeline: {
            sectionTitle: "Career Timeline",
            sectionSubtitle: "My professional journey from intern to engineer",
            items: [
                {
                    period: "Feb 2023 – Present",
                    title: "Software Developer",
                    company: "IT Partner Ltd",
                    location: "Shumen / Remote, Bulgaria",
                    current: true,
                    description: "IT Partner built and maintains the entire Econt IT ecosystem — they are the real engineering core. Here I work on high-priority data engineering, AI/ML, and infrastructure projects. After the IT team migration I also helped write internal standards and lead data projects.",
                    highlights: [
                        "Real-Time BigQuery DWH with CDC from all Econt databases",
                        "VisionAI — in-house YOLOv8 platform, PTZ cameras, Deepstream on NVIDIA",
                        "Talk2SQL — natural language to BigQuery chatbot",
                        "Capacity Analytics: Lines, Zones & Offices (load monitoring)",
                        "AI agents: invoice analysis, logistics profitability, business automation",
                        "PHP ETL framework migration; internal IT standards authorship"
                    ],
                    tags: ["BigQuery", "Python", "YOLOv8", "GCP", "CDC", "Kubernetes", "AI/ML", "PHP"]
                },
                {
                    period: "Jul 2022 – Feb 2023",
                    title: "Information Security Specialist",
                    company: "Econt Express",
                    location: "Ruse, Bulgaria",
                    current: false,
                    description: "Promoted to Information Security. Actively monitored for security breaches, conducted internal penetration tests, and proactively reported vulnerabilities to IT Partner for remediation.",
                    highlights: [
                        "Co-designed & specified requirements for the Network Management Center (DDoS mitigation, internet connectivity management)",
                        "Co-designed architecture and defined requirements for a comprehensive email security system (DKIM, SPF, PTR, blacklists, anti-phishing)",
                        "Internal penetration testing & vulnerability disclosure",
                        "Security incident reports and post-mortems",
                        "Continued AppDynamics & F5 WAF product ownership"
                    ],
                    tags: ["F5 WAF", "AppDynamics", "Splunk", "SIEM", "Penetration Testing", "DDoS"]
                },
                {
                    period: "Jan 2022 – Jul 2022",
                    title: "Business Continuity Specialist",
                    company: "Econt Express",
                    location: "Ruse, Bulgaria",
                    current: false,
                    description: "Moved to the Business Continuity team as key technical expert. Owned two enterprise products and served as a technical bridge during critical incidents. Also provided emergency support to the IT team when needed.",
                    highlights: [
                        "Product Owner of AppDynamics (APM) & F5 WAF",
                        "System failure root-cause analysis via AppDynamics",
                        "Emergency technical support to the IT team"
                    ],
                    tags: ["AppDynamics", "F5 WAF", "Incident Management", "Reporting"]
                },
                {
                    period: "Jul 2020 – Jan 2022",
                    title: "Junior Data Engineer",
                    company: "Econt Express",
                    location: "Ruse, Bulgaria",
                    current: false,
                    description: "Started as an IT intern at age 17 in Bulgaria's largest courier company. Rapidly developed into a full data engineer delivering critical reports and ETL systems for management.",
                    highlights: [
                        "Built ETL pipelines extracting data from Core & secondary systems into the DWH",
                        "Created management dashboards and automated reports",
                        "Administered all Econt cloud environments and GitHub organization",
                        "Participated in F5 WAF and AppDynamics projects from day one"
                    ],
                    tags: ["MySQL", "MSSQL", "SSIS", "SSRS", "PowerBI", "Cloud", "GitHub"]
                }
            ]
        },
        projects: {
            sectionTitle: "Featured Projects",
            sectionSubtitle: "Highlights from my most impactful work",
            items: [
                {
                    title: "VisionAI — Computer Vision Platform",
                    description: "Complete end-to-end platform for real-time truck monitoring at logistics hubs. Built an in-house ML training platform (YOLOv8 + dataset management), automated PTZ camera control, hybrid local+cloud LPR, and Smart ID Tracking. Deployed on NVIDIA hardware via Deepstream.",
                    tags: ["YOLOv8", "Deepstream", "NVIDIA", "Python", "GCP", "PTZ Cameras"],
                    icon: "fas fa-eye",
                    gradient: "grad-purple"
                },
                {
                    title: "Real-Time DWH — BigQuery + CDC",
                    description: "Petabyte-scale data warehouse on Google BigQuery with Change Data Capture streaming every database mutation in real-time. Full isolation from operational systems, configurable staleness, automated reporting. One of Econt's most critical analytics foundations.",
                    tags: ["BigQuery", "CDC", "Cloud SQL", "GCP", "SQL", "Data Architecture"],
                    icon: "fas fa-database",
                    gradient: "grad-indigo"
                },
                {
                    title: "Talk2SQL — Natural Language Analytics",
                    description: "AI chatbot running on top of the entire enterprise DWH in real-time. Converts natural language questions into optimized BigQuery SQL with contextual multi-turn dialogue. Dramatically reduces the need for dedicated reporting staff.",
                    tags: ["LLM", "BigQuery", "NLP", "Python", "GCP", "Vertex AI"],
                    icon: "fas fa-comments",
                    gradient: "grad-pink"
                },
                {
                    title: "Logistics Profitability System",
                    description: "Built an analytics system calculating the profitability of individual segments across Econt's logistics network — which transport lines, zones, and offices generate positive returns. Extracts and transforms financial and operational data end-to-end, delivering management-level profitability reports directly to senior leadership.",
                    tags: ["BigQuery", "Python", "ETL", "SQL", "PowerBI", "Data Engineering"],
                    icon: "fas fa-chart-line",
                    gradient: "grad-green"
                },
                {
                    title: "Capacity Analytics Suite",
                    description: "Three high-priority analytics systems: Capacity Lines (transport vehicle load), Capacity Zones (courier load), and Capacity Offices (office throughput). Real-time operational intelligence for Econt's entire logistics network.",
                    tags: ["BigQuery", "Python", "ETL", "PowerBI", "Data Engineering"],
                    icon: "fas fa-chart-bar",
                    gradient: "grad-amber"
                },
                {
                    title: "AI Business Integrations",
                    description: "Series of AI projects: automated invoice analysis & summarization, logistics profitability calculation, and AI agents for business operations. Integrating LLMs and Vertex AI directly into mission-critical workflows.",
                    tags: ["AI Agents", "Python", "GCP", "Vertex AI", "LLM", "Automation"],
                    icon: "fas fa-robot",
                    gradient: "grad-green"
                }
            ]
        },
        certs: {
            sectionTitle: "Certifications",
            sectionSubtitle: "Google Cloud Professional certifications & skill badges",
            clickHint: "Click to verify on Credly",
            badgeLabel: "Advanced Skill Badge",
            credlyProfile: "View all credentials on Credly",
            credlyUrl: "https://www.credly.com/users/elisey-yordanov/badges#credly",
            items: [
                {
                    name: "Professional Data Engineer",
                    image: "images/professional-data-engineer-certification.png",
                    link: "https://www.credly.com/badges/b7700dd5-9a0b-45b9-b768-ff3de6742d8f/public_url",
                    type: "professional"
                },
                {
                    name: "Professional Machine Learning Engineer",
                    image: "images/professional-machine-learning-engineer-certificatio.png",
                    link: "https://www.credly.com/badges/0f6e8fbd-c744-4722-aec7-1845e0884a45/public_url",
                    type: "professional"
                },
                {
                    name: "Professional Cloud Developer",
                    image: "images/professional-cloud-developer-certification.png",
                    link: "https://www.credly.com/badges/a2590a10-3a72-4b32-a5f7-131abd3aa8bc/public_url",
                    type: "professional"
                },
                {
                    name: "Build & Deploy Generative AI",
                    image: "images/build-and-deploy-a-generative-ai-solution-using-a-r.png",
                    link: "https://www.credly.com/badges/8572a53e-c75d-4762-987f-10e1146c54e0/public_url",
                    type: "badge"
                },
                {
                    name: "Enterprise Search & Conversation AI",
                    image: "images/develop-advanced-enterprise-search-and-conversation.1.png",
                    link: "https://www.credly.com/badges/239ba763-40c4-4713-9a35-e1727d964757/public_url",
                    type: "badge"
                }
            ]
        },
        publicPresence: {
            sectionTitle: "Public Presence",
            sectionSubtitle: "Conferences, talks & presentations",
            watchTalk: "Watch",
            viewSlides: "Slides",
            lightningTalk: "Lightning",
            events: TALKS
        },
        contact: {
            sectionTitle: "Get In Touch",
            sectionSubtitle: "Open to new opportunities and collaborations",
            description: "Whether you have a project idea, want to talk data engineering or AI, or simply want to connect — feel free to reach out. I'm always happy to discuss technology.",
            emailLabel: "Email me",
            linkedinLabel: "Connect on LinkedIn",
            copySuccess: "Copied!",
            orText: "or find me on"
        },
        footer: {
            built: "Built with",
            by: "by Elisey Yordanov",
            rights: "All rights reserved."
        }
    },

    bg: {
        nav: {
            home: "Начало",
            about: "За мен",
            skills: "Умения",
            timeline: "Кариера",
            projects: "Проекти",
            certs: "Сертификати",
            talks: "Лекции",
            contact: "Контакти",
            cv: "CV"
        },
        hero: {
            greeting: "Здравейте, аз съм",
            name: "Елисей Йорданов",
            typed: ["Data Engineer", "Разработчик", "Cloud Архитект", "AI Ентусиаст"],
            subtitle: "Изграждам интелигентни системи за данни, AI решения и облачна инфраструктура.",
            cta1: "Вижте работата ми",
            cta2: "Свържете се",
            ctaCV: "Вижте CV",
            stat1Value: "5+",
            stat1Label: "Години опит",
            stat2Value: "20+",
            stat2Label: "Ключови проекта",
            stat3Value: "3",
            stat3Label: "Professional сертификата"
        },
        about: {
            sectionTitle: "За мен",
            sectionSubtitle: "Малко за това кой съм и какво ме вдъхновява",
            p1: "Аз съм 23-годишен Data Engineer и Разработчик от Русе, България. На 17 години започнах IT кариерата си в Еконт Експрес — най-голямата куриерска компания в България — където за две години се издигнах от стажант до Специалист информационна сигурност.",
            p2: "През 2023 се присъединих към Ай Ти Партньор ЕООД — компанията изградила и поддържаща цялата технологична екосистема на Еконт. Там работя по едни от най-сложните data engineering, AI/ML и инфраструктурни проекти в България.",
            p3: "Страстен съм към изграждането на системи, решаващи реални бизнес проблеми. Притежавам три Google Cloud Professional сертификата и непрестанно търся следващото предизвикателство.",
            educationTitle: "Образование",
            edu: [
                {
                    period: "2019 – 2021",
                    degree: "ИТ Кариера — Национална програма",
                    major: "Пътека Backend разработчик · Учебна програма базирана на SoftUni",
                    note: "Диплома с отличен (5.50/6.00) · Награден от министъра на образованието като отличник на випуска"
                },
                {
                    period: "2016 – 2021",
                    degree: "СУ Христо Ботев, Русе",
                    major: "Технически профил — Информационни технологии",
                    note: "Награда Джон Атанасов — най-добър технически ученик при завършване (3-ти по успех)"
                }
            ],
            awardsTitle: "Награди и отличия",
            awards: [
                "Награда Джон Атанасов — Най-добър технически ученик (2021)",
                "Награда от МОН — Отличник на програма ИТ Кариера (2021)",
                "3× Google Cloud Professional сертифициран (+ 2 Advanced Skill Badge)"
            ]
        },
        skills: {
            sectionTitle: "Умения и технологии",
            sectionSubtitle: "Технологии, с които работя всекидневно",
            categories: [
                {
                    name: "Data Engineering",
                    icon: "fas fa-database",
                    color: "purple",
                    items: ["BigQuery", "MySQL", "MSSQL", "Cloud SQL", "PostgreSQL", "SSIS", "SSRS", "SSAS", "ETL / CDC", "PowerBI", "Data Warehousing", "Looker"]
                },
                {
                    name: "Cloud & Инфраструктура",
                    icon: "fas fa-cloud",
                    color: "indigo",
                    items: ["Google Cloud Platform", "Cloud Build", "Cloud Run", "Cloud Storage (GCS)", "Pub/Sub", "Cloud Monitoring", "Kubernetes", "VMware", "Docker", "CI/CD", "Terraform", "Linux", "Windows Server"]
                },
                {
                    name: "AI & Machine Learning",
                    icon: "fas fa-brain",
                    color: "pink",
                    items: ["PyTorch", "OpenCV", "CUDA", "YOLOv8", "Deepstream", "NVIDIA GPU", "Vertex AI", "LLM / NLP", "Computer Vision", "Generative AI", "RAG", "ML Training Pipelines"]
                },
                {
                    name: "Програмиране",
                    icon: "fas fa-code",
                    color: "cyan",
                    items: ["Python", "PHP", "JavaScript", "C#", "Java", "HTML / CSS", "SQL", "Bash / Shell"]
                },
                {
                    name: "Сигурност & Мониторинг",
                    icon: "fas fa-shield-alt",
                    color: "amber",
                    items: ["F5 WAF", "AppDynamics", "Splunk", "SIEM", "Penetration Testing", "DKIM / SPF / DMARC", "DDoS митигиране", "Blacklist / Whitelist"]
                },
                {
                    name: "DevOps & Инструменти",
                    icon: "fas fa-tools",
                    color: "green",
                    items: ["Git", "GitHub", "CI/CD", "NGINX", "Firewall", "Interbase", "JIRA"]
                }
            ]
        },
        timeline: {
            sectionTitle: "Кариера",
            sectionSubtitle: "Моят професионален път от стажант до инженер",
            items: [
                {
                    period: "Февр. 2023 – Настояще",
                    title: "Разработчик на Софтуер",
                    company: "Ай Ти Партньор ЕООД",
                    location: "Шумен / Remote, България",
                    current: true,
                    description: "Ай Ти Партньор изгради и поддържа цялата ИТ екосистема на Еконт — те са истинското инженерно ядро. Работя по приоритетни data engineering, AI/ML и инфраструктурни проекти. След миграцията на ИТ екипа помогнах и с написването на вътрешни стандарти.",
                    highlights: [
                        "Real-Time BigQuery DWH с CDC от всички бази данни на Еконт",
                        "VisionAI — In-House YOLOv8 платформа, PTZ камери, Deepstream на NVIDIA",
                        "Talk2SQL — естествен език към BigQuery чатбот",
                        "Капацитет: Линии, Зони & Офиси (мониторинг на натоварването)",
                        "AI агенти: анализ на фактури, рентабилност, автоматизация",
                        "Миграция към PHP ETL; написване на вътрешни ИТ стандарти"
                    ],
                    tags: ["BigQuery", "Python", "YOLOv8", "GCP", "CDC", "Kubernetes", "AI/ML", "PHP"]
                },
                {
                    period: "Юли 2022 – Февр. 2023",
                    title: "Специалист Информационна Сигурност",
                    company: "Еконт Експрес",
                    location: "Русе, България",
                    current: false,
                    description: "Повишен в Информационна сигурност. Активно следях за пробиви, провеждах вътрешни penetration тестове и проактивно подавах уязвимости на Ай Ти Партньор за отстраняване.",
                    highlights: [
                        "Съавтор на архитектурата и изискванията за Network Management Center (DDoS митигиране, управление на интернет свързаности)",
                        "Съавтор на архитектурата и изискванията за системата за имейл сигурност (DKIM, SPF, PTR, черни списъци, anti-phishing)",
                        "Вътрешни penetration тестове и разкриване на уязвимости",
                        "Доклади след инциденти свързани със сигурността",
                        "Продължих продуктовото управление на AppDynamics & F5 WAF"
                    ],
                    tags: ["F5 WAF", "AppDynamics", "Splunk", "SIEM", "Penetration Testing", "DDoS"]
                },
                {
                    period: "Ян. 2022 – Юли 2022",
                    title: "Специалист Непрекъснатост на Бизнеса",
                    company: "Еконт Експрес",
                    location: "Русе, България",
                    current: false,
                    description: "Преминах към екипа за непрекъснатост на бизнеса като ключов технически експерт. Управлявах два корпоративни продукта и служих като технически мост при критични инциденти. Предоставях и спешна техническа поддръжка на ИТ екипа при необходимост.",
                    highlights: [
                        "Продуктов собственик на AppDynamics (APM) & F5 WAF",
                        "Анализ на причините за откази на системи чрез AppDynamics",
                        "Спешна техническа поддръжка на ИТ екипа"
                    ],
                    tags: ["AppDynamics", "F5 WAF", "Управление на инциденти", "Reporting"]
                },
                {
                    period: "Юли 2020 – Ян. 2022",
                    title: "Junior Data Engineer",
                    company: "Еконт Експрес",
                    location: "Русе, България",
                    current: false,
                    description: "Започнах като ИТ стажант на 17 години в най-голямата куриерска фирма в България. Бързо се развих в пълноценен data engineer, доставяйки критични репорти и ETL системи за управлението.",
                    highlights: [
                        "Изграждах ETL процеси от Core и вторични системи към DWH",
                        "Управленски табла и автоматизирани справки",
                        "Администриране на всички облачни среди и GitHub организацията",
                        "Участие в проекти F5 WAF и AppDynamics от началото"
                    ],
                    tags: ["MySQL", "MSSQL", "SSIS", "SSRS", "PowerBI", "Cloud", "GitHub"]
                }
            ]
        },
        projects: {
            sectionTitle: "Ключови Проекти",
            sectionSubtitle: "Избрани от най-значимата ми работа",
            items: [
                {
                    title: "VisionAI — Платформа за Computer Vision",
                    description: "Цялостна end-to-end платформа за мониторинг на камиони в логистични хъбове в реално време. Изградих In-House платформа за трениране на YOLOv8 модели с управление на датасети, автоматизация на PTZ камери, хибриден локален+cloud LPR и Smart ID Tracking. Изпълнява се на NVIDIA хардуер чрез Deepstream.",
                    tags: ["YOLOv8", "Deepstream", "NVIDIA", "Python", "GCP", "PTZ камери"],
                    icon: "fas fa-eye",
                    gradient: "grad-purple"
                },
                {
                    title: "Real-Time DWH — BigQuery + CDC",
                    description: "Data warehouse на петабайтов мащаб в Google BigQuery с Change Data Capture, предаващ всяка промяна в базата данни в реално време. Пълна изолация от оперативните системи, конфигурируем staleness, автоматизиран репортинг. Едната от най-критичните аналитични основи на Еконт.",
                    tags: ["BigQuery", "CDC", "Cloud SQL", "GCP", "SQL", "Архитектура"],
                    icon: "fas fa-database",
                    gradient: "grad-indigo"
                },
                {
                    title: "Talk2SQL — Анализи с естествен език",
                    description: "AI чатбот, работещ върху целия DWH в реално време. Преобразува въпроси на естествен език в оптимизирани BigQuery SQL заявки с многоходов диалог. Значително намалява нуждата от специализиран персонал за справки.",
                    tags: ["LLM", "BigQuery", "NLP", "Python", "GCP", "Vertex AI"],
                    icon: "fas fa-comments",
                    gradient: "grad-pink"
                },
                {
                    title: "Система за рентабилност на логистиката",
                    description: "Аналитична система изчисляваща рентабилността на отделните сегменти в логистичната мрежа на Еконт — кои транспортни линии, зони и офиси генерират положителна доходност. Извлича и трансформира финансови и оперативни данни от край до край, предоставяйки management-ниво репорти директно на висшето ръководство.",
                    tags: ["BigQuery", "Python", "ETL", "SQL", "PowerBI", "Data Engineering"],
                    icon: "fas fa-chart-line",
                    gradient: "grad-green"
                },
                {
                    title: "Аналитичен пакет Капацитет",
                    description: "Три приоритетни аналитични системи: Капацитет Линии (натоварване на транспортни средства), Капацитет Зони (натоварване на куриери) и Капацитет Офиси (пропускателна способност). Оперативна интелигентност в реално време за цялата логистична мрежа на Еконт.",
                    tags: ["BigQuery", "Python", "ETL", "PowerBI", "Data Engineering"],
                    icon: "fas fa-chart-bar",
                    gradient: "grad-amber"
                },
                {
                    title: "AI Интеграции за Бизнеса",
                    description: "Серия AI проекти: автоматизиран анализ и сумаризиране на фактури, изчисляване на рентабилност на логистиката и AI агенти за бизнес операции. Интеграция на LLM и Vertex AI директно в мисионно-критични работни процеси.",
                    tags: ["AI агенти", "Python", "GCP", "Vertex AI", "LLM", "Автоматизация"],
                    icon: "fas fa-robot",
                    gradient: "grad-green"
                }
            ]
        },
        certs: {
            sectionTitle: "Сертификати",
            sectionSubtitle: "Google Cloud Professional сертификати и skill badges",
            clickHint: "Кликнете за проверка в Credly",
            badgeLabel: "Advanced Skill Badge",
            credlyProfile: "Всички credential-и в Credly",
            credlyUrl: "https://www.credly.com/users/elisey-yordanov/badges#credly",
            items: [
                {
                    name: "Professional Data Engineer",
                    image: "images/professional-data-engineer-certification.png",
                    link: "https://www.credly.com/badges/b7700dd5-9a0b-45b9-b768-ff3de6742d8f/public_url",
                    type: "professional"
                },
                {
                    name: "Professional Machine Learning Engineer",
                    image: "images/professional-machine-learning-engineer-certificatio.png",
                    link: "https://www.credly.com/badges/0f6e8fbd-c744-4722-aec7-1845e0884a45/public_url",
                    type: "professional"
                },
                {
                    name: "Professional Cloud Developer",
                    image: "images/professional-cloud-developer-certification.png",
                    link: "https://www.credly.com/badges/a2590a10-3a72-4b32-a5f7-131abd3aa8bc/public_url",
                    type: "professional"
                },
                {
                    name: "Build & Deploy Generative AI",
                    image: "images/build-and-deploy-a-generative-ai-solution-using-a-r.png",
                    link: "https://www.credly.com/badges/8572a53e-c75d-4762-987f-10e1146c54e0/public_url",
                    type: "badge"
                },
                {
                    name: "Enterprise Search & Conversation AI",
                    image: "images/develop-advanced-enterprise-search-and-conversation.1.png",
                    link: "https://www.credly.com/badges/239ba763-40c4-4713-9a35-e1727d964757/public_url",
                    type: "badge"
                }
            ]
        },
        publicPresence: {
            sectionTitle: "Публична активност",
            sectionSubtitle: "Конференции, лекции и презентации",
            watchTalk: "Гледай",
            viewSlides: "Слайдове",
            lightningTalk: "Lightning",
            events: TALKS
        },
        contact: {
            sectionTitle: "Свържете се с мен",
            sectionSubtitle: "Отворен за нови възможности и сътрудничество",
            description: "Независимо дали имате идея за проект, искате да обсъдим data engineering или AI, или просто да се свържем — не се колебайте. Винаги съм готов да говоря за технологии.",
            emailLabel: "Пишете ми",
            linkedinLabel: "LinkedIn профил",
            copySuccess: "Копирано!",
            orText: "или ме намерете в"
        },
        footer: {
            built: "Направено с",
            by: "от Елисей Йорданов",
            rights: "Всички права запазени."
        }
    }
};
