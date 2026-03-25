export const englishToUrdu = {
  sections: [
    {
      name: "Section 1: Rookie",
      color: "bg-[#58cc02]",
      units: [
        { 
          id: 1, 
          title: "Basic Greetings", 
          icon: "☕",
          questions: [
            { 
              id: 1, 
              question: "How do you say 'Hello' in Urdu?", 
              options: ["Assalam-u-Alaikum", "Shukriya", "Khuda Hafiz"], 
              answer: "Assalam-u-Alaikum" 
            },
            { 
              id: 2, 
              question: "How do you say 'How are you?'", 
              options: ["Aap kaise hain?", "Shukriya", "Jee haan"], 
              answer: "Aap kaise hain?" 
            }
          ]
        },
        { 
          id: 2, 
          title: "Parting Ways", 
          icon: "👋",
          questions: [
            { 
              id: 3, 
              question: "What is 'Goodbye' in Urdu?", 
              options: ["Khuda Hafiz", "Aadaab", "Jee"], 
              answer: "Khuda Hafiz" 
            }
          ]
        }
      ]
    }
  ]
};