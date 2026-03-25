"use client";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("welcome"); // Views: welcome -> lang-select
const [nativeLang, setNativeLang] = useState(""); // Jo user ko aati hai
  const [targetLang, setTargetLang] = useState(""); // Jo user seekhna chahta hai
  // Hamari Indian Languages ka Mega Data
  const [currentStep, setCurrentStep] = useState(0); // Kaunse sawal pe hain
const [score, setScore] = useState(0);

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
  const unitData = [
  { id: 1, title: "Introduction", status: "current", icon: "👋" },
  { id: 2, title: "Common Phrases", status: "locked", icon: "💬" },
  { id: 3, title: "Numbers", status: "locked", icon: "🔢" },
  { id: 4, title: "Family", status: "locked", icon: "🏠" },
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
{view === "roadmap" && (
  <div className="w-full max-w-md flex flex-col items-center py-10 animate-in slide-in-from-right duration-500">
    
    {/* Header (Line 110) */}
    <div className="sticky top-0 bg-white/90 backdrop-blur-sm w-full py-4 border-b-2 mb-8 flex items-center justify-between px-6 z-20">
      <button onClick={() => setView("lang-select")} className="text-gray-400 font-black text-xl hover:text-gray-600">←</button>
      <div className="text-center">
        <h3 className="font-black text-[10px] text-gray-400 uppercase tracking-[0.2em]">Unit 1</h3>
        <p className="font-black text-xl text-gray-700 leading-none">{targetLang} Basics</p>
      </div>
      <div className="text-2xl">🔥</div>
    </div>

    {/* Snake Path (Line 120) */}
    <div className="flex flex-col gap-12 items-center w-full px-4">
      {unitData.map((unit, index) => (
        <div 
          key={unit.id}
          className="flex flex-col items-center"
          style={{ 
            // Modulo logic: even index -> right, odd index -> left
            transform: `translateX(${index % 2 === 0 ? '40px' : '-40px'})` 
          }}
        >
          <button 
  onClick={() => {
    // Agar status 'current' hai, tabhi quiz pe jao
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
          <span className="mt-4 font-black text-gray-500 uppercase text-[10px] tracking-widest text-center">
            {unit.title}
          </span>
        </div>
      ))}
    </div>
  </div>
)}
</div> 
  ); 
}
