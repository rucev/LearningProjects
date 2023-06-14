import Footer from '../components/Footer';
import './Home.css';
import ChallengeButton from '../components/ChallengeButton';

export default function Home({ onCh1Click, onCh2Click}) {
    console.log('Home -> render');

    const handleGoToChallenge1Click = () => onCh1Click();
    const handleGoToChallenge2Click = () => onCh2Click();

    return <div className='home'>
        <header className='home__header'>
            <h1 className='home__header--title'>JS30 on React</h1>
            <a className='home__header--link' href='https://javascript30.com/' target='_blank' rel='noopener noreferrer'>check the original challenges</a>
        </header>
        <section className='home__challenges'>
            <ChallengeButton number={'1'} name={'Drum kit'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'2'} name={'Clock'} onChallengeClick={handleGoToChallenge2Click}/>
            <ChallengeButton number={'3'} name={'CSS Variables'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'4'} name={'Array Cardio 1'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'5'} name={'Flex Panel Gallery'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'6'} name={'Type Ahead'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'7'} name={'Array Cardio 2'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'8'} name={'Fun with Canvas'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'9'} name={'Dev Tools Domination'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'10'} name={'Hold Shift and Check Checkboxes'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'11'} name={'Custom Video Player'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'12'} name={'Key Sequence Detection'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'13'} name={'Slide in on Scroll'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'14'} name={'JavaScript References VS Copying'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'15'} name={'LocalStorage'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'16'} name={'Mouse Move Shadow'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'17'} name={'Sort Without Articles'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'18'} name={'Adding Up Times with Reduce'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'19'} name={'Webcam Fun'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'20'} name={'Speech Detection'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'21'} name={'Geolocation'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'22'} name={'Follow Along Link Highlighter'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'23'} name={'Speech Synthesis'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'24'} name={'Sticky Nav'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'25'} name={'Capture, Propagation, Bubbling and Once'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'26'} name={'Stripe Follow Along Nav'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'27'} name={'Click and Drag'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'28'} name={'Video Speed Controller'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'29'} name={'Countdown Timer'} onChallengeClick={handleGoToChallenge1Click}/>
            <ChallengeButton number={'30'} name={'Whack A Mole'} onChallengeClick={handleGoToChallenge1Click}/>
        </section>
        <Footer/>
    </div>
}