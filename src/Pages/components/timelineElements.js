import mutual_logo from "../../assets/mutualofomaha_logo.svg"
import bny_logo from "../../assets/bny_logo.svg"
import bostonhacks_logo from "../../assets/bostonhacks_logo.svg"
import mgb_logo from "../../assets/MGB_logo.png"

let timelineElements = [
    {
        id: 1,
        title: "Full-Stack Software Engineer",
        company: "BNY Mellon",
        date: "August 2025 - Present",
        bullets: [
            "Engineered Java/Spring Boot RESTful APIs microservices and TypeScript Angular front-end for automated asset tagging and market value adjustments across 5M+ advisor models.",
            "Integrated Kafka-based event-driven workflows processing 10K+ daily events — including model changes, withdrawals, and portfolio updates — to synchronize state across downstream backend services.",
            "Proposed and developed an AI-enabled MCP platform for data and service retrieval, improving debugging efficiency and accelerating investigation of client-facing production incidents across 5+ microservices."
        ],
        icon: bny_logo
    },
    {
        id: 2,
        title: "Backend Software Engineer",
        company: "Mutual of Omaha",
        date: "May 2024 - August 2025",
        bullets: [
            "Owned end-to-end development of 4+ Spring Boot microservices and REST APIs powering administrative backend integrations for insurance plans, annuities, and institutional investments.",
            "Built a Python-based unit test generator to automate valid JUnit test scaffolding for Spring Boot services, resolving 15+ recurring blockers and accelerating team delivery by 20%.",
            "Authored system design docs and led technical scoping for 20+ features defining REST API contracts, proposing database schemas, and architecting new microservices."
        ],
        icon: mutual_logo
    },
    {
        id: 3,
        title: "Software Engineer Lead",
        company: "BostonHacks",
        date: "February 2023 - May 2025",
        bullets: [
            "Led a team of engineers to architect and deploy a full-stack web application using React.js, Firebase, and Tailwind CSS, serving 800+ yearly attendees with check-in and application management workflows.",
            "Designed and delivered Full-Stack Development and RESTful API workshops for 100+ attendees in collaboration with industry sponsors."
        ],
        icon: bostonhacks_logo
    },
    {
        id: 4,
        title: "Software / Data Engineer Intern",
        company: "Mass General Brigham",
        date: "June 2023 - August 2023",
        bullets: [
            "Initiated development of a comprehensive Master Data Management (MDM) platform using Streamlit, enabling seamless data integration, cleansing, and standardization for enterprise datasets."
        ],
        icon: mgb_logo
    }
];

export default timelineElements;
