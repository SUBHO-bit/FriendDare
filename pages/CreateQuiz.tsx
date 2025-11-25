import React, { useState } from 'react';
import { ArrowRight, Copy, Check, Share2, Link as LinkIcon, RefreshCw, Zap } from 'lucide-react';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { AdUnit } from '../components/AdUnit';

// Data for Pre-made Questions
const QUESTIONS_DATA: Record<string, { text: string; options: string[] }[]> = {
  Friendship: [
    { text: "What is my favorite food?", options: ["Pizza", "Sushi", "Burgers", "Tacos"] },
    { text: "What is my dream travel destination?", options: ["Paris", "Bali", "New York", "Tokyo"] },
    { text: "What is my absolute favorite color?", options: ["Blue", "Black", "Pink", "Red"] },
    { text: "Am I a morning person or a night owl?", options: ["Morning Person", "Night Owl", "Neither", "Both"] },
    { text: "Which social app do I use the most?", options: ["Instagram", "TikTok", "WhatsApp", "Snapchat"] },
    { text: "What genre of movies do I prefer?", options: ["Horror", "Comedy", "Action", "Romance"] },
    { text: "Do I prefer tea or coffee?", options: ["Tea", "Coffee", "Neither", "Both"] },
    { text: "What is my spirit animal?", options: ["Lion", "Panda", "Dolphin", "Wolf"] },
    { text: "How do I usually spend my weekends?", options: ["Sleeping", "Partying", "Gaming", "Outdoors"] },
    { text: "What is my biggest fear?", options: ["Spiders", "Heights", "Ghosts", "Failure"] },
  ],
  Love: [
    { text: "What is my idea of a perfect date?", options: ["Candlelit Dinner", "Movie Night", "Adventure Trip", "Picnic"] },
    { text: "What is the most important trait in a partner?", options: ["Loyalty", "Humor", "Looks", "Intelligence"] },
    { text: "Do I believe in soulmates?", options: ["Yes, absolutely", "No", "Maybe", "I don't know"] },
    { text: "What is my love language?", options: ["Words of Affirmation", "Physical Touch", "Gifts", "Quality Time"] },
    { text: "Who said 'I love you' first (or who would)?", options: ["Me", "Partner", "At the same time", "Accidentally"] },
    { text: "Do I want kids in the future?", options: ["Yes!", "No way", "Maybe one day", "I have them already"] },
    { text: "Am I the jealous type?", options: ["Very jealous", "A little bit", "Not at all", "Depends"] },
    { text: "What's a dealbreaker for me?", options: ["Smoking", "Lying", "Bad Hygiene", "Being Rude"] },
    { text: "Do I like PDA (Public Displays of Affection)?", options: ["Love it", "Hate it", "It's okay", "Depends on mood"] },
    { text: "Do I believe in love at first sight?", options: ["Yes", "No", "Lust at first sight", "Only in movies"] },
  ],
  Personality: [
    { text: "Am I an introvert or extrovert?", options: ["Introvert", "Extrovert", "Ambivert", "Depends"] },
    { text: "Do I make decisions with my head or heart?", options: ["Head (Logic)", "Heart (Emotion)", "Both", "Coin flip"] },
    { text: "How do I handle stress?", options: ["Eat", "Sleep", "Talk to friends", "Panic"] },
    { text: "Am I messy or organized?", options: ["Very Organized", "Messy", "Organized Chaos", "Clean Freak"] },
    { text: "What's my worst habit?", options: ["Procrastination", "Nail Biting", "Oversleeping", "Spending Money"] },
    { text: "Am I an optimist or pessimist?", options: ["Optimist", "Pessimist", "Realist", "Dreamer"] },
    { text: "Do I hold grudges?", options: ["Forever", "No, I forgive", "Depends", "I forget easily"] },
    { text: "Would I survive a zombie apocalypse?", options: ["First to die", "I'd lead the group", "I'd hide", "I'd join the zombies"] },
    { text: "Do I like change?", options: ["Love it", "Hate it", "I adapt", "Scary but necessary"] },
    { text: "What motivates me most?", options: ["Money", "Passion", "Recognition", "Helping others"] },
  ],
  Fun: [
    { text: "If I could have a superpower, it would be:", options: ["Invisibility", "Flight", "Mind Reading", "Time Travel"] },
    { text: "What would I do with 1 million dollars?", options: ["Buy a House", "Travel the World", "Donate it", "Buy a Fancy Car"] },
    { text: "Which season is the best?", options: ["Summer", "Winter", "Spring", "Autumn"] },
    { text: "Cats or Dogs?", options: ["Cats 🐱", "Dogs 🐶", "Both", "Neither"] },
    { text: "Android or iPhone?", options: ["iPhone", "Android", "Nokia 3310", "No Phone"] },
    { text: "Sweet or Savory?", options: ["Sweet", "Savory", "Both", "Neither"] },
    { text: "Beach or Mountains?", options: ["Beach", "Mountains", "City", "Desert"] },
    { text: "Early Bird or Night Owl?", options: ["Early Bird", "Night Owl", "Permanently Tired", "Depends"] },
    { text: "Texting or Calling?", options: ["Texting", "Calling", "FaceTime", "Voice Notes"] },
    { text: "Best Pizza Topping?", options: ["Pepperoni", "Pineapple", "Mushrooms", "Just Cheese"] },
  ],
};

