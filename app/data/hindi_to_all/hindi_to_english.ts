export const hindiToEnglish = {
  sections: [
    {
      name: "Section 1: Rookie (शुरुआत)",
      color: "bg-[#1cb0f6]", // Blue color for English
      units: [
        { 
          id: 1, 
          title: "Basic Greetings", 
          icon: "🇬🇧",
          questions: [
            { 
              id: 1, 
              question: "English mein 'नमस्ते' को क्या कहते हैं?", 
              options: ["Hello", "Goodbye", "Thank you"], 
              answer: "Hello" 
            },
            { 
              id: 2, 
              question: "'आपका नाम क्या है?' को English में क्या कहेंगे?", 
              options: ["What is your name?", "How are you?", "Where are you?"], 
              answer: "What is your name?" 
            }
          ]
        },
        { 
          id: 2, 
          title: "Numbers (1-5)", 
          icon: "🔢",
          questions: [
            { 
              id: 3, 
              question: "English mein 'तीन' (3) को क्या कहते हैं?", 
              options: ["Two", "Three", "Four"], 
              answer: "Three" 
            }
          ]
        }
      ]
    }
  ]
};