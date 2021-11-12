import {PHASE} from "./constants";

const DAYS = 1000 * 60 * 60 * 24;
const PERIOD = PHASE.length * 2;

export const computePhaseData = (from, epoch) => {
    const daysSince = Math.floor((from - epoch) / DAYS);
    const fullCycles = daysSince / PERIOD;
    const currentCycle = fullCycles - Math.floor(fullCycles);
    const currentPhase = currentCycle * PHASE.length;
    const nextGarfield = (PHASE.length - currentPhase) * 2;
    const phaseKey = [...PHASE].sort((a, b) => a.number - b.number)[Math.floor(currentPhase)].key;

    return {
        fullCycles,
        currentCycle,
        currentPhase,
        nextGarfield,
        phaseKey
    }
};
