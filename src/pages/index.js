import * as React from "react"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import {PhaseTable} from "../components/phase-table";
import {epoch, phases} from "../constants";
// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};


const getCurrentPhase = () => {
  return phases.odie
};

// markup
const IndexPage = () => {
  const currentPhase = getCurrentPhase();
  console.log({currentPhase});
  return (
    <main style={pageStyles}>
     <h1>The Fieldic Phase</h1>
      <section>
          {currentPhase.image()}
        <h2>The current phase is {currentPhase.title}.</h2>
        <p>{currentPhase.description}</p>
      </section>
      <section>
        <details>
          <summary>Past and Future Fieldic Phases</summary>
          <PhaseTable/>
        </details>
      </section>
    </main>
  )
};

export default IndexPage
