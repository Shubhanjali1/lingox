export const englishToKannada = {
  sections: [
    {
      name: "Section 1: Rookie",
      color: "bg-[#58cc02]",
      units: [
        { 
          id: 1, 
          title: "Common Greetings", 
          icon: "🏛️",
          questions: [
            { 
              id: 1, 
              question: "How do you say 'How are you?' in Kannada?", 
              options: ["Hegiddeera?", "Nimma hesaru enu?", "Vandane-galu"], 
              answer: "Hegiddeera?" 
            },
            { 
              id: 2, 
              question: "How do you say 'I am fine'?", 
              options: ["Naanu chennagiddene", "Haudu", "Illa"], 
              answer: "Naanu chennagiddene" 
            }
          ]
        },
        { 
          id: 2, 
          title: "Yes & No", 
          icon: "✅",
          questions: [
            { 
              id: 3, 
              question: "What is 'Yes' in Kannada?", 
              options: ["Haudu", "Illa", "Banni"], 
              answer: "Haudu" 
            }
          ]
        }
      ]
    }
  ]
};