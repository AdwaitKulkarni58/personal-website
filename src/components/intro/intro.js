import * as React from "react"
import "./intro.scss"


const introData = {
  title: "Hello! ",
  beforeName: "I'm ",
  name: "Adwait Kulkarni",
  afterName: ", a design-oriented full-stack developer committed to creating robust, complete and unique user experiences.",
  contact: "Get in touch ",
  email: "adwait.kul.2018@gmail.com",
  mailTo: "mailto:adwait.kul.2018@gmail.com",
};
const Intro = () => {
  const [isHovering, setIsHovering] = React.useState(false);
  const onMouseOver = _ => {
    setIsHovering(true);
  };
  const onMouseOut = _ => {
    setIsHovering(false);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsHovering(true);
      setTimeout(() => {
        setIsHovering(false);
      }, 2000);
    }, 1000);
  }, []);

  return <header className="intro">
    <h1 className="intro__hello">{introData.title}
      <span className={isHovering ? "emoji wave-hand animated wave" : "emoji wave-hand animated"} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onFocus={onMouseOver} onBlur={onMouseOut} role="button" tabIndex={0} aria-label="wave hand"></span>
    </h1>

    <h2 className="intro__tagline">{introData.beforeName}
      <span className="name">{introData.name}</span>{introData.afterName}
      <span className="emoji technologist"></span>
    </h2>

    <h3 className="intro__contact">
      <span>{introData.contact}</span>
      <span className="emoji pointer"></span>
      <span>
      <a href={introData.mailTo}
         className="highlight-link">{introData.email}</a>
    </span>
    </h3>
  </header>
};

export default Intro
