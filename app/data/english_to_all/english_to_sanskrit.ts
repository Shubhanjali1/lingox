export const englishToSanskrit = {
  sections: [
    {
      name: "Section 1: Rookie",
      color: "bg-[#58cc02]",
      units: [
        { 
          id: 1, 
          title: "Greetings", 
          icon: "🕉️",
          questions: [
            { 
              id: 1, 
              question: "How do you say 'Hello' in Sanskrit?", 
              options: ["Namo Namah", "Dhanyavadah", "Kim naam?"], 
              answer: "Namo Namah" 
            },
            { 
              id: 2, 
              question: "How do you say 'How are you?'", 
              options: ["Katham asti? (Katham asti?)", "Bhavatah naam kim?", "Aam"], 
              answer: "Katham asti? (Katham asti?)" 
            }
          ]
        },
        { 
          id: 2, 
          title: "Simple Yes/No", 
          icon: "✅",
          questions: [
            { 
              id: 3, 
              question: "What is 'Yes' in Sanskrit?", 
              options: ["Aam (Aam)", "Na (Na)", "Katham"], 
              answer: "Aam (Aam)" 
            }
          ]
        }
      ]
    }
  ]
};