import { useEffect, useRef, useState } from 'react';
import './Challenge1.css'
import { sounds } from './sounds/sounds';
import Footer from '../../components/Footer';
import GoHomeButton from '../../components/GoBackButton';

export default function Challenge1({ onHomeClick }) {
  console.log('Challenge1 -> render');

  const handleGoToHomeClick = () => onHomeClick();

  const keyRefs = useRef({});
  const audioRefs = useRef({});
  const [isPlaying, setIsPlaying] = useState({});

  const playSound = (keyCode) => {
    const key = keyRefs.current[keyCode];
    if (!key) return;
    const audio = audioRefs.current[key.dataset.key];
    if (!audio) return;

    setIsPlaying((prevIsPlaying) => ({
      ...prevIsPlaying,
      [keyCode]: true,
    }));
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
      setIsPlaying((prevIsPlaying) => ({
        ...prevIsPlaying,
        [keyCode]: false,
      }));
    }, 70);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      playSound(event.keyCode);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const registerKeyRef = (key, ref) => {
    keyRefs.current[key] = ref;
  };

  const registerAudioRef = (key, ref) => {
    audioRefs.current[key] = ref;
  };

  return (
    <main>
      <div className='keys'>
        <div data-key='65' className={`key ${isPlaying[65] ? 'playing' : ''}`} ref={(ref) => registerKeyRef(65, ref)} onClick={() => playSound(65)}>
          <kbd>A</kbd>
          <span className='sound'>clap</span>
        </div>
        <div data-key='83' className={`key ${isPlaying[83] ? 'playing' : ''}`} ref={(ref) => registerKeyRef(83, ref)} onClick={() => playSound(83)}>
          <kbd>S</kbd>
          <span className='sound'>hihat</span>
        </div>
        <div data-key='68' className={`key ${isPlaying[68] ? 'playing' : ''}`} ref={(ref) => registerKeyRef(68, ref)} onClick={() => playSound(68)}>
          <kbd>D</kbd>
          <span className='sound'>kick</span>
        </div>
        <div data-key='70' className={`key ${isPlaying[70] ? 'playing' : ''}`} ref={(ref) => registerKeyRef(70, ref)} onClick={() => playSound(70)}>
          <kbd>F</kbd>
          <span className='sound'>openhat</span>
        </div>
        <div data-key='71' className={`key ${isPlaying[71] ? 'playing' : ''}`} ref={(ref) => registerKeyRef(71, ref)} onClick={() => playSound(71)}>
          <kbd>G</kbd>
          <span className='sound'>boom</span>
        </div>
        <div data-key='72' className={`key ${isPlaying[72] ? 'playing' : ''}`} ref={(ref) => registerKeyRef(72, ref)} onClick={() => playSound(72)}>
          <kbd>H</kbd>
          <span className='sound'>ride</span>
        </div>
        <div data-key='74' className={`key ${isPlaying[74] ? 'playing' : ''}`} ref={(ref) => registerKeyRef(74, ref)} onClick={() => playSound(74)}>
          <kbd>J</kbd>
          <span className='sound'>snare</span>
        </div>
        <div data-key='75' className={`key ${isPlaying[75] ? 'playing' : ''}`} ref={(ref) => registerKeyRef(75, ref)} onClick={() => playSound(75)}>
          <kbd>K</kbd>
          <span className='sound'>tom</span>
        </div>
        <div data-key='76' className={`key ${isPlaying[76] ? 'playing' : ''}`} ref={(ref) => registerKeyRef(76, ref)} onClick={() => playSound(76)}>
          <kbd>L</kbd>
          <span className='sound'>tink</span>
        </div>
        <audio data-key='65' src={sounds.clap} ref={(ref) => registerAudioRef(65, ref)}></audio>
        <audio data-key='83' src={sounds.hithat} ref={(ref) => registerAudioRef(83, ref)}></audio>
        <audio data-key='68' src={sounds.kick} ref={(ref) => registerAudioRef(68, ref)}></audio>
        <audio data-key='70' src={sounds.openhat} ref={(ref) => registerAudioRef(70, ref)}></audio>
        <audio data-key='71' src={sounds.boom} ref={(ref) => registerAudioRef(71, ref)}></audio>
        <audio data-key='72' src={sounds.ride} ref={(ref) => registerAudioRef(72, ref)}></audio>
        <audio data-key='74' src={sounds.snare} ref={(ref) => registerAudioRef(74, ref)}></audio>
        <audio data-key='75' src={sounds.tom} ref={(ref) => registerAudioRef(75, ref)}></audio>
        <audio data-key='76' src={sounds.tink} ref={(ref) => registerAudioRef(76, ref)}></audio>
      </div>
      <Footer />
    </main>
  );
};
