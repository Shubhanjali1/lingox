export const englishToDogri = {
  sections: [
    {
      name: "Section 1: Rookie",
      color: "bg-[#58cc02]",
      units: [
        { 
          id: 1, 
          title: "Greetings", 
          icon: "👋",
          questions: [
            { 
              id: 1, 
              question: "How do you say 'How are you?' in Dogri?", 
              options: ["Tunda ke haal ai?", "Ki khobor?", "Mojang?"], 
              answer: "Tunda ke haal ai?" 
            },
            { 
              id: 2, 
              question: "How do you say 'I am fine'?", 
              options: ["Aun thik aan", "Ang mojang", "Ami bhalo achi"], 
              answer: "Aun thik aan" 
            }
          ]
        },
        { 
          id: 2, 
          title: "Daily Basics", 
          icon: "🏔️",
          questions: [
            { 
              id: 3, 
              question: "What is 'Home' called in Dogri?", 
              options: ["Ghar", "Baari", "Jol"], 
              answer: "Ghar" 
            }
          ]
        }
      ]
    }
  ]
};