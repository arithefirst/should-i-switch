'use client'

import { HomeBox } from "@/components/homeBox";
import { Button } from "@/components/button";
import { useState } from "react";
import questions from "@/questions";
import { RecommendDistros } from "@/components/distroRecommend";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (score: number) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: score
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    
    if (totalScore >= 15) {
      return {
        title: "🐧 Go for it!",
        description: "You're well-suited for Linux! Your technical comfort, flexibility, and willingness to learn make you an ideal candidate for switching.",
        color: "text-green-400",
        showDistros: true
      };
    } else if (totalScore >= 5) {
      return {
        title: "🤔 Consider carefully",
        description: "Linux could work for you, but consider your specific needs. Maybe try a beginner-friendly distribution or dual-boot first.",
        color: "text-yellow-400",
        showDistros: true
      };
    } else if (totalScore >= -5) {
      return {
        title: "⚠️ Proceed with caution",
        description: "Linux might be challenging for your current needs. Consider staying with your current OS or waiting until your situation changes.",
        color: "text-orange-400",
        showDistros: false
      };
    } else {
      return {
        title: "🚫 Probably not yet",
        description: "Based on your responses, Linux might not be the best fit right now. Your current setup seems to serve you better.",
        color: "text-red-400",
        showDistros: false
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const result = calculateResult();
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    console.log(result.showDistros)

    return (
      <HomeBox>
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold">Your Results</h1>
          <hr className="text-white/20 w-1/3 mx-auto" />
          
          <div className="space-y-4">
            <h2 className={`text-2xl font-bold ${result.color}`}>
              {result.title}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {result.description}
            </p>
            <p className="text-sm text-gray-400">
              Your score: {totalScore} / {questions.length * 2}
            </p>

            {result.showDistros && <RecommendDistros/>}

          </div>

          <div className="space-y-2">
            <Button onClick={resetQuiz} className="mx-auto">
              Take Quiz Again
            </Button>
          </div>
        </div>
      </HomeBox>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers[question.id];

  return (
    <HomeBox>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Should I Switch to Linux?</h1>
          <hr className="text-white/20 w-1/3 mx-auto my-2" />
          <p className="text-sm text-gray-400">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-center">
            {question.question}
          </h2>
          <p className="text-gray-300 text-center leading-relaxed">
            {question.description}
          </p>
        </div>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <label
              key={index}
              className="flex items-center space-x-3 p-4 border border-gray-600 rounded-lg cursor-pointer hover:border-gray-500 transition-colors"
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option.score}
                checked={currentAnswer === option.score}
                onChange={() => handleAnswer(option.score)}
                className="w-4 h-4 text-blue-500 border-gray-600 focus:ring-blue-500 accent-blue-600 focus:ring-2"
              />
              <span className="text-white flex-1">
                {option.label}
              </span>
            </label>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4">
          <Button
            onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
            disabled={currentQuestion === 0}
            className="disabled:opacity-25"
          >
            Previous
          </Button>
          
          <Button
            onClick={nextQuestion}
            disabled={currentAnswer === undefined}
            className="disabled:opacity-50"
          >
            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </HomeBox>
  );
}