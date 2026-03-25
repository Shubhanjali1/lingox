"use client";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("welcome"); // Views: welcome -> lang-select
const [nativeLang, setNativeLang] = useState(""); // Jo user ko aati hai
  const [targetLang, setTargetLang] = useState(""); // Jo user seekhna chahta hai
  // Hamari Indian Languages ka Mega Data
  const [currentStep, setCurrentStep] = useState(0); // Kaunse sawal pe hain
const [score, setScore] = useState(0);
const [streak, setStreak] = useState(0); // Shuruat mein zero
const [selectedOption, setSelectedOption] = useState(""); // User ne kya choose kiya
const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // Sahi hai ya galat
const [showPanel, setShowPanel] = useState(false); // Panel dikhana hai ya nahi
// Sample Questions (Baad mein hum har language ke liye alag karenge)
const questions = [
  { id: 1, question: "Translate 'Hello'", options: ["Namaste", "Alvida", "Dhanyawad"], answer: "Namaste" },
  { id: 2, question: "How do you say 'Water'?", options: ["Khana", "Paani", "Ghar"], answer: "Paani" },
];
  const languages = [
    { name: "Assamese", flag: "☕" }, // Tea gardens
    { name: "Bengali", flag: "🐟" },  // Maach-Bhaat
    { name: "Bodo", flag: "🎼" },     // Folk Music
    { name: "Dogri", flag: "🏔️" },    // Hills of J&K
    { name: "Gujarati", flag: "🥣" },  // Dhokla/Garba
    { name: "Hindi", flag: "🕉️" },    // Cultural Heritage
    { name: "Kannada", flag: "🏛️" },   // Hampi/Architecture
    { name: "Kashmiri", flag: "🌸" },  // Saffron/Tulips
    { name: "Konkani", flag: "🏖️" },   // Goa Beaches
    { name: "Maithili", flag: "🎨" },  // Madhubani Art
    { name: "Malayalam", flag: "🥥" }, // Coconuts/Backwaters
    { name: "Manipuri", flag: "💃" },  // Manipuri Dance
    { name: "Marathi", flag: "🚩" },   // Maratha Pride
    { name: "Nepali", flag: "🧗" },   // Mountaineering
    { name: "Odia", flag: "🎡" },     // Rath Yatra
    { name: "Punjabi", flag: "🚜" },   // Lassi/Farming
    { name: "Sanskrit", flag: "📿" },  // Ancient Wisdom
    { name: "Santali", flag: "🏹" },   // Tribal Heritage
    { name: "Sindhi", flag: "🏺" },   // Ancient Civilisation
    { name: "Tamil", flag: "🛕" },     // Meenakshi Temple
    { name: "Telugu", flag: "🎥" },    // Tollywood/Cinema
    { name: "Urdu", flag: "✍️" },     // Poetry/Shayari
  ];
  // Line 30 ke paas:
