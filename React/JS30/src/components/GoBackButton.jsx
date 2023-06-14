import { path } from '../../assets/svgPaths';
import './GoBackButton.css';

export default function GoHomeButton({onGoToHomeClick}) {
    console.log('GoHomeButton -> render');

    const handleGoToHome = () => onGoToHomeClick();

    return (
        <article className='go-back__button'>
            <button onClick={handleGoToHome}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 96 960 960'><path d={path.goOut} />
                </svg>
            </button>
        </article>
    );
}