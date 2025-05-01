import * as React from "react"

const backgroundData = {
  title: "Background",
  part1: "I am a ",
  part2:
    "recent graduate with a Bachelor of Science in Computer Science and a Minor in Data Science ",
  part3: "from the University of British Columbia (UBC) in Vancouver, Canada.",
  line2: "As a hands-on full-stack software developer, I have one year of ",
  line3: "internship ",
  line4: "experience working as a Full-Stack Developer with the ",
  line5: "Royal Bank of Canada (RBC) ",
  line6:
    "in Toronto, ON where I was stationed in the Deposits API Lab, building APIs and microservices for both internal and external clients along with being actively involved in the HSBC acquisition project by RBC.",
  line3Part1:
    "I am a regular marathon runner and when I'm not in front of a computer screen",
  line3Part2:
    ", you'll likely find me searching for new trails and new personal records to beat. The other way I like to spend my free time is by solving the problems in life through building stuff and coding up new solutions to mundane tasks! ",
}
const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        {backgroundData.part1}
        <strong>{backgroundData.part2}</strong>
        {backgroundData.part3}
      </p>
      <p>
        {backgroundData.line2}
        <strong>{backgroundData.line3}</strong>
        {backgroundData.line4}
        <strong>{backgroundData.line5}</strong>
        {backgroundData.line6}
      </p>
      <p>
        <strong>{backgroundData.line3Part1}</strong>
        {backgroundData.line3Part2}
      </p>
    </div>
  </section>
)

export default Background
