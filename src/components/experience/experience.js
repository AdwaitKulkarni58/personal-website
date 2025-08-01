import * as React from "react"
import "./experience.scss"

const experienceData = [
  {
    company: "Tata Consultancy Services (TCS)",
    url: "https://www.tcs.com/",
    time: "June 2025 - Present",
    position: "Software Developer",
  },
  {
    company: "Royal Bank of Canada (RBC)",
    url: "https://jobs.rbc.com/ca/en/technology-operations",
    time: "September 2022 - August 2023",
    position: "Full-Stack Developer",
  },
  {
    company: "Wizeprep",
    url: "https://wizeprep.com/",
    time: "January 2021 - May 2021",
    position: "Brand Ambassador",
  },
]

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {experienceData.map(data => (
          <div className="job">
            <div className="time-place">
              <div className="job__company">
                <a href={data.url} target="_blank" rel="noreferrer">
                  {data.company}
                </a>
              </div>
              <div className="job__time">{data.time}</div>
            </div>
            <div className="job__position">{data.position}</div>
          </div>
        ))}
      </div>

      <a
        href="./Adwait_Kulkarni_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="arrow-link"
        style={{ marginTop: "2rem", fontSize: "2rem" }}
      >
        View My Resume
      </a>
    </div>
  </section>
)

export default Experience
