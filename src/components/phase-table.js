import React, {useState} from "react"
import {computePhaseData} from "../compute-phase";
import {epoch, phases} from "../constants";

const daysBetween = (start, end) => {
    const s = new Date(start).getTime();
    const e = new Date(end).getTime();

    const max = Math.max(s, e);
    const min = Math.min(s, e);

    const days = Math.floor((max - min) / (1000 * 60 * 60 * 24)) + 1;

    console.log({start, end, max, min, days});

    return days;
};

export const PhaseTable = () => {
    const minDate = "1945-07-28";
    const today = new Date().toISOString().split("T")[0];
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);

    return (
        <>
            <label for={'start-date'}>From</label>
            <input
                type={'date'}
                id="start-date"
                value={startDate}
                min={minDate}
                onChange={(x) => {
                    setStartDate(x.target.value);
                }}
            />

            <label for={'end-date'}>To</label>
            <input
                type={'date'}
                id="end-date"
                value={endDate}
                min={startDate}
                onChange={(x) => {
                    setEndDate(x.target.value);
                }}
            />

            <table>
                <tr>
                    <th>Date</th>
                    <th>Phase</th>
                </tr>
                {
                    Array(daysBetween(startDate, endDate)).fill(0).map((_, idx) => {
                        const day = new Date(startDate).getTime() + (24 * 60 * 60 * 1000)*(idx-1);
                        const next = new Date(day);
                        const {phaseKey} = computePhaseData(next.getTime(), epoch);

                        return (<tr>
                                <td>{next.toISOString().split("T")[0]}</td>
                                <td>{phases[phaseKey].title}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
};
