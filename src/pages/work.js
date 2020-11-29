import React from "react"
import App from "../components/portfolio/App"
import { Helmet } from "react-helmet"

export default function Index() {
  return (
    <div className="">
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <title>DeathSpace | Portfolio</title>
      </Helmet>
      <App />
    </div>
  )
}
