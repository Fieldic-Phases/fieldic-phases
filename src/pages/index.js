import * as React from "react"
import {PhaseTable} from "../components/phase-table";
import {epoch, phases} from "../constants";
import {computePhaseData} from "../compute-phase";
import "../styles.css";


// markup
const IndexPage = () => {
    const {phaseKey, fullCycles, nextGarfield} = computePhaseData(Date.now(), epoch);
    console.log(nextGarfield)
  const currentPhase = phases[phaseKey];

  return (
    <main>
     <h1>The Fieldic Phase</h1>
        <p>For past ( and future! ) Fieldic Planning.</p>
      <section>
          {currentPhase.image()}
        <h2>The current phase is {currentPhase.title}.</h2>
        <p>{currentPhase.description}</p>
      </section>
        <section>
            <h2>Fun Facts</h2>
            <ol>
                <li>There have been <em>{Math.floor(fullCycles)} Garfields</em> since Jim Davis was born!</li>
                <li>The next Garfield is in <em>{nextGarfield.toFixed(2)} days!</em></li>
                <li>The Odie phase is a time for silent reflection</li>
            </ol>
        </section>
      <section>
          <h2>Past and Future Fieldic Phases</h2>
          <p>Pick some dates, it's fun!</p>
          <PhaseTable/>
      </section>
    </main>
  )
};

export default IndexPage
