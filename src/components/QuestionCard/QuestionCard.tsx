import React, {FC} from 'react';

const QuestionCard: FC<CardProps> = ({
																			 questionNum,
																			 totalQuestions,
																			 question,
																			 answers,
																			 userAnswer,
																			 callback
																		 }) => {
	return (
		<div>
			<p className="number">Question:{questionNum} / {totalQuestions} </p>
			<p dangerouslySetInnerHTML={{__html: question}}/>
			<div>
				{
					answers.map(answer => (
						<div>
							<button
								disabled={userAnswer.length > 0}
								onClick={callback}>
								<span dangerouslySetInnerHTML={{__html: answer}}/>
							</button>
						</div>
					))
				}
			</div>
			Question Card
		</div>
	)
}

export default QuestionCard;
