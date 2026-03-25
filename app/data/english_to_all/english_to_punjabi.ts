// Isse change karo:
// export const englishTo牽unjabi = { ... }

// Isme (Correct Name):
export const englishToPunjabi = {
  sections: [
    {
      name: "Section 1: Rookie",
      color: "bg-[#58cc02]",
      units: [
        { 
          id: 1, 
          title: "Basic Greetings", 
          icon: "🚜",
          questions: [
            { 
              id: 1, 
              question: "How do you say 'Hello' in Punjabi?", 
              options: ["Sat Sri Akal", "Ki haal hai?", "Theek hai"], 
              answer: "Sat Sri Akal" 
            },
            { 
              id: 2, 
              question: "How do you say 'I am fine'?", 
              options: ["Main vadiya haan", "Ki haal hai?", "Tuhada naam ki hai?"], 
              answer: "Main vadiya haan" 
            }
          ]
        },
        { 
          id: 2, 
          title: "Common Questions", 
          icon: "💬",
          questions: [
            { 
              id: 3, 
              question: "What is 'What is your name?' in Punjabi?", 
              options: ["Tuhada naam ki hai?", "Ki haal hai?", "Vadiya"], 
              answer: "Tuhada naam ki hai?" 
            }
          ]
        }
      ]
    }
  ]
};