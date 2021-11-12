import * as React from "react"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import {PhaseTable} from "../components/phase-table";
import {epoch, phases} from "../constants";
import {computePhaseData} from "../compute-phase";
// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};


// markup
const IndexPage = () => {
  const currentPhase = phases[computePhaseData(Date.now(), epoch).phaseKey];

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
