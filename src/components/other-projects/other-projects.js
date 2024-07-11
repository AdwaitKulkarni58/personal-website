import * as React from "react"
import Parser from "html-react-parser"
import "./other-projects.scss"

const otherProjectsData = [
  {
    name: "EchoShopper Endeavor Commerce",
    url: "https://github.com/AdwaitKulkarni58/EchoShopper-Endeavor-Commerce",
    description:
      "I developed a complete working e-commerce store showcasing different products within the platform. The store features an industry-standard UI along with back-end capabilities like creating baskets, saving items to favorites, checkout functionality and order retrieval.",
    used: [
      { thing: "Node.js" },
      { thing: "Next.js" },
      { thing: "Express.js" },
      { thing: "React.js" },
      { thing: "Redux" },
      { thing: "Firebase" },
      { thing: "Docker" },
      { thing: "Stripe" },
    ],
  },
  {
    name: "Tweet-Vibes",
    url: "https://github.com/AdwaitKulkarni58/Tweet-Vibes",
    description:
      "This is a backend application using Java Spring and Apache Kafka to acquire tweets in real-time and provide REST endpoints to index a particular tweet in Elasticsearch while performing sentiment analysis on the same. I built it purely because I wanted to see if Twitter really is as negative as people say it is, and they weren't wrong!",
    used: [
      { thing: "Java - Spring" },
      { thing: "Apache Kafka" },
      { thing: "Elasticsearch" },
      { thing: "Twitter4J" },
      { thing: "Stanford CoreNLP" },
      { thing: "Maven" },
    ],
  },
  {
    name: "Dungeons and Databases",
    url: "https://github.com/AdwaitKulkarni58/Dungeons-and-Databases",
    description:
      "The domain of this project lies within tabletop gaming and gaming utility. In this domain, the database primarily focuses on organizing and tracking specific details within and between DND campaigns. It models aspects such as character definitions and campaign progression, and maintains the accessibility of this information for online gameplay. The project also offers a range of functionalities to enhance the tabletop gaming experience. Users can store complete character definitions including their race, class, background, and items, enabling them to maintain countless detailed character profiles. It also supports the updating of existing character definitions to reflect progression in a campaign. For practical use, the project allows users to generate basic character sheets using a query to the database, making it easier to reference character information during gameplay",
    used: [
      { thing: "HTML" },
      { thing: "CSS" },
      { thing: "PHP" },
      { thing: "Bootstrap" },
      { thing: "MySQL" },
      { thing: "Oracle Database" },
    ],
  },
  {
    name: "Likelihood of Heart Disease in Adults",
    url: "https://github.com/AdwaitKulkarni58/personal-portfolio",
    description:
      "Heart disease is considered a significant cause of mortality around the world. Due to difficulties in providing accurate diagnoses, experts have turned to machine learning techniques to provide more accurate results to reduce the chances of misdiagnoses and fatalities caused by cardiovascular diseases. In this project, we used the age of a patient, the exercise-induced ST depression score, and the maximum heart rate to predict whether or not an individual will be diagnosed with heart disease.",
    used: [
      { thing: "Pandas" },
      { thing: "Sklearn" },
      { thing: "NumPy" },
      { thing: "KNeighbors Classification" },
    ],
  },
  {
    name: "React Admin Dashboard",
    url: "https://github.com/AdwaitKulkarni58/React-Admin-Dashboard",
    description:
      "This project allows you to manage your organizational tasks in a simple and efficient way by providing a real-time updating dashboard. You can track your total sales stats, how each individual product is doing as well as analytics about your users and workers.",
    used: [
      { thing: "React.js" },
      { thing: "Material UI" },
      { thing: "Bootstrap" },
      { thing: "Node.js" },
      { thing: "Express.js" },
      { thing: "MongoDB" },
      { thing: "Nivo" },
    ],
  },
  {
    name: "User Management System",
    url: "https://github.com/AdwaitKulkarni58/User-Management-System",
    description:
      "A full-stack user management application supporting CRUD operations and following REST API principles. You can store user data like name, email, gender, and activity status using a NoSQL database, namely MongoDB. This application can be used in organizations, both small and large, to store employee information and track their activities.",
    used: [
      { thing: "HTML" },
      { thing: "CSS" },
      { thing: "EJS" },
      { thing: "Node.js" },
      { thing: "Express.js" },
      { thing: "MongoDB" },
      { thing: "Axios" },
      { thing: "Mongoose" },
      { thing: "Postman" },
    ],
  },
  {
    name: "Images Gallery",
    url: "https://github.com/AdwaitKulkarni58/Images-Gallery-Full-Stack-Project",
    description:
      "A full-stack web application to search and store images using React.js as a frontend library and Python Flask and Node.js for making API calls and a backend server. Utilizes Unsplash API. This project was really fun to build as you could create your own cute gallery of images and share them with your friends and family!",
    used: [
      { thing: "Python" },
      { thing: "Flask" },
      { thing: "React.js" },
      { thing: "Bootstrap" },
      { thing: "Unsplash API" },
    ],
  },
  {
    name: "Under Control (BCS Hacks Project)",
    url: "https://adwaitkulkarni58.github.io/BCSHacks/",
    description:
      "A website that enables you to order medicines and other essential drugs directly from the nearby pharmacies anonymously. There is no more shame involved in going to the pharmacy and buying drugs for protecting your health anymore!",
    used: [
      { thing: "React.js" },
      { thing: "Node.js" },
      { thing: "Express.js" },
      { thing: "Bootstrap" },
      { thing: "Google Maps API" },
    ],
  },
  {
    name: "Personal Website",
    url: "https://github.com/AdwaitKulkarni58/personal-website",
    description:
      "A personal website that highlights my skills, projects, experience, and other things! P.S. You are looking at it right now :)",
    used: [{ thing: "React.js" }, { thing: "Gastby" }, { thing: "JavaScript" }],
  },
]

const FeaturedProjects = () => (
  <section className="section other-projects">
    <div className="section__title">Other Projects</div>
    <div className="section__content">
      {otherProjectsData.map(project => (
        <div className="project">
          <div className="project__name">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="arrow-link"
            >
              {project.name}
            </a>
          </div>
          <p>{Parser(project.description)}</p>
          <div className="project__used">
            {project.used.map(item => (
              <span className="project__used__item">{item.thing}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default FeaturedProjects
