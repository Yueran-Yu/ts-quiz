import React, {FC} from 'react';
import {ButtonWrapper} from './QuestionCard.styles';

const QuestionCard: FC<CardProps> = ({questionNum,
																			 totalQuestions,
																			 question,
																			 answers,
																			 userAnswer,
																			 checkAnswers
																		 }) => {
	return (
		<div>
			<p className="number">Question:{questionNum} / {totalQuestions} </p>
			<p dangerouslySetInnerHTML={{__html: question}}/>
			<div>
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
			</div>
		</div>
	)
}

export default QuestionCard;

