import * as React from "react"

const seoData = {
  title: "Adwait Kulkarni",
  description:
    "Adwait Kulkarni is a design-oriented full-stack developer committed to creating robust, complete and unique user experiences.",
  author: "Adwait Kulkarni",
  siteUrl: "https://kavin.varnan.me",
}

const Seo = () => (
  <>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} />
  </>
)

export default Seo
