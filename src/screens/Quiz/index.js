import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import db from '../../../db.json';

import LoadingWidget from './components/LoadingWidget';
import ResultWidget from './components/ResultWidget';
import QuestionWidget from './components/QuestionWidget';

import QuizContainer from '../../components/QuizContainer';
import QuizBackground from '../../components/QuizBackground';
import QuizLogo from '../../components/QuizLogo';
import GitHubCorner from '../../components/GitHubCorner';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function Quiz({ questions, background }) {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const totalQuestions = questions.length;
  const question = questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={background}>
      <QuizContainer>
        <QuizLogo />

        { screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT
        && <ResultWidget results={results} externalLinks={db.external} />}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jvitormf/imersao-alura-v2" />
    </QuizBackground>
  );
}

Quiz.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.string).isRequired,
  background: PropTypes.string.isRequired,
};
