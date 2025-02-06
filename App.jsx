import { useState } from "react";
import "./App.css";


const questions = [
  {
    question: "If you don't catch the HR's name, what is a polite way to ask them to repeat it?",
    options: [
      "Who are you?",
      "Say your name again.",
      "Could you please give me your name again?",
      "I didn't hear you. Repeat."
    ],
    answer: "Could you please give me your name again?"
  },
  {
    question: "When HR asks 'Give us your self-introduction shortly,' what should you do?",
    options: [
      "I don't like talking about myself.",
      "Why do you need to know?",
      "Provide educational details, roles and responsibilities if experienced, and technical proficiency and skills in a concise manner.",
      "I'll send you my resume. Just read that."
    ],
    answer: "Provide educational details, roles and responsibilities if experienced, and technical proficiency and skills in a concise manner."
  },
  {
    question: "How should you answer if the HR asks about your current CTC and expected salary?",
    options: [
      "It's none of your business.",
      "Currently, it’s __ LPA + (mention any perks) and expecting ____ (or) As per industry standards, I am expecting __ LPA + (mention any perks). Alternatively, you can say, 'Can we discuss this at the time of the interview?'",
      "I don't know.",
      "I need a lot more money."
    ],
    answer: "Currently, it’s __ LPA + (mention any perks) and expecting ____ (or) As per industry standards, I am expecting __ LPA + (mention any perks). Alternatively, you can say, 'Can we discuss this at the time of the interview?'"
  },
  {
    question: "If asked whether your notice period is negotiable, what is an appropriate response?",
    options: [
      "No, it's fixed.",
      "Yes, it can be negotiable up to __ days. I need to check with the management and will get back to you on this. However, I can cut it short to __ days.",
      "I don't care about notice periods.",
      "I don't have a notice period."
    ],
    answer: "Yes, it can be negotiable up to __ days. I need to check with the management and will get back to you on this. However, I can cut it short to __ days."
  },
  {
    question: "If the HR asks about your availability for an interview, what is an appropriate response?",
    options: [
      "I'm busy. Call me later.",
      "Well, I need to check my schedule. Please allow me some time to check on this and I will call back. Alternatively, you can suggest specific available times if you know your schedule.",
      "I don't have time for interviews.",
      "I'll be available whenever."
    ],
    answer: "Well, I need to check my schedule. Please allow me some time to check on this and I will call back. Alternatively, you can suggest specific available times if you know your schedule."
  },
  {
    question: "How should you confirm your availability for an interview if you receive a follow-up call?",
    options: [
      "Don't bother me.",
      "I'll be available whenever.",
      "I am available on ___ (specific date and time) or any time tomorrow.",
      "I might be free next month."
    ],
    answer: "I am available on ___ (specific date and time) or any time tomorrow."
  },
  {
    question: "What is a courteous way to end a call with the HR?",
    options: [
      "Bye.",
      "Okay, thank you so much. Have a nice day.",
      "Whatever.",
      "I'm hanging up now."
    ],
    answer: "Okay, thank you so much. Have a nice day."
  }
 
]



function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}!
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