const CATEGORIES = [
  { id: 'Friendship', label: 'Friendship', icon: '👯‍♀️', desc: 'Who knows you best?' },
  { id: 'Love', label: 'Love', icon: '💘', desc: 'Test your partner!' },
  { id: 'Personality', label: 'Personality', icon: '🧠', desc: 'Deep questions.' },
  { id: 'Fun', label: 'Fun', icon: '😂', desc: 'Random & funny.' },
];

export const CreateQuiz: React.FC = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Friendship');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [generatedLink, setGeneratedLink] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Get questions based on category, fallback to Friendship if not found
  const activeQuestions = QUESTIONS_DATA[category] || QUESTIONS_DATA['Friendship'];

  const startQuizCreation = () => {
    if (!name) return;
    setStep(2);
    setCurrentQIndex(0);
    setSelectedAnswers([]);
  };

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers, optionIndex];
    setSelectedAnswers(newAnswers);

    if (currentQIndex < activeQuestions.length - 1) {
      // Move to next question with a slight delay for better UX
      setTimeout(() => {
        setCurrentQIndex(currentQIndex + 1);
      }, 250);
    } else {
      // Finished answering
      finishQuiz(newAnswers);
    }
  };

  const finishQuiz = (finalAnswers: number[]) => {
    // Generate the quiz payload
    const quizData = {
      c: name, // Creator Name
      t: `${name}'s ${category} Quiz`, // Title
      q: activeQuestions.map((q, idx) => ({
        id: idx + 1,
        text: q.text,
        options: q.options,
        correctAnswer: finalAnswers[idx] // The creator's answer is the "Correct" one
      }))
    };

    try {
      // Encode data to base64
      const jsonStr = JSON.stringify(quizData);
      const encoded = btoa(encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g,
          function toSolidBytes(match, p1) {
              return String.fromCharCode(parseInt(p1, 16));
      }));
      
      const baseUrl = window.location.href.split('#')[0];
      // IMPORTANT: Encode the Base64 string to ensure URL safety (handles +, /, = characters)
      const link = `${baseUrl}#/challenge/shared?data=${encodeURIComponent(encoded)}`;
      
      setGeneratedLink(link);
      setStep(3);
    } catch (e) {
      console.error("Error generating quiz", e);
      alert("Something went wrong. Please try again.");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const shareOnWhatsApp = () => {
    const text = `I created a ${category} Quiz! 😃\n\nHow well do you know me? Click to play & check your score! 👇\n${generatedLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const reset = () => {
    setStep(1);
    setName('');
    setSelectedAnswers([]);
    setCurrentQIndex(0);
  };

  return (
    <>
      <SEO 
        title="Create Your Friendship Quiz - FriendDare" 
        description="Create a quiz about yourself in 2 minutes. Share with friends and see who knows you best." 
      />
      
      <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          
          {/* Header (Only show on Step 1 & 3 to reduce distraction during quiz) */}
          {step !== 2 && (
            <div className="text-center mb-10">
              <h1 className="text-3xl font-heading font-bold text-slate-900 mb-2">Create Your Quiz</h1>
              <p className="text-slate-600">Step 1: Answer questions about yourself. Step 2: Share with friends!</p>
            </div>
          )}

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative">
            
            {/* Step 1: Setup */}
            {step === 1 && (
              <div className="p-8">
                <div className="mb-8 text-center">
                  <div className="w-16 h-16 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    📝
                  </div>
                  <h2 className="text-xl font-bold text-slate-800">Let's get started</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">What is your name?</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah"
                      className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all outline-none text-lg font-semibold"
                      autoFocus
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">Choose a Category</label>
                    <div className="grid grid-cols-2 gap-3">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setCategory(cat.id)}
                          className={`flex flex-col items-start p-4 rounded-xl border-2 transition-all duration-200 ${
                            category === cat.id
                              ? 'border-brand-purple bg-brand-purple text-white shadow-lg scale-[1.02]'
                              : 'border-slate-100 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <span className="text-2xl mb-2">{cat.icon}</span>
                          <span className={`font-bold ${category === cat.id ? 'text-white' : 'text-slate-800'}`}>{cat.label}</span>
                          <span className={`text-xs mt-1 ${category === cat.id ? 'text-white/80' : 'text-slate-400'}`}>{cat.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button fullWidth size="lg" onClick={startQuizCreation} disabled={!name} className="shadow-brand-purple/30">
                      Start Answering <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Answering */}
            {step === 2 && (
              <div className="min-h-[500px] flex flex-col">
                {/* Progress Bar */}
                <div className="bg-slate-100 h-2 w-full">
                  <div 
                    className="bg-brand-purple h-full transition-all duration-500 ease-out" 
                    style={{ width: `${((currentQIndex + 1) / activeQuestions.length) * 100}%` }}
                  ></div>
                </div>

                <div className="flex-1 p-8 flex flex-col items-center justify-center">
                  <div className="w-full max-w-md">
                    <span className="inline-block px-3 py-1 bg-indigo-50 text-brand-purple rounded-full text-xs font-bold mb-6">
                      Question {currentQIndex + 1} / {activeQuestions.length}
                    </span>
                    
                    <h2 className="text-2xl font-heading font-bold text-slate-900 mb-8 text-center leading-relaxed">
                      {activeQuestions[currentQIndex].text}
                    </h2>

                    <div className="space-y-3">
                      {activeQuestions[currentQIndex].options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(idx)}
                          className="w-full p-4 text-left rounded-xl border-2 border-slate-100 hover:border-brand-purple hover:bg-indigo-50 transition-all font-semibold text-slate-700 flex items-center group active:scale-95"
                        >
                          <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-brand-purple group-hover:text-white transition-colors">
                            {String.fromCharCode(65 + idx)}
                          </div>
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-50 text-center text-xs text-slate-400 border-t border-slate-100">
                  Select the answer that describes <strong>YOU</strong> best.
                </div>
              </div>
            )}

            {/* Step 3: Result */}
            {step === 3 && (
              <div className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-200 animate-bounce">
                  <Check className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-2">Quiz Ready! 🎉</h2>
                <p className="text-slate-500 mb-8">Your unique quiz link has been generated.</p>

                <div className="space-y-4 max-w-md mx-auto">
                  <a 
                    href={`whatsapp://send?text=${encodeURIComponent(`I created a ${category} Quiz! 😃\n\nHow well do you know me? Click to play & check your score! 👇\n${generatedLink}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button 
                      fullWidth 
                      size="lg"
                      className="bg-[#25D366] hover:bg-[#128C7E] border-none text-white shadow-lg shadow-green-200"
                    >
                      <Share2 className="w-5 h-5 mr-2" /> Share on WhatsApp
                    </Button>
                  </a>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center">
                    <div className="flex-1 truncate text-left text-slate-500 text-sm font-mono mr-2">
                      {generatedLink}
                    </div>
                    <button onClick={copyToClipboard} className="text-brand-purple hover:text-brand-dark p-2 font-bold text-sm">
                       {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100 mt-6">
                    <button 
                      onClick={reset}
                      className="text-slate-400 hover:text-slate-600 text-sm font-bold flex items-center justify-center mx-auto"
                    >
                      <RefreshCw className="w-3 h-3 mr-1" /> Create Another Quiz
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {step === 1 && (
            <div className="mt-8 text-center text-slate-400 text-sm">
              <p className="flex items-center justify-center">
                <Zap className="w-4 h-4 mr-1 text-yellow-500 fill-current" /> 
                Over 50,000 quizzes created today!
              </p>
            </div>
          )}

          <AdUnit className="mt-8" />
        </div>
      </div>
    </>
  );
};