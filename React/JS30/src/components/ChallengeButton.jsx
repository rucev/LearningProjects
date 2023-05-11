import { path } from "../../assets/svgPaths";
import "./ChallengeButton.css";

export default function ChallengeButton(props) {
    console.log("ChallengeButton -> render");

    const handleGoToChallengeClick = () => props.onChallengeClick();

    return (
        <article className="challenge__button">
            <b className="challenge__button--number">{props.number}</b>
            <b className="challenge__button--title">{props.name}</b>
            <button onClick={handleGoToChallengeClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d={path.goIn} />
                </svg>
            </button>
        </article>
    );
}
