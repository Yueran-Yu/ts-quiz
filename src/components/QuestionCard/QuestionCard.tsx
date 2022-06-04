import React, {FC} from 'react';
import {AnswerWrapper, NextBtn, ButtonWrapper, QuestionContainer} from './QuestionCard.styles';
import {useRowContext} from "../../context/rowContext";

const QuestionCard: FC<CardProps> = ({
																			 questionNum,
																			 nextQuestion,
																			 totalQuestions,
																			 question,
																			 answers,
																			 userAnswer,
																			 checkAnswers
																		 }) => {
	const {
		gameOver,
		loading,
		userAnswers,
		number,
		questions
	} = useRowContext()
	return (
		<QuestionContainer>
			<p className="number">Question:{questionNum} / {totalQuestions} </p>
			<p className="question" dangerouslySetInnerHTML={{__html: question}}/>
			<AnswerWrapper>
				{answers.map((answer, index) =>
					<ButtonWrapper
						key={index}
						disabled={!!userAnswer}
						value={answer}
						isCorrect={userAnswer?.correctAnswer === answer}
						userClicked={userAnswer?.answer === answer}
						onClick={checkAnswers}>
						<span dangerouslySetInnerHTML={{__html: answer}}/>
					</ButtonWrapper>
				)}
			</AnswerWrapper>
			<p className="question_bottom"> </p>
			<NextBtn>{
				//1. game is not over
				//2. game is not loading
				//3. empty answer is not allow
				//4. the question length is not reach the total amount of questions
				!gameOver &&
				!loading &&
				userAnswers.length === number + 1 &&
				number !== questions.length &&
        <button role="button" className="next_btn" onClick={nextQuestion}>
					{number === questions.length - 1 ? "Play Again" : "Next Question"}
        </button>
			}
			</NextBtn>
		</QuestionContainer>
	)
}

export default QuestionCard;

