import React, {FC} from 'react';
import {Categories, Types, Difficulties, QuestionAmount} from "../../hooks/constraints";
import { ConditionWrapper } from './Condition.styles';

const ConditionBoard: FC<ConditionBoardProps> = ({form, handleConditionChange}) => {
	return (
		<ConditionWrapper>
			<label htmlFor="category"> Category: </label>
			<select id="category" name="category" onChange={handleConditionChange} defaultValue={form.category}>
				{
					Object.entries(Categories).map(([key, value]) => <option key={key} value={key}>{value}</option>)
				}
			</select>
			<br/>
			<label htmlFor="amount"> Question Amount: </label>
			<select id="amount" name="amount" onChange={handleConditionChange} defaultValue={form.amount}>
				{QuestionAmount.map(q => <option key={q.value} value={q.name}>{q.name}</option>)}
			</select>
			<fieldset>
				<legend>Type</legend>
				{
					Types.map(t =>
						<div className="input_radio" key={t.value}>
							<input type="radio"
										 name="type"
										 id={t.value}
										 value={t.value}
										 onChange={handleConditionChange}
										 checked={form.type === t.value}/>
							<label htmlFor={t.value}>{t.name}</label>
							<br/>
						</div>)
				}
			</fieldset>
			<fieldset>
				<legend>Difficulty</legend>
				{
					Difficulties.map(d => <div className="input_radio" key={d.value}>
							<input type="radio"
										 name="difficulty"
										 id={d.value}
										 value={d.value}
										 onChange={handleConditionChange}
										 checked={form.difficulty === d.value}/>
							<label htmlFor={d.value}>{d.name}</label> <br/>
						</div>
					)
				}
			</fieldset>
		</ConditionWrapper>
	)
}

export default ConditionBoard;
