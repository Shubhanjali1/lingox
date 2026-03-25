export const englishToKonkani = {
  sections: [
    {
      name: "Section 1: Rookie",
      color: "bg-[#58cc02]",
      units: [
        { 
          id: 1, 
          title: "Common Phrases", 
          icon: "🏖️",
          questions: [
            { 
              id: 1, 
              question: "How do you say 'How are you?' in Konkani?", 
              options: ["Kaso asa?", "Tujem naum kitem?", "Dev barem korum"], 
              answer: "Kaso asa?" 
            },
            { 
              id: 2, 
              question: "How do you say 'I am fine'?", 
              options: ["Haum boro asam", "Dev barem korum", "Yevkar"], 
              answer: "Haum boro asam" 
            }
          ]
        },
        { 
          id: 2, 
          title: "Welcome & Thanks", 
          icon: "🙏",
          questions: [
            { 
              id: 3, 
              question: "What is 'Welcome' in Konkani?", 
              options: ["Yevkar", "Dev barem korum", "Kitem?"], 
              answer: "Yevkar" 
            }
          ]
        }
      ]
    }
  ]
};