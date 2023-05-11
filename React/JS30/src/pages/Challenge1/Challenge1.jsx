import { useEffect, useRef } from 'react';
import './Challenge1.css'
import { sounds } from './sounds/sounds';

export default function Challenge1() {
    console.log('Challenge1 -> render');

    const keyRefs = useRef({});
    const audioRefs = useRef({});

    const playSound = (e) => {
        const key = keyRefs.current[e.keyCode];
        if (!key) return;
        const audio = audioRefs.current[key.dataset.key];
        if (!audio) return;
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
        setTimeout(() => {
            key.classList.remove('playing')}, 70);
        };

    useEffect(() => {
        const handleKeyDown = (e) => {
            playSound(e);
        };
        window.addEventListener('keydown', handleKeyDown);
    }, []);

    const registerKeyRef = (key, ref) => {
        keyRefs.current[key] = ref;
    };

    const registerAudioRef = (key, ref) => {
        audioRefs.current[key] = ref;
    };

    return (
        <div className="keys">
            <div data-key="65" className="key" ref={(ref) => registerKeyRef(65, ref)}>
                <kbd>A</kbd>
                <span className="sound">clap</span>
            </div>
            <audio data-key="65" src={sounds.clap} ref={(ref) => registerAudioRef(65, ref)}></audio>
        </div>
    );
};
