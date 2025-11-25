import React, { useState, useEffect } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { Share2, ArrowRight, RefreshCw, Copy, Mail } from 'lucide-react';
import { Button } from '../components/Button';
import { AdUnit } from '../components/AdUnit';
import { SEO } from '../components/SEO';
import { Question, QuizState } from '../types';

// Default Mock Data for fallback
const DEFAULT_QUESTIONS: Question[] = [
  { id: 1, text: "What is my favorite food?", options: ["Pizza", "Sushi", "Burgers", "Salad"], correctAnswer: 0 },
  { id: 2, text: "Which season do I prefer?", options: ["Summer", "Winter", "Spring", "Autumn"], correctAnswer: 1 },
  { id: 3, text: "What is my dream travel destination?", options: ["Paris", "Tokyo", "New York", "Bali"], correctAnswer: 1 },
  { id: 4, text: "What genre of movies do I like?", options: ["Horror", "Comedy", "Action", "Romance"], correctAnswer: 1 },
  { id: 5, text: "Am I a morning person or night owl?", options: ["Morning Person", "Night Owl", "Neither", "Both"], correctAnswer: 1 },
];

export const SingleChallenge: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [questions, setQuestions] = useState<Question[]>(DEFAULT_QUESTIONS);
  const [quizMeta, setQuizMeta] = useState({
    title: 'Friendship Dare',
    description: 'How well do you know me?',
    creator: 'User123'
  });
  
  const [quizData, setQuizData] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    isFinished: false,
    score: 0
  });

  // Reset state when ID or params changes
  useEffect(() => {
    setGameState('intro');
    setQuizData({ currentQuestionIndex: 0, answers: {}, isFinished: false, score: 0 });
    
    // Check for shared data in URL
    const dataParam = searchParams.get('data');
    if (id === 'shared' && dataParam) {
      try {
        // Decode logic matching CreateQuiz encoding
        // Note: searchParams.get() already decodes percent-encoded characters, 
        // so we get the raw Base64 string here.
        const decoded = decodeURIComponent(Array.prototype.map.call(atob(dataParam), (c: string) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        
        const parsed = JSON.parse(decoded);
        if (parsed.q && Array.isArray(parsed.q)) {
           setQuestions(parsed.q);
           setQuizMeta({
             title: parsed.t || 'Friendship Quiz',
             description: `Take this quiz to prove your friendship with ${parsed.c || 'your friend'}!`,
             creator: parsed.c || 'A Friend'
           });
        }
      } catch (e) {
        console.error("Error parsing quiz data", e);
        // Fallback to default if error
      }
    } else {
      // Logic to load specific hardcoded quizzes could go here based on 'id'
      if (id === 'love-calculator') {
         setQuizMeta({ title: 'Love Calculator', description: 'Test your romantic compatibility!', creator: 'Cupid' });
         // Could set different questions here
      } else {
         setQuestions(DEFAULT_QUESTIONS);
      }
    }
  }, [id, searchParams]);

  const handleStart = () => {
    setGameState('playing');
  };

  const handleAnswer = (optionIndex: number) => {
    const isCorrect = optionIndex === questions[quizData.currentQuestionIndex].correctAnswer;
    
    const nextState = {
      ...quizData,
      answers: { ...quizData.answers, [questions[quizData.currentQuestionIndex].id]: optionIndex },
      score: isCorrect ? quizData.score + 1 : quizData.score
    };

    if (quizData.currentQuestionIndex < questions.length - 1) {
      setQuizData({ ...nextState, currentQuestionIndex: nextState.currentQuestionIndex + 1 });
    } else {
      setQuizData({ ...nextState, isFinished: true });
      setGameState('result');
    }
  };

  const getShareUrl = () => {
    return window.location.href;
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link:', err);
      alert('Failed to copy link automatically. Please copy the URL from your address bar.');
    }
  };

  const handleNativeShare = async () => {
    const url = getShareUrl();
    
    // Check if the URL is valid for sharing (must be http or https usually)
    // and if navigator.share exists
    if (navigator.share && (url.startsWith('http') || url.startsWith('https'))) {
      try {
        const shareData = {
          title: quizMeta.title,
          text: `Check out this quiz: ${quizMeta.title}\n${quizMeta.description}`,
          url: url,
        };

        // Use canShare if available to check if the data is valid (e.g. URL length limits)
        if (navigator.canShare && !navigator.canShare(shareData)) {
            throw new Error('Share data validation failed');
        }

        await navigator.share(shareData);
      } catch (err: any) {
        console.warn('Native share failed:', err);
        // Fallback to copy link if it wasn't a user cancellation
        if (err.name !== 'AbortError') {
          copyLink();
        }
      }
    } else {
      copyLink();
    }
  };

  const shareViaEmail = () => {
    const subject = encodeURIComponent(`Try this quiz: ${quizMeta.title}`);
    const body = encodeURIComponent(`I thought you might like this quiz: ${quizMeta.title}\n\n${quizMeta.description}\n\nPlay here: ${getShareUrl()}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  // Helper to get WhatsApp Link
  const getWhatsAppLink = (messagePrefix: string) => {
    const text = `${messagePrefix} Play here: ${getShareUrl()}`;
    return `whatsapp://send?text=${encodeURIComponent(text)}`;
  };

  // Intro View
  if (gameState === 'intro') {
    return (
      <>
        <SEO 
          title={`${quizMeta.title} - FriendDare`} 
          description={quizMeta.description}
        />
        <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4">
          <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-gradient-to-r from-brand-purple to-brand-pink p-8 text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                👯‍♀️
              </div>
              <h1 className="text-3xl font-heading font-bold mb-2">{quizMeta.title}</h1>
              <p className="opacity-90">Created by: {quizMeta.creator}</p>
            </div>
            <div className="p-8 text-center">
              <h2 className="text-xl font-bold text-slate-800 mb-4">{quizMeta.description}</h2>
              <p className="text-slate-500 mb-8">Answer {questions.length} questions to prove your friendship. Good luck!</p>
              
              <Button size="lg" fullWidth onClick={handleStart} className="mb-4 shadow-lg shadow-brand-purple/30">
                Start Quiz
              </Button>
              
              <button 
                onClick={handleNativeShare}
                className="w-full flex items-center justify-center py-2 text-slate-500 hover:text-brand-purple font-semibold transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" /> Share this Quiz
              </button>

              <p className="text-xs text-slate-400 mt-6">Join thousands of others playing today</p>
            </div>
            <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Sponsored</span>
              <AdUnit slot="quiz-intro-bottom" className="my-2" label="Ad" />
            </div>
          </div>
        </div>
      </>
    );
  }

  // Playing View
  if (gameState === 'playing') {
    const currentQuestion = questions[quizData.currentQuestionIndex];
    const progress = ((quizData.currentQuestionIndex + 1) / questions.length) * 100;

    return (
      <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg">
          {/* Progress Bar */}
          <div className="mb-6 flex items-center justify-between text-white/80 text-sm font-bold">
            <span>Question {quizData.currentQuestionIndex + 1}/{questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-white/10 h-2 rounded-full mb-8 overflow-hidden">
            <div className="bg-gradient-to-r from-brand-pink to-brand-orange h-full transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-heading font-bold text-slate-800 mb-8 text-center">
              {currentQuestion.text}
            </h2>
            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="w-full p-4 text-left rounded-xl border-2 border-slate-100 hover:border-brand-purple hover:bg-indigo-50 transition-all font-semibold text-slate-700 flex items-center group"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-brand-purple group-hover:text-white">
                    {String.fromCharCode(65 + idx)}
                  </div>
                  {option}
                </button>
              ))}
            </div>
          </div>
          
          <AdUnit slot="quiz-mid-content" className="mt-8" label="Ad Space" />
        </div>
      </div>
    );
  }

  // Result View
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden text-center mb-8">
          <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
             {/* Confetti or simple decoration */}
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/confetti.png')]"></div>
             
             <p className="text-brand-pink font-bold uppercase tracking-wider mb-2">Scoreboard</p>
             <h1 className="text-5xl font-heading font-extrabold mb-4">{quizData.score} / {questions.length}</h1>
             <p className="text-lg text-slate-300">
               {quizData.score === questions.length ? "Wow! Best Friends Forever! 🌟" : 
                quizData.score > questions.length / 2 ? "Not bad! You know them well. 👍" : "Ouch... Stranger danger? 😬"}
             </p>
          </div>

          <div className="p-8">
            <h3 className="text-slate-800 font-bold mb-4">Share your result:</h3>
            
            <a 
              href={getWhatsAppLink(`I scored ${quizData.score}/${questions.length} on your quiz!`)}
              className="block w-full mb-3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] border-none text-white flex items-center justify-center">
                <Share2 className="w-4 h-4 mr-2" /> Share on WhatsApp
              </Button>
            </a>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <Button onClick={copyLink} variant="secondary" size="sm" className="flex items-center justify-center">
                <Copy className="w-4 h-4 mr-2" /> Copy Link
              </Button>
              <Button onClick={shareViaEmail} variant="secondary" size="sm" className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" /> Email
              </Button>
              <Button onClick={handleNativeShare} variant="outline" size="sm" className="col-span-2 border-slate-200 text-slate-600 hover:border-brand-purple hover:text-brand-purple flex items-center justify-center">
                <Share2 className="w-4 h-4 mr-2" /> More Options
              </Button>
            </div>
            
            <div className="border-t border-slate-100 pt-6">
              <Link to="/create-quiz" className="block mb-4">
                <Button fullWidth size="lg" className="animate-pulse shadow-brand-orange/40">
                  Create Your Own Quiz <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Link to="/challenges">
                <Button variant="ghost" size="sm">
                  <RefreshCw className="mr-2 w-4 h-4" /> Play Another Quiz
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <AdUnit slot="result-page-bottom" format="rectangle" />
      </div>
    </div>
  );
};