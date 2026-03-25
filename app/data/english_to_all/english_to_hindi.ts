export const englishToHindi = {
  sections: [
    {
      name: "Section 1: Rookie (नौसिखिया)",
      color: "bg-[#58cc02]",
      units: [
        { 
          id: 1, 
          title: "Greetings", 
          icon: "🙏",
          questions: [
            { 
              id: 1, 
              question: "How do you say 'Hello' in Hindi?", 
              options: ["Namaste", "Alvida", "Dhanyavad"], 
              answer: "Namaste" 
            },
            { 
              id: 2, 
              question: "How do you say 'Thank you'?", 
              options: ["Dhanyavad", "Namaste", "Suprabhat"], 
              answer: "Dhanyavad" 
            }
          ]
        },
        { 
          id: 2, 
          title: "Basic Introductions", 
          icon: "👋",
          questions: [
            { 
              id: 3, 
              question: "What is 'My name is...' in Hindi?", 
              options: ["Mera naam... hai", "Aapka naam kya hai?", "Main theek hoon"], 
              answer: "Mera naam... hai" 
            }
          ]
        }
      ]
    }
  ]
};