import { useState } from 'react';
import Home from './pages/Home';
import Challenge1 from './pages/Challenge1/Challenge1';

export default function App() {
  const [view, setView] = useState("home");

  const handleGoToHome = () => setView("home");

  const handleGoToCh1 = () => setView("ch1");

  console.log("App --> render");

  switch (view) {
    case "home":
      return <Home onCh1Click={handleGoToCh1} />;
    case "ch1":
      return <Challenge1 /*onHomeClick={handleGoToHome}*/ />;
  }
}
