import hearst_logo from "../../assets/hearst_logo.png"
import kinship_logo from "../../assets/kinship_logo.png"
import tech360_logo from "../../assets/tech360.png"
import mgb_logo from "../../assets/MGB_logo.png"
import mutual_logo from "../../assets/mutualofomaha_logo.svg"

let timelineElements = [
    {
        id: 1,
        title: "Software Engineer Intern",
        company: "Mutual of Omaha",
        description: "Refactored an existing legacy underwriting communication application, transitioning from Grails to ReactJS and Springboot",
        icon: mutual_logo
    },
    {
        id: 2,
        title: "Software/Data Engineer Intern",
        date: "June 2023 - August 2023",
        company: "Mass General Brigham",
        description: "Initiated the development of a comprehensive Master Data Management (MDM) software using Streamlit, enabling seamless data integration, cleansing, and standardization for a wide range of enterprise datasets"
        ,
        icon: mgb_logo
    },
    {
        id: 3,
        title: "Software Engineer Intern",
        date: "June 2022 - August 2022",
        company: "Hearst",
        description: "Worked as an software engineer for their search engine team",
        icon: hearst_logo
    },
    {
        id: 4,
        title: "Campaign Intern",
        date: "June 2020 - August 2020",
        company: "CTE/Kinship",
        description: "Lead a group of 5 talented individuals for solutions for Kinship advertisement campaign to promote their product",
        icon: kinship_logo
    },
    {
        id: 5,
        title: "TECH360 Fellowship",
        date: "June 2019 - August 2019",
        company: "America On Tech",
        description: "Selected to be part of their web development program",
        icon: tech360_logo
    }
];

export default timelineElements;