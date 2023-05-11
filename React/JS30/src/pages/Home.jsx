import Footer from '../components/Footer';
import './Home.css';
import ChallengeButton from '../components/ChallengeButton';

export default function Home({ onCh1Click }) {
    console.log('Home -> render');

    const handleGoToChallenge1Click = () => onCh1Click();

    return <div className="home">
        <header className="home__header">
            <h1 className="home__header--title">JS30 on React</h1>
            <a className="home__header--link" href="https://javascript30.com/" target="_blank" rel="noopener noreferrer">check the original challenges</a>
        </header>
        <section className="home__challenges">
            <ChallengeButton number={'1'} name={'Drum kit'} onChallengeClick={handleGoToChallenge1Click}/>
        </section>
        <Footer/>
    </div>
}