import { useState } from 'react';
import Home from './pages/Home';
import Challenge1 from './pages/Challenge1/Challenge1';
import Challenge2 from './pages/Challenge2/Challenge2';

export default function App() {
  const [view, setView] = useState('ch1');

  const handleGoToHome = () => setView('home');

  const handleGoToCh = (num) => setView(`ch${num}`);

  console.log('App --> render');

  switch (view) {
    case 'home':
      return <Home onCh1Click={() => handleGoToCh(1)} onCh2Click={() => handleGoToCh(2)} />;
    case 'ch1':
      return <Challenge1 onHomeClick={handleGoToHome} />;
    case 'ch2':
      return <Challenge2 onHomeClick={handleGoToHome} />;
  }
}
