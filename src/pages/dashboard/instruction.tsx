import Step from "../components/step";

import { INSTRUCTION_STEPS } from "../../other/constants/constants";

export default function Instruction() {
    return (
        <>
            <h2 className="text-1xl font-semibold">Instructions</h2>

            <div className="mt-3">
                {INSTRUCTION_STEPS.map(step => (
                    <Step key={step.step} step={step.step} topic={step.topic} desciprion={step.description}/>
                ))}
            </div>
        </>
    );
}