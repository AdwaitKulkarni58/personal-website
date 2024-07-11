import * as React from "react"
import "./featured-projects.scss"

const FeaturedProjects = () => (
  <section className="section featured-projects">
    <div className="section__title">Featured Projects</div>
    <div className="section__content">
      <div className="project blistabloc">
        <figure className="project__pic">
          <a
            href="https://github.com/AdwaitKulkarni58/UpbeatUpdates"
            rel="noreferrer"
            target="_blank"
          >
            <img src="./images/featured/passkeynotes/frame.png" alt="" />
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a
              href="https://github.com/AdwaitKulkarni58/UpbeatUpdates"
              rel="noreferrer"
              target="_blank"
            >
              Upbeat Updates
            </a>
          </div>
          <p>
            A website that aims to provide users with a platform where they can
            read, save, and share positive news articles as well as analyze
            their own positivity based on news preferences
          </p>
        </figcaption>
      </div>

      <div className="project screentime">
        <figure className="project__pic phones">
          {/* <a
            href="https://play.google.com/store/apps/details?id=com.talkingyak.app"
            rel="noreferrer"
            target="_blank"
          > */}
          <div className="phone">
            <img src="./images/featured/talkingyak/frame.png" alt="" />
          </div>
          {/* </a> */}
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            {/* <a
              href="https://play.google.com/store/apps/details?id=com.talkingyak.app"
              rel="noreferrer"
              target="_blank"
            > */}
            <p style={{ color: "white", fontWeight: "bold", fontSize: "17px" }}>
              MovieHub
            </p>
            {/* </a> */}
          </div>
          <p>
            MovieHub is your complete movie recommendation app. It helps you to
            find and rate movies as per preferences and also connects you
            with fellow movie enthusiasts!
          </p>
        </figcaption>
      </div>
    </div>
  </section>
)

export default FeaturedProjects
