import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "What is included in short circuit analysis?",
    "What is Access Group?",
    "Explain Planning Liaision"
];

const GPT4V_EXAMPLES: string[] = [
    "Give examples of single line diagrams.",
    "List SHETL's technical & design criteria.",
    "Explain preferred simplified diagram of a GBGF-I with a Power System Stabiliser."
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