const sections = [
  {
    name: "Section 1: Rookie",
    color: "bg-[#58cc02]",
    units: [
      { id: 1, title: "Essential Phrases", status: "current", icon: "👋" },
      { id: 2, title: "Greetings", status: "locked", icon: "💬" },
      { id: 3, title: "Numbers 1-10", status: "locked", icon: "🔢" },
      { id: 4, title: "Basic Food", status: "locked", icon: "🍎" },
      { id: 5, title: "Daily Routine", status: "locked", icon: "🌅" },
    ]
  },
  {
    name: "Section 2: Explorer",
    color: "bg-[#1cb0f6]",
    units: [
      { id: 6, title: "Family Members", status: "locked", icon: "🏠" },
      { id: 7, title: "Shopping", status: "locked", icon: "🛍️" },
      { id: 8, title: "Directions", status: "locked", icon: "📍" },
      // ... aise hi hum 14 units tak le ja sakte hain
    ]
  }
];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 font-sans text-[#4b4b4b]">
      
      {/* --- 1. WELCOME VIEW --- */}
      {view === "welcome" && (
        <div className="flex flex-col items-center gap-10 max-w-sm w-full animate-in fade-in zoom-in duration-700">
          <div className="text-9xl drop-shadow-sm hover:scale-110 transition-transform cursor-pointer">🌍</div>
          
          <div className="text-center">
            <h1 className="text-6xl font-[900] text-[#58cc02] tracking-tighter italic mb-2 leading-none">
              LingoX
            </h1>
            <p className="text-xl font-bold text-[#afafaf] leading-tight px-4">
              The free, fun, and effective way to learn Indian languages!
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full mt-4">
            <button 
              onClick={() => setView("lang-select")}
              className="bg-[#58cc02] hover:bg-[#4ddc02] text-white text-sm font-[900] py-4 rounded-2xl shadow-[0_5px_0_#46a302] active:translate-y-1 active:shadow-none transition-all uppercase tracking-widest"
            >
              Get Started
            </button>
            <button className="bg-white border-2 border-[#e5e5e5] hover:bg-[#f7f7f7] text-[#1cb0f6] text-sm font-[900] py-4 rounded-2xl shadow-[0_5px_0_#e5e5e5] active:translate-y-1 active:shadow-none transition-all uppercase tracking-widest text-center">
              I already have an account
            </button>
          </div>
        </div>
      )}

      {/* --- 2. LANGUAGE SELECTION VIEW --- */}
      {view === "lang-select" && (
        <div className="w-full max-w-2xl animate-in slide-in-from-bottom-8 duration-500 flex flex-col items-center">
          <h2 className="text-3xl font-[900] text-center mb-8 text-[#3c3c3c]">What do you want to learn?</h2>
          
          {/* Scrollable Container with Custom Styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-h-[60vh] overflow-y-auto p-2 border-y-2 border-gray-100 my-4">
            {languages.map((lang) => (
  <button
    key={lang.name}
    onClick={() => {
   setTargetLang(lang.name);
   console.log("Learning:", lang.name);
   setView("roadmap"); // <-- Ye line add karo
}}
    className="flex items-center gap-4 p-5 border-2 border-b-4 border-gray-200 rounded-2xl hover:bg-gray-50 transition-all active:translate-y-1 active:border-b-2 text-left bg-white"
  >
    <span className="text-4xl">{lang.flag}</span>
    {/* Sirf name rakho, state wali line uda do */}
    <span className="text-xl font-[900] text-gray-700">{lang.name}</span>
  </button>
))}
          </div>

          <button 
            onClick={() => setView("welcome")}
            className="mt-6 text-gray-400 font-bold hover:text-gray-600 uppercase tracking-widest text-xs transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      )}
 {/* --- 3. ROADMAP VIEW --- */}
{view === "roadmap" && (
  <div className="w-full max-w-md h-screen overflow-y-auto flex flex-col items-center py-10 no-scrollbar animate-in slide-in-from-right duration-500">
    
    {/* Header */}
    <div className="sticky top-0 bg-white/90 backdrop-blur-sm w-full py-4 border-b-2 mb-8 flex items-center justify-between px-6 z-20">
      <button onClick={() => setView("lang-select")} className="text-gray-400 font-black text-xl hover:text-gray-600 transition-colors">←</button>
      <div className="text-center">
        <h3 className="font-black text-[10px] text-gray-400 uppercase tracking-[0.2em]">Course Progress</h3>
        <p className="font-black text-xl text-gray-700 leading-none">{targetLang} Journey</p>
      </div>
      <div className="flex items-center gap-2 text-xl font-black text-orange-500">
        <span>🔥</span>
        <span className="text-sm">{streak}</span>
      </div>
    </div>

    {/* Section-wise snake path */}
    <div className="flex flex-col w-full px-4 pb-20">
      {sections.map((section) => (
        <div key={section.name} className="flex flex-col items-center w-full mb-12">
          
          {/* Section Banner */}
          <div className={`w-full ${section.color} p-6 rounded-3xl mb-10 shadow-[0_6px_0_rgba(0,0,0,0.1)] text-white`}>
            <h4 className="font-[900] text-xl uppercase tracking-tighter">{section.name}</h4>
            <p className="font-bold text-sm opacity-90">Unlock units to level up!</p>
          </div>

          {/* Units loop inside each section */}
          <div className="flex flex-col gap-14 items-center w-full">
            {section.units.map((unit, index) => (
              <div 
                key={unit.id} 
                className="flex flex-col items-center"
                style={{ 
                  transform: `translateX(${index % 2 === 0 ? '40px' : '-40px'})` 
                }}
              >
                <button 
                  onClick={() => {
                    if(unit.status === 'current') setView("quiz");
                  }}
                  className={`
                    w-24 h-24 rounded-full border-b-[8px] flex items-center justify-center text-4xl transition-all
                    ${unit.status === 'current' 
                      ? 'bg-[#58cc02] border-[#46a302] text-white shadow-xl hover:scale-105 active:border-b-0 active:translate-y-2' 
                      : 'bg-[#e5e5e5] border-[#afafaf] text-gray-300 cursor-not-allowed'}
                  `}
                >
                  {unit.icon}
                </button>
                <span className="mt-4 font-[900] text-gray-500 uppercase text-[10px] tracking-widest text-center">
                  {unit.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)}
{/* --- 4. QUIZ VIEW  --- */}
    {view === "quiz" && (
  <div className="w-full max-w-xl min-h-screen flex flex-col bg-white">
    {/* Progress Bar Header */}
    <div className="flex items-center gap-4 p-6">
      <button onClick={() => setView("roadmap")} className="text-gray-400 text-2xl font-black">✕</button>
      <div className="flex-1 h-4 bg-[#e5e5e5] rounded-full overflow-hidden">
        <div className="h-full bg-[#58cc02] transition-all duration-700" style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}></div>
      </div>
    </div>

    {/* Question Section */}
    <div className="flex-1 px-6 flex flex-col items-center">
      <h2 className="text-2xl font-[900] text-[#3c3c3c] w-full mb-8">{questions[currentStep].question}</h2>
      <div className="grid grid-cols-1 gap-3 w-full">
        {questions[currentStep].options.map((option) => (
          <button 
            key={option} 
            onClick={() => !showPanel && setSelectedOption(option)}
            className={`p-4 border-2 border-b-4 rounded-2xl text-lg font-bold text-left transition-all active:translate-y-1
              ${selectedOption === option 
                ? 'bg-[#ddf4ff] border-[#1cb0f6] text-[#1cb0f6]' 
                : 'border-gray-200 text-gray-700'}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>

    {/* Footer / Feedback Panel */}
    <div className={`p-6 border-t-2 transition-all duration-300 ${showPanel ? (isCorrect ? 'bg-[#d7ffb8]' : 'bg-[#ffdfe0]') : 'bg-white'}`}>
      {!showPanel ? (
        <button 
          disabled={!selectedOption}
          onClick={() => {
            const correct = selectedOption === questions[currentStep].answer;
            setIsCorrect(correct);
            setShowPanel(true);
          }}
          className={`w-full py-4 rounded-2xl font-[900] uppercase tracking-widest shadow-[0_5px_0_#afafaf] active:shadow-none active:translate-y-1 transition-all
            ${selectedOption ? 'bg-[#58cc02] text-white shadow-[0_5px_0_#46a302]' : 'bg-[#e5e5e5] text-[#afafaf] cursor-not-allowed'}`}
        >
          Check
        </button>
      ) : (
        <div className="flex flex-col gap-4 animate-in slide-in-from-bottom-10">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-white`}>
              {isCorrect ? '✅' : '❌'}
            </div>
            <div>
              <h3 className={`font-[900] text-xl ${isCorrect ? 'text-[#58a700]' : 'text-[#ea2b2b]'}`}>
                {isCorrect ? 'Excellent!' : 'Correct solution:'}
              </h3>
              {!isCorrect && <p className="text-[#ea2b2b] font-bold">{questions[currentStep].answer}</p>}
            </div>
          </div>
          <button 
            onClick={() => {
              if (isCorrect) {
                if (currentStep < questions.length - 1) {
                  setCurrentStep(currentStep + 1);
                } else {
                  setStreak(prev => prev + 1);
                  setView("roadmap");
                  setCurrentStep(0);
                }
              }
              setShowPanel(false);
              setSelectedOption("");
              setIsCorrect(null);
            }}
            className={`w-full py-4 rounded-2xl font-[900] uppercase text-white shadow-md active:translate-y-1 transition-all
              ${isCorrect ? 'bg-[#58cc02]' : 'bg-[#ff4b4b]'}`}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  </div>
)}
</div> 
  ); 
}
