import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ChallengeList } from './pages/ChallengeList';
import { SingleChallenge } from './pages/SingleChallenge';
import { CreateQuiz } from './pages/CreateQuiz';
import { BlogList } from './pages/BlogList';
import { BlogPost } from './pages/BlogPost';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenges" element={<ChallengeList />} />
            <Route path="/challenge/:id" element={<SingleChallenge />} />
            <Route path="/create-quiz" element={<CreateQuiz />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;