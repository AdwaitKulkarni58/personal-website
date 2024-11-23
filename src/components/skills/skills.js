import * as React from "react"
import "./skills.scss"

const skillsData = {
  languagesTitle: "Frontend",
  languages: ["HTML", "CSS", "JavaScript", "React.js", "Material UI"],
  frameworksTitle: "Backend",
  frameworks: [
    "C",
    "C++",
    "Node.js",
    "Express.js",
    "Python",
    "Flask",
    "Java",
    "Spring",
    "Redux Toolkit",
  ],
  databaseTitle: "Databases",
  databases: ["MySQL", "MongoDB", "RDS", "H2", "Redis", "ElasticSearch"],
  toolsTitle: "Tools",
  tools: [
    "Git",
    "GitHub",
    "GitHub Actions",
    "Docker",
    "Jira",
    "Maven",
    "Postman",
    "Jenkins",
    "AWS",
    "OpenShift",
    "Cloud Foundry",
  ],
  dataScienceTitle: "Data Science / ML",
  dataScience: ["pandas", "NumPy", "R", "SQL", "Scikit-learn", "SageMaker"],
  otherTitle: "Other",
  other: ["Apache Kafka", "Django", "Mongoose", "JUnit", "Vitest", "Jest"],
}

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        <div className="skillz__category">
          <div className="skillz__category__label">
            {skillsData.languagesTitle}
          </div>
          <ul>
            {skillsData.languages.map(data => (
              <li className="skillz__category__item">{data}</li>
            ))}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">
            {skillsData.frameworksTitle}
          </div>
          <ul>
            {skillsData.frameworks.map(data => (
              <li className="skillz__category__item">{data}</li>
            ))}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">
            {skillsData.databaseTitle}
          </div>
          <ul>
            {skillsData.databases.map(data => (
              <li className="skillz__category__item">{data}</li>
            ))}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.toolsTitle}</div>
          <ul>
            {skillsData.tools.map(data => (
              <li className="skillz__category__item">{data}</li>
            ))}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">
            {skillsData.dataScienceTitle}
          </div>
          <ul>
            {skillsData.dataScience.map(data => (
              <li className="skillz__category__item">{data}</li>
            ))}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.otherTitle}</div>
          <ul>
            {skillsData.other.map(data => (
              <li className="skillz__category__item">{data}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
